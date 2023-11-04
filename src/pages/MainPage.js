import React, { useState, useEffect, useMemo } from "react";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import styled from "styled-components";
import InformCard from "../components/InformCard";
import { mapdata } from "../assets/data/mapdata";
import { Link } from 'react-router-dom';

const { kakao } = window;

const PageContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: row;
`;

const ListContainer = styled.div`
  width: 27%;
  padding: 10px 20px;
  background-color: #F6F1FB;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 73%;
`;

const PaginationButton = styled.button`
  margin: 5px;
`;

const StudyList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const studiesPerPage = 4; // 페이지당 표시할 스터디 수

  // 페이지 변경을 처리하는 함수
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // 현재 페이지에 따라 표시할 스터디 목록 계산
  const startIndex = (currentPage - 1) * studiesPerPage;
  const endIndex = startIndex + studiesPerPage;
  const studiesToDisplay = mapdata.slice(startIndex, endIndex);

  return (
    <ListContainer>
      {studiesToDisplay.map((value, index) => (
        <Link to={`/detail/${index}`} style={{ textDecoration: 'none' }}>
          <InformCard
            key={`Study-${value.title}`}
            position={value.latlng}
            title={value.title}
            stack={value.stack}
            finish={value.finish}
            during={value.during}
            people={value.people}
          />
        </Link>
      ))}
      <PaginationContainer>
        {mapdata.length > studiesPerPage && (
          <PaginationButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </PaginationButton>
        )}
        {mapdata.length > studiesPerPage && (
          <PaginationButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={endIndex >= mapdata.length}
          >
            Next
          </PaginationButton>
        )}
      </PaginationContainer>
    </ListContainer>
  );
};

const EventMarkerContainer = ({ position, title, stack, finish, during, people }) => {
  const map = useMap();
  const [isVisible, setIsVisible] = useState(false);

  // useMemo를 사용하여 InformCard 컴포넌트를 생성
  const informCard = useMemo(() => (
    <InformCard
      title={title}
      stack={stack}
      finish={finish}
      during={during}
      people={people}
    />
  ), [title, stack, finish, during, people]);

  return (
    <MapMarker
      position={position}
      onClick={(marker) => map.panTo(marker.getPosition())}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      {isVisible && informCard}
    </MapMarker>
  );
};

const MainPage = () => {
  const [location, setLocation] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  const successHandler = (response) => {
    const { latitude, longitude } = response.coords;
    setLocation({ latitude, longitude });
    setLoaded(true);
  };

  const errorHandler = (error) => {
    console.log(error);
  };

  return (
    <PageContainer>
      <StudyList />
      {loaded && (
        <Map
          center={{ lat: location.latitude, lng: location.longitude }}
          style={{ width: "73%", height: "100%" }}
          level={3}
        >
          {mapdata.map((value) => (
            <EventMarkerContainer
              key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
              position={value.latlng}
              title={value.title}
              stack={value.stack}
              finish={value.finish}
              during={value.during}
              people={value.people}
            />
          ))}
        </Map>
      )}
    </PageContainer>
  );
};

export default MainPage;
