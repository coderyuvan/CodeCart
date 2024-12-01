
import data from "@/lib/data";
import ProductItem from "@/components/products/ProductItem";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
 
import productService from "@/lib/services/ProductService";
export default async function Home() {
  const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest()
  const words = `Discover Innovation: Shop the Latest Products Now at CodeCart!`;
  return (
     <>
      
     <h2 className="text-2xl py-2"><TextGenerateEffect words={words}/></h2>
     <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 mb-4">
      
{
  latestProducts.map((product)=>(
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
