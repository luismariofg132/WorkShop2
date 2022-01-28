import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { endpointUsuarios } from '../helpers/url'

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
                        alert('Usuario Verificado')
                        localStorage.setItem('user', usuarioExistente.nombreUsuario)

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
    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre de usuario</label>
                <input type="text" name="nombreUsuario" value={nombreUsuario} onChange={handleInputChange} />
            </div>
            <div>
                <label>Contraseña</label>
                <input type="text" name='contraseña' value={contraseña} onChange={handleInputChange} />
            </div>
            <button type='submit' >Buscar</button>
        </form>
    </div>;
};

export default InicioSesion;
