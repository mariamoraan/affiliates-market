import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from "../common/types";
import { addLike, removeLike } from "../state/slices/likesSlice";
import styles from '../styles/SmallProduct.module.css';

export const SMALL_PRODUCT_CARD = {gap: "24px", cardWidth: "274px"}

export const SmallProduct = ({product, hasAnimation=true, fullWidth=false}:{product:IProduct, hasAnimation?:boolean, fullWidth?:boolean}) => {
    const dispatch = useDispatch()
    const likes = useSelector((state) => state.likes.likes)
    const [isAnimated, setIsAnimated] = useState(false)
    const [isFavorite, setIsFavorite] = useState<Boolean>(likes.filter((id: string) => id == product.id).length > 0 ? true : false)

    const handleFavorite = () => {
        if(!isFavorite) {
            dispatch(addLike(product.id))
        } else {
            dispatch(removeLike(product.id))
        }
        setIsFavorite((prev) => !prev)  
        setIsAnimated(hasAnimation) 
    }

    return (
        <div className={styles.container} style={{width: fullWidth ? "100%" : SMALL_PRODUCT_CARD.cardWidth}}>
            <img 
            className={styles.image} 
            src={product.image} 
            style={{
                background: product.color,
                border: `1px solid ${product.color}`,
            }} 
            />
            <div className={fullWidth ? styles.infoLarge : styles.info}>
                <div>
                    <h3 className={styles.name}>{product.name}</h3>
                    <p className={styles.price}>{product.price}</p>
                </div>
                <div 
                className={styles.fav}
                
                >
                    <button
                    className={styles.favButton}
                    onClick={handleFavorite}
                    >
                        {
                            isFavorite ? 
                            <FavoriteIcon className={isAnimated ? styles.favIcon : ''} />  : 
                            <FavoriteBorderIcon className={isAnimated ? styles.favIcon : ''} />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}