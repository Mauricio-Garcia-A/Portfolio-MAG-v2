import PersonalCard from './PersonalCard/PersonalCard'
import './Presentation.scss'
import InfoPresentation from './InfoPresentation/InfoPresentation'
import { IconLinkedin, IconMail, IconPdf } from './InfoPresentation/IconsTitle'
import { useState } from 'react'

const SECCION_PRESENTACION = {
    ImagenPefil: '/images/imagenPerfil.png',
    NombreYApellido: 'Mauricio Ariel Garcia',
    Estudio: 'Ingeniería en Sistemas de Información',
    Nacinalidad: 'ARGENTINO',
    IconoBandera: 'argentina',
}

const CaracteristicasPersonales = [
    {
        titulo: 'Creativa',
        colorTexto: 'blue',
        colorFondo: 'rgba(67, 91, 162, 0.4)'
    },
    {
        titulo: 'Proactiva',
        colorTexto: 'red',
        colorFondo: 'rgba(162, 67, 67, 0.4)'
    },
    {
        titulo: 'Autodidacta',
        colorTexto: 'green',
        colorFondo: 'rgba(84, 162, 67, 0.4)'
    },
    {
        titulo: 'Diciplinada',
        colorTexto: 'yellow',
        colorFondo: 'rgba(186, 186, 53, 0.411)'
    },
    {
        titulo: 'Responsable',
        colorTexto: 'pink',
        colorFondo: 'rgba(57, 57, 57, 0.4)'
    }
]


export default function Presentation() {
    const [colorTarjeta, setColorTarjeta] = useState(CaracteristicasPersonales[0].colorFondo)

    return (
        <section className='container-Presentation'>
            <section>
                <PersonalCard
                    nombreYapellido={SECCION_PRESENTACION.NombreYApellido}
                    imagenPerfil={SECCION_PRESENTACION.ImagenPefil}
                    estudio={SECCION_PRESENTACION.Estudio}
                    nacionalidad={SECCION_PRESENTACION.Nacinalidad}
                    iconoBandera={SECCION_PRESENTACION.IconoBandera}
                    colorTarjeta={colorTarjeta}
                />
                <div className='contenedor-botones-Presentacion' >
                    <a href='' >
                        <div className='botonDescargaCV'>
                            <IconPdf />
                            Descarga CV
                        </div>

                    </a>
                    <a href='https://www.linkedin.com/in/mauricio-ariel-garcía'>
                        <div className='botonContacto-Presentacion'>
                            <IconLinkedin />
                        </div>

                    </a>
                    <a href='https://www.linkedin.com/in/mauricio-ariel-garcía'>
                        <div className='botonContacto-Presentacion'>
                            <IconMail />
                        </div>

                    </a>
                </div>
            </section>

            <InfoPresentation caracteristicas={CaracteristicasPersonales} setColor={setColorTarjeta} />

        </section>
    )
}
