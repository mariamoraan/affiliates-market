// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { doc, getDoc } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IProduct } from '../../common/types';
import { db } from './client';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct>
) {
  const {id}: {id?:string} = req.query
  let docSnapshot  
  if(id) {
    const docRef = doc(db, "products", id);
    docSnapshot = await getDoc(docRef);
    res.status(200).json({id: docSnapshot.id, ...docSnapshot.data()})
  }  
}

