export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
  }
  };
  
  
  
export const FetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data =  await response.json();
    return data;
}