import React from "react";
import MapHeader from "../../components/Map/MapHeader";
import MapSideBar from "../../components/Map/MapSideBar";
import MapArea from "../../components/Map/MapArea";
import { NavermapsProvider } from "react-naver-maps";

function Map() {
  const CLIENT_ID = import.meta.env.VITE_APP_NAVER_MAP_ID;

  return (
    <NavermapsProvider ncpClientId={CLIENT_ID}>
      <section className="flex w-screen h-screen justify-center items-center p-10 font-Pretendard">
        <section className="w-full h-full">
          <MapHeader />
          <section id="Map" className="flex justify-center items-center h-[calc(100%-7rem)] gap-8">
            <MapArea />
            <MapSideBar />
          </section>
        </section>
      </section>
    </NavermapsProvider>
  );
}

export default Map;
