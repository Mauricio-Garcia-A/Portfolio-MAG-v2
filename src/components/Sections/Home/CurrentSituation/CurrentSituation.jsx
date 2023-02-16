import './CurrentSituation.scss'
import responseActualidad from '../../../../utils/SituacionActual.json'
import LogoDev from '../../Portfolio/Skills/logos/LogoDev'
import LogoUIX from '../../Portfolio/Skills/logos/LogoUIX'

export default function CurrentSituation() {

    const descripcionSeccion = responseActualidad.descripcionSeccion
    const ItemsSituacionActual = responseActualidad.ItemsSituacion

    return (
        <div className='conteiner-CurrentSituation'>
            <header >
                <h1> ACTUALIDAD PERSONAL Y PROFECIONAL</h1>
            </header>
            <div className='section-situations'>

                <div className='situation1'>
                    <section>
                        <LogoUIX width='200px' />
                        <div>
                            <p></p>
                            <p></p>
                            <button></button>
                        </div>
                    </section>
                    <img src={ItemsSituacionActual[0].imagen} />
                </div>

                <div className='situation2'>
                    <section>
                        <LogoDev width='200px' />
                        <div>
                            <p>{ItemsSituacionActual[1].descripcion}</p>
                            <p>
                            </p>
                            <button></button>
                        </div>
                    </section>
                    <img src={ItemsSituacionActual[1].imagen} />
                </div>

                <div className='situation3'>
                    <img src={ItemsSituacionActual[2].imagen} />
                    <section>
                        <h2></h2>
                        <div>
                            <p>.</p>
                            <p></p>
                            <button></button>
                        </div>
                    </section>
                </div>
            </div>
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
                    <img src='/Portfolio-MAG-v2/images/agil-medodologia.png' />
                    <div>
                        <p>{descripcionSeccion[3]}</p>
                    </div>
                </section>



            </article>
        </div>
    )
}
