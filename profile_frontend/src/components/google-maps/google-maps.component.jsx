import React from "react";
import { useState, useCallback } from "react";
import {
    GoogleMap,
    useJsApiLoader,
    withScriptjs,
    withGoogleMap,
} from "@react-google-maps/api";

const styles = require("./GoogleMapStyles.json");

const containerStyle = {
    width: "100%",
    height: "100vh",
};

const center = {
    lat: 33.69847,
    lng: -117.97279,
};

function GoogleMapComponent() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyA3SAtBRKnfdzRwDjkzxD8fv713hu0llF0",
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        map.setZoom(12);
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{ styles: styles }}
        >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : (
        <></>
    );
}

export default GoogleMapComponent;
