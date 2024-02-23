// GET /api/product/search/queso

import ProductData from "@/app/_data/ProductData";
import { NextRequest, NextResponse } from "next/server";

type getParams = {params: {filter: string}};

export async function GET(request: NextRequest, {params}: getParams)
{
    console.log(request.nextUrl.searchParams.get('p'))

    const {filter} = params;

    if (filter) {
        const pD = new ProductData();
        const data = await pD.search(filter);

        if (data.length > 0) {
            return Response.json(data)
        }
        else
        {
            return new NextResponse('', {status: 404})
        }    
    }
    else
    {
        return new NextResponse('', {status: 200});
    }
}