// /financing
import Header from "../../objects/Header/Header.js";
import "./financing.css";
import "../transactions/transactions.css";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Mail,
} from "react-feather";
import Wallet from "../../assets/Vector (5) (1).svg";
import Image from "next/image.js";

const ETH = () => {
  return (
    <span
      style={{
        width: "20px",
        height: "20px",
        borderRadius: 5,
        backgroundColor: "dodgerblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "pink",
      }}
    >
      E
    </span>
  );
};

const CARD1 = ({ title, wallet, amount }) => {
  return (
    <div className="financing-sec2-cardgen">
      <div className="financing-sec2-cardgen-header">{title}</div>
      <div className="financing-sec2-cardgen-body">
        <div className="financing-sec2-cardgen-body-header">Address</div>
        <div className="financing-sec2-cardgen-body-l">
          <Image src={Wallet} />
          <span>{wallet}</span>
        </div>
      </div>
      <div className="financing-sec2-cardgen-body">
        <div className="financing-sec2-cardgen-body-header">Balance</div>
        <div className="financing-sec2-cardgen-body-l">
          <ETH />
          <select
            style={{
              width: "100%",
              backgroundColor: "transparent",
              border: "none",
              color: "white",
            }}
          >
            <option>{amount} Ethereum</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default function Financing() {
  return (
    <>
      <Header active={"financing"} />
      <div id="transactions-main">
        <h2>Financing</h2>
        <p style={{ marginTop: 16, marginBottom: 25 }}>
          You have the option to move funds between your primary wallet and a
          newly created wallet. <br></br>
          Please select your designated wallet you'd like to transfer funds to
          or from.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1em",
            flexWrap: "wrap",
          }}
        >
          <CARD1
            title={"Primary Wallet"}
            amount={"12.13"}
            wallet={"0x302FD030F29239F39294292E09F939293020"}
          />
          {/*  */}
          <div className="fs2cm">
            <div
              className="financing-sec2-cardgen-header"
              style={{ textAlign: "center" }}
            >
              Transfer
            </div>
            <div className="financing-sec2-cardgen-body">
              <div
                className="financing-sec2-cardgen-body-header"
                style={{ textAlign: "center" }}
              >
                Amount
              </div>
              <div
                className="financing-sec2-cardgen-body-l"
                style={{
                  justifyContent: "center",
                  width: "100px",
                  margin: "auto",
                  marginBottom: 10,
                }}
              >
                <ETH />
                <span>0.49</span>
              </div>
            </div>
            <div
              className="financing-sec2-cardgen-body-header"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100px",
                margin: "auto",
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ChevronLeft color="pink" width={17} height={17} />
                <ChevronLeft
                  color="pink"
                  width={17}
                  height={17}
                  style={{ marginLeft: -10 }}
                />
              </span>
              <span>To</span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ChevronRight color="rgba(0, 170,0,1)" width={17} height={17} />
                <ChevronRight
                  color="rgba(0, 170,0,1)"
                  width={17}
                  height={17}
                  style={{ marginLeft: -10 }}
                />
              </span>
            </div>
            <div className="financing-sec2-cardgen-body">
              <div
                className="financing-sec2-cardgen-body-l"
                style={{
                  justifyContent: "center",
                  width: "100px",
                  margin: "auto",
                  cursor: "pointer",
                  border: "1px solid pink",
                }}
              >
                Send
              </div>
            </div>
          </div>
          {/*  */}
          <CARD1
            title={"Secondary Wallet"}
            amount={"0.16"}
            wallet={"0x4930F30EDFF030200DBC030300E4030202"}
          />
          {/*  */}
        </div>

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
                    <ETH />
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
