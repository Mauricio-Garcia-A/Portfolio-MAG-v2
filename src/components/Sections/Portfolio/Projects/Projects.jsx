import './Projects.scss'
import responseProyectos from '../../../../utils/proyectos.json'
import ProjectsList from './ProjectsList/ProjectsList'

export default function Projects() {
    const proyectos = responseProyectos
    return (
        <div>
            <h1> Proyectos portfolio</h1>
            <ProjectsList proyectos={proyectos} />
        </div>
    )
}
