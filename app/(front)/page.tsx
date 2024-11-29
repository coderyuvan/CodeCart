'use client'
import data from "@/lib/data";
import Image from "next/image";
import ProductItem from "@/components/products/ProductItem";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
 

export default function Home() {
  const words = `Latest Products :`;
  return (
     <>
     <h2 className="text-2xl py-2"><TextGenerateEffect words={words}/></h2>
     <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 mb-4">
      
{
  data.product.map((product)=>(
    <ProductItem
    key={product.slug}
    product={product}
    />
  ))
}
     </div>
     </>
  );
}
