import IconsTemplate from './IconsTemplate'
import './Templates.scss'

export default function TemplateBrowser({
    logo,
    tituloHttp,
    colorFondo,
    imagenBrowser
}) {


    return (
        <div className='contenedor-Navegador' style={{ background: colorFondo }}>
            <header>
                <div className='header-parte1-Navegador'>
                    <div>
                        <img src={`/Portfolio-MAG-v2/images/webp/projects/${logo}`} alt='img' style={{ width: '15px' }} />
                        <span>{tituloHttp}</span>
                    </div>
                    <div>
                        <IconsTemplate titulo='mas' fill='rgb(50, 50, 50)' width='10px' style={{ padding: '7px' }} />
                    </div>
                    <IconsTemplate titulo='minimizar' fill='rgb(50, 50, 50)' width='10px' style={{ padding: '7px' }} />
                    <IconsTemplate titulo='maximizar' fill='rgb(50, 50, 50)' width='10px' style={{ padding: '7px' }} />
                    <IconsTemplate titulo='cerrar' fill='rgb(50, 50, 50)' width='10px' style={{ padding: '7px' }} />
                </div>
                <div className='header-parte2-Navegador'>
                    <IconsTemplate titulo='flechaControl' fill='rgb(50, 50, 50)' width='15px' style={{ transform: 'rotate(180deg)' }} />
                    <IconsTemplate titulo='flechaControl' fill='rgb(50, 50, 50)' width='15px' />
                    <IconsTemplate titulo='volverAcargar' fill='rgb(50, 50, 50)' width='15px' />
                    <div>
                        <IconsTemplate titulo='candado' fill='rgb(50, 50, 50)' width='12px' />
                        <span>{`https://www.${tituloHttp}.com`}</span>
                    </div>
                    <IconsTemplate titulo='menuNavegador' fill='rgb(50, 50, 50)' width='15px' />
                </div>
            </header>
            <div className='contenedor-imagen-Navegacion'>
                <img src={`/Portfolio-MAG-v2/images/webp/projects/${imagenBrowser}`} alt='img-navegador' />
            </div>

        </div>
    )
}
