import { useState, useEffect } from "react";
import { Side } from "../components/Navbar/Side";

import { instance } from "../services/instance";
import { toast } from "react-toastify";

export const CoreWeekly = () => {
	const [data, setData] = useState<any>();

	const getData = async () => {
		let res = await instance.get("", {
			params: {
				function: "TIME_SERIES_WEEKLY",
				symbol: "IBM",
			},
		});

		if (res.data["Information"]) {
			toast.info("API Rate limited or Premium endpoint");
			return;
		}

		setData(res.data[Object.keys(res.data)[1]]);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="w-full h-screen flex ">
			<Side />
			<div className="p-10 flex flex-col w-full h-full overflow-auto">
				<div className="w-full flex mb-5">
					<p className="text-xl font-medium">Core Stock - Weekly</p>
				</div>

				<div className="w-full flex flex-wrap">
					{data &&
						Object.keys(data).map((item, k) => {
							let _item = data[item];
							return (
								<div
									key={k}
									className="rounded-xl bg-slate-800 w-[300px] h-[300px] flex flex-col mr-2 mb-2 !text-white"
								>
									<div className="self-center mt-5">
										<p>{item}</p>
									</div>
									<div className="flex flex-col mt-2 p-5">
										{Object.keys(_item).map((itm, key) => {
											return (
												<div
													key={key}
													className="flex items-center mb-2"
												>
													<p className="w-32">
														{itm}
													</p>
													<p className="w-20">
														{_item[itm]}
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
