import ProductData from "@/app/_data/ProductData";
import { IProductSchema } from "@/app/_models/IProduct";
import { NextRequest } from "next/server";

// POST http://localhost:3000/api/product
export async function POST(request: NextRequest) {
  const product = await request.json();
  const pD = new ProductData();

  try {
    // Data validation
    const parse = IProductSchema.safeParse(product);

    if (parse.success) {
      // Create the product
      const result = await pD.create(product);
      return Response.json(result);
    } else {
        // Fill validation issues evidence
      let validation: Array<{ id: string; msg: string }> = [];
      parse.error.errors.forEach((errorDetail, index) => {
        validation.push({
          id: errorDetail.path.join("."),
          msg: errorDetail.message,
        });
      });

      return Response.json(validation, { status: 400 });
    }

  } catch (error) {
    return new Response("", { status: 500 });
  }
  // return new Response("POST READY!", {status: 200});
}

// PUT http://localhost:3000/api/product
export async function PUT(request: NextRequest) {
  const product = await request.json();
  const pD = new ProductData();

  const affected = await pD.update(product);

  if (affected > 0) {
    return new Response("", { status: 200 });
  } else {
    return new Response("", { status: 404 });
  }

  // return new Response("PUT READY!", {status: 200});
}
