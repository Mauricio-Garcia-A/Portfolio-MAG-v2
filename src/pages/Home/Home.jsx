import CurrentSituation from '../../components/Sections/Home/CurrentSituation/CurrentSituation'
import Presentation from '../../components/Sections/Home/Presentation/Presentation'
import useSEO from '../../hooks/useSEO'
import './Home.scss'


export default function Home() {

    useSEO({ title: 'HOME' })
    return (
        <div>
            <Presentation />


            <CurrentSituation />
        </div>
    )
}
