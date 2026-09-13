import { notFound } from "next/navigation";
import { FloatingWhatsApp } from "../../../components/FloatingWhatsApp";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { PageLoader } from "../../../components/PageLoader";
import { SaasProductDetails } from "../../../components/SaasProductDetails";
import { saasProductList, saasProducts } from "../../../lib/saas-products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return saasProductList.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = saasProducts[slug];

  if (!product) {
    return {};
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = saasProducts[slug];

  if (!product) {
    notFound();
  }

  return (
    <>
      <PageLoader />
      <Navbar />
      <SaasProductDetails product={product} />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
