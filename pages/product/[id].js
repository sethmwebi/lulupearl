import Head from "next/head"
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector } from "react-redux";
import { PlusSmIcon, MinusSmIcon, XCircleIcon } from "@heroicons/react/solid";
import Layout from "../../components/Layout"

const Product = () => {
	const { products } = useSelector((state) => ({ ...state.product }));
	const router = useRouter();
	const { id } = router.query;
	const product = products.findIndex((product) => product.id === Number(id));

	if (product < 0) return <p>Sorry, product could not be found!</p>;
	return (

		<div className="container flex flex-col md:flex-row my-8 items-center">
		<Head>
				<title>Lulu Pearl | {products[product].title}</title>
				<link rel="icon" href="/lulupearl.png" />
			</Head>
			<div className="w-full md:w-2/5">
				<div className="relative h-[40vh] md:h-[60vh] mx-auto md:mx-0">
					<Image
						src={`${products[product].img}`}
						layout="fill"
						className="object-contain"
					/>
				</div>
				<div className="flex justify-center mt-8 w-[60%] mx-auto justify-evenly">
					<Image src={`${products[product].img}`} height="50" width="50" />
					<div className="border border-red-400 flex items-center cursor-pointer">
						<Image src={`${products[product].img}`} height="50" width="50" />
					</div>
					<Image src={`${products[product].img}`} height="50" width="50" />
				</div>
			</div>
			<div className="w-full md:w-3/5 flex flex-col md:!-mt-[50px] mt-8 md:mt-0">
				<h4 className="text-gray-700 font-extrabold md:font-semibold tracking-widest text-center md:text-left">
					{products[product].title}
				</h4>
				<p className="my-1 md:my-2 text-center md:text-left text-red-400">
					ksh {products[product].price}
				</p>
				<p className="text-sm text-gray-700">{products[product].desc}</p>
				<div className="flex flex-row items-center mt-2">
					<span className="mr-4">Quantity:</span>
					<div className="flex items-center justify-between border">
						<span className="px-3">
							<MinusSmIcon className="h-6 w-6 cursor-pointer" />
						</span>
						<span className="border-r border-l px-4 py-1">
							{Math.floor(Math.random() * 10)}
						</span>
						<span className="px-3">
							<PlusSmIcon className="h-6 w-6 cursor-pointer" />
						</span>
					</div>
				</div>
				<div className="mt-4 flex space-x-2">
				<button className="bg-red-400 px-4 py-2 text-white/70">Add To Cart</button>
				<button className="bg-red-500 px-4 py-2 text-white/70">Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default Product;

Product.getLayout = function getLayout(page){
  return (
    <Layout>
      {page}
    </Layout>
  )
}
