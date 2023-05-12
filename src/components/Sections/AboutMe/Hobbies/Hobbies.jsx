import './Hobbies.scss'
import responseHobbies from '../../../../utils/Hobbiess.json'
import ItemHobbie from './ItemHobbie'

export default function Hobbies() {
    let hobbies = responseHobbies

    return (
        <div className='container-Hobbies'>
            <header>
                <h2>MIS HOBBIES</h2>
            </header>
            <main>
                <p className='text-Hobbies'>
                    No creo que pueda haber una breve descripción sobre mi persona, que me defina tal cual como soy el día de hoy, y capte mi esencia. Es por ello que considero que una de las mejores formas de conocer a una persona es a través de sus intereses y aficiones. Aquí les voy a describir algunas de las numerosas actividades y hobbies que suelo hacer y disfrutar en mi tiempo libre.
                </p>

                {hobbies.map((hobbie, i) => {
                    let posicionItem = 'derecha'
                    if ((i % 2) === 0) {
                        posicionItem = 'izquierda'
                    }
                    return (
                        <ItemHobbie
                            key={`item-hobbie-${i}`}
                            titulo={hobbie.titulo}
                            descripcion={hobbie.descripcion}
                            imagen={hobbie.imagen}
                            posicionItem={posicionItem}
                            id={`hobbie-${i}`}
                        />
                    )
                })
                }
            </main>

        </div>
    )
}
