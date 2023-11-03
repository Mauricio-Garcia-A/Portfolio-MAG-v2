
import { useEffect } from 'react'
import Description from '../../components/Sections/AboutMe/Description/Description'
import Hobbies from '../../components/Sections/AboutMe/Hobbies/Hobbies'
import useSEO from '../../hooks/useSEO'
import './AboutMe.scss'
import ScrollToTop from '../../assets/ScrollToTop/ScrollToTop'

export default function AboutMe() {
    useSEO({ title: 'Acerca de Mauro ' })
        
    return (
        <div className='container-AboutMe'>
            <ScrollToTop />
            <Description />
            <Hobbies />
        </div>
    )
}
