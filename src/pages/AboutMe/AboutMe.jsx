
import Description from '../../components/Sections/AboutMe/Description/Description'
import Hobbies from '../../components/Sections/AboutMe/Hobbies/Hobbies'
import './AboutMe.scss'

export default function AboutMe() {
    return (
        <div className='container-AboutMe'>
            <Description />
            <Hobbies />
        </div>
    )
}
