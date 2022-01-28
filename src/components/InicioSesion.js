import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { endpointUsuarios } from '../helpers/url'
import { DivStyled, InputStyledIS, LabelStyleIS, SpanStyledIS, ButtonStyledIS } from '../styles/InicioSesionStyled';


const InicioSesion = () => {

    const [usuario, setusuario] = useState({
        nombreUsuario: "",
        contraseña: ""
    });

    const { nombreUsuario, contraseña } = usuario


    const handleSubmit = async (e) => {
        e.preventDefault()


        await axios.get(endpointUsuarios)
            .then(res => {
                const usuario = res.data
                const usuarioExistente = usuario.find((usu) => usu.nombreUsuario === nombreUsuario)
                console.log(usuarioExistente)

                if (usuarioExistente === undefined) {
                    alert('No Existe el usuario')
                }

                else if (usuarioExistente !== "") {
                    if (usuarioExistente.contraseña === contraseña) {
                        localStorage.setItem('user', usuarioExistente.nombreUsuario)
                        window.location.href = "/principal"
                    }
                    else {
                        alert('contraseña incorrecta')
                    }
                }
            })
            .catch(err => {
                alert('Error')
            })
    }

    const handleInputChange = ({ target }) => {
        setusuario({
            ...usuario,
            [target.name]: target.value
        })
        console.log(usuario)
    }
    return <DivStyled>
        <SpanStyledIS>Inicio de sesion</SpanStyledIS>
        <form onSubmit={handleSubmit}>
            <div>
                <LabelStyleIS>Nombre de usuario</LabelStyleIS>
                <InputStyledIS type="text" name="nombreUsuario" value={nombreUsuario} onChange={handleInputChange} />
            </div>
            <div>
                <LabelStyleIS>Contraseña</LabelStyleIS>
                <InputStyledIS type="text" name='contraseña' value={contraseña} onChange={handleInputChange} />
            </div>
            <ButtonStyledIS type='submit'>Iniciar Sesion</ButtonStyledIS>
        </form>
    </DivStyled>;
};

export default InicioSesion;
