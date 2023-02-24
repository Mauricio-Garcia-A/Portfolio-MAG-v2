import './Hobbies.scss'

export default function ItemHobbie({
    titulo = 'titulo',
    descripcion = 'descripcion',
    imagen = 'img',
    posicionItem = 'derecha'
}) {
    return (
        <section className={`${posicionItem}`}>
            <div>
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
            </div>
            <img src={`/Portfolio-MAG-v2/images/${imagen}`} alt='imagen-hobbie' />
        </section>
    )
}
