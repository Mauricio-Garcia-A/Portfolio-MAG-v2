import './Description.scss'
import responseActualidad from '../../../../utils/SituacionActual.json'

export default function Description() {

    const ItemSituacionActualPersonal = responseActualidad.ItemsSituacion[2]

    return (
        <div className='container-Description'>
            <div>
                <h1>UNA BREVE DESCRIPCIÓN DE MI</h1>
                <p>{ItemSituacionActualPersonal.descripcion}</p>
            </div>
            <img src='/Portfolio-MAG-v2/images/webp/hobbys/muñeco.webp' alt='imagen-muñeco' />
        </div>
    )
}
