import { useState } from 'react'
import Modal from '../../../../../../Modal/Modal'
import '../../TimeLine.scss'
import LogoExperiencia from '../LogoExperiencia/LogoExperiencia'

export default function ModalLineTime(
    {
        logo = 'logo',
        title = 'TITULO',
        subtitle = 'SUBTITULO',
        years = '20## - 20##',
        description = '',
        informacionExtra = [],

        desplegado = 'false'
    }
) {

    const [estadoMoral, setEstadoModal] = useState(false)


    return (
        <div className='container-ModalLineTime'>
            <div className='container-title-ML'>
                <h1>{title}</h1>
                <h2>{years}</h2>
            </div>

            <button
                className={desplegado ? 'button-modal-ML desplegado-LT' : 'button-modal-ML no-desplegado-LT'}
                onClick={() => setEstadoModal(true)}
            >
                LEER MAS
            </button>

            <Modal
                estado={estadoMoral}
                setEstado={setEstadoModal}
                titleModal={title}
            >
                <div className='counteiner-item-modal'>
                    <LogoExperiencia titulo={logo} width='300px' />
                    <h1>{title}</h1>
                    <h2>{years}</h2>
                    {informacionExtra.map((parrafo, i) => {
                        return <p key={`parrafo-${logo}-${i}`}>{parrafo}</p>
                    })}
                </div>

            </Modal>

        </div>
    )
}