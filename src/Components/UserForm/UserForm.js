import './UserForm.css'
import { useContry } from '../../hooks/useContry'
import { useCity } from '../../hooks/useCity'
import { useState } from 'react'

const UserForm = () => {
  //Fetch
  const { data: countries } = useContry()
  const { data: cities } = useCity()

  const [selectedCountry, setSelectedCountry] = useState('')

  const handleContryUpdate = event => {
    setSelectedCountry(event.target.value)

    console.log(event.target.value)
  }

  const filterCityByCountry = () => {
    let CityArray = []

    cities.forEach(city => {
      if (city.country_code === selectedCountry) {
        CityArray.push(city)
      }
    })
    return CityArray
  }

  return (
    <div className="main">
      <h2>DestinyApp</h2>
      <form>
        <input type="text" placeholder="Digite seu nome." required />
        <input type="email" placeholder="Digite seu E-mail." required />
        <input type="number" placeholder="Digite seu numero." required />
        <input type="number" placeholder="Digite seu cpf." required />
        <p className="subtitle">Marque seus destino de interesse</p>
        <select value={selectedCountry} onChange={handleContryUpdate}>
          {countries.map(country => (
            <option value={country.code}>{country.name}</option>
          ))}
        </select>
        <select>
          {filterCityByCountry().map(city => (
            <option>{city.name.split(',')[0]}</option>
          ))}
        </select>
        <input type="submit" value="Adicionar local." required />

        <input type="submit" value="Enviar" required />
      </form>
    </div>
  )
}

export default UserForm
