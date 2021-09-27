import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Room, Star } from "@material-ui/icons";
import "./app.css"

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 41.5,
    longitude: -100.0,
    zoom: 4,
  });
  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker
          latitude={40.748817}
          longitude={-73.985428}
          offsetLeft={-20}
          offsetTop={-10}
        >
         <Room style={{fontSize:viewport.zoom *6, color:"cornflowerblue"}}/>
        </Marker>
        <Popup
          latitude={40.748817}
          longitude={-73.985428}
          closeButton={true}
          closeOnClick={false}
          anchor="left" >
          <div className ="card">
            <label>Place</label>
            <h4 className="Place">Empire State Building</h4>
            <label>Review</label>
            <p className="desc">Amazing, it was huge!</p>
            <label>Rating</label>
            <div className="stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <label>Information</label>
            <span className="username">Created by <b>Zach</b></span>
            <span className="date">1 hour ago</span>
          </div>
        </Popup>
      </ReactMapGL>
    </div>
  );
}

export default App;

//58:00
