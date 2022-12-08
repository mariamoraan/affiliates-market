import { ICategory, IProduct } from "../common/types";
import styles from '../styles/Category.module.css';
import { Carousel } from "./Carousel";
import { SmallProduct, SMALL_PRODUCT_CARD } from "./SmallProduct";

interface ICategoryElems {
    category: ICategory,
    products: IProduct[],
}

export const Category = ({category, products}: ICategoryElems) => {
    return(
        <div className={styles.category} key={category.id}>
            <h1 className={styles.categoryName}>{category.name}</h1>
            <Carousel 
            childrenNumber={products.length} 
            cardWidth={SMALL_PRODUCT_CARD.cardWidth} 
            gap={SMALL_PRODUCT_CARD.gap}
            >
            { products.map((product: IProduct) => (
                <SmallProduct key={product.id} product={product} />
              ))}
            </Carousel>
        </div>
    )
}