import React, { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export const Side = () => {
	const location = useLocation();

	useEffect(() => {}, [location]);
	return (
		<div className="w-[20%] min-w-[20%] bg-slate-800 !text-white flex flex-col p-5 h-full rounded-r-2xl overflow-auto">
			<ToastContainer />
			<div>
				<p className="text-2xl font-semibold">Clepher Assessment</p>
			</div>

			<div className="mt-10 flex flex-col">
				<div className="flex flex-col">
					<p className="text-xl">Core Stock</p>
					<div className="pl-5 flex flex-col mt-2">
						<Link className="mb-2" to={"/"}>
							<p
								className={`${
									location.pathname === "/"
										? "text-zinc-200"
										: "text-zinc-400"
								} `}
							>
								Intraday
							</p>
						</Link>
						<Link className="mb-2" to={"/core/daily"}>
							<p
								className={`${
									location.pathname === "/core/daily"
										? "text-zinc-200"
										: "text-zinc-400"
								} `}
							>
								Daily
							</p>
						</Link>
						<Link className="mb-2" to={"/core/dailyAdjusted"}>
							<p
								className={`${
									location.pathname === "/core/dailyAdjusted"
										? "text-zinc-200"
										: "text-zinc-400"
								} `}
							>
								Daily Adjusted
							</p>
						</Link>
						<Link className="mb-2" to={"/core/weekly"}>
							<p
								className={`${
									location.pathname === "/core/weekly"
										? "text-zinc-200"
										: "text-zinc-400"
								} `}
							>
								Weekly
							</p>
						</Link>
						<Link className="mb-2" to={"/core/weeklyAdjusted"}>
							<p
								className={`${
									location.pathname === "/core/weeklyAdjusted"
										? "text-zinc-200"
										: "text-zinc-400"
								} `}
							>
								Weekly Adjusted
							</p>
						</Link>
						<Link className="mb-2" to={"/core/monthly"}>
							<p
								className={`${
									location.pathname === "/core/monthly"
										? "text-zinc-200"
										: "text-zinc-400"
								} `}
							>
								Monthly
							</p>
						</Link>
						<Link className="mb-2" to={"/core/monthlyAdjusted"}>
							<p
								className={`${
									location.pathname ===
									"/core/monthlyAdjusted"
										? "text-zinc-200"
										: "text-zinc-400"
								} `}
							>
								Monthly Adjusted
							</p>
						</Link>
						<Link className="mb-2" to={"/core/quote"}>
							<p
								className={`${
									location.pathname === "/core/quote"
										? "text-zinc-200"
										: "text-zinc-400"
								} `}
							>
								Quote Endpoint
							</p>
						</Link>

						<Link to={"/core/global"}>
							<p
								className={`${
									location.pathname === "/core/global"
										? "text-zinc-200"
										: "text-zinc-400"
								} `}
							>
								Global Market Status
							</p>
						</Link>
					</div>
				</div>

				{/* <div className="flex flex-col mt-5">
					<p className="text-xl">Options Data</p>
					<div className="pl-5 flex flex-col mt-2">
						<Link to={"/"}>
							<p className="text-zinc-500">Realtime Options</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Historical Options</p>
						</Link>
					</div>
				</div>

				<div className="flex flex-col mt-5">
					<p className="text-xl">Alpha Intelligence</p>
					<div className="pl-5 flex flex-col mt-2">
						<Link to={"/"}>
							<p className="text-zinc-500">News & Sentiments</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">
								Top Gainers & Losers
							</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Analytics</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">
								Analytics (Sliding Window)
							</p>
						</Link>
					</div>
				</div>

				<div className="flex flex-col mt-5">
					<p className="text-xl">Fundamental Data</p>
					<div className="pl-5 flex flex-col mt-2">
						<Link to={"/"}>
							<p className="text-zinc-500">Company Overview</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">
								Corporate Action - Dividends
							</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">
								Corporate Action - Splits
							</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Income Statement</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Balance SHeet</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Cash Flow</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Earnings</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">
								Listing & Dealing Status
							</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Earnings Calendar</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">IPO Calendar</p>
						</Link>
					</div>
				</div>

				<div className="flex flex-col mt-5">
					<p className="text-xl">Forex (FX)</p>
					<div className="pl-5 flex flex-col mt-2">
						<Link to={"/"}>
							<p className="text-zinc-500">Exchange Rates</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Intraday</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Daily</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Weekly</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Monthly</p>
						</Link>
					</div>
				</div>

				<div className="flex flex-col mt-5">
					<p className="text-xl">Cryptocurrencies</p>
					<div className="pl-5 flex flex-col mt-2">
						<Link to={"/"}>
							<p className="text-zinc-500">Exchange Rates</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Intraday</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Daily</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Weekly</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Monthly</p>
						</Link>
					</div>
				</div>

				<div className="flex flex-col mt-5">
					<p className="text-xl">Commodities</p>
					<div className="pl-5 flex flex-col mt-2">
						<Link to={"/"}>
							<p className="text-zinc-500">Crude Oil (WTI)</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Crude Oil (Brent)</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Natural Gas</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Copper</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Aluminum</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Wheat</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Corn</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Cotton</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Sugar</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Coffee</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">
								Global commodities Index
							</p>
						</Link>
					</div>
				</div>

				<div className="flex flex-col mt-5">
					<p className="text-xl">Economic Indicators</p>
					<div className="pl-5 flex flex-col mt-2">
						<Link to={"/"}>
							<p className="text-zinc-500">Crude Oil (WTI)</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Crude Oil (Brent)</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Natural Gas</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Copper</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Aluminum</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Wheat</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Corn</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Cotton</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Sugar</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">Coffee</p>
						</Link>
						<Link to={"/"}>
							<p className="text-zinc-500">
								Global commodities Index
							</p>
						</Link>
					</div>
				</div> */}
			</div>
		</div>
	);
};
