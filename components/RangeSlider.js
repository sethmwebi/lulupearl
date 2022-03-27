import { useRef, useEffect, useState } from "react";

const RangeSlider = ({ initialMin, initialMax, min, max, step, priceGap }) => {
	const progressRef = useRef(null);
	const [minValue, setMinValue] = useState(initialMin);
	const [maxValue, setMaxValue] = useState(initialMax);

	const handleMin = (e) => {
		if (maxValue - minValue > priceGap && maxValue <= max) {
			if (parseInt(e.target.value) > parseInt(maxValue)) {
			} else {
				setMinValue(parseInt(e.target.value));
			}
		} else {
			if (parseInt(e.target.value) < minValue) {
				setMinValue(parseInt(e.target.value));
			}
		}
	};

	const handleMax = (e) => {
		if (maxValue - minValue > priceGap && maxValue <= max) {
			if (parseInt(e.target.value) < parseInt(minValue)) {
			} else {
				setMaxValue(parseInt(e.target.value));
			}
		} else {
			if (parseInt(e.target.value) > maxValue) {
				setMaxValue(parseInt(e.target.value));
			}
		}
	};

	useEffect(() => {
		progressRef.current.style.left = (minValue / max) * step + "%";
		progressRef.current.style.right = 100 - (maxValue / max) * step + "%";
	}, [minValue, maxValue]);

	return (
		<form>
			<div className="my-4">
				<div className="relative h-2 rounded-full bg-black/90">
					<div className="absolute h-2 bg-red-400" ref={progressRef} />
				</div>
				<div className="relative">
					<input
						onChange={handleMin}
						value={minValue}
						type="range"
						min={min}
						step={step}
						max={max}
						className="pointer-events-none absolute -top-2 h-2 w-full appearance-none bg-transparent"
					/>
					<input
						onChange={handleMax}
						value={maxValue}
						type="range"
						min={min}
						step={step}
						max={max}
						className="pointer-events-none absolute -top-2 h-2 w-full appearance-none bg-transparent"
					/>
				</div>
			</div>
			<div className="flex justify-center items-center text-gray-400">
				<span className="pr-2">ksh. {minValue}</span><span className="mt-1">-</span><span className="pl-2">ksh. {maxValue}</span>
			</div>
			<div className="flex justify-end mt-2">
				<button type="submit" className="px-2 py-1 bg-red-400 text-white/70">Filter</button>
			</div>
		</form>
	);
};

export default RangeSlider;
