import Logo from '../Logotipo/Logo'
import './Footer.scss'
import { IconFacebook, IconInstagram, IconLinkedin, IconMail, IconUbicacion, IconWhatsapp } from './IconsFooter'



const redesSociales= [
        {
            titulo: 'Linkedin',
            icono: 'linkedin',
            link: 'https://www.linkedin.com/in/mauricio-ariel-garcía',
            usuario: 'mauricio-ariel-garcía'
        },
        {
            titulo: 'Instagram',
            icono: 'instagram',
            link: 'https://www.instagram.com/mauro.mam/',
            usuario: 'mauro_mam'
        },
        {
            titulo: 'Facebook',
            icono: 'facebook',
            link: 'https://www.facebook.com/mauro.mam',
            usuario: 'mauro.mam'
        }
    ]


const formasDeContacto = [
    {
        titulo: 'email',
        icono: 'gmail',
        descripcion: 'garcia.mauricio.ariel@gmail.com'
    },
    {
        titulo: 'celular',
        icono: 'whatsapp',
        descripcion: '+54 9 ( 2314 - 443314 )'
    },
    {
        titulo: 'linkedin',
        icono: 'linkedin',
        descripcion: 'www.linkedin.com/in/mauricio-ariel-garcía'
    }
]

const URL_PDF = "/Portfolio-MAG-v2/PDFs/CV-Garcia_Mauricio_Ariel.pdf"

export default function Footer() {
    return (
        <div className='container-Footer'>
            <header />
            <section>
                <article className='section-footer-1'>
                    <Logo
                        colorFigura2='blue'
                        colorFigura1='white'
                        colorFigura3='white'
                        colorFigura4='white'
                        colorM='white'
                        colorA='white'
                        colorG='white'
                        colorPunto='white'
                        width='200px'
                    />
                    <div className='separador' />
                    <h3>REDES SOCIALES</h3>
                    <div className='section-redes-sociales' >
                        <a href={ redesSociales[0].link}> <IconLinkedin /> </a>
                        <a href={ redesSociales[1].link}> <IconInstagram /> </a>
                        <a href={ redesSociales[2].link}> <IconFacebook /> </a>
                    </div>

                </article>
                <article className='section-contact'>
                    <h1>FORMAS DE CONTACTO</h1>
                    <b><IconUbicacion /> UBICACION ACTUAL</b>
                    <a href=''>La Plata, Prov. Buenos Aires - ARGENTINA</a>
                    <b><IconMail /> E-MAIL</b>
                    <a href='mailto:garcia.mauricio.ariel@gmail.com'>{formasDeContacto[0].descripcion}</a>
                    <b><IconWhatsapp /> WHATSAPP</b>
                    <a href='https://wa.me/5492314443314'>{formasDeContacto[1].descripcion}</a>
                    <b><IconLinkedin /> LINKEDIN</b>
                    <a href='https://www.linkedin.com/in/mauricio-ariel-garcía'>{formasDeContacto[2].descripcion}</a>
                </article>
                <article>
                    <div className='contenedor-cv-Contacto'>
                        <a href={URL_PDF} >
                            <div className='bloqueador-CV'>
                                <span>VER CV</span>
                            </div>
                            <embed src={`${URL_PDF}#toolbar=0&navpanes=0&scrollbar=0`} title="CV" style={{ overflow: 'hidden !important' }}>
                            </embed>
                        </a>
                        <a href={URL_PDF} target="_blank" rel="noopener noreferrer" download="CV-Garcia_Mauricio.pdf" className='botonDescargaCV-Contacto'>

                            Descarga CV
                        </a>
                    </div>
                </article>
            </section>
            <footer>
                <span>© No-Copyright 2023  -  MAG</span>
            </footer>
        </div>
    )
}
