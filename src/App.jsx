import { useEffect, useState } from 'react'
import { requestGeoAPI } from './helpers/geolocationAPI'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import HeaderComponent from './components/HeaderComponent'
import './app.css'
import MapView from './components/MapView'


function App() {

  const [ip, setIp] = useState('181.111.175.236')
  const [ipInfo, setIpInfo] = useState('')
  
  const setIpAdress=(ip)=>{
    setIp(ip)
  }
  
  useEffect(() => {
    requestGeoAPI(ip).then(r=>{
      setIpInfo(r)
      localStorage.setItem('testing',JSON.stringify(r))
      console.log('API called successfully!')
    })
  }, [ip])

  return (
    <>
    <HeaderComponent setIpAdress={setIpAdress} ipInfo={ipInfo}/>
    <MapView ipInfo={ipInfo}/>
    </>
  )
}

export default App
