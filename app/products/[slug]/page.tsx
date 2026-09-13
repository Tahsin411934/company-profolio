import type { Metadata } from "next";
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

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = saasProducts[slug];

  if (!product) {
    return {};
  }

  const image = product.heroImage ?? "/banner.png";
  const url = `/products/${product.slug}`;

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: product.metaTitle,
      description: product.metaDescription,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: product.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.metaTitle,
      description: product.metaDescription,
      images: [image],
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
