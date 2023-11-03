

import Experiences from '../../components/Sections/Portfolio/Experiences/Experiences'
import Projects from '../../components/Sections/Portfolio/Projects/Projects'
import Skills from '../../components/Sections/Portfolio/Skills/Skills'
import './Portfolio.scss'
import useSEO from '../../hooks/useSEO'
import ScrollToTop from '../../assets/ScrollToTop/ScrollToTop'

export default function Portfolio() {
    useSEO({ title: 'Portfolio de Proyectos' })
    
    return (
        <div> 
            <ScrollToTop />
            <Skills />
            <Experiences />
            <Projects />
        </div>
        
    )
}
