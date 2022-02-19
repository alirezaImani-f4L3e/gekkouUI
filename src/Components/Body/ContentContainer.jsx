import Dashboard from "./Dashboard";
import Backtest from "./BackTest/BackTest";
import Livegekko from "./LiveGekko";
import { Routes, Route } from "react-router-dom";

const ContentContainer = ({ setLoading, loading }) => {
  return (
    <div className=" mx-3 mt-2 ">
      <Routes>
        <Route
          path="/backtest"
          element={<Backtest loading={loading} setLoading={setLoading} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard setLoading={setLoading} />}
        />
        <Route path="/live" element={<Livegekko setLoading={setLoading} />} />
      </Routes>
    </div>
  );
};

export default ContentContainer;
