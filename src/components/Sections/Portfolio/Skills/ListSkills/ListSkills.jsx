import IconoDev from '../../../../Iconos/IconoDev'
import './ListSkills.scss'

export default function ListSkills({ SkillsDev }) {
    return (
        <div className='container-ListSkills'>
            <section className='logos-skills '>
                <h2>Skills</h2>
                {SkillsDev.map((skill, i) => {
                    return (
                        <article key={`itemSkillDev${i}`}>

                            <h3>{skill.titulo}</h3>
                            <div >
                                {skill.items.map((item, e) => {
                                    return (
                                        <div className='container-logo' key={`iconDev-${e}`}>
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
