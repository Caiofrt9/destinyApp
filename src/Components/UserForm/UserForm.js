import { useState } from 'react'
import { useForm } from 'react-hook-form'

import './UserForm.css'
import { useContry } from '../../hooks/useContry'
import { useCity } from '../../hooks/useCity'

//Select
import Select from 'react-select'

const UserForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  function onSubmit(userData) {
    console.log(userData)
  }

  const { data: countries } = useContry()
  const { data: cities } = useCity()

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

  const countryOptions = countries.map(country => ({
    value: country.code,
    label: country.name
  }))

  const cityOptions = cities.map(city => ({
    value: city.name,
    label: city.name.split(',')[0]
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome
          <input {...register('name', { required: true })} />
          {errors.name && <span>O nome é obrigatório</span>}
        </label>
        <label>
          Email
          <input {...register('email', { required: true })} />
          {errors.email && <span>Insira um email válido</span>}
        </label>
        <label>
          Número
          <input {...register('number', { required: true })} />
          {errors.number && <span>Insira um numero de telefone</span>}
        </label>
        <label>
          Cpf
          <input {...register('cpf', { required: true })} />
          {errors.cpf && <span>Insira seu cpf</span>}
        </label>
        <p className="subtitle">Marque seus destino de interesse</p>

        <label>
          País
          <Select
            {...register('select')}
            styles={customStyles}
            placeholder="Selecione um país"
            options={countryOptions}
            isMulti={true}
            value={countryOptions.value}
          />
        </label>
        <br />
        <label>
          Cidade
          <Select
            styles={customStyles}
            placeholder="Selecione um país"
            options={cityOptions}
            isMulti={true}
          />
        </label>

        <input type="submit" value="Enviar" required />
      </form>
    </div>
  )
}

export default UserForm
