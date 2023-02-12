import '../../TimeLine.scss'

export default function ModalLineTime(
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
        <div className='container-ModalLineTime'>
            <div className='container-title-ML'>
                <h1>{title}</h1>
                <h2>{years}</h2>   
            </div>
            
            <button className={desplegado ? 'desplegado-LT' : 'no-desplegado-LT'}>LEER MAS</button>
        </div>
    )
}