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
                    <img src='/images/imagen-habilidades-uix.png' alt='image-uix-skills' />
                    <div>
                        < div className="header-actividad-skills">
                            <LogoUIX height='100px' />
                        </div>
                        <h2>Habilidades como Design UI/UX</h2>
                        {Actividades2.map((actividad, i) => {
                            return (
                                <span key={`actividad-uix-${i}`}>
                                    <IconUIX />
                                    <p >{actividad}</p>
                                </span>
                            )
                        })}
                    </div>

                </article>
                <article>
                    <div>
                        <div className="header-actividad-skills">
                            <LogoDev height='100px' />
                        </div>
                        <h2>Habilidades como Developer WEB</h2>
                        {Actividades1.map((actividad, i) => {
                            return (
                                <span >
                                    <IconDev />
                                    < p key={`actividad-dev-${i}`}> {actividad}</p>
                                </span>


                            )
                        })}
                    </div>
                    <img src='/images/imagen-habilidades-dev.png' alt='image-dev-skills' />
                </article>
            </section>
        </div >
    )
}
