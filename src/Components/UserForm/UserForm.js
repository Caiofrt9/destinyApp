import './UserForm.css'
import { useContry } from '../../hooks/useContry'
import { useCity } from '../../hooks/useCity'
import { useState } from 'react'

//Select
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const UserForm = () => {
  const { data: countries } = useContry()
  const { data: cities } = useCity()

  console.log(countries)

  const [selectedCountry, setSelectedCountry] = useState('')

  const handleContryUpdate = event => {
    setSelectedCountry(event.target.value)
  }

  // //Filtrando cidades do mesmo pais
  // const filterCityByCountry = () => {
  //   let CityArray = []

  //   cities.forEach(city => {
  //     if (city.country_code === selectedCountry) {
  //       CityArray.push(city)
  //     }
  //   })
  //   return CityArray
  // }

  const handleSubmit = e => {
    e.preventDefault()
  }
  const countryOptions = countries.map(country => ({
    value: country.code,
    label: country.name
  }))

  const cityOptions = cities.map(city => ({
    value: city.country_code,
    label: city.name
  }))

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? '#000' : '#000',
      padding: 20
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1
      const transition = 'opacity 300ms'

      return { ...provided, opacity, transition }
    }
  }

  return (
    <div className="main">
      <h2>DestinyApp</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite seu nome." required />
        <input type="email" placeholder="Digite seu E-mail." required />
        <input type="number" placeholder="Digite seu numero." required />
        <input type="number" placeholder="Digite seu cpf." required />
        <p className="subtitle">Marque seus destino de interesse</p>

        <Select
          styles={customStyles}
          placeholder="Selecione um país"
          options={countryOptions}
          isMulti={true}
        />
        <br />
        <Select
          styles={customStyles}
          placeholder="Selecione uma cidade"
          options={cityOptions}
          isMulti={true}
        />

        <input type="submit" value="Enviar" required />
      </form>
    </div>
  )
}

export default UserForm
