import {
    useLoadScript,
    GoogleMap,
    Marker,
} from "@react-google-maps/api";
import React from "react";
import "./Map.css";

const libraries = ["places"];
const mapContainerStyle = {
    width: "60rem",
    height: "40rem",
};
const center = {
    lat: 50.050566,
    lng: 18.709808,
};

const marker = {
    lat: 50.050566,
    lng: 18.709808,
}

export default function Map() {

    const {isLoaded, LoadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (LoadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={14}
                center={center}

            ><Marker position={marker}></Marker> </GoogleMap>
    );
}



