import { NavLink } from 'react-router-dom'
import './Error.scss'
import Logo from '../../components/Logotipo/Logo'

export default function Error() {
    return (
        <section className='container-Error'>
            <div>
                <h2> ERROR 404 - PÁGINA NO ENCONTRADA </h2>
                <p>LO SENTIMOS, NO HEMOS PODIDO ENCONTRAR LA PÁGINA QUE BUSCAS!</p>
                <NavLink to="/" className='botonVolverAlHome'>
                    <Logo
                        colorFigura2='white'
                        colorFigura1='white'
                        colorFigura3='white'
                        colorFigura4='white'
                        colorM='white'
                        colorA='white'
                        colorG='white'
                        colorPunto='white'
                        width='300px'
                    />
                    VOLVER AL HOME
                </NavLink>
            </div>

        </section>
    )
}
