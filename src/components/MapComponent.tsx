import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

export default function MapComponent() {
const API_KEY = import.meta.env.VITE_GOOGLE_MAP_KEY;

    if (!API_KEY) {
        return (
            <div style={{ padding: '20px', color: 'red', border: '1px solid red' }}>
                Error: Google Maps API key is missing. Check your .env file and REACT_APP_ prefix.
            </div>
        );
    }

    return (
        <div style={{ height: '50vh', width: '100%' }}>
            <APIProvider apiKey={API_KEY}>
                <Map
                    style={{ width: '100%', height: '100%' }} // Use 100% to fill the parent div
                    defaultCenter={{ lat: 32.4925, lng: 74.5312 }}
                    defaultZoom={11}
                    gestureHandling='greedy'
                    disableDefaultUI
                >
                    <Marker position={{ lat: 32.4925, lng: 74.5312 }} />
                </Map>
            </APIProvider>
        </div>
    );
}