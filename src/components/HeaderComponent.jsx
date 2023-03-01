import React, { useState } from 'react'
import '../css/HeaderComponent.css'
import { getMyIP } from '../helpers/geolocationAPI'
import Arrow from '../assets/icon-arrow.svg'

const HeaderComponent = ({setIpAdress, ipInfo}) => {
    const [userIP, setUserIP] = useState(null)
    const [myIP, setMyIP] = useState(null)

    getMyIP().then(r=>setMyIP(r.ip)).catch(err=>console.log(err))

  return (
    <header className='header p-1'>
        <h2 className='text-light text-center my-3'>IP Adress Tracker</h2>
        {myIP?(<button className="btn btn-dark btn-sm position-fixed top-0 m-2 rounded-3" onClick={()=>setIpAdress(myIP)}>Get my IP</button>):''}

        <div className='search'>
            <input type="text" className="form-control py-3 px-4" onInput={(e)=>setUserIP(e.target.value)} placeholder="Search for any IP address or domain" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-dark py-3 px-4" type="button" id="button-addon2" onClick={()=>setIpAdress(userIP)} ><img src={Arrow} alt="arrow" /></button>
        </div>

        {/* <div className="input-group w-75 mx-auto search">
            <input type="text" className="form-control py-3 px-4" placeholder="Search for any IP address or domain" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-dark py-3 px-4" type="button" id="button-addon2">{'>'}</button>
        </div> */}

        <section className='ip-info rounded-4 p-4'>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
                <div className="col">
                    <small className='ip-info__section d-block text-center text-lg-start'>IP Address</small>
                    <p className='ip-info__data text-center text-lg-start w-100 m-0 mb-2'>{ipInfo?ipInfo.ip:'192.212.174.101'}</p>
                </div>
                <div className="col">
                    <small className='ip-info__section d-block text-center text-lg-start'>Location</small>
                    <p className='ip-info__data text-center text-lg-start w-100 m-0 mb-2'>{ipInfo?`${ipInfo.location.city},${ipInfo.location.region},${ipInfo.location.country}`:'Brooklyn, NY 10001'}</p>
                </div>
                <div className="col">
                    <small className='ip-info__section d-block text-center text-lg-start'>Timezone</small>
                    <p className='ip-info__data text-center text-lg-start w-100 m-0 mb-2'>{ipInfo?ipInfo.location?.timezone:'UTC -05:00'}</p>
                </div>
                <div className="col">
                    <small className='ip-info__section d-block text-center text-lg-start'>ISP</small>
                    <p className='ip-info__data text-center text-lg-start w-100 m-0 mb-2'>{ipInfo?ipInfo.isp:'SpaceX Starlink'}</p>
                </div>
            </div>
        </section>
    </header>
  )
}

export default HeaderComponent