import { CategoryId, IProduct } from "../common/types"

export const getProductById = async(id: string) : Promise<IProduct> => {
    const res = await fetch(`/api/getProduct?id=${id}`)
    const data = await res.json()
    return data
}

export const getProductsByCategory = async(category: CategoryId): Promise<IProduct[]>  => {
    const res = await fetch(`/api/getProducts?category=${category}`)
    const data = await res.json()
    return data
}