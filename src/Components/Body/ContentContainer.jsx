import Dashboard from "./Dashboard";
import Backtest from "./BackTest/BackTest";
import Livegekko from "./LiveGekko";
import { Routes, Route } from "react-router-dom";

const ContentContainer = () => {
  return (
    <>
      <Routes>
        <Route path="/backtest" element={<Backtest />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/live" element={<Livegekko />} />
      </Routes>
    </>
  );
};

export default ContentContainer;
