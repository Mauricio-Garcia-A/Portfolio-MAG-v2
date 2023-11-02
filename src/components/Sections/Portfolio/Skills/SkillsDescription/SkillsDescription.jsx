import IconDev from '../logos/IconDEV'
import IconUIX from '../logos/IconUIX'
import LogoDev from '../logos/LogoDev'
import LogoUIX from '../logos/LogoUIX'
import './SkillsDescription.scss'

export default function SkillsDescription({ Actividades1, Actividades2 }) {


    return (
        <div>
            <section className='actividades-Skills'>
                <article>
                    <img src='/Portfolio-MAG-v2/images/webp/imagen-habilidades-uix.webp' alt='image-uix-skills' />
                </article>
                <article>
                    <img src='/Portfolio-MAG-v2/images/webp/imagen-habilidades-dev.webp' alt='image-dev-skills' />
                </article>
                <article>
                    <div className='container-text-SD'>
                        < div className="header-actividad-skills">
                            <LogoUIX height='70px' />
                        </div>
                        <h2>Habilidades como Design UI/UX</h2>
                        <hr />
                        <ul  style={{ listStyle:'none' }}>
                            {Actividades2.map((actividad, i) => {
                                return (
                                    <li key={`actividad-uix-${i}`}>
                                        <div>
                                            <IconUIX />
                                        </div>
                                        <p >{actividad}</p>
                                    </li>
                                )
                            })}
                        </ul>

                    </div>
                </article>
                <article>
                    <div className='container-text-SD'>
                        <div className="header-actividad-skills">
                            <LogoDev height='70px' />
                        </div>
                        <h2>Habilidades como Developer WEB</h2>
                        <hr />
                        <ul style={{ listStyle:'none' }} >
                            {Actividades1.map((actividad, i) => {
                                return (
                                    <li key={`actividad-dev-${i}`} >
                                        <IconDev />
                                        < p > {actividad}</p>
                                    </li>
                                )
                            })} 
                        </ul>
                        
                    </div>
                </article>
            </section>
        </div >
    )
}
