import './Modal.scss'



const IconoCerrar = () => {
    return (
        <svg width="100%" height="100%" fill="currentColor" className='bi bi-x' viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
    )
}


export default function Modal({ children, estado, setEstado, titleModal='Titulo del modal' }) {
    return (
        <>
            {estado && <div className='fondoModal'>
                <div className='container-ventana-Modal'>
                    <header>
                        <div>
                            <span > {titleModal} </span>
                        </div>
                        <button className='boton-cerrar-modal' onClick={() => setEstado(false)}>
                            <IconoCerrar />
                        </button>
                    </header>
                    <main >
                        {children}
                    </main>

                </div>
            </div>

            }

        </>
    )
}

