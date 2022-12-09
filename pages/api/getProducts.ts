// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { doc, getDocs, query, where } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IProduct } from '../../common/types';
import { db, productsRef, QUERY_PRODUCTS } from './client';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
  const {category, id}: {category?: string, id?:string} = req.query
  const products: IProduct[] = []
  let docsSnapshot 
  if(category) {
    docsSnapshot = await getDocs(query(productsRef, where("category", "==", category)))
  } 
  else if(id) {
    docsSnapshot = await doc(db, "products", id);
  }
  else {
    docsSnapshot = await getDocs(QUERY_PRODUCTS)
    docsSnapshot = [docsSnapshot]
  }
  docsSnapshot.forEach(doc => {
    products.push({id: doc.id, ...doc.data()})
  })
  res.status(200).json(products)
}

