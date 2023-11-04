import { API_KEY } from './API_KEY'

export const requestGeoAPI = async (ip) => {
    let response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`)
    let data = response.json()
    return data
}

export const getMyIP = async () => {
    let response = await fetch(`https://api.ipify.org?format=json`)
    let data = response.json()
    return data
}