import React from 'react';
import { ItemDiv, ItemIcon, MenuDiv, MenuLink, NavDiv} from '../styles/MenuStyles';

const Menu = () => {
    return (
        <MenuDiv>
            <nav>
                <NavDiv>
                    <MenuLink href='#'>
                        <ItemDiv>
                            <ItemIcon src='https://res.cloudinary.com/karma09-jm/image/upload/v1643383270/Daily%20Bit/Property_1_home_zaaacq.svg'alt='home'/>
                            Home
                        </ItemDiv>
                    </MenuLink>
                    <MenuLink href='#'>
                        <ItemDiv>
                            <ItemIcon src='https://res.cloudinary.com/karma09-jm/image/upload/v1643383270/Daily%20Bit/Property_1_activity_xk1tlq.svg'alt='estadisticas'/>
                            Estadísticas
                        </ItemDiv>
                    </MenuLink>
                    <MenuLink href='#'>
                        <ItemDiv>
                            <ItemIcon src='https://res.cloudinary.com/karma09-jm/image/upload/v1643383270/Daily%20Bit/Property_1_user_abgiyz.svg'alt='perfil'/>
                            Perfil
                        </ItemDiv>
                    </MenuLink>
                    <ItemDiv>
                        <ItemIcon src='https://res.cloudinary.com/karma09-jm/image/upload/v1643383270/Daily%20Bit/Property_1_home_zaaacq.svg' alt='home' />
                        <MenuLink href='/principal'>Home</MenuLink>
                    </ItemDiv>
                    <ItemDiv>
                        <ItemIcon src='https://res.cloudinary.com/karma09-jm/image/upload/v1643383270/Daily%20Bit/Property_1_activity_xk1tlq.svg' alt='Estadisticas' />
                        <MenuLink href='#'>Estadísticas</MenuLink>
                    </ItemDiv>
                    <ItemDiv>
                        <ItemIcon src='https://res.cloudinary.com/karma09-jm/image/upload/v1643383270/Daily%20Bit/Property_1_user_abgiyz.svg' alt='usuario' />
                        <MenuLink href='/perfil'>Perfil</MenuLink>
                    </ItemDiv>
                </NavDiv>
            </nav>
        </MenuDiv>
    );
};

export default Menu;
