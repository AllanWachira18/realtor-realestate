import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '198823d318mshafbe54344782dc9p121bfejsn5ecd016098fa',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}