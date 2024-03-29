import { useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/productSlice";
import ProductList from "../components/ProductList";
import Layout from "../components/Layout";
import { usePagination } from "../utils/hooks";

const Store = ({ products, featuredProducts, bestSelling }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts({ products }));
  }, [products]);

  const {
    reachedEnd,
    error,
    paginatedData: paginatedProducts,
    size,
    setSize,
    mutate
  } = usePagination("/products", {
    initialData: products.length === 0 ? null : products
  });

  {
    error && <p>something is wrong</p>;
  }

  return (
    <div>
      <Head>
        <title>Lulu Pearl | store</title>
        <link rel="icon" href="/lulupearl.png" />
      </Head>
      <ProductList />
    </div>
  );
};

export default Store;

Store.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
  let products;
  try {
    const { data } = await axios(
      "https://json-server-seth.onrender.com/products?_page=0&_limit=8"
    );
    products = data;
  } catch (err) {
    products = [];
  }

  return {
    props: {
      products
    }
  };
}
