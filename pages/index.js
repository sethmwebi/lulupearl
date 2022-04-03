import { useEffect } from "react"
import Head from "next/head";
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import Header from "../components/Header";
import Featured from "../components/Featured";
import Layout from "../components/Layout"
import { setProducts as setFeaturedProducts } from "../redux/featuredSlice";
import { filterFeatured } from "../redux/featuredSlice"

const Category = ({category}) => {
  return (
    <div className="absolute flex items-center py-2 justify-center bg-gray-200 w-40 sm:w-30 md:w-40 top-[50%] left-[25%] z-9 cursor-pointer">{category}</div>
  )
}

export default function Home({ featuredProducts, bestSelling }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setFeaturedProducts({featuredProducts, bestSelling}))
    dispatch(filterFeatured({activeBtn: "all"}))
  }, [featuredProducts, bestSelling])

  return (
    <div>
      <Head>
        <title>Lulu Pearl</title>
        <link rel="icon" href="/lulupearl.png" />
      </Head>

      <header className="bg-gray-100">
        <div className="container">
          <Header />
        </div>
      </header>
      <section className="container my-5">
        <div className="flex flex-col sm:flex-row gap-x-6 gap-y-6 justify-between">
          <div className="bg-gray-100 flex items-center justify-center h-40 flex-1 relative">
            <img src="/categories/handbag.png" className="w-full h-[40vh] sm:h-40 object-cover" alt=""/>
            <Category key="handbags" category="handbags"/>
          </div>
          <div className="bg-gray-100 h-40 flex-1 relative">
            <img src="/categories/shoes.png" className="w-full h-[40vh] sm:h-40 md:h-full object-cover object-bottom" alt=""/>
            <Category key="shoes" category="shoes"/>
          </div>
          <div className="bg-gray-100 h-40 flex-1 relative">
            <img src="/categories/clothes.png" className="w-full h-[40vh] sm:h-40 md:h-full object-cover" alt=""/>
            <Category key="clothes" category="clothes"/>
          </div>
        </div>
      </section>
      <Featured />
    </div>
  );
}

Home.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export async function getStaticProps(context) {
  const [featuredProducts, bestSelling] = await Promise.all([
    axios("http://localhost:3002/products?status=featured&_limit=2").then(res => res.data),
    axios("http://localhost:3002/products?status=best-selling&_limit=2").then(res => res.data),
  ])

  return {
    props: {
      featuredProducts,
      bestSelling,
    }
  }
}
