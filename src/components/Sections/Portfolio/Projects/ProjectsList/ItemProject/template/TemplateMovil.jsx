import IconsTemplate from './IconsTemplate';
import './Templates.scss'

export default function TemplateMovil({
    imagenMovil,
    tituloHttp,
    colorFondo,
}) {
    let date = new Date();
    const horaActual = `${date.toLocaleTimeString('en-US').split(' ')[0].split(':')[0]}:${date.toLocaleTimeString('en-US').split(' ')[0].split(':')[1]} ${date.toLocaleTimeString('en-US').split(' ')[1]}`


    return (
        <div className='contenedor-Celular' style={{ background: colorFondo }}>
            <header>
                <div className='header-parte1-Celular'>{horaActual}</div>
                <div className='header-parte2-Celular'>
                    <div>
                        <div>
                            <div width='10px' className='parlante-Celular' />
                            <div width='3px' className='camara-Celular' />
                        </div>
                    </div>
                    <div />
                    <svg viewBox="0 0 54 11">
                        <path d="M.1 5.2 0 11h54l-.1-5.8c-.1-3.1-.4-4.7-.6-3.6-.2 1.2-1.3 3-2.5 4-1.8 1.7-4 1.9-23.8 1.9S5 7.3 3.2 5.6C2 4.6.9 2.8.7 1.6.5.5.2 2.1.1 5.2z" />
                    </svg>
                </div>
                <div className='header-parte3-Celular'>
                    <IconsTemplate titulo='señal' fill='white' width='10px' />
                    <IconsTemplate titulo='wifi' fill='white' width='10px' />
                    <IconsTemplate titulo='bateria' fill='white' width='10px' />
                </div>
            </header>
            <div className='navegador-Celular'>
                <IconsTemplate titulo='volverAcargar' fill='rgb(80, 80, 80)' width='12px' />
                <div><span>{`https://www.${tituloHttp}.com`}</span></div>
            </div>
            <div className='contenedor-imagen-Celular'>
                <img src={`/Portfolio-MAG-v2/images/webp/projects/${imagenMovil}`} alt='imagen-celular' />
            </div>
            <footer>
                <IconsTemplate titulo='botonControl1' fill='rgb(200, 200, 200)' width='10px' />
                <IconsTemplate titulo='botonControl2' fill='rgb(200, 200, 200)' width='20px' />
                <IconsTemplate titulo='botonControl3' fill='rgb(200, 200, 200)' width='10px' />
            </footer>
            <div className='boton1-lateral-Celular' />
            <div className='boton2-lateral-Celular' />
            <div className='boton3-lateral-Celular' />
        </div>
    )
}
