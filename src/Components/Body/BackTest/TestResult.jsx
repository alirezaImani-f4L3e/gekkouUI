import React, { useEffect, useState } from "react";
import chart from "../../../utils/d3Chart/chart4";

const Testresult = ({ data }) => {
  const [performance, setPerformance] = useState({});
  useEffect(() => {
    setPerformance(data.performanceReport);
    // chart(data.candles, data.trades);
  }, [data]);
  return (
    <>
      <div className="col-12 d-flex flex-column flex-md-row">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title"> نتیجه تست</h3>
            </div>
            <div className="card-body p-0">
              <table className="table table-condensed">
                <tbody>
                  <tr>
                    <th style={{ width: "10px" }}>#</th>

                    <th></th>
                  </tr>
                  <tr>
                    <td>1.</td>
                    <td>زمان شروع</td>

                    <td>
                      <span>{performance.startTime}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>زمان پایان</td>

                    <td>
                      <span>{performance.endTime}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>بازه زمانی</td>

                    <td>
                      <span>{performance.timespan}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>5.</td>
                    <td>قیمت شروع</td>

                    <td>
                      <span>{performance.startPrice}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>6.</td>
                    <td>قیمت پایان</td>

                    <td>
                      <span>{performance.endPrice}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>7.</td>
                    <td>تغییر بازار</td>

                    <td>
                      <span
                        style={{
                          color: performance.market > 0 ? "green" : "red",
                        }}
                      >
                        {performance.market}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card">
            <div
              className="card-header"
              style={{ backgroundColor: "white", borderBottom: "none" }}
            >
              <h3 className="card-title pt-3 pb-2"> </h3>
            </div>
            <div className="card-body p-0">
              <table className="table table-condensed">
                <tbody>
                  <tr>
                    <th style={{ width: "10px" }}>#</th>

                    <th></th>
                  </tr>
                  <tr>
                    <td>8.</td>
                    <td> تعداد معامله</td>

                    <td>
                      <span>{performance.trades}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>9.</td>
                    <td>خشونت بازار</td>

                    <td>
                      <span>{performance.sharpe}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>10.</td>
                    <td>موجودی ابتدایی</td>

                    <td>
                      <span>{performance.startBalance}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>11.</td>
                    <td>موجودی پایانی</td>

                    <td>
                      <span>
                        {performance.startBalance + performance.profit}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>12.</td>
                    <td>تغییرات پیش بینی شده</td>

                    <td>
                      <span
                        style={{
                          color: performance.market > 0 ? "green" : "red",
                        }}
                      >
                        {performance.alpha}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div id="chartWrapper" className="clickable">
          <div className="shield"></div>
          <svg id="chart" width="1516" height="500"></svg>
        </div>
      </div>
    </>
  );
};

export default Testresult;
