import axios from 'axios';
import React from 'react';
import { ColDiv, FormButton, OptionDiv, Options, PreguntasDiv, RowDiv } from '../styles/PreguntasAppStyles';
import PreguntasNav from './PreguntasNav';
import { useState, useEffect } from 'react';
import { endpointPrincipal } from '../helpers/url';

const PreguntasApp = () => {

  const [pregunta2, setpregunta2] = useState([]);

  const { pregunta, opcion1, opcion2, opcion3 } = pregunta2

  const idPre = 1;
  const PreguntaPeticio = async () => {
    const preg = await axios.get(endpointPrincipal + "html/" + idPre)
    const resp = await preg.data
    setpregunta2(resp)
  }


  PreguntaPeticio()
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
        <form>

          <OptionDiv>
            <option>{opcion1}</option>
          </OptionDiv>
          <OptionDiv>
            <option>{opcion2}</option>
          </OptionDiv>
          <OptionDiv>
            <option>{opcion3}</option>
          </OptionDiv>
          <FormButton>COMPROBAR</FormButton>
        </form>
      </Options>
    </PreguntasDiv>
  );
};

export default PreguntasApp;
