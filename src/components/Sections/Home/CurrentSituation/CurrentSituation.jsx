import './CurrentSituation.scss'

const descripcionSeccion = [
    'A lo largo del tiempo he aprendido diferentes tecnologías, y desarrollado diversas habilidades, en el área IT (Tecnología de la Información).',
    'Debido a que estudie la carrera de “Ingeniería en Sistemas de Información”, muchos de estos conocimientos y habilidades fueron adquiridas y desarrolladas en el ámbito universitario. Las cuales pude llevar a la práctica trabajando un Centro de Investigación y en una consultora Internacional de Sistemas, y a su vez, en estos mismos lugares seguir aprender nuevas habilidades y tecnologías.',
    'Actualmente soy Desarrollador FrontEnd en ReactJS y realizando diferentes actividades como Diseñador UX/UI. Hoy me encuentro  mesclado un poco de ambos mundo, “El Desarrollo” y “El Diseño Web”, para encontrar y desarrollar soluciones software a diferentes problemáticas, de una forma innovadoras, creativas, eficaz y eficiente, que logren cumplir y superar con los objetivo planteados, sacado así una ventajas competitivas en el mercado, utilizando como medio las tecnologías más utilizadas en la actualidad.',
    "Relacionando el proceso de diseño y el proceso de desarrollo de una forma agil, mediantes las actuales metodologias agiles, como Scrum y Kanban."
]

export default function CurrentSituation() {
    return (
        <section className='conteiner-CurrentSituation'>
            <h1>[ ACTUALIDAD PERSONAL Y PROFECIONAL]</h1>
            <div className='section-situations'>

                <div className='situation1'>
                    <img src='/images/fotoUX3.png' />
                </div>

                <div className='situation2'>
                    <img src='/images/fotoDEV3.png' />
                </div>

                <div className='situation3'>
                    <img src='/images/fotoPER3.png' />
                </div>
            </div>
            <article>
                {
                    descripcionSeccion.map((parrafo, i) => {
                        return (
                            <div key={`parrado-actualidad-${i}`}>
                                <p>{parrafo}</p>
                            </div>
                        )
                    })
                }
            </article>
        </section>
    )
}
