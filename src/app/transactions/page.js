// /transactions
import { ChevronDown, ChevronUp } from "react-feather";
import Header from "../../objects/Header/Header.js";
import "./transactions.css";

export default function Transactions() {
  const history = [
    {
      key: "Active Wallets",
      value: 3,
    },
    {
      key: "Active Protocols",
      value: 3,
    },
    {
      key: "Completed Tasks",
      value: 3468,
    },
    {
      key: "Success",
      value: 3462,
    },
    {
      key: "Error",
      value: 3,
    },
  ];

  return (
    <>
      <Header active={"transactions"} />
      <div id="transactions-main">
        <h2 style={{ color: "white" }}>Transactions</h2>
        <p style={{ marginTop: 16, marginBottom: 25, color: "white" }}>
          Here is an overview of all recent transactions made by the automated
          farming process.
        </p>
        <div id="trans-child1">
          {history.map((elem, index) => (
            <div key={index} className="trans-child1-child">
              <div className="tc1-c-h1">{elem.key}</div>
              <div
                className="tc1-c-h2"
                style={{
                  color:
                    elem.key === "Success"
                      ? "rgba(0,180,0,1)"
                      : elem.key === "Error"
                      ? "tomato"
                      : "pink",
                }}
              >
                {elem.value}
              </div>
            </div>
          ))}
        </div>
        {/* section 1 */}

        <div id="trans-child2">
          <div id="trans-child2-header">
            <h3>Task Overview</h3>
            <span>View all</span>
          </div>
          <table className="tc2-table">
            <thead>
              <tr>
                <th
                  className="tc2-table-th"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1em",
                    alignItems: "center",
                  }}
                >
                  Time/Date
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ChevronUp color="pink" width={13} height={13} />
                    <ChevronDown
                      color="pink"
                      width={13}
                      height={13}
                      style={{ marginTop: -5 }}
                    />
                  </span>{" "}
                </th>
                <th className="tc2-table-th">Wallet</th>
                <th className="tc2-table-th">Task</th>
                <th className="tc2-table-th">Platform</th>
                <th className="tc2-table-th">Result</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7].map((elem, index) => (
                <tr key={index}>
                  <td className="tc2-table-td">14:24 | 2/27/2024</td>
                  <td className="tc2-table-td">
                    0x093F9329C93.....C03020FBED29132B22
                  </td>
                  <td className="tc2-table-td">Swapped 91 USDT to 0.028 ETH</td>
                  <td className="tc2-table-td">Syncswap</td>
                  <td
                    className="tc2-table-td"
                    style={{ color: index === 3 ? "tomato" : null }}
                  >
                    {index === 3 ? "Error" : "Success"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
