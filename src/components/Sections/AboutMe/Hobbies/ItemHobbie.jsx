import './Hobbies.scss'

export default function ItemHobbie({
    titulo = 'titulo',
    descripcion = 'descripcion',
    imagen = 'img',
    posicionItem = 'derecha',
    id='hobbie-00'
}) {
    return (
        <section className={`${posicionItem}`}>
            <div>
                <h2>{titulo}</h2>

                {descripcion.map((parrafo,i)=>{
                    return <p key={`${id}-p${i}`} >{parrafo}</p>
                })}
            </div>
            <img src={`/Portfolio-MAG-v2/images/${imagen}`} alt='imagen-hobbie' />
        </section>
    )
}
