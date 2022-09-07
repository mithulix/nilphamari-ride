import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBE04-FZzhCBzkcY0g8hs6dJWedG01Dfv4"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >

        <></>
      </GoogleMap>
    </LoadScript>
  )
}
