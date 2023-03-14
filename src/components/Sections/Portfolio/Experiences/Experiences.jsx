import './Experiences.scss'
import TimeLine from './TimeLine/TimeLine'
import responseExperiencias from '../../../../utils/experiencias.json'


export default function Experiences() {
    const experiencias = responseExperiencias

    return (
        <div className='conteiner-Experiences'>
            <header className='header-Experiences'>
                <h2>Formacion Tecnica y Academica</h2>
            </header>
            <p className='text-Experiences'> 
                Mi formación técnica y académica se compone prácticamente de una educación secundaria un en una Escuela de Educación Técnica con una orientación es Informática y una educación Universitaria en la Universidad Tecnológica Nacional con una formación en Ingeniería en Sistemas de Información. Y otra parte importante de mi formación técnica y académica como profesional, está conformada por de las experiencias trabajando en un Centro de Investigación, en una Consultora de sistemas Internacional y actualmente como Developer FreeLancer.
            </p>
            <TimeLine experiences={experiencias} />

        </div>
    )
}
