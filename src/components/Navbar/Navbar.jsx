
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logotipo/Logo.jsx'
import ButtonDropdown from './ButtonDropdown/ButtonDropdown'
import './Navbar.scss'

export default function Navbar() {
    const [menuDesplegado, setMenuDespegado] = useState(false)

    return (
        <div>
            <nav className='container-Navbar'>
                <div className='contenedor-logo-BarraDeNavegacion'>
                    <NavLink to="/">
                        <Logo colorFigura2='blue' />
                    </NavLink>
                </div>
                <div className={`contenedor-link-BarraDeNavegacion ${menuDesplegado ? "" : "menu-desactivo"}`} onClick={() => { setMenuDespegado(false) }}>
                    <NavLink to="/" className='link-BarraDeNavegacion'> HOME </NavLink>
                    <NavLink to="/Portfolio" className='link-BarraDeNavegacion'>PORTFOLIO</NavLink>
                    <NavLink to="/Acerca-de-mi" className='link-BarraDeNavegacion'>ACERCA DE MI</NavLink>
                    <a className='boton-contacto-BarraDeNavegacion' href='#formas-de-contacto'><div>CONTACTO</div></a>
                </div>
                <div className='contenedor-boton-desplegable-BarraDeNavegacion' onClick={() => { setMenuDespegado(!menuDesplegado) }}>
                    <ButtonDropdown estadoDesplegado={menuDesplegado} />
                </div>
            </nav>

        </div>
    )
}
