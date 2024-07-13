import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CoreStock } from "./screens/CoreStock";
import { CoreDaily } from "./screens/CoreDaily";
import { CoreDailyAdjusted } from "./screens/CoreDailyAdjusted";
import { CoreMonthly } from "./screens/CoreMonthly";
import { CoreMonthlyAdjusted } from "./screens/CoreMonthlyAdjusted";
import { CoreQuote } from "./screens/CoreQuote";
import { CoreWeekly } from "./screens/CoreWeekly";
import { CoreWeeklyAdjusted } from "./screens/CoreWeeklyAdjusted";
import { CoreGlobal } from "./screens/CoreGlobal";

import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<CoreStock />} />
				<Route path="/core/daily" element={<CoreDaily />} />
				<Route
					path="/core/dailyAdjusted"
					element={<CoreDailyAdjusted />}
				/>
				<Route path="/core/weekly" element={<CoreWeekly />} />
				<Route
					path="/core/weeklyAdjusted"
					element={<CoreWeeklyAdjusted />}
				/>
				<Route path="/core/monthly" element={<CoreMonthly />} />
				<Route
					path="/core/monthlyAdjusted"
					element={<CoreMonthlyAdjusted />}
				/>
				<Route path="/core/quote" element={<CoreQuote />} />
				<Route path="/core/global" element={<CoreGlobal />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
