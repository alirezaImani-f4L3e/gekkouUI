import React, { useEffect, useState, useLayoutEffect } from "react";
import Selectcomponent from "./SelectComponent";
import { getExchanges } from "../../../api/backTest/index";

const Choosedata = ({ inputs, callback }) => {
  const [exchanges, setExchanges] = useState([]);
  const [selectedExchange, setSelectedEchange] = useState({});

  useLayoutEffect(() => {
    getExchanges()
      .then((response) => {
        let data = response.data;
        setExchanges(data);
        setSelectedEchange(data[0]);

        callback({
          ...inputs,
          exchange: data[0].name,
          asset: data[0].assets[0],
          currency: data[0].currencies[0],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleExchange(event) {
    const selected = exchanges.filter((item, index) => {
      return index == event.target.value;
    });
    setSelectedEchange(selected[0]);
    callback({
      ...inputs,
      asset: selected[0].assets[0],
      currency: selected[0].currencies[0],
      exchange: selected[0].name,
    });
  }

  function handleCurrencyChange(event) {
    callback({
      ...inputs,
      currency: selectedExchange.currencies[event.target.value],
    });
  }
  function handleTokenChange(event) {
    callback({
      ...inputs,
      asset: selectedExchange.assets[event.target.value],
    });
  }

  return (
    <div className="col-12 gekko__main p-3">
      <h4 className="mb-4">ارز و صرافی مورد نظر را انتخاب کنید</h4>
      <div className="col-12 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
          <label className="mb-2">صرافی</label>

          <Selectcomponent
            items={exchanges.map((item) => item.name)}
            callback={handleExchange}
          />
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
          <label className="mb-2">ارز</label>

          <Selectcomponent
            items={selectedExchange.currencies}
            callback={handleCurrencyChange}
          />
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
          <label className="mb-2">دارایی</label>
          <Selectcomponent
            items={selectedExchange.assets}
            callback={handleTokenChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Choosedata;
