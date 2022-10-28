import { useState, useEffect } from 'react'
import axios from 'axios'

export const useContry = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://amazon-api.sellead.com/country').then(response => {
      setData(response.data)
    })
  }, [])

  return { data }
}
