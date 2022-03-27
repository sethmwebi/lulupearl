import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PlusSmIcon, MinusSmIcon, XCircleIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";

const checkout = () => {
	const { products } = useSelector((state) => ({ ...state.product }));
	return (
		<div className="container flex flex-col md:flex-row mt-5 mb-8 gap-x-6">
			<Head>
				<title>Lulu Pearl | checkout</title>
				<link rel="icon" href="/lulupearl.png" />
			</Head>
			<div className={`w-full ${products.length !== 0 ? "md:w-[75%]" : "w-full"}`}>
				<h4 className="uppercase font-bold text-xl text-center md:text-left tracking-widest">
					checkout
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

					
				</div>

			</div>
			<div className="w-ful md:w-[25%]">checkout</div>
		</div>
	);
};

export default checkout;
