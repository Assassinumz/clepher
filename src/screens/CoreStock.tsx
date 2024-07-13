import { useState, useEffect } from "react";
import { Side } from "../components/Navbar/Side";

import MenuItem from "@mui/material/MenuItem";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import Menu from "@mui/material/Menu";
import Checkbox from "@mui/material/Checkbox";
import FilterListIcon from "@mui/icons-material/FilterList";

import { instance } from "../services/instance";

import { toast } from "react-toastify";

export const CoreStock = () => {
	const [showFilters, setShowFilters] = useState<null | HTMLElement>(null);
	const [interval, setInterval] = useState("5min");

	const [adjusted, setAdjusted] = useState(true);
	const [extended, setExtended] = useState(true);

	const [data, setData] = useState<any>();

	const handleChange = (event: SelectChangeEvent) => {
		setInterval(event.target.value as string);
	};

	const getData = async () => {
		let res = await instance.get("", {
			params: {
				function: "TIME_SERIES_INTRADAY",
				symbol: "IBM",
				interval: interval,
				extended_hours: extended,
				adjusted: adjusted,
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
	}, [interval, adjusted, extended]);

	return (
		<div className="w-full h-screen flex ">
			<Side />
			<div className="p-10 flex flex-col w-full h-full overflow-auto">
				<div className="w-full flex mb-5">
					<p className="text-xl font-medium">Core Stock - Intraday</p>
				</div>

				<div className="w-full flex items-center mb-5">
					<div className="w-32 mr-5">
						<div
							onClick={(e) => setShowFilters(e.currentTarget)}
							className="w-full flex items-center border border-[#c7c7c7] rounded p-2 cursor-pointer"
						>
							<FilterListIcon />
							<p className="ml-2">Filters</p>
						</div>
						<Menu
							id="basic-menu"
							anchorEl={showFilters}
							open={Boolean(showFilters)}
							onClose={() => setShowFilters(null)}
							className="mt-2"
						>
							<div className="w-32 flex flex-col px-2">
								<div
									onClick={() => setAdjusted(!adjusted)}
									className="w-full flex justify-between py-2 cursor-pointer"
								>
									<p>Adjusted</p>
									<Checkbox
										checked={adjusted}
										className="!p-0"
									/>
								</div>
								<div
									onClick={() => setExtended(!extended)}
									className="w-full flex justify-between py-2 cursor-pointer"
								>
									<p>Extended</p>
									<Checkbox
										checked={extended}
										className="!p-0"
									/>
								</div>
							</div>
						</Menu>
					</div>
					<div>
						<Select
							labelId="demo-simple-select-label"
							value={interval}
							// label="Interval"
							onChange={handleChange}
							className="w-32 text-black !border-gray-200"
							sx={{
								".MuiSelect-select": {
									padding: "10px",
								},
							}}
						>
							<MenuItem value={"1min"}>1 Minute</MenuItem>
							<MenuItem value={"5min"}>5 Minutes</MenuItem>
							<MenuItem value={"15min"}>15 Minutes</MenuItem>
							<MenuItem value={"30min"}>30 Minutes</MenuItem>
							<MenuItem value={"60min"}>60 Minutes</MenuItem>
						</Select>
					</div>
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
