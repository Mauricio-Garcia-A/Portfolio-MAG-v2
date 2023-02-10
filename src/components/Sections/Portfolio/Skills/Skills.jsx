import IconoDev from '../../../Iconos/IconoDev'
import ImageComparator from './ImageComparator/ImageComparator'
import LogoDev from './logos/LogoDev'
import LogoUIX from './logos/LogoUIX'
import './Skills.scss'

const ActividadesRealizadas1 = [
    "Análisis del sistema (Relevamiento de los requerimientos)",
    "Diseño del sistemas (Diagramas UML y Patrones de diseño)",
    "Diseño de Arquitectura e infraestructura (Redes y Bases Datos)",
    "Desarrollador (Programador FrontEnd y BackEnd)",
    "QA y testing",
    "Soporte para la implementación y mantenimiento del sistema"
]
const ActividadesRealizadas2 = [
    "Diseño UI (Diseños de Interacción y de Interfaz de Usuario)",
    "Patrones de Diseño UI y Heurísticas de Nielsen",
    "Diseño UX (Fundamentos de diseño de Experiencias de Usuario)",
    "Leyes de UX",
    "Estudios de Accesibilidad y Usabilidad",
    "Creación de Prototipos"
]
const SkillsDev = [
    {
        titulo: "Tecnologias Web FrontEnd:",
        items: ['html5', 'css3', 'js']
    },
    {
        titulo: "Frameworks y Librerías Web:",
        items: ['reactjs', 'angular', 'vuejs', 'wordpress', 'drupal', 'dreamweaver']
    },
    {
        titulo: "Librerías y Preprocesadores de Estilos:",
        items: ['sass', 'less', 'postcss', 'bootstrap', 'materialui']
    },
    {
        titulo: "Tecnologias Web BackEnd:",
        items: ['nodejs', 'python', 'php']
    },
    {
        titulo: "Tecnologias de Bases de Datos:",
        items: ['mysql', 'postgresql', 'mongodb']
    },
    {
        titulo: "Herramienta de control de versiones:",
        items: ['github', 'svn']
    },
    {
        titulo: "Metodologías Agiles:",
        items: ['scrum', 'kanban']
    },

]
const SkillsDesing = [
    {
        titulo: "Tecnologias de Diseño:",
        items: ['photoshop', 'coreldraw', 'autocad']
    },
    {
        titulo: "Herramientas de Prototipado:",
        items: ['']
    },
]




export default function Skills() {
    return (
        <div >
            <ImageComparator />
            <h1>Habilidades</h1>
            <section className='actividades-Skills'>

                <article>
                    <img src='/images/imagen-habilidades-uix.png' alt='image-uix-skills' />
                    <div>
                        <LogoUIX height='100px' />
                        {ActividadesRealizadas2.map((actividad, i) => {
                            return (
                                <p key={`actividad-uix-${i}`}>{actividad}</p>
                            )
                        })}
                    </div>

                </article>
                <article>

                    <div>
                        <LogoDev height='100px' />
                        {ActividadesRealizadas1.map((actividad, i) => {
                            return (
                                <p key={`actividad-dev-${i}`}>{actividad}</p>
                            )
                        })}
                    </div>
                    <img src='/images/imagen-habilidades-dev.png' alt='image-dev-skills' />
                </article>
            </section>
            <section className='logos-skills '>
                <h2>Skills</h2>
                {SkillsDev.map((skill, i) => {
                    return (
                        <article key={`itemSkillDev${i}`}>

                            <h3>{skill.titulo}</h3>
                            <div >
                                {skill.items.map((item, e) => {
                                    return (
                                        <div className='container-logo'>
                                            <IconoDev titulo={item} width='80px' key={`iconoDev${i}-${e}`} />
                                        </div>
                                    )
                                })}
                            </div>
                        </article>
                    )
                })}
            </section>

        </div>
    )
}
