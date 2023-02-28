import '../TimeLine.scss'
import ModalLineTime from './ModalLineTime/ModalLineTime'
import ArticleLineTime from './ArticleLineTime/ArticleLineTime'
import { useState } from 'react'


export default function ItemLineTime({ posicionItem, experience, primeraPosicion, ultimaPosicion }) {

    const [desplegado, setDesplegado] = useState(false)

    const handlerOnClick = () => {
        setDesplegado(!desplegado)
    }

    return (
        <section key={`section-experience-${experience.logo}`} className={`${posicionItem}`}>
            <div className='seccion-modal-LT' >
                <ModalLineTime
                    logo={experience.logoTitulo}
                    title={experience.titulo}
                    subtitle={experience.subtitulo}
                    years={experience.duracionAños}
                    description={experience.descripcion}
                    informacionExtra={experience.informacionExtra}

                    desplegado={desplegado}
                />
            </div>
            <div className='seccion-central-LT'>
                <ul>
                    {primeraPosicion
                        && <li className='primerItem'>
                            <span />
                        </li>
                    }
                    <li className='interseccion-seccion-LineaDeTiempo' />
                    <li />
                    <li />
                    <li >
                        <div className='container-button-LT'>
                            <button onClick={handlerOnClick}>
                                {desplegado ? '-' : '+'}
                            </button>
                        </div>

                    </li>
                    <li />
                    <li />
                    <li />
                    <li />
                    {ultimaPosicion
                        && <li className='ultimoItem' />
                    }
                </ul>



            </div>
            <article className='seccion-articulo-LT'>
                <ArticleLineTime
                    logo={experience.logo}
                    title={experience.titulo}
                    subtitle={experience.subtitulo}
                    years={experience.duracionAños}
                    description={experience.descripcion}

                    desplegado={desplegado}
                />
            </article>
        </section>
    )
}
