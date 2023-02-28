import './TimeLine.scss'
import ItemLineTime from './ItemLineTime/ItemLineTime'



export default function TimeLine({ experiences = [] }) {
    return (
        <div className='container-TimeLine'>
            {experiences.map((experience, i) => {
                let posicionItem = 'derecha'
                let primeraPosicion = false
                let ultimaPosicion = false

                if ((i % 2) === 0) {
                    posicionItem = 'izquierda'
                }
                if (i === 0) {
                    primeraPosicion = true
                }
                if (i === 4) {
                    ultimaPosicion = true
                }

                return (
                    <ItemLineTime
                        key={`itemTimeline-${i}`}
                        posicionItem={posicionItem}
                        primeraPosicion={primeraPosicion}
                        ultimaPosicion={ultimaPosicion}

                        experience={experience}
                    />
                )
            })}
        </div>
    )
}
