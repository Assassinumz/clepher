import React, { useState, useEffect } from "react";
import { Side } from "../components/Navbar/Side";

import { instance } from "../services/instance";
import { toast } from "react-toastify";

export const CoreGlobal = () => {
	const [data, setData] = useState<any>([]);

	const getData = async () => {
		let res = await instance.get("", {
			params: {
				function: "MARKET_STATUS",
				symbol: "IBM",
			},
		});

		if (res.data["Information"]) {
			toast.info("API Rate limited or Premium endpoint");
			return;
		}

		setData(res.data["markets"]);
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
						Core Stock - Global Market
					</p>
				</div>

				<div className="w-full flex flex-wrap">
					{data &&
						data?.map((item: any, k: number) => {
							return (
								<div
									key={k}
									className="rounded-xl bg-slate-800 w-[300px] h-[600px] flex flex-col mr-2 mb-2 !text-white"
								>
									{/* <div className="self-center mt-5">
									<p>{data["01. symbol"]}</p>
								</div> */}
									<div className="flex flex-col mt-2 p-5">
										{Object.keys(item).map((itm, key) => {
											return (
												<div
													key={key}
													className="flex items-center mb-2"
												>
													<p className="w-32 text-wrap break-all">
														{itm}
													</p>
													<p className="w-20">
														{item[itm]}
													</p>
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};
