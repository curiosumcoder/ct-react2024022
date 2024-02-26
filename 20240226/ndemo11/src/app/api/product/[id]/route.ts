import ProductData from "@/app/_data/ProductData";
import { NextRequest } from "next/server";

type productParams = { params: { id: number } };

// GET http://localhost:3000/api/product/1
export async function GET(request: NextRequest, { params }: productParams) {
  const { id } = params;

  const pD = new ProductData();
  const product = await pD.get(id);

  if (product) {
    return Response.json(product);
  } else {
    return new Response("", { status: 404 });
  }

  //return new Response(`GET ${id} READY!`, {status: 200});
}

// DELETE http://localhost:3000/api/product/1
export async function DELETE(request: NextRequest, { params }: productParams) {
  const { id } = params;

  const pD = new ProductData();
  const affected = await pD.delete(id);

  if (affected > 0)
  {
    return new Response("", { status: 200 });
  }
  else  
  {
    return new Response("", { status: 404 });
  }

  //return new Response(`DELETE ${id} READY!`, {status: 200});
}
