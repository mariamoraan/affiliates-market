import Head from 'next/head';
import { useEffect, useState } from 'react';
import { IProduct } from '../common/types';
import { Product } from '../components/Product';
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
  const CATEGORIES = [
    {id: "CLOTHES", name:"Ropa"},
    {id: "TECH", name:"Tecnología"},
  ]

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <div className={styles.container}>
      <Head>
        <title>The Good Dev</title>
        <meta name="description" content="Devs market" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {
          CATEGORIES.map((category) => (
            <div className={styles.category} key={category.id}>
            <h1 className={styles.categoryName}>{category.name}</h1>
            <div className={styles.products}>
            {
             products[category.id]  
             ? products[category.id]
              .map((product:IProduct) => 
                <Product
                  key={product.id}
                  product={product}
                />
              )
            : null
            }
            </div>
          </div>
          ))
        }
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
