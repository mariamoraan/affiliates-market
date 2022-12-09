import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { IProduct } from "../common/types"
import { SmallProduct } from "../components/SmallProduct"
import styles from '../styles/Likes.module.css'
import { getProductById } from "../utils/products"

const Likes = () => {
    const likes = useSelector((state) => state.likes.likes)
    const [likedProducts, setLikedProducts] = useState<IProduct[]>([])
    const getLikedProducts = async() => {
        const newLikedProducts: IProduct[] = []
        for (var like of likes) {
            const product = await getProductById(like)
            if(product) {
                newLikedProducts.push(product)
            }   
        }
        setLikedProducts(newLikedProducts)
    }
    useEffect(() => {
        getLikedProducts()
    }, [likes])

    return (
        <div>
            <h1>Likes</h1>
            <div className={styles.productsContainer}>
            {
                likedProducts.map((product) => (
                    <SmallProduct key={product.id} product={product} hasAnimation={false} fullWidth={true} />
                ))
            }
            </div>
        </div>
    )
}

export default Likes

