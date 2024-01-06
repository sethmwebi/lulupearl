import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PlusSmIcon, MinusSmIcon, XCircleIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { increase, remove, decrease } from "../redux/cartSlice";

import Layout from "../components/Layout";

const Cart = () => {
  const { items, totalAmount } = useSelector((state) => ({
    ...state.cart
  }));
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="container flex flex-col md:flex-row mt-5 mb-8 gap-x-6">
      <Head>
        <title>Lulu Pearl | cart</title>
        <link rel="icon" href="/lulupearl.png" />
      </Head>
      <div className={`w-full ${items.length !== 0 ? "md:w-[75%]" : "w-full"}`}>
        <h4 className="uppercase font-bold text-xl text-center md:text-left tracking-widest">
          cart
        </h4>
        <hr />
        <div className="mt-1 space-y-4">
          {items.map((product) => (
            <div key={product.id} className="bg-white shadow flex w-full">
              <div className="flex-1">
                <Image
                  src={product.img}
                  height="80"
                  width="100"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col space-y flex-1 justify-center">
                <p className="text-gray-800 font-thin">{product.title}</p>
                <p className="text-red-400 font-bold">ksh {product.price}</p>
              </div>
              <div className="flex items-center space-x-2 mr-4">
                <MinusSmIcon
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => dispatch(decrease(product.id))}
                />
                <span>{product.amount}</span>
                <PlusSmIcon
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => dispatch(increase(product.id))}
                />
                <XCircleIcon
                  className="pl-4 text-red-400 h-10 w-10 cursor-pointer"
                  onClick={() => dispatch(remove(product.id))}
                />
              </div>
            </div>
          ))}
          <div>
            {items.length !== 0 ? (
              <div className="flex justify-center md:justify-end my-4">
                <Link href="/store">
                  <button className="bg-black/80 text-white/70 px-3 py-2 rounded-full">
                    Add More items
                  </button>
                </Link>
              </div>
            ) : (
              <p>Cart is empty</p>
            )}
          </div>
        </div>
      </div>
      {!!items.length && (
        <div className="w-full md:w-[25%]">
          <h4 className="uppercase font-bold text-xl text-center md:text-left tracking-widest">
            cart total
          </h4>
          <hr />
          <div className="mt-2 w-[75%] md:w-full mx-auto">
            {items.map(({ id, title, price, amount }) => (
              <div className="flex" key={id}>
                <p className="text-sm flex-[2] text-gray-400">{title}</p>
                <span className="text-gray-800 flex justify-end">
                  ${price * amount}
                </span>
              </div>
            ))}
            <div className="flex justify-between mt-4">
              <p className="text-normal flex-[2]">Sub Total</p>
              <span className="text-black font-bold flex-[1] flex justify-end">
                ${totalAmount}
              </span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end mt-4 w-[75%] md:w-full mx-auto">
            <button
              onClick={() => router.push("/checkout")}
              className="px-2 py-3 bg-black/90 text-white/70"
            >
              proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

Cart.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
