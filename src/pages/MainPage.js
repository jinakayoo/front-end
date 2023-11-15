import React, { useState, useEffect } from "react";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import styled from "styled-components";
import InformCard from "../components/InformCard";
import OverCard from "../components/OverCard";
import { mapdata } from "../assets/data/mapdata";
import { Link } from "react-router-dom";

const { kakao } = window;

const PageContainer = styled.div`
  height: 710px;
  display: flex;
  flex-direction: row;
`;

const ListContainer = styled.div`
  width: 27%;
  padding: 10px 20px;
  background-color: #f6f1fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const PaginationNumberButton = styled.button`
  margin: 5px;
  font-size: 16px;
  font-family: "SCDream4";
  color: #7c8bbe;
  background-color: transparent;
  border: none;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;

const PaginationButton = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  padding: 4px 15px;
  font-size: 16px;
  font-family: "SCDream4";
  align-items: center;
  border-radius: 10px;
  color: #f6f1fb;
  background-color: #7c8bbe;
  border: none;
`;

const StudyList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const studiesPerPage = 4;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * studiesPerPage;
  const endIndex = startIndex + studiesPerPage;
  const studiesToDisplay = mapdata.slice(startIndex, endIndex);

  // localStorage에서 정보 가져오기 및 확인하기
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <ListContainer>
      {studiesToDisplay.map((value, index) => (
        <Link to={`/detail/${index}`} style={{ textDecoration: "none" }}>
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
            이전
          </PaginationButton>
        )}
        {mapdata.length > studiesPerPage &&
          Array.from({
            length: Math.ceil(mapdata.length / studiesPerPage),
          }).map((value, index) => (
            <PaginationNumberButton
              key={index}
              active={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PaginationNumberButton>
          ))}
        {mapdata.length > studiesPerPage && (
          <PaginationButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={endIndex >= mapdata.length}
          >
            다음
          </PaginationButton>
        )}
      </PaginationContainer>
    </ListContainer>
  );
};

const EventMarkerContainer = ({
  position,
  title,
  stack,
  finish,
  during,
  people,
  index,
}) => {
  const map = useMap();
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMarkerClick = () => {
    setIsClicked(!isClicked);
  };

  const handleMarkerMouseOver = () => {
    if (!isClicked) {
      setIsVisible(true);
    }
  };

  const handleMarkerMouseOut = () => {
    if (!isClicked) {
      setIsVisible(false);
    }
  };

  return (
    <MapMarker
      position={position}
      onClick={handleMarkerClick}
      onMouseOver={handleMarkerMouseOver}
      onMouseOut={handleMarkerMouseOut}
    >
      {isVisible && (
        <OverCard
          title={title}
          stack={stack}
          finish={finish}
          during={during}
          people={people}
          index={index}
          onClose={() => {
            setIsClicked(false);
            setIsVisible(false);
          }}
        />
      )}
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
          {mapdata.map((value, index) => (
            <EventMarkerContainer
              key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
              index={index}
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
