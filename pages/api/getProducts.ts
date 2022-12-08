// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getDocs, query, where } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IProduct } from '../../common/types';
import { productsRef, QUERY_PRODUCTS } from './client';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
  const {category} = req.query
  const products: IProduct[] = []
  let docsSnapshot 
  if(category) {
    docsSnapshot = await getDocs(query(productsRef, where("category", "==", category)))
  } else {
    docsSnapshot = await getDocs(QUERY_PRODUCTS)
  }
  docsSnapshot.forEach(doc => {
    products.push({id: doc.id, ...doc.data()})
  })
  res.status(200).json(products)
}

