import React from 'react';
import { ButtonPerfil, IMGStylesPerfil, SpanStylesPerfil } from '../styles/PerfilStyles';
import Menu from './Menu';

const Perfil = () => {

    const user = localStorage.getItem('user');

    return (
        <>
            <div>
                <IMGStylesPerfil src="https://res.cloudinary.com/ddgyxfetd/image/upload/v1643392366/Clase25Enero/images_osbtkt.png" alt='avatar' />

                <SpanStylesPerfil>{user}</SpanStylesPerfil>

                <ButtonPerfil>Cerrar Sesión</ButtonPerfil>
            </div>
            <Menu />
        </>
    );
};

export default Perfil;
