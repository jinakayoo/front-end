import React, { useState, useEffect } from "react";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import styled from "styled-components";
// import InformCard from "../components/InformCard";
import {mapdata} from "../assets/data/mapdata";

const { kakao } = window;

const PageContainer = styled.div`
  height: 600px;
`;

const EventMarkerContainer = ({ position, content }) => {
  const map = useMap();
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <MapMarker
      position={position} // 마커를 표시할 위치
      // @ts-ignore
      onClick={(marker) => map.panTo(marker.getPosition())}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      {isVisible && content}
    </MapMarker>
  );
};

const MainPage = () => {
  // 현재 위치를 저장할 상태
  const [location, setLoacation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  const successHandler = (response) => {
    const { latitude, longitude } = response.coords;
    setLoacation({ latitude, longitude });
  };

  const errorHandler = (error) => {
    console.log(error);
  };

  return (
    <PageContainer>
      {location && (
        <Map
          center={{ lat: location.latitude, lng: location.longitude }}
          style={{ width: "800px", height: "600px" }}
          level={3}
        >
          {mapdata.map((value) => (
            <EventMarkerContainer
              key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
              position={value.latlng}
              content={value.content}
            />
          ))}
        </Map>
      )}
    </PageContainer>
  );
};
export default MainPage;
