import Head from 'next/head';
import { useEffect, useState } from 'react';
import { PRODUCTS_MOCK } from '../common/mocks';
import { ICategory, IProduct } from '../common/types';
import { Category } from '../components/Category';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [products, setProducts] = useState<{[key: string]: IProduct[]}>({})
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const getProducts = () => { 
    const newProducts: {[key: string]: IProduct[]}  = {}
    CATEGORIES.forEach((category) => {
      fetch(`/api/getProducts?category=${category.id}`)
      .then((res) => res.json())
      .then(async (data: IProduct[]) => {
        newProducts[category.id] = data
       if(Object.keys(newProducts).length === CATEGORIES.length) {
        setProducts(newProducts)
       }
      })
    })
  }
  const CATEGORIES: ICategory[] = [
    {id: "CLOTHES", name:"Ropa"},
    {id: "TECH", name:"Tecnología"},
  ]

  useEffect(() => {
    getProducts()
  }, [])
  

  const product: IProduct = {
    id: "string",
    category: CATEGORIES[0].id,
    name: "string",
    color: "string",
    link: "string",
    image: "data:image/jpeg;base64,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",
    description: "string",
    price: "string",
    savedTimes: 4,
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>The Good Dev</title>
        <meta name="description" content="Devs market" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.mainTitle}>Discover our items</h1>
        {
          CATEGORIES.map((category) => (
            <Category 
            key={category.id} 
            category={category} 
            products={products[category.id] || PRODUCTS_MOCK[category.id]}
            />
          ))
        }
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
