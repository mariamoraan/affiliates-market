import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useState } from "react";
import { IProduct } from "../common/types";
import styles from '../styles/SmallProduct.module.css';

export const SMALL_PRODUCT_CARD = {gap: "24px", cardWidth: "274px"}

export const SmallProduct = ({product}:{product:IProduct}) => {
    const [isFavorite, setIsFavorite] = useState<Boolean>(false)
    return (
        <div className={styles.container}>
            <img 
            className={styles.image} 
            src={product.image} 
            style={{
                background: product.color,
                border: `1px solid ${product.color}`,
            }} 
            />
            <div className={styles.info}>
                <div>
                    <h3 className={styles.name}>{product.name}</h3>
                    <p className={styles.price}>{product.price}</p>
                </div>
                <div 
                className={styles.fav}
                
                >
                    <button
                    className={styles.favButton}
                    onClick={() => setIsFavorite(!isFavorite)}
                    >
                        {
                            isFavorite ? 
                            <FavoriteIcon className={styles.favIcon} />  : 
                            <FavoriteBorderIcon className={styles.favIcon} />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}