import React from 'react'
import {createRoot} from 'react-dom/client';
import {APIProvider, Map,Marker} from '@vis.gl/react-google-maps';


export default function MapComponent() {
    

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      
      <APIProvider apiKey={"AIzaSyD8v-rZ_OJWmvVHILmYrOIjsLK9cEO5OYo" }>
    <Map
      style={{width: '100vw', height: '50vh'}}
      defaultCenter={{lat: 32.4925, lng: 74.5312}}
      defaultZoom={11}
      gestureHandling='greedy'
      disableDefaultUI
    >
            <Marker position={{lat: 32.4925, lng: 74.5312}} />

    </Map>
  </APIProvider>
    </div>
  );
}
