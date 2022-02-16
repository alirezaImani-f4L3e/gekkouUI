import { useEffect, useState } from "react";
import Selectcomponent from "./SelectComponent";
import {
  getStrategiesData,
  sendBacktestData,
} from "../../../api/backTest/index";
import { timeUnits } from "../../../utils/shared";
import { prepareBacktestData } from "../../../utils/backTest";
import Choosedata from "./ChooseData";

const Backtest = () => {
  const [strategies, setStrategies] = useState([]);
  const [paperConfig, setPaperConfig] = useState({});
  const [inputs, setInputs] = useState({
    selectedStrategy: {},
    candleSize: 1,
    storageDomain: 10,
    timeUnit: timeUnits[0],
    exchange: "",
    asset: "",
    currency: "",
  });

  const [test, setTest] = useState(false);

  useEffect(() => {
    getStrategiesData()
      .then((result) => {
        let data = result.data;
        data = data.map((item, index) => {
          return {
            ...item,
            id: index,
          };
        });
        setStrategies(data);
        setInputs({
          ...inputs,
          selectedStrategy: data[0],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleStrategyChange(event) {
    const selected = strategies.filter(
      (strategy) => strategy.id == event.target.value
    );
    setInputs({
      ...inputs,
      selectedStrategy: selected[0],
    });
  }

  function handleCandleSize(event) {
    setInputs({
      ...inputs,
      candleSize: event.target.value,
    });
  }

  function handleStorageDomain(event) {
    setInputs({
      ...inputs,
      storageDomain: event.target.value,
    });
  }

  function handleTimeChange(event) {
    const selected = timeUnits.filter((unit) => event.target.value == unit.id);
    setInputs({
      ...inputs,
      timeUnit: selected[0],
    });
  }

  function handleBacktest(event) {
    setTest(true);
    const data = prepareBacktestData(inputs, paperConfig);
    sendBacktestData(data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="content-wrapper">
      <p>{inputs.asset}</p>

      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2 d-flex flex-column">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Back test </h1>
            </div>
          </div>
        </div>
      </div>
      <Choosedata inputs={inputs} callback={(data) => setInputs(data)} />
      <div className="col-12 content__main__second p-3 d-flex flex-column flex-lg-row">
        <section className="col-12 col-lg-6 d-flex flex-column justify-content-start">
          <h2>استراتژی</h2>
          <div className="form-group">
            <label className="mb-3">استراتژی</label>
            <Selectcomponent
              items={strategies.map((strategy) => strategy.name)}
              callback={handleStrategyChange}
            />
          </div>
          <section className="d-flex flex-row justify-content-between">
            <div className="form-group col-5">
              <label className="mb-3">اندازه کندل ها</label>
              <input
                type="number"
                className="form-control"
                value={inputs.candleSize}
                onChange={handleCandleSize}
              />
            </div>
            <div className="form-group col-5 ">
              <label className="mb-3">واحد زمان</label>
              <Selectcomponent
                items={timeUnits.map((unit) => unit.name)}
                callback={handleTimeChange}
              />
            </div>
          </section>
          <div className="gekko__height">
            <label className="mb-3">بازه ذخیره</label>
            <p>
              ( در کندل های {inputs.candleSize}
              {inputs.timeUnit.name})
            </p>
            <input
              type="number"
              className="form-control"
              value={inputs.storageDomain}
              onChange={handleStorageDomain}
            />

            <p className="mt-3">
              تاریخچه در باز<span> </span>
              {inputs.candleSize * inputs.storageDomain * inputs.timeUnit.unit}
              دقیقه ای
            </p>
          </div>
        </section>
        <section className="col-12 col-lg-6 d-flex flex-column mt-4 mt-lg-0">
          <h2>پرامتر ها</h2>

          <div className="form-group">
            <label className="mb-3">
              پارامتر های {inputs.selectedStrategy.name}:
            </label>
            <textarea
              name="filters"
              id=""
              className="form-control"
              cols="30"
              rows="10"
              dir="ltr"
              value={inputs.selectedStrategy.params}
            ></textarea>
          </div>
        </section>
      </div>
      <div className="col-12 d-flex flex-row justify-content-center ">
        <button
          className="btn btn-outline-info gekko_btn mb-3"
          onClick={handleBacktest}
        >
          اجرای تست
        </button>
      </div>

      {test && (
        <div className="col-12 d-flex flex-row justify-content-center">
          <p>fkejfeijjfejio</p>
        </div>
      )}
    </div>
  );
};

export default Backtest;
