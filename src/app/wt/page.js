// /financing
import { ChevronDown, Maximize, Search, Share, Trash2, X } from "react-feather";
import Header from "../../objects/Header/Header.js";
import "./wt.css";
import Link from "next/link.js";
import Wallet from "../../assets/Vector (5) (1).svg";
import Arrow from "../../assets/ZKSync.png";
import Status from "../../assets/Vector (2).svg";
import Log2 from "../../assets/Base.png";
import Scroll from "../../assets/Scroll.png";
import Transaction from "../../assets/Vector (1).svg";
import Image from "next/image.js";

const displayBp = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1em",
};

const CheckBox = ({ checked }) => {
  return (
    <>
      <label class="custom-checkbox">
        <input type="checkbox" checked={checked} />
        <span class="checkmark"></span>
      </label>
    </>
  );
};

const WtCard1Header2 = () => {
  return (
    <div id="wt-card1-head2">
      <div style={displayBp}>
        <Image src={Wallet} />
        <span style={{ fontSize: "15px" }}>0x492949F9......2949229492935C</span>
      </div>
      <div style={displayBp}>
        <Image src={Arrow} />
        <span style={{ fontWeight: 600 }}>Protocol:</span>
        <span style={{ fontWeight: 700, color: "dodgerblue" }}>ZKSync</span>
      </div>
      <div style={displayBp}>
        <button className="wt-card1-head2-child3-btn">Alert</button>
        <button className="wt-card1-head2-child3-btn">Abort</button>
        <CheckBox />
        <ChevronDown color="pink" width={20} height={20} />
        <X color="pink" width={18} height={18} />
      </div>
    </div>
  );
};

const WtCard1Main = ({ proto, amFirst }) => {
  return (
    <div className="wt-card1-main" id={amFirst && "wt-card1-active"}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "1em",
        }}
      >
        <CheckBox checked={true} />
        <ChevronDown color="pink" width={20} height={20} />
        <X color="pink" width={18} height={18} />
      </div>
      {/*  */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            ...displayBp,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "1em",
          }}
        >
          <div style={displayBp}>
            <Image src={Wallet} />
            <span style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
              0x492949F940F92939FS294922949C
            </span>
          </div>

          <div style={displayBp}>
            <Image src={proto === "Scroll" ? Scroll : Log2} />
            <span style={{ fontWeight: 700 }}>Protocol:</span>
            <span
              style={{
                fontWeight: 700,
                color: proto === "Scroll" ? "white" : "dodgerblue",
              }}
            >
              {proto}
            </span>
          </div>

          <div style={displayBp}>
            <Image src={Status} />
            <span style={{ fontWeight: 700 }}>Status:</span>
            <button
              className="wt-card1-head2-child3-btn wt-c1-mc"
              style={{
                border: proto === "Scroll" ? "1px solid green" : "none",
              }}
            >
              Active
            </button>
            <button
              className="wt-card1-head2-child3-btn wt-c1-mc"
              style={{
                border: proto !== "Scroll" ? "1px solid green" : "none",
              }}
            >
              Pause
            </button>
            <button className="wt-card1-head2-child3-btn wt-c1-mc">
              Abort
            </button>
          </div>

          <div style={displayBp}>
            <Search strokeWidth={1.3} />
            <Link
              href="/wt"
              style={{ fontWeight: 700, textDecoration: "underline" }}
            >
              Properties:
            </Link>
          </div>
        </div>
        <div id="wt-card1-main-graph"></div>
      </div>
    </div>
  );
};

