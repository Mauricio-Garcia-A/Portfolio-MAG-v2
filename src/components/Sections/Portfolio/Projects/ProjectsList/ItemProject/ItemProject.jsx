import IconoDev from '../../../../../Iconos/IconoDev'
import '../ProjectsList.scss'
import TemplateBrowser from './template/TemplateBrowser'
import TemplateMovil from './template/TemplateMovil'

export default function ItemProject({
    posicionItem = 'derecha',
    titulo = 'Titulo proyecto',
    logo,
    logoTitulo,
    imagenMovil,
    imagenBrowser,
    tecnologias,
    tituloHttp,
    descripcion,
    colorFondo,
    fecha,
    linkGit,
    linkPage,
    colorFondo2
}) {


    return (
        <div className='container-ItemProject'>
            <section className={`${posicionItem}`} style={{ background: colorFondo2, backdropFilter: 'blur(10px)' }}>
                <article className='container-images-IP' >
                    <TemplateBrowser
                        tituloHttp={tituloHttp}
                        colorFondo={colorFondo}
                        imagenBrowser={imagenBrowser}
                        logo={logo}
                    />
                    <TemplateMovil
                        tituloHttp={tituloHttp}
                        colorFondo={colorFondo}
                        imagenMovil={imagenMovil}
                    />
                </article>
                <article className='container-info-IP'>
                    <img src={`/Portfolio-MAG-v2/images/webp/projects/${logoTitulo}`} alt='logo' style={{ width: '200px' }} />
                    <h1>{titulo}</h1>
                    <p className='descripcion-IP'>{descripcion}</p>
                    <p><b>Fecha:</b> {fecha} </p>
                    <p><b>Tecnologias Utilizadas:</b> </p>
                    <div className='container-tegno-IP'>
                        {tecnologias.map((item, e) => {
                            return (<IconoDev titulo={item} width='40px' key={`iconoDev-${e}`} />)
                        })}
                    </div>
                    <div className='contenedor-botones-itemProyecto'>
                        <a href={linkGit}><span className='botonProyecto'>VER CODIGO </span></a>
                        <a href={linkPage} ><span className='botonProyecto'>VER DEMO  </span></a>
                    </div>
                </article>
            </section>





            {/*<div style={{ position: 'relative' }}>
                
                
                   
            </div>*/}

        </div>
    )
}
