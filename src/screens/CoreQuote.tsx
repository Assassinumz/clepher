import React, { useState, useEffect } from "react";
import { Side } from "../components/Navbar/Side";

import { instance } from "../services/instance";

import { toast } from "react-toastify";

export const CoreQuote = () => {
	const [data, setData] = useState<any>();

	const getData = async () => {
		let res = await instance.get("", {
			params: {
				function: "GLOBAL_QUOTE",
				symbol: "IBM",
			},
		});

		if (res.data["Information"]) {
			toast.info("API Rate limited or Premium endpoint");
			return;
		}

		setData(res.data["Global Quote"]);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="w-full h-screen flex ">
			<Side />
			<div className="p-10 flex flex-col w-full h-full overflow-auto">
				<div className="w-full flex mb-5">
					<p className="text-xl font-medium">
						Core Stock - Global Quote
					</p>
				</div>

				<div className="w-full flex flex-wrap">
					{data && (
						<div className="rounded-xl bg-slate-800 w-[300px] h-[500px] flex flex-col mr-2 mb-2 !text-white">
							<div className="self-center mt-5">
								<p>{data["01. symbol"]}</p>
							</div>
							<div className="flex flex-col mt-2 p-5">
								{data &&
									Object.keys(data).map((item, k) => {
										return (
											<div className="flex items-center mb-2">
												<p className="w-32">{item}</p>
												<p className="w-20">
													{data[item]}
												</p>
											</div>
										);
									})}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
