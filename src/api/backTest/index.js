import Axiosbase from "../index";
import Axionsbase from "../index";

export function getStrategiesData() {
  return Axiosbase.get("/api/strategies");
}

export function getExchanges() {
  return Axionsbase.get("/api/exchanges");
}

export function sendBacktestData(data) {
  return Axionsbase.post("/api/backtest", data);
}
