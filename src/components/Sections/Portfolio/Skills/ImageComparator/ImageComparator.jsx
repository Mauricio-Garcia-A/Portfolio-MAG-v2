import { useEffect, useId } from 'react';
import './ImageComparator.scss'

export default function ImageComparator() {
    const sliderId = useId();
    const imageId = useId();

    //const slider = document.querySelector(".slider-habilidades")
    //const img2 = document.querySelector(".conteiner-img2")

    useEffect(() => {

        const handleInput = () => {
            let sliderValue = slider.value
            img2.style.clipPath = `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`
        }

        const slider = document.getElementById(sliderId)
        const img2 = document.getElementById(imageId)

        slider.addEventListener("input", handleInput)

        return () => {
            slider.removeEventListener("input", handleInput);
        };

    }, [])


    return (
        <div className='container-ImageComparator'>
            <div className='wrapper-habilidades'>
                <article className='conteiner-img1'>
                    <img src='/Portfolio-MAG-v2/images/fotoHabilidades2.png' alt='image-habilidad-dev' />

                </article>
                <article className='conteiner-img2' id={imageId}>
                    <img src='/Portfolio-MAG-v2/images/fotoHabilidades1.png' alt='image-habilidad-uix' />

                </article>
                <input type='range' min='0' max='100' id={sliderId} className='slider-habilidades' />
            </div>
        </div>

    )
}
