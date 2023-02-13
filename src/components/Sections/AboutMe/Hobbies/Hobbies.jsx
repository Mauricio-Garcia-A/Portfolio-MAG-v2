import './Hobbies.scss'
import responseHobbies from '../../../../utils/Hobbiess.json'
import ItemHobbie from './ItemHobbie'

export default function Hobbies() {
    let hobbies = responseHobbies

    return (
        <div className='container-Hobbies'>
            <h2> Mis Hobbies</h2>
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
                    />
                )
            })
            }
        </div>
    )
}
