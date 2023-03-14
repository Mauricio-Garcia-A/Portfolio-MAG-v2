import './Skills.scss'
import ImageComparator from './ImageComparator/ImageComparator'
import responseSkills from '../../../../utils/skills.json'

import ListSkills from './ListSkills/ListSkills'
import SkillsDescription from './SkillsDescription/SkillsDescription'

export default function Skills() {
    const ActividadesRealizadas1 = responseSkills.ActividadesDEV
    const ActividadesRealizadas2 = responseSkills.ActividadesUIX
    const SkillsDev = responseSkills.SkillsDev
    const SkillsDesing = responseSkills.SkillsUIX

    return (
        <div className='container-Skills'>
            <div className='pre-header-Skills' />
            <ImageComparator />
            <div className='post-header-Skills' />

            <header>
                <h1>HABILIDADES</h1>
            </header>
            <main>
                <div className='container-text-presentacion-Skills'>
                    <p>Actualmente soy Developer Web FrontEnd con diversas habilidades en lo que respecta al desarrollo de software, y al mundo IT que lo rodea.</p>
                    <p>Incursionando en el mundo BackEnd, para alcanzar la meta de ser FullStack, y mejorando día a día, mediante la utilización de patrones de diseño y buenas prácticas para el desarrollo de software.</p>
                    <p>Además cuento con diferentes habilidades en el área del Diseño de Experiencias e Interfaces de Usuario, con las cual se le agrega valor al desarrollo web, mejorando así  la experiencia que tienen las personas al utilizar las aplicaciones Web, y facilitando la comprensión e interactividad con la aplicación, e impactar directamente en la rentabilidad de tu negocio.</p>
                </div>
                
                <SkillsDescription Actividades1={ActividadesRealizadas1} Actividades2={ActividadesRealizadas2} />

                <ListSkills SkillsDev={SkillsDev} SkillsDesing={SkillsDesing} />
            </main>
        </div>
    )
}
