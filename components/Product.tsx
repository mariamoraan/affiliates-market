import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useState } from "react";
import { IProduct } from "../common/types";
import styles from '../styles/Product.module.css';

export const Product = ({product}:{product:IProduct}) => {
    const [isFavorite, setIsFavorite] = useState<Boolean>(false)
    return (
        <div className={styles.container}>
            <img className={styles.image} src={product.image} />
            <div className={styles.info}>
                <h2 className={styles.name}>{product.name}</h2>
                <p className={styles.price}>{product.price}</p>
                <div 
                className={styles.fav}
                
                >
                    <button
                    className={styles.favButton}
                    onClick={() => setIsFavorite(!isFavorite)}
                    >
                        {isFavorite ? <FavoriteIcon />  : <FavoriteBorderIcon />}
                    </button>
                </div>
            </div>
        </div>
    )
}