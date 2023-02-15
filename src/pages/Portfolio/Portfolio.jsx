

import Experiences from '../../components/Sections/Portfolio/Experiences/Experiences'
import Projects from '../../components/Sections/Portfolio/Projects/Projects'
import Skills from '../../components/Sections/Portfolio/Skills/Skills'
import './Portfolio.scss'
import useSEO from '../../hooks/useSEO'
export default function Portfolio() {
    useSEO({ title: 'Portfolio de Proyectos' })
    return (
        <div> 
            <Skills />
            <Experiences />
            <Projects />
        </div>
        
    )
}
