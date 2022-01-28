import React from 'react';
import { ImgIntentos, PreguntasNavDiv, ProgressBar } from '../styles/PreguntasNavStyles';

const PreguntasNav = () => {
  return (
      <PreguntasNavDiv>
          <div>
              <a href='/principal'>
                  <img src='https://res.cloudinary.com/karma09-jm/image/upload/v1643393822/Daily%20Bit/Property_1_x_knw55z.svg' alt='cerrar'/>
              </a>
          </div>
          <div>
              <ProgressBar value={2} max={3}></ProgressBar>
          </div>
          <div>
              <ImgIntentos src='https://res.cloudinary.com/karma09-jm/image/upload/v1643393699/Daily%20Bit/Property_1_heart_bc2egu.png'/>
          </div>
      </PreguntasNavDiv>
  );
};

export default PreguntasNav;
