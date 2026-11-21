
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { products, getProduct } from "../../data/products";
import ProductDetails from "./ProductDetails";

export const generateStaticParams = () => {
  return products.map((product) => ({
    id: product.id,
  }));
};

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

async function ProductContent({ params }: ProductPageProps) {
  const { id } = await params;

  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}

export default function ProductPage({
  params,
}: ProductPageProps) {
  return (
    <Suspense
      fallback={
        <main style={{ padding: "40px", textAlign: "center" }}>
          Loading product...
        </main>
      }
    >
      <ProductContent params={params} />
    </Suspense>
  );
}
