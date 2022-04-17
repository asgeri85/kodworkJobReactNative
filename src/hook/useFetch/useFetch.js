import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [jobsData, setJobsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGetApi = async () => {
    try {
      const {data: response} = await axios.get(url);
      setJobsData(response.results);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    fetchGetApi();
  }, []);

  return {jobsData, loading, error};
};

export default useFetch;
