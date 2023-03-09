import React, { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import {MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import { useMap } from 'react-leaflet/hooks'
import 'leaflet/dist/leaflet.css'
import '../css/MapView.css'
import MarkerIcon from '../assets/icon-location.svg'

const MapView = ({ipInfo}) => {
  const [position, setPosition] = useState([-26.82414,-65.2226])

  const mapRef=useRef()

  useEffect(() => {
        if(ipInfo){
            let lat= ipInfo.location.lat
            let long= ipInfo.location.lng
            setPosition([lat,long])
            mapRef.current.flyTo([lat,long])
            
        }else{
            console.log('loading...')
          }
        }, [ipInfo])
        
        let FrontEndMentorMarkerIcon = L.icon({
          iconUrl: MarkerIcon,
          iconSize: [55, 55],
          iconAnchor: [27, 55],
          popupAnchor: [-3, -76],
          className: 'leaflet-vanue-icon'
        });
        
  return (
    <>
    <section>
    <MapContainer ref={mapRef} center={[0,0]} zoom={1} scrollWheelZoom={true}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
  <Marker position={position} icon={FrontEndMentorMarkerIcon}>
    <Popup>
        <h6>{ipInfo?ipInfo.location.city:'Your city'}</h6>
      <hr/>
      <small>This city</small>
    </Popup>
  </Marker>
</MapContainer>
    </section>
  <footer className="attribution position-absolute bottom-0">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a target="_blank" href="https://github.com/Gonzalomorales1001">Gonzalo Morales</a>.
  </footer>
    </>
  )
}

export default MapView
