import './CurrentSituation.scss'
import responseActualidad from '../../../../utils/SituacionActual.json'
import RolesSituation from './RolesSituation/RolesSituation'

export default function CurrentSituation() {

    const descripcionSeccion = responseActualidad.descripcionSeccion
    const ItemsSituacionActual = responseActualidad.ItemsSituacion

    return (
        <div className='conteiner-CurrentSituation'>
            <header >
                <h2> ACTUALIDAD PERSONAL Y PROFECIONAL</h2>
            </header>

            <RolesSituation ItemsSituacionActual={ItemsSituacionActual} />

            <article>
                <section>
                    <img style={{ width: '500px' }} src='/Portfolio-MAG-v2/images/IT.png' />
                    <div>
                        <p>{descripcionSeccion[0]}</p>
                        <p>{descripcionSeccion[1]}</p>
                    </div>
                </section>
                <section>
                    <img src='/Portfolio-MAG-v2/images/DEVyUX.png' />
                    <div>
                        <p>{descripcionSeccion[2]}</p>
                    </div>
                </section>
                <section>
                    <img src='/Portfolio-MAG-v2/images/agil-medodologia-2.png' />
                    <div>
                        <p>{descripcionSeccion[3]}</p>
                    </div>
                </section>



            </article>
        </div>
    )
}
