import ProductData from "@/app/_data/ProductData";
import IProduct from "@/app/_models/IProduct";
import { redirect } from "next/navigation";
import React from "react";

type pdParams = { params: { id: string } };

export default async function ProductDetails({ params }: pdParams) {
  const { id } = params;
  console.log(id);

  const pD = new ProductData();
  const p = await pD.get(id);
  console.log(p);

  async function productEdit(fd: FormData) {
    "use server";
    console.log("Creating product ...");

    const id = Number(fd.get("id")?.valueOf());
    const productName = fd.get("productName")?.valueOf();
    const quantityPerUnit = fd.get("quantityPerUnit")?.valueOf();
    const unitPrice = Number(fd.get("unitPrice")?.valueOf());
    const quantity = Number(fd.get("quantity")?.valueOf());

    const newP = {
      id,
      productName,
      quantityPerUnit,
      unitPrice,
      quantity,
    } as IProduct;
    console.log(newP);

    const pD = new ProductData();
    await pD.update(newP);

    redirect("/product");
  }

  return (
    <>
      <h1>Product Edit</h1>

      <form action={productEdit}>
        <input type="hidden" name="id" value={id} />
        <input
          type="text"
          name="productName"
          defaultValue={p.productName}
          placeholder="productName"
        />
        <br />
        <input
          type="text"
          name="quantityPerUnit"
          defaultValue={p.quantityPerUnit}
          placeholder="quantityPerUnit"
        />
        <br />
        <input
          type="number"
          name="unitPrice"
          defaultValue={p.unitPrice}
          placeholder="unitPrice"
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
