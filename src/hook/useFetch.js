/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook
  // step1: create 3 states: data, isLoading, error
  // step2: fetch data & handle error
  // step3: return 3 states
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setData(data)
      setIsLoading(false)
      setError(null)
    })
    .catch(error => {
      setIsLoading(false)
      setError(error)
    })
  }, [url])

  return { data, isLoading, error }
};

export default useFetch;
