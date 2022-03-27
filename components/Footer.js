import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="bg-black/90 text-white/90 py-8 tracking-wide text-sm">
			<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				<div className="leading-0">
					<h4 className="text-lg tracking-widest">
						About Lulupearl
					</h4>
					<span className="w-[50%] md:w-[100%] border-t-4 bg-black flex border-red-600 mt-1" />
					<div className="py-6">
						<p className="text-sm">
							Lulupearl is an online store selling women's bags, clothes and
							shoes.
						</p>
					</div>
					<div className="flex space-x-4">
						<a href="https://facebook.com/sethmwebi" target="_blank">
							<img
								className="icon"
								src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"
							/>
						</a>
						<a href="https://twitter.com/sethmwebi" target="_blank">
							<img
								className="icon"
								src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"
							/>
						</a>
						<a href="https://pinterest.com/sethmwebi" target="_blank">
							<img
								className="icon"
								src="https://img.icons8.com/material-outlined/30/000000/pinterest--v1.png"
							/>
						</a>
						<a href="https://wa.me/254796547997" target="_blank">
							<img
								className="icon"
								src="https://img.icons8.com/material-outlined/30/000000/whatsapp--v1.png"
							/>
						</a>
					</div>
				</div>
				<div>
					<h4 className="text-lg tracking-widest">
						Information
					</h4>
					<span className="w-[50%] md:w-[100%] border-t-4 bg-black flex border-red-600 mt-1" />
					<div className="py-6 space-y-2 flex flex-col">
						<Link href="/lulupearl/terms-and-conditions">
							<a target="_blank" className="flex space-x-2 items-center">
								<img
									className="bg-red-600 p-0.5 rounded-sm"
									src="https://img.icons8.com/material-outlined/20/000000/terms-and-conditions.png"
								/>
								<span>Terms &amp; Conditions</span>
							</a>
						</Link>
						<Link href="/lulupearl/privacy-policy">
							<a target="_blank" className="flex space-x-2 items-center">
								<img
									className="bg-red-600 p-0.5 rounded-sm"
									src="https://img.icons8.com/ios/20/000000/privacy-policy.png"
								/>
								<span>Privacy Policy</span>
							</a>
						</Link>
						<Link href="/lulupearl/delivery-information">
							<a target="_blank" className="flex space-x-2 items-center">
								<img
									className="bg-red-600 p-0.5 rounded-sm"
									src="https://img.icons8.com/external-outline-satawat-anukul/20/000000/external-ecommerce-ecommerce-outline-outline-satawat-anukul-47.png"
								/>
								<span>Delivery Information</span>
							</a>
						</Link>
					</div>
				</div>
				<div>
					<h4 className="text-lg tracking-widest">
						Contact Us
					</h4>
					<span className="w-[50%] md:w-[100%] md:block border-t-4 bg-black flex border-red-600 mt-1" />
					<div className="py-6 space-y-2 flex flex-col">
						<div className="flex space-x-2 items-start">
							<div>
								<img
									className="bg-red-600 p-0.5 rounded-sm"
									src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/20/000000/external-pin-user-interface-kmg-design-glyph-kmg-design-1.png"
								/>
							</div>
							<div className="flex flex-col -mt-1">
								<span>Lulu Rubeya</span>
								<span>44 Keroka</span>
								<span>40202 Keroka</span>
							</div>
						</div>
						<div className="flex space-x-2 items-center">
							<img className="bg-red-600 p-0.5 rounded-sm" src="https://img.icons8.com/ios-filled/20/000000/apple-phone.png"/>
							<span>+254 775 513743</span>
						</div>
						<div className="flex space-x-2 items-center">
							<img className="bg-red-600 p-0.5 rounded-sm" src="https://img.icons8.com/ios-filled/20/000000/secured-letter--v1.png"/>
							<span>lulurubeya@gmail.com</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
