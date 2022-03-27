import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PlusSmIcon, MinusSmIcon, XCircleIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";

const Cart = () => {
	const { products } = useSelector((state) => ({ ...state.product }));
	const router = useRouter();
	return (
		<div className="container flex flex-col md:flex-row mt-5 mb-8 gap-x-6">
			<Head>
				<title>Lulu Pearl | cart</title>
				<link rel="icon" href="/lulupearl.png" />
			</Head>
			<div className={`w-full ${products.length !== 0 ? "md:w-[75%]" : "w-full"}`}>
				<h4 className="uppercase font-bold text-xl text-center md:text-left tracking-widest">
					cart
				</h4>
				<hr />
				<div className="mt-1 space-y-4">
					{products.slice(0, 3).map((product) => (
						<div
							key={product.id}
							className="bg-white shadow flex items-center justify-between pr-8"
						>
							<Image
								src={product.img}
								height="80"
								width="100"
								className="object-contain"
							/>
							<div className="flex flex-col space-y">
								<p className="text-gray-800 font-thin">{product.title}</p>
								<p className="text-red-400 font-bold">ksh {product.price}</p>
							</div>
							<div className="flex items-center space-x-2">
								<MinusSmIcon className="h-6 w-6 cursor-pointer" />
								<span>{Math.floor(Math.random() * 10)}</span>
								<PlusSmIcon className="h-6 w-6 cursor-pointer" />
								<XCircleIcon className="pl-4 text-red-400 h-10 w-10 cursor-pointer" />
							</div>
						</div>
					))}
					<div>
						{products.length !== 0 ? (
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
			{!!products.length && (
				<div className="w-full md:w-[25%]">
					<h4 className="uppercase font-bold text-xl text-center md:text-left tracking-widest">
						order summary
					</h4>
					<hr />
					<div className="space-y-2 mt-8 w-[75%] md:w-full mx-auto">
						<div className="flex justify-between">
							<p className="text-sm">Sub Total</p>
							<span className="text-black font-semibold">$130</span>
						</div>
						<div className="flex justify-between">
							<p className="text-sm">Shipping Cost</p>
							<span className="text-black font-semibold">$40</span>
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
							<p className="text-normal">Total</p>
							<span className="text-black font-black text-lg">$380</span>
						</div>
					</div>

					<div className="flex justify-center md:justify-end mt-4 w-[75%] md:w-full mx-auto">
						<button
							onClick={() => router.push("/checkout")}
							className="px-2 py-3 bg-black/90 text-white/70"
						>
							checkout
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
