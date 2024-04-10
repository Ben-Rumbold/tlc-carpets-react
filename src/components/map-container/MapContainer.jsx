import { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./MapContainer.css";
import FadeIn from "../../effects/FadeIn";

const MapContainer = () => {
  const [viewState, setViewState] = useState({
    longitude: 0.2491319006233761,
    latitude: 51.556185081755984,
    zoom: 12,
  });

  return (
    <FadeIn>
      <div className="map-container inner-container">
        <div className="map-text-container">
          <div className="map-text-individual-container left">
            <div className="map-text-individual-inner-container">
              <p className="map-text-smaller-text">ADDRESS</p>
              <p className="map-text-bigger-text">
                123 Example Road,
                <br />
                <span>Upminster, </span>London,
                <br /> RM14 2TD
              </p>
            </div>
          </div>
          <div className="map-text-individual-container right">
            <div className="map-text-individual-inner-container">
              <p className="map-text-smaller-text">OPENING HOURS</p>
              <p className="map-text-bigger-text">
                Week: 9am - 5pm
                <br />
                Sat: 9am - 4pm
                <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
        <div className="map">
          <ReactMapGL
            {...viewState}
            mapboxAccessToken={process.env.VITE_API_KEY}
            onMove={(evt) => setViewState(evt.viewState)}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            className="map"
          ></ReactMapGL>
        </div>
      </div>
    </FadeIn>
  );
};

export default MapContainer;
