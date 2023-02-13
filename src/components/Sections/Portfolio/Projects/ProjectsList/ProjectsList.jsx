
import ItemProject from './ItemProject/ItemProject'
import './ProjectsList.scss'

export default function ProjectsList({ proyectos }) {

    return (
        <div className='container-ProyectsList'>
            {proyectos.map((proyecto, i) => {
                let posicionItem = 'derecha'
                let colorFondo2 = proyecto.colorFondo.substr(0, proyecto.colorFondo.length - 2).concat('2c')

                if ((i % 2) === 0) {
                    posicionItem = 'izquierda'
                }

                return (
                    <div key={`item-${i}`} className='container-project-PL'>
                        <ItemProject
                            posicionItem={posicionItem}

                            titulo={proyecto.titulo}
                            logo={proyecto.logo}
                            logoTitulo={proyecto.logoTitulo}
                            imagenMovil={proyecto.imagenMovil}
                            imagenBrowser={proyecto.imagenBrowser}
                            tecnologias={proyecto.tecnologias}

                            tituloHttp={proyecto.tituloHttp}
                            descripcion={proyecto.descripcion}
                            colorFondo={proyecto.colorFondo}
                            fecha={proyecto.fecha}
                            linkGit={proyecto.linkGit}
                            linkPage={proyecto.linkPage}

                            colorFondo2={colorFondo2}

                        />
                    </div>
                )
            })}
        </div>
    )
}
