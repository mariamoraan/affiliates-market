import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowForward from "@material-ui/icons/ArrowForward";
import { ReactNode, useState } from "react";
import styles from '../styles/Carousel.module.css';

interface ICarousel {
    cardWidth: string,
    gap: string,
    childrenNumber: number,
    children: ReactNode
}

export const Carousel = ({cardWidth, gap, childrenNumber, children}: ICarousel) => {
    const [actualElem, setActualElem] = useState<number>(0)
    const swipeLeft = () => {
        if(actualElem > 0) {
            setActualElem((prev) => prev-1)
        }
    }
    const swipeRight = () => {
        if(actualElem + 1 < childrenNumber) {
            setActualElem((prev) => prev+1)
        }
    }
    return(
        <div className={styles.carousel}>
            <div 
            className={styles.carouselContainer}
            style={{
                gap: gap,
                transform: `translateX(calc(${actualElem}*-1*(${cardWidth} + ${gap})))`
            }}
            >
                
                    {children}
                
            </div>
            <div className={styles.buttonsWrapper}>
                <button className={actualElem > 0 ? styles.button : styles.buttonDisabled} onClick={swipeLeft}><ArrowBack /></button> 
                <button className={actualElem + 1 < childrenNumber ? styles.button : styles.buttonDisabled} onClick={swipeRight}><ArrowForward /></button>
            </div>
        </div>
    )

}