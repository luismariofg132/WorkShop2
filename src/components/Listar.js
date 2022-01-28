import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { endpointUsuarios } from '../helpers/url';
import '../styles/List.css'


const Listar = () => {
    const [registro, setRegistro] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get(endpointUsuarios)
        .then(response => {
            setRegistro(response.data)
        })
        .catch(error => {
            console.log(error); 
        })
}

const deleteData = (id) => { //recibe por parametro el id
    axios.delete(endpointUsuarios+id)    
    .then(response => {
        getData();         //se llama a getData para actualizar
      console.log(response.data)
   })
   .catch(error => {   
       console.log(error);
   })
}

  return( <div>
            <table className="tabla">
                <thead>
                    <tr>
                    {/* <th>Nombres </th> */}
                    <th>Usuarios  <hr></hr> </th>
                   
                    </tr>
                   
                </thead>
                
                <tbody>
                    
                    {
                        registro.map(objeto => (
                            <tr key={objeto.id}>
                                {/* <td>{objeto.nombre}</td> */}
                                <td>{objeto.nombreUsuario}</td>
                                
                                <td><button onClick={() => deleteData(objeto.id)}>Eliminar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
     </div>)
};

export default Listar;
