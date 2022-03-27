import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowSmLeftIcon, ArrowSmRightIcon } from "@heroicons/react/solid";

const BottomCarousel = () => {
	let images = [...new Array(10).keys()].map((i) => `/assets/bag-${++i}.png`);
	const [index, setIndex] = useState(0);

	const rotateImages = (images, count) => {
		count -= images.length * Math.floor(count / images.length);
		images.push.apply(images, images.splice(0, count));
		return images;
	};

	const rotate = () => {
		for(var i = 0; i < images.length - 1; i++){
			return rotateImages(images,i)
		}
	}

	return (
		<div className="bg-black py-10 overflow-hidden">
			<div className="relative">
				<div className="absolute left-0 top-0 bottom-0 cursor-pointer hover:bg-red-600 bg-black px-1 flex justify-center items-center z-10">
					<ArrowSmLeftIcon
						className="text-white h-8 w-8"
						onClick={() => {
							setIndex(--index);
						}}
					/>
				</div>
				<div
					className="flex w-[150vw]"
					style={{
						transform: `translateX(${150 * index}px)`,
						transition: "all 1.5s ease-in-out",
					}}
				>
					{images.map((i) => {
						return (
							<div
								key={i}
								className="w-[150px] h-[120px]  flex-shrink-0"
								style={{
									backgroundImage: `url('${i}')`,
									backgroundPosition: "center",
									backgroundSize: "auto",
									backgroundRepeat: "repeat",
								}}
							/>
						);
					})}
				</div>
				<div className="absolute right-0 top-0 bottom-0 cursor-pointer hover:bg-red-600 bg-black/90 px-1 flex justify-center items-center">
					<ArrowSmRightIcon
						className="text-white h-8 w-8"
						onClick={() => {
							setIndex(++index);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default BottomCarousel;
