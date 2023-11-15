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

  const startplace = (currentPage - 1) * studiesPerPage;
  const endplace = startplace + studiesPerPage;
  const studiesToDisplay = mapdata.slice(startplace, endplace);

  return (
    <ListContainer>
      {studiesToDisplay.map((value, place) => (
        <Link to={`/detail/${place}`} style={{ textDecoration: "none" }}>
          <InformCard
            key={`Study-${value.title}`}
            title={value.title}
            skill={value.skill}
            deadline={value.deadline}
            progress={value.progress}
            peopleNum={value.peopleNum}
            place={value.place}
            latitude={value.latitude}
            longitude={value.longitude}
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
          }).map((value, place) => (
            <PaginationNumberButton
              key={place}
              active={currentPage === place + 1}
              onClick={() => handlePageChange(place + 1)}
            >
              {place + 1}
            </PaginationNumberButton>
          ))}
        {mapdata.length > studiesPerPage && (
          <PaginationButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={endplace >= mapdata.length}
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
  skill,
  deadline,
  progress,
  peopleNum,
  place,
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
          skill={skill}
          deadline={deadline}
          progress={progress}
          peopleNum={peopleNum}
          place={place}
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
          {mapdata.map((value, place) => (
            <EventMarkerContainer
              key={`EventMarkerContainer-${value.latitude}-${value.longitude}`}
              position={{ lat: value.latitude, lng: value.longitude }}
              place={place}
              latitude={value.latitude}
              longitude={value.longitude}
              title={value.title}
              skill={value.skill}
              deadline={value.deadline}
              progress={value.progress}
              peopleNum={value.peopleNum}
            />
          ))}
        </Map>
      )}
    </PageContainer>
  );
};

export default MainPage;
