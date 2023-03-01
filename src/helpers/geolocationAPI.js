export const requestGeoAPI=async(ip)=>{
    let response= await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_2uZUE7YTcLk6KAuWdXfRhf4EXpSQM&ipAddress=${ip}`)
    let data= response.json()
    return data
}

export const getMyIP=async()=>{
    let response= await fetch (`https://api.ipify.org?format=json`)
    let data=response.json()
    return data
}