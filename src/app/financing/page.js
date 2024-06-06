// /financing
import Header from "../../objects/Header/Header.js";
import "./financing.css";
import "../transactions/transactions.css";
import { ChevronDown, ChevronUp, DollarSign } from "react-feather";

export default function Financing() {
  return (
    <>
      <Header active={"transactions"} />
      <div id="transactions-main">
        <h2>Financing</h2>
        <p style={{ marginTop: 16, marginBottom: 25 }}>
          You have the option to move funds between your primary wallet and a
          newly created wallet. <br></br>
          Please select your designated wallet you'd like to transfer funds to
          or from.
        </p>

        <div id="trans-child2">
          <div id="trans-child2-header">
            <h3>Transfer History</h3>
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
                <th className="tc2-table-th">From</th>
                <th className="tc2-table-th">To</th>
                <th className="tc2-table-th">Value</th>
                <th className="tc2-table-th">Token</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((elem, index) => (
                <tr key={index}>
                  <td className="tc2-table-td">18:37 | 2/14/2024</td>
                  <td className="tc2-table-td">
                    0x093F9329C93.....C03020FBED29132B22
                  </td>
                  <td className="tc2-table-td">
                    0xF30D3020DB3.....BAD9320B030D2020ED
                  </td>
                  <td className="tc2-table-td">0.49</td>
                  <td
                    className="tc2-table-td"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "0.3em",
                    }}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: 2,
                        backgroundColor: "dodgerblue",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "pink",
                      }}
                    >
                      E
                    </span>
                    <span style={{ color: "pink" }}>Ethereum</span>
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
