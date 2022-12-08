enum CategoryId  {
    CLOTHES,
    TECH
}

export interface IProduct {
    id: string,
    category: CategoryId,
    name: string
    color: string
    link: string
    image: string
    description: string
    price: string
    savedTimes: number
}

export interface ICategory {
    id: CategoryId,
    name: string
}