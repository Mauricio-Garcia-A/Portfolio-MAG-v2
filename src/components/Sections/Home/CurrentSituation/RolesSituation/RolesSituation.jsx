import LogoDev from '../../../Portfolio/Skills/logos/LogoDev';
import LogoUIX from '../../../Portfolio/Skills/logos/LogoUIX';
import LogoPER from '../logos/LogoPER';
import { useNavigate } from 'react-router-dom'
import './RolesSituation.scss'

export default function RolesSituation({ ItemsSituacionActual }) {
    
    const navigate = useNavigate()

    const itemTitleIcon = (titulo) => {
        switch (titulo) {
            case "desing-uix":
                return (
                    <LogoUIX height='80px' />
                )
                break;
            case "developer":
                return (
                    <LogoDev height='80px' />
                )
                break;
            default:
                return (
                    <LogoPER height='80px' />
                )
        }
    }

    const handlerClick = (route) => {
      navigate(route)
    }

    return (
        <div className='container-RolesSituation'>
            {ItemsSituacionActual.map(itemSituation => {
                return (
                    <section key={itemSituation.id} >

                        <article>
                            <div className='container-header-RS'>
                                <div>
                                    {itemTitleIcon(itemSituation.id)}
                                </div>
                            </div >
                            <div className='container-info-RS'>
                                {itemSituation.descripcion.map((parrafo, i) => {
                                    return (
                                        <p key={`parrafo-${itemSituation.id}-${i}`}>{parrafo}</p>
                                    )
                                })}
                            </div>
                            <div className='container-footer-RS'>
                                <p>{itemSituation.textPreboton}</p>
                                <button className='button-RolesSituation' onClick={()=>handlerClick(itemSituation.url)}>{itemSituation.textBoton}</button>
                                
                            </div>
                        </article>
                        <img src={itemSituation.imagen} />
                    </section>
                )
            })
            }
        </div>
    )
}
