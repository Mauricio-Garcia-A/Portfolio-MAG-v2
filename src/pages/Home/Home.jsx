import CurrentSituation from '../../components/Sections/Home/CurrentSituation/CurrentSituation'
import Presentation from '../../components/Sections/Home/Presentation/Presentation'
import './Home.scss'


export default function Home() {
    return (
        <div>
            <Presentation />
            <CurrentSituation />
        </div>
    )
}
