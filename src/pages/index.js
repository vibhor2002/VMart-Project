// Deployed on Vercel https://v-mart-project.vercel.app/

import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>VMart</title>
      </Head>

      
      {/* Header */}
      <Header />

      <main className='max-w-screen-xl mx-auto'>
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed products={products}/>
      </main>

    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products')
  .then(res=>res.json());

  return {
      props : {
          products
      },
  };
}