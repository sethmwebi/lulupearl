import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PlusSmIcon, MinusSmIcon, XCircleIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";

const Checkout = () => {
	const {
		items: products,
		totalAmount,
	} = useSelector((state) => ({ ...state.cart }));
	return (
		<div className="container flex flex-col md:flex-row mt-5 mb-8 gap-x-6">
			<Head>
				<title>Lulu Pearl | checkout</title>
				<link rel="icon" href="/lulupearl.png" />
			</Head>
			<div
				className={`w-full ${products.length !== 0 ? "md:w-[75%]" : "w-full"}`}
			>
				<h4 className="uppercase font-bold text-xl text-center md:text-left tracking-widest">
					checkout
				</h4>
				<hr />
				<div className="mt-1 space-y-4">
					{products.map((product) => (
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
							<div className="flex justify-center space-x-2 flex-col flex-0 mr-4">
								<h4 className="text-gray-500">Quantity</h4>
								<span className="ml-2">{product.amount}</span>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="w-full md:w-[25%]">
				<h4 className="uppercase font-bold text-xl text-center md:text-left tracking-widest">
					order summary
				</h4>
				<hr />
				<div className="space-y-2 mt-8 w-[75%] md:w-full mx-auto">
					<div className="flex justify-between">
						<p className="text-sm">Sub Total</p>
						<span className="text-black font-semibold">${totalAmount}</span>
					</div>
					<div className="flex flex-row w-full">
						<input
							type="text"
							className="w-full outline-none px-2 py-3 border border-gray-100 placeholder:text-xs placeholder:font-thin placeholder:text-gray-900 text-gray-400"
							placeholder="Enter your coupon code"
						/>
						<button className="text-white/70 bg-black/90 px-4 py-3">
							Apply
						</button>
					</div>
					<div className="flex justify-between">
						<p className="text-sm">Shipping Cost</p>
						<span className="text-black font-semibold">${40}</span>
					</div>
					<div className="flex justify-between">
						<p className="text-normal">Total</p>
						<span className="text-black font-black text-lg">
							${totalAmount + 40}
						</span>
					</div>
				</div>

				<div className="mt-4 w-[75%] md:w-full mx-auto">
					<h4 className="text-left">Choose method of payment</h4>
					
				</div>
			</div>
		</div>
	);
};

export default Checkout;

Checkout.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
