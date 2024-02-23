import ProductData from '@/app/_data/ProductData';
import IProduct from '@/app/_models/IProduct';
import { redirect } from 'next/navigation';
import React from 'react'

export default function ProductCreate() {

    async function productCreate(fd: FormData)
    {
        'use server';
        console.log('Creating product ...')

        const productName = fd.get('productName');
        const quantityPerUnit = fd.get('quantityPerUnit');
        const unitPrice = Number(fd.get('unitPrice'));
        const quantity = Number(fd.get('quantity'));

        const newP = { productName, quantityPerUnit, unitPrice, quantity  } as IProduct;
        console.log(newP);

        const p = Object.fromEntries(fd.entries());
        console.log(p);

        const pD = new ProductData();
        await pD.create(newP);

        redirect('/product');
    }

  return (
    <>
        <h1>Product Create</h1>
        <form action={productCreate}>
            <input type="text" name="productName" placeholder="productName" />
            <br />
            <input type="text" name="quantityPerUnit" placeholder="quantityPerUnit" />
            <br />
            <input type="number" name="unitPrice" placeholder="unitPrice" />
            <br />
            <input type="number" name="quantity" placeholder="quantity" />
            <br />
            <button type='submit'>Save</button>
        </form>
    </>
  )
}
