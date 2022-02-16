export function prepareBacktestData(data, paperConfig) {
  const strategyName = data.selectedStrategy.name;
  const payload = {
    watch: {
      exchange: data.exchange,
      currency: data.currency,
      asset: data.asset,
    },
    paperTrader: {
      feeMaker: 0.25,
      feeTaker: 0.25,
      feeUsing: "maker",
      slippage: 0.05,
      simulationBalance: {
        asset: 1,
        currency: 100,
      },
      reportRoundtrips: true,
      enabled: true,
    },
    tradingAdvisor: {
      enabled: true,
      method: strategyName,
      candleSize: data.candleSize * data.timeUnit.unit,
      historySize: data.storageDomain,
    },
    backtest: {
      daterange: {
        from: "2021-11-03T16:42:00Z",
        to: "2021-11-23T19:42:00Z",
      },
    },
    backtestResultExporter: {
      enabled: true,
      writeToDisk: false,
      data: {
        stratUpdates: false,
        roundtrips: true,
        stratCandles: true,
        stratCandleProps: ["open"],
        trades: true,
      },
    },
    performanceAnalyzer: {
      riskFreeReturn: 2,
      enabled: true,
    },
    valid: true,
  };

  payload[strategyName] = exractStrategyData(data.selectedStrategy);

  return payload;
}

function exractStrategyData(data) {
  let array = data.params.split(/\r\n/);
  let result = {};
  for (let i = 0; i < array.length; ++i) {
    if (!array[i][0]) continue;
    if (array[i][0] == "#") continue;
    if (array[i][0] == "[" && array[i][array[i].length - 1] == "]") {
      let option = array[i].slice(1, array[i].length - 1);
      result[option] = {};
      while (array[i++] && i < array.length) {
        let values = array[i].trim().split("=");
        result[option][values[0].trim()] = values[1].trim();
      }
    } else {
      let values = array[i].trim().split("=");
      result[values[0].trim()] = values[1].trim();
    }
  }

  return result;
}
