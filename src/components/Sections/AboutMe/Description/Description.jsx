import './Description.scss'
import responseActualidad from '../../../../utils/SituacionActual.json'

export default function Description() {

    const ItemSituacionActualPersonal = responseActualidad.ItemsSituacion[2]

    return (
        <div className='container-Description'>
            <div>
                <h1>Una breve description de mi</h1>
                <p>{ItemSituacionActualPersonal.descripcion}</p>
            </div>
            <img src='/Portfolio-MAG-v2/images/muñeco.png' alt='imagen-muñeco' />
        </div>
    )
}