export default function WalletTracker() {
  return (
    <>
      <Header active={"wt"} />
      <div id="wt">
        <div id="wt-body-main">
          <div id="wtc1">
            {/* card 1 */}
            <div id="wt-card1-head1">
              <div style={{ fontWeight: 700 }}>Connected Wallets</div>
              <div className="wt-card1-head1-children">
                <span>Protocol:</span>
                <select>
                  <option value="All">All</option>
                </select>
              </div>
              <div className="wt-card1-head1-children">
                <span>Status:</span>
                <select>
                  <option value="All">All</option>
                </select>
              </div>
              <div className="wt-card1-head1-children">
                <span>Balance:</span>
                <select>
                  <option value="High to low">High to low</option>
                </select>
              </div>
            </div>
            {/*  */}
            <WtCard1Header2 />
            <WtCard1Main proto={"Scroll"} amFirst={true} />
            <WtCard1Header2 />
            <WtCard1Main proto={"Base"} />
          </div>
          {/* card 1 */}
          {/*  */}
          <div id="wtc2">
            <div id="wtc2-header">
              <button className="wtc2-btn">
                {" "}
                <Share
                  width={18}
                  style={{ transform: "rotateZ(180deg)" }}
                />{" "}
                Import
              </button>
              <button className="wtc2-btn">
                {" "}
                <Share width={18} /> Export
              </button>
              <button className="wtc2-btn">
                {" "}
                <Trash2 width={18} /> Delete
              </button>
            </div>
            {/*  */}
            <div id="wtc2-child">
              <div id="wtc2-child-header">
                <h3>Wallet Properties</h3>
              </div>
              <div id="wtc2-child-child">
                <div className="wtc2-child-clist">
                  <div className="wtc2-child-clist-header">
                    Address <Maximize width={18} />
                  </div>
                  <div className="wtc2-child-clist-body">
                    <Image src={Wallet} width={17} />
                    <span className="wtc2-child-clist-body-t">
                      0xB323B28128FEF9392B22399EF0B0302
                    </span>
                  </div>
                </div>
                {/*  */}
                <div className="wtc2-child-clist">
                  <div className="wtc2-child-clist-header">
                    Select Protocol <Maximize width={18} />
                  </div>
                  <div className="wtc2-child-clist-body w2ccb-dd">
                    <div className="w2ccb-dd1">
                      <Image src={Scroll} width={18} />
                      <span>Scroll</span>
                    </div>
                    <select
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        outline: "none",
                      }}
                    >
                      <option>
                        <span className="wtc2-child-clist-body-t">
                          Native zkEVM Layer 2
                        </span>
                      </option>
                    </select>
                  </div>
                </div>
                {/*  */}
                <div className="wtc2-child-clist">
                  <div className="wtc2-child-clist-header">
                    Specify Condition <Maximize width={18} />
                  </div>
                  <div className="wtc2-child-clist-body w2ccb-dd">
                    <div className="w2ccb-dd1">
                      <Image src={Status} width={18} />
                      <span style={{ color: "rgba(0,150,0,1)" }}>Active</span>
                    </div>
                    <select
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none",
                        outline: "none",
                        color: "rgba(0,150,0,1)",
                      }}
                    >
                      <option>
                        <span className="wtc2-child-clist-body-t">
                          Processing Transactions
                        </span>
                      </option>
                    </select>
                  </div>
                </div>
                {/*  */}
                <div className="wtc2-child-clist">
                  <div className="wtc2-child-clist-header">
                    Balance <Maximize width={18} />
                  </div>
                  <div className="wtc2-child-clist-body w2ccb-dd">
                    <div className="w2ccb-dd1">
                      <Image src={Log2} width={18} />
                      <span>18.43 Ethereum</span>
                    </div>
                    <div>$53727.50</div>
                  </div>
                </div>
                {/*  */}
                <div className="wtc2-child-clist">
                  <div className="wtc2-child-clist-header">
                    Transactions <Maximize width={18} />
                  </div>
                  <div className="wtc2-child-clist-body w2ccb-dd">
                    <div className="w2ccb-dd1">
                      <Image src={Transaction} width={18} />
                      <span>1989</span>
                    </div>
                    <div>Transactions Processed</div>
                  </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="wtc2-child-clist">
                  <div className="wtc2-child-clist-header">
                    Transaction Rate <Maximize width={18} />
                  </div>
                  <div className="wtc2-child-clist-body w2ccb-dd">
                    <div
                      style={{
                        backgroundColor: "green",
                        padding: 4,
                        width: "47%",
                        borderRadius: 5,
                        textAlign: "center",
                      }}
                    >
                      {" "}
                      47%
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
          {/* card 2 */}
        </div>
      </div>
    </>
  );
}
