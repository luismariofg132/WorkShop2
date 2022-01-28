import axios from 'axios';
import React from 'react';
import { ColDiv, FormButton, OptionDiv, Options, PreguntasDiv, RowDiv } from '../styles/PreguntasAppStyles';
import PreguntasNav from './PreguntasNav';
import { useState, useEffect } from 'react';
import { endpointPrincipal } from '../helpers/url';
import { useParams } from 'react-router-dom';

const PreguntasApp = () => {

  const [pregunta2, setpregunta2] = useState([]);
  const [id, setid] = useState(1)

  const { pregunta, opcion1, opcion2, opcion3 } = pregunta2

  const { lenguaje } = useParams()


  const PreguntaPeticio = async (idPre) => {
    const preg = await axios.get(endpointPrincipal + lenguaje + "/" + id)
    const resp = await preg.data
    setpregunta2(resp)
  }

  const idP = 1
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const siguiente = () => {
    setid(id + 1)
  }
  PreguntaPeticio(idP)
  return (
    <PreguntasDiv>
      <PreguntasNav />
      <RowDiv>
        <ColDiv>
          <img src='https://res.cloudinary.com/karma09-jm/image/upload/v1643395463/Daily%20Bit/caracters_rtuc0o.png' alt='imagen' width={100} />
        </ColDiv>
        <ColDiv>
          <h1>{pregunta}</h1>
        </ColDiv>
      </RowDiv>
      <Options>
        <form onSubmit={handleSubmit}>

          <OptionDiv>
            <option>{opcion1}</option>
          </OptionDiv>
          <OptionDiv>
            <option>{opcion2}</option>
          </OptionDiv>
          <OptionDiv>
            <option>{opcion3}</option>
          </OptionDiv>
        </form>
        <FormButton type='submit' onClick={siguiente}>COMPROBAR</FormButton>
      </Options>
    </PreguntasDiv>
  );
};

export default PreguntasApp;
