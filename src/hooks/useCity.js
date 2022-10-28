import { useState, useEffect } from 'react'
import axios from 'axios'

export const useCity = ({ country_code }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://amazon-api.sellead.com/city').then(response => {
      setData(response.data)
    })
  }, [country_code])

  return { data }
}
