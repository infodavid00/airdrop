import { Mail, HelpCircle } from "react-feather";
import "./header.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo 1.png";
import UserCircle from "../../assets/Vector (4).svg";
import Exit from "../../assets/Vector (5).svg";
import Transaction from "../../assets/Vector (1).svg";
import Dollar from "../../assets/Vector.svg";
import Setting from "../../assets/Settings Icon.svg";
import Wallet from "../../assets/Vector (5) (1).svg";

export default function Header({ active }) {
  const username = "Meruzu_nft";

  return (
    <div id="header-body">
      <div id="header-container">
        <div id="header-cont1">
          <Image id="header-cont1-img" src={Logo} />
          <h2 style={{ color: "rgba(255,255,255,0.8)" }} id="header-cont1-h">
            Airdrop<br></br> Farming
          </h2>
        </div>
        <div id="header-btn-container">
          <button className="header-btn" id="header-btn-1">
            <Image src={UserCircle} /> {username}
          </button>
          <button className="header-btn" id="header-btn-2">
            {" "}
            <Image src={Exit} /> Disconnect
          </button>
        </div>
      </div>
      {/* Header main */}
      <div id="header-subcontainer">
        <div id="header-subcont-child">
          <button className="header-nav-list">
            <Image src={Wallet} />
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
            <Image src={Dollar} />{" "}
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
            <Image src={Transaction} />
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
            <Image src={Setting} />{" "}
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
            color: "white",
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
