export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a679295f55msh0299a179e1cef2ap1d2436jsn040f7d224333',
    'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
  }
  };
  
  
  
export const FetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data =  await response.json();
    return data;
}