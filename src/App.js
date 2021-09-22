import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { Room } from "@material-ui/icons";

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
      </ReactMapGL>
    </div>
  );
}

export default App;
