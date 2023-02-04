import { IconBarra, IconFlechaIzquierda, IconMayor, IconMenor } from './IconsTitle'
import './InfoPresentation.scss'

export default function InfoPresentation({ caracteristicas, setColor }) {
    return (
        <div className='section-informacion-presentacion'>
            <div className='semifondo-red'></div>
            <article>
                <div className='contenedor-info'>
                    <div className='title-info'>
                        <IconMenor styleDefault={{ fill: 'blue', height: '40px' }} />
                        <h1>SOY MAURO</h1>
                        <IconBarra styleDefault={{ fill: 'blue', height: '40px' }} />
                        <IconMayor styleDefault={{ fill: 'blue', height: '40px' }} />
                    </div>
                    <p><b>{'< HOLA MUNDO /> '}</b>Mi nombre es Mauricio Garcia, pero me pueden decir <strong>"MAURO"</strong>. Estudie la carrera de Ingeniería en Sistemas de Información, y actualmente me dedico a encontrar soluciones software a diferentes problemáticas de una forma  innovadoras, eficiente y eficaz</p>
                    <h2><b>+4</b> años de experiencia en IT</h2>
                    <div className='contenedor-carac'>
                        <h4>Me considero una Persona:</h4>
                        <ul>
                            {caracteristicas.map((caracteristica, i) => {
                                return (
                                    <li key={`item-caracteristica-${i}`} onClick={() => setColor(caracteristica.colorFondo)}>
                                        <IconFlechaIzquierda styleDefault={{ fill: `${caracteristica.colorFondo}`, width: '20px' }} />
                                        <span>{caracteristica.titulo}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>

            </article>
        </div>
    )
}
