
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
                    <Logo colorFigura2='blue' />
                </div>
                <div className={`contenedor-link-BarraDeNavegacion ${menuDesplegado ? "" : "menu-desactivo"}`} onClick={() => { setMenuDespegado(false) }}>
                    <NavLink to="/Portfolio-MAG-v2/" className='link-BarraDeNavegacion'> HOME </NavLink>
                    <NavLink to="/Portfolio-MAG-v2/Portfolio" className='link-BarraDeNavegacion'>PORTFOLIO</NavLink>
                    <NavLink to="/Portfolio-MAG-v2/Acerca-de-mi" className='link-BarraDeNavegacion'>ACERCA DE MI</NavLink>
                    <button className='boton-contacto-BarraDeNavegacion'>CONTACTO</button>
                </div>
                <div className='contenedor-boton-desplegable-BarraDeNavegacion' onClick={() => { setMenuDespegado(!menuDesplegado) }}>
                    <ButtonDropdown estadoDesplegado={menuDesplegado} />
                </div>
            </nav>

        </div>
    )
}
