// /financing
import {
  ArrowLeft,
  ArrowRight,
  BarChart,
  ChevronDown,
  Mail,
  Search,
  X,
} from "react-feather";
import Header from "../../objects/Header/Header.js";
import "./wt.css";
import Link from "next/link.js";

const displayBp = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1em",
};

const WtCard1Header2 = () => {
  return (
    <div id="wt-card1-head2">
      <div style={displayBp}>
        <Mail strokeWidth={1.3} />
        <span>0x492949F9......2949229492935C</span>
      </div>
      <div style={displayBp}>
        <span
          style={{
            background: "white",
            width: 20,
            height: 20,
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowLeft width={9} height={9} color={"black"} />
          <ArrowRight width={9} height={9} color={"black"} />
        </span>
        <span style={{ fontWeight: 600 }}>Protocol:</span>
        <span style={{ fontWeight: 700, color: "dodgerblue" }}>ZKSync</span>
      </div>
      <div style={displayBp}>
        <button className="wt-card1-head2-child3-btn">Alert</button>
        <button className="wt-card1-head2-child3-btn">Abort</button>
        <input type="checkbox" id="" />
        <ChevronDown color="pink" width={20} height={20} />
        <X color="pink" width={18} height={18} />
      </div>
    </div>
  );
};

const WtCard1Main = ({ proto }) => {
  return (
    <div className="wt-card1-main">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "1em",
        }}
      >
        <input type="checkbox" id="" checked="true" />
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
            <Mail strokeWidth={1.3} />
            <span>0x492949F940F92939FS2949229492935C</span>
          </div>

          <div style={displayBp}>
            <span
              style={{
                background: proto === "Scroll" ? "white" : "dodgerblue",
                width: 20,
                height: 20,
                borderRadius: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowLeft width={9} height={9} color={"black"} />
              <ArrowRight width={9} height={9} color={"black"} />
            </span>
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
            <BarChart strokeWidth={1.3} />
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
          {/* card 1 */}
          <div>
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
            <WtCard1Main proto={"Scroll"} />
            <WtCard1Header2 />
            <WtCard1Main proto={"Base"} />
          </div>
          {/* card 1 */}
          <div></div>
          {/* card 2 */}
        </div>
      </div>
    </>
  );
}
