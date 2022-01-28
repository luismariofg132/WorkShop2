import React from 'react';
import { ColDiv, FormButton, OptionDiv, Options, PreguntasDiv, RowDiv } from '../styles/PreguntasAppStyles';
import PreguntasNav from './PreguntasNav';

const PreguntasApp = () => {
  return (
      <PreguntasDiv>
          <PreguntasNav />
          <RowDiv>
            <ColDiv>
                <img src='https://res.cloudinary.com/karma09-jm/image/upload/v1643395463/Daily%20Bit/caracters_rtuc0o.png' alt='imagen' width={100} />
            </ColDiv>
            <ColDiv>
                <h1>Pregunta ¿lorem ipsum?</h1>
            </ColDiv>
          </RowDiv>
          <Options>
              <form>
                  <OptionDiv>
                    <option>Opcion 1</option>
                  </OptionDiv>
                  <OptionDiv>
                    <option>Opcion 2</option>
                  </OptionDiv>
                  <OptionDiv>
                    <option>Opcion 3</option>
                  </OptionDiv>
              </form>
          </Options>

          <FormButton type='submit'>COMPROBAR</FormButton>
      </PreguntasDiv>
  );
};

export default PreguntasApp;
