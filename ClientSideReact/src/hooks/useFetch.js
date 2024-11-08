import { useState, useEffect } from 'react';

function useFetch (url) {
  const [data, setData] = useState('https://rickandmortyapi.com/api'); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
        .then(response => response.json())
        .then(result => {
          setData(result);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    };

    fetchData();
  }, [url]);

  return { data, loading };
}

export default useFetch;

