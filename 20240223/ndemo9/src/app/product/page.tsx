import React from 'react'
import ProductData from '../_data/ProductData';
import Link from 'next/link';

type piParams = {params: any, searchParams: {filter: string}}

export default async function ProductIndex({searchParams}:piParams) {
    //const {filter} = searchProps;
    console.log(searchParams);
    const {filter} = searchParams
    console.log(filter);

    const pD = new ProductData();
    const products = await pD.search(filter);

  return (
    <>
        <h1>Product</h1>
        <Link href={'/product/create'}>Create</Link>
        <br />
        <form>
            <input type="search" 
            name="filter"
            defaultValue={filter}
            placeholder='Type here ...'/>
            <button type='submit'>Search</button>
        </form>
        <hr />
        {products && products.map(p => 
        <li key={p.id}>
            {p.id}, {p.productName}, {p.unitPrice}, {p.quantityPerUnit},
            <Link href={`/product/details/${p.id}`}>Details</Link>,
            <Link href={`/product/edit/${p.id}`}>Edit</Link>
        </li>)}
    </>
  )
}
