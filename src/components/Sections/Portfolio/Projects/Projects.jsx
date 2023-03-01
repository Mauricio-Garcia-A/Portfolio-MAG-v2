import './Projects.scss'
import responseProyectos from '../../../../utils/proyectos.json'
import ProjectsList from './ProjectsList/ProjectsList'

export default function Projects() {
    const proyectos = responseProyectos
    return (
        <div>
            <h1> Proyectos portfolio</h1>
            <p>
                Mi portfolio cuenta con proyectos que son, en general, pruebas técnicas realizadas para diferentes empresas, y que estas utilizan para la selección de personal. Cada proyecto se enfocó en desarrollar soluciones web a las diferentes problemáticas planteadas y detallada en los requerimientos de cada Challenge, utilizando las tecnologías solicitadas, generalmente ReactJS como librería principal para la construcción de interfaces de usuario interactivas y amigables. Los proyectos en conjunto demuestran mi capacidad para desarrollar soluciones web de alta calidad y escalables en React, y cumplir con los plazos establecidos.
            </p>
            <ProjectsList proyectos={proyectos} />
        </div>
    )
}
