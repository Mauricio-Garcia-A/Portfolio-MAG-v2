

import Experiences from '../../components/Sections/Portfolio/Experiences/Experiences'
import Projects from '../../components/Sections/Portfolio/Projects/Projects'
import Skills from '../../components/Sections/Portfolio/Skills/Skills'
import './Portfolio.scss'

export default function Portfolio() {
    return (
        <div style={{ paddingTop: '120px' }}> 
            <Skills />
            <Experiences />
            <Projects />
        </div>
        
    )
}
