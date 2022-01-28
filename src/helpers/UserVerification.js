import { endpointUsuarios } from '../helpers/url'
import { GetApi } from './Get';

const UserVerification = () => {

    const [usuario, setusuario] = useState({
        nombreUsuario: "",
        contraseña: ""
    });

    const { nombreUsuario, contraseña } = usuario

    const handleSubmit = async (e) => {
        e.preventDefault()

        const usuarios = await GetApi(endpointUsuarios)
        const usuarioExistente = usuarios.find((usu) => usu.nombreUsuario === nombreUsuario)
        if (usuarioExistente !== "") {
            if (usuarioExistente.contraseña === contraseña) {
                alert('Usuario Verificado')
            }
        }
        else {
            alert('Usuario no existe')
        }
    }

    const handleInputChange = ({ target }) => {
        setusuario({
            ...usuario,
            [target.name]: target.value
        })
    }

    return {
        handleSubmit,
        handleInputChange
    };
};

export default UserVerification;
