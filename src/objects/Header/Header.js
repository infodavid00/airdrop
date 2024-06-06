import {
  LogOut,
  User,
  Mail,
  HelpCircle,
  Settings,
  DollarSign,
  ArrowLeft,
  ArrowRight,
} from "react-feather";
import "./header.css";
import Link from "next/link";

export default function Header({ active }) {
  const username = "Meruzu_nft";

  return (
    <div id="header-body">
      <div id="header-container">
        <div>
          <h2 style={{ color: "rgba(255,255,255,0.8)" }}>
            Airdrop<br></br> Farming
          </h2>
        </div>
        <div id="header-btn-container">
          <button className="header-btn" id="header-btn-1">
            <User width={18} height={18} strokeWidth={1.8} /> {username}
          </button>
          <button className="header-btn" id="header-btn-2">
            {" "}
            <LogOut width={18} height={18} strokeWidth={1.8} /> Disconnect
          </button>
        </div>
      </div>
      {/* Header main */}
      <div id="header-subcontainer">
        <div id="header-subcont-child">
          <button className="header-nav-list">
            <Mail color={"pink"} width={20} height={20} />{" "}
            <Link
              href="/wt"
              className={
                active === "wt"
                  ? "header-nl-title header-nl-title-active"
                  : "header-nl-title"
              }
            >
              Wallet Tracker
            </Link>
          </button>
          <button className="header-nav-list">
            <DollarSign color={"pink"} width={20} height={20} />{" "}
            <Link
              href="/financing"
              className={
                active === "financing"
                  ? "header-nl-title header-nl-title-active"
                  : "header-nl-title"
              }
            >
              Financing
            </Link>
          </button>
          <button className="header-nav-list">
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowRight color={"pink"} width={20} height={10} />
              <ArrowLeft color={"pink"} width={20} height={10} />
            </span>{" "}
            <Link
              href="/transactions"
              className={
                active === "transactions"
                  ? "header-nl-title header-nl-title-active"
                  : "header-nl-title"
              }
            >
              Transactions
            </Link>
          </button>
          <button className="header-nav-list">
            <Settings color={"pink"} width={20} height={20} />{" "}
            <Link
              href="/config"
              className={
                active === "config"
                  ? "header-nl-title header-nl-title-active"
                  : "header-nl-title"
              }
            >
              Configurations
            </Link>
          </button>
        </div>

        <Link
          href={"/help"}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.3em",
            textDecoration: "underline",
            fontSize: 15,
            color: "rgba(255,255,255,0.8)",
            whiteSpace: "nowrap",
          }}
        >
          <HelpCircle width={20} height={20} /> Help Center
        </Link>
        {/* help center */}
      </div>
      {/* Header sub */}
    </div>
  );
}
