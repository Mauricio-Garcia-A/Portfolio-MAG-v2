import './Experiences.scss'
import TimeLine from './TimeLine/TimeLine'
import responseExperiencias from '../../../../utils/experiencias.json'


export default function Experiences() {
    const experiencias = responseExperiencias

    return (
        <div className='conteiner-Experiences'>
            <h2>Formacion Tecnica y Academica</h2>
            <p>Lorem Lorem ipsum dolor sit amet consectetur adipiscing elit, eget velit malesuada primis vulputate diam. Ultrices eget lacinia phasellus sapien in curabitur pulvinar conubia metusipsum dolor sit amet. Ut obcaecati velit in sint dolor vel odio autem ut eligendi sint</p>
            <TimeLine experiences={experiencias} />
        </div>
    )
}
