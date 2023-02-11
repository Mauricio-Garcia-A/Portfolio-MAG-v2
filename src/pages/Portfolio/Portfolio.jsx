

import Experiences from '../../components/Sections/Portfolio/Experiences/Experiences'
import Skills from '../../components/Sections/Portfolio/Skills/Skills'
import './Portfolio.scss'

export default function Portfolio() {
    return (
        <div style={{ paddingTop: '120px'}}> 
            <Skills />
            <Experiences />
        </div>
        
    )
}
