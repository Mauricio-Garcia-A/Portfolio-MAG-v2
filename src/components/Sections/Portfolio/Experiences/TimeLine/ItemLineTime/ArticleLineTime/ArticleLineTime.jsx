import LogoExperiencia from '../LogoExperiencia/LogoExperiencia'
import '../../TimeLine.scss'

export default function ArticleLineTime(
    {
        logo = 'logo',
        title = 'TITULO',
        subtitle = 'SUBTITULO',
        years = '20## - 20##',
        description = '',

        desplegado = 'false'
    }
) {
    return (
        <div className='container-ArticleLineTime'>
            <header>
                <div className='container-icons-ALT'>
                    <LogoExperiencia titulo={logo} width='80px' />
                </div>
                <div className={desplegado ? 'container-text-ALT' : 'container-text-ALT container-text-desplegado'} >
                    <h4 className={desplegado ? 'desplegado-LT' : 'no-desplegado-LT'}>{subtitle}</h4>
                </div>
            </header>
            <main>
                <p className={desplegado ? 'desplegado-LT' : 'no-desplegado-LT'}>{description}</p>
            </main>

        </div>
    )
}
