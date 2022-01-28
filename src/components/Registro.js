import React from 'react';
import { DivStyled, InputStyledIS, LabelStyleIS, SpanStyledIS, ButtonStyledIS } from '../styles/InicioSesionStyled';
import axios from 'axios';
import { useState } from 'react';
import { endpointUsuarios } from '../helpers/url'
import Listar from './Listar';


const Registro = () => {

    const [registro, setRegistro] = useState({
        nombre:'',
        nombreUsuario:'',
        contraseña:''
    });

    const{nombre,nombreUsuario,contraseña}=registro;

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const handleInputChange = ({target}) => {
        setRegistro({
          ...registro,
          [target.name]: target.value
        })
    
    };
    // console.log(registro)

    const postData = () => {

        if (nombre==="" || nombreUsuario==="" || contraseña==="") {
            alert('Debes llenar todos los campos para registrarte')
        } else {
            axios.post(endpointUsuarios,registro)
            .then(response => console.log(response.data))
            .then(window.location.href="/")
            .catch(error => console.log(error))
        }
        
        
   }




  return  <DivStyled>
  <SpanStyledIS>Registro de Usuarios</SpanStyledIS>
  <form onSubmit={handleSubmit}>
      <div>
          <LabelStyleIS>Nombre</LabelStyleIS>
          <InputStyledIS type="text" name="nombre" value={nombre} onChange={handleInputChange} />
      </div>
      <div>
          <LabelStyleIS>Nombre de usuario</LabelStyleIS>
          <InputStyledIS type="text" name="nombreUsuario" value={nombreUsuario} onChange={handleInputChange} />
      </div>
      <div>
          <LabelStyleIS>Contraseña</LabelStyleIS>
          <InputStyledIS type="password" name='contraseña' value={contraseña} onChange={handleInputChange} />
      </div>
     
      <ButtonStyledIS type='submit' onClick={() => postData()}>Registrar</ButtonStyledIS>
      
  </form>
  <div><Listar/></div>
</DivStyled>;

};

export default Registro;
