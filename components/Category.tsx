import ArrowIcon from "@material-ui/icons/ArrowForwardIos";
import Link from "next/link";
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
            <div className={styles.head}>
                <h2 className={styles.categoryName}>{category.name}</h2>
                <Link  
                href={{
                    pathname: '/category',
                    query: {id: category.id, name: category.name}
                }}
                className={styles.showMore}
                >
                    <p>Ver Más</p>
                    <ArrowIcon fontSize="inherit"  />
                </Link>
            </div>
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