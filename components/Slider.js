import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
	ArrowCircleLeftIcon,
	ArrowCircleRightIcon,
} from "@heroicons/react/outline";

const Slider = ({ autoPlay }) => {
	const [index, setIndex] = useState(0);
	const [transitioning, setTransitioning] = useState(false);

	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		const {innerWidth: width} = window;
		const handleResize = () => {
			setWindowWidth(width);
			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		};

		handleResize()
	},[]);

	const images = [
		{
			img: "/assets/bag-1.png",
			description: "school bag",
			advert: "GET UPTO 30% OFF NEW ARRIVALS",
		},
		{
			img: "/assets/bag-3.png",
			description: "Leather handbag",
			advert: "GET UPTO 30% OFF NEW ARRIVALS",
		},
		{
			img: "/assets/bag-4.png",
			description: "Orange Stylish bag",
			advert: "GET UPTO 30% OFF NEW ARRIVALS",
		},
	];

	const autoPlayRef = useRef();

	useEffect(() => {
		autoPlayRef.current = handleArrow;
	});

	useEffect(() => {
		const play = () => {
			autoPlayRef.current("l");
		};

		if (autoPlay) {
			const interval = setInterval(play, autoPlay * 1000);
			return () => clearInterval(interval);
		}
	}, [autoPlay]);

	const handleArrow = (direction) => {
		if (direction === "l") {
			setIndex(index !== 0 ? index - 1 : 2);
		}
		if (direction === "r") {
			setIndex(index !== 2 ? index + 1 : 0);
		}
	};

	return (
		<div
			className="h-[70vh] flex items-center justify-between md:h-[90vh] overflow-hidden relative"
			onClick={() => handleArrow("l")}
		>
			<ArrowCircleLeftIcon className="hidden md:inline-flex h-8 w-8 text-gray-300 absolute cursor-pointer z-10 top-[50%] left-0" />
			<div
				className={`w-[240vw] h-[50vh] md:h-[90vh] flex justify-between items-center transition transform duration-300 ease-in-out`}
				style={{
					transform: `${windowWidth <= 640 ? `translateX(${-90 * index}vw)` : `translateX(${-80 * index}vw)`}`,
					transition: "all 1.5s ease-in-out",
				}}
			>
				{images.map((img, i) => (
					<div
						className="min-w-[90vw] sm:min-w-[80vw] h-[60vh] md:h-[80vh] flex flex-col sm:flex-row items-center justify-between"
						key={i}
					>
						<div className="hidden md:inline-flex flex flex-col flex-1 ml-20">
							<h4 className="text-sm mb-5">{img.description}</h4>
							<p className="text-4xl">{img.advert.slice(0, 12)}</p>
							<p className="text-4xl">{img.advert.slice(12)}</p>
							<div className="mt-5">
								<button className="bg-red-400 text-white py-2 px-4">
									Buy Now
								</button>
							</div>
						</div>
						<div className="flex max-w-[100%] md:max-w-[40%] flex-col md:flex-row">
							<div className="w-[90vw] md:w-[80vw] h-[60vh] md:[h-70vh] relative flex justify-center items-center">
								<div className="md:hidden absolute top-16 left-8 w-full">
									<p className="text-sm">{img.description}</p>
								</div>
								<Image src={img.img} alt="" layout="fill" objectFit="contain" />
								<div className="md:hidden absolute top-8 right-8 rounded-full flex justify-center items-center h-[70px] w-[70px] p-2 bg-red-400 text-white/70 whitespace-nowrap">
									30% off
								</div>
							</div>
							<div className="flex justify-center pb-3">
								<button className="md:hidden py-2 px-3 -mt-2 text-white/70 bg-red-400">
									Shop Now
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
			<ArrowCircleRightIcon
				className="hidden md:inline-flex h-8 w-8 text-gray-300 absolute cursor-pointer top-[50%] right-0"
				onClick={() => handleArrow("r")}
			/>
		</div>
	);
};

export default Slider;
