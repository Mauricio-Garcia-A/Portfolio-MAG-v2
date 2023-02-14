
import Description from '../../components/Sections/AboutMe/Description/Description'
import Hobbies from '../../components/Sections/AboutMe/Hobbies/Hobbies'
import useSEO from '../../hooks/useSEO'
import './AboutMe.scss'

export default function AboutMe() {
    useSEO({ title: 'Acerca de Mauro ' })
    return (
        <div className='container-AboutMe'>
            <Description />
            <Hobbies />
        </div>
    )
}
