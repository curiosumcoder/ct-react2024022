import ProductData from "@/app/_data/ProductData";
import { NextRequest } from "next/server";

// POST http://localhost:3000/api/product
export async function POST(request: NextRequest)
{
    const product = await request.json();
    const pD = new ProductData();

    const result = await pD.create(product);

    if (result)
    {
        return Response.json(result);
    }
    else
    {
        return new Response('', {status: 400});
    }

    // return new Response("POST READY!", {status: 200});
}

// PUT http://localhost:3000/api/product
export async function PUT(request: NextRequest)
{
    const product = await request.json();
    const pD = new ProductData();

    const affected = await pD.update(product);

    if (affected > 0)
    {
      return new Response("", { status: 200 });
    }
    else  
    {
      return new Response("", { status: 404 });
    }
    
    // return new Response("PUT READY!", {status: 200});
}