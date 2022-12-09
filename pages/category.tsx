import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CategoryId, IProduct } from "../common/types";
import { Product } from "../components/Product";
import { SmallProduct } from "../components/SmallProduct";
import styles from '../styles/CategoryPage.module.css';
import { getProductsByCategory } from "../utils/products";

const CategoryPage = () => {
    const router = useRouter();
    const data: {id: CategoryId, name: string} = router.query;
    const [products, setProducts] = useState<IProduct[]>([])

    const getProducts = async() => {
        const categoryProducts = await getProductsByCategory(data.id)
        setProducts(categoryProducts)

    }
    
    useEffect(() => {
        getProducts()
    }, [])

    return(
        <div>
            <h1>{data.name}</h1>
            <ul className={styles.products}>
                {
                    products.map((product, index) => (
                        <li key={product.id}  className={(index+1) % 3 == 0 ? styles.bigProduct : styles.smallProduct}>
                            { 
                            (index+1) % 3 == 0
                            ? <SmallProduct 
                            product={product} 
                            fullWidth={true}  
                            />
                            : <Product
                                product={product} 
                                fullWidth={true}
                              />
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CategoryPage