import { useId, useState } from 'react';
import './DialogModal.scss'

export default function DialogModal() {
    const idModal = useId();
    const Modal = document.getElementById(idModal)
    // const [open, setOpen] = useState(false)

    const handlerClick = (open) => {
        open ? Modal.showModal() : Modal.close();
    }
    const IconoCerrar = () => {
        return (
            <svg width="40px" height="40px" fill="black" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
        )
    }

    return (
        <div className='container-DialogModal'>
            <button className='button-DM' id='login-dialog-open' onClick={() => handlerClick(true)}>leer mas</button>
            <dialog id={idModal} className='container-modal' >
                <button aria-label='Cerrar' id='lodin-diagol-close' onClick={() => handlerClick(false)}>
                    a
                </button>
                Hola mundo, soy un modal
            </dialog>
        </div>
    )
}
