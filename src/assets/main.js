document.addEventListener('DOMContentLoaded', () => {
    const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  }

  const fetchData = async (urlApi) => {
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
  }

  (async () => {
    try {
        const videos = await fetchData(API)

    }catch{

    }
  })
})
