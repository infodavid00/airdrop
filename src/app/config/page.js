// /config
import { Bell, Calendar } from "react-feather";
import Header from "../../objects/Header/Header.js";
import "./config.css";
import Profile from "../../assets/PFP 1.png";
import Image from "next/image.js";
import Setting from "../../assets/Settings Icon.svg";
import Dollar from "../../assets/Vector.svg";
import Download from "../../assets/Vector (10).svg";
import Wallet from "../../assets/Vector (5) (1).svg";

export default function Config() {
  const username = "meruzu_nft";
  const primartWallet = "0x4D..........F301ECC301A20E302040F939F";
  const subscription = "50 Wallets/6 Months";
  const subscriptionEnds = "08/21/2024";
  const notifications = [
    {
      type: "Error Notification",
      time: "14:24",
      date: "02/27/2024",
      message:
        "There was an error during the exchange process while swapping 91 USDT for 0.028 ETH through Syncswap.",
    },
    {
      type: "Subscriptions",
      time: "14:24",
      date: "02/27/2024",
      message:
        "Your billing of $1300, has been approved and your subscription has been extended until 08/21/2024",
    },
  ];
  // dynamic contents

  const settings = [
    {
      icon: () => <Image src={Setting} />,
      name: "General",
      description: "View and edit your AirdropFarming settings.",
      to: "/config",
    },
    {
      icon: () => <Calendar width={20} height={20} />,
      name: "Subscriptions",
      description: "View and edit your subscriptions.",
      to: "/config",
    },
    {
      icon: () => <Bell width={20} height={20} />,
      name: "Notifications",
      description: "Manage notifications sent to you.",
      to: "/config",
    },
    {
      icon: () => <Image src={Wallet} />,
      name: "Wallets",
      description: "View and edit your wallet settings.",
      to: "/config",
    },
    {
      icon: () => <Image src={Dollar} />,
      name: "Billing",
      description: "Manage your billing information.",
      to: "/config",
    },
    {
      icon: () => <Image src={Download} />,
      name: "Download History",
      description: "Download your transaction history.",
      to: "/config",
    },
  ];
  //  static contents

  return (
    <>
      <Header active={"config"} />
      <div id="config-body-main">
        <h2>Configurations</h2>
        <p style={{ marginTop: 16, marginBottom: 25 }}>
          Here you can review your user profile and notifications, and also
          customize the settings within the AirdropFarming Platform.
        </p>
        {/* section 1 */}

        <div id="config-section2">
          <div className="config-section2-card">
            <div className="config-section2-card-header">
              <h3>User Profile</h3>
            </div>
            <div style={{ padding: 10 }}>
              <div className="config-section2-card-content-body">
                <div id="config-section2-card-content-panel1">
                  {/* <div id="cs2ccp1-profile"></div> */}
                  <Image src={Profile} id="cs2ccp1-profile" />
                  <h3 style={{ marginTop: 10 }}>{username}</h3>
                </div>
                <div
                  style={{
                    padding: 7,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <div>
                    <h4 style={{ marginBottom: 3 }}>Primary Wallet:</h4>
                    <div style={{ wordBreak: "break-word" }}>
                      {primartWallet}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ marginBottom: 3 }}>Subscription:</h4>
                    <div>{subscription}</div>
                  </div>
                  <div>
                    <h4 style={{ marginBottom: 3 }}>Subscription Ends:</h4>
                    <div>{subscriptionEnds}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card1 */}

          <div className="config-section2-card">
            <div className="config-section2-card-header">
              <h3>Recent Notifications</h3>
            </div>
            <div style={{ padding: 10 }}>
              <div className="config-section2-card-content-body">
                {notifications.map((elem, index) => (
                  <div
                    key={index}
                    className="cs2ccb-p2"
                    style={{
                      border: index + 1 === notifications.length && "none",
                    }}
                  >
                    <Bell
                      color={
                        elem.type !== "Error Notification"
                          ? "rgba(0,150,0,1)"
                          : "tomato"
                      }
                      style={{ alignSelf: "flex-start", width: 50 }}
                    />
                    <div>
                      <div className="cs2ccb-p2-header">
                        <span style={{ fontWeight: 600 }}>{elem.type}</span>
                        <span style={{ color: "rgba(255,255,255,0.6)" }}>
                          {elem.time}
                        </span>
                        <span style={{ color: "rgba(255,255,255,0.6)" }}>
                          {elem.date}
                        </span>
                      </div>
                      <div
                        style={{
                          color: "rgba(255,255,255,0.6)",
                          paddingBottom: 10,
                          paddingTop: 5,
                        }}
                      >
                        {" "}
                        {elem.message}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* card2 */}

          <div className="config-section2-card" style={{ width: "100%" }}>
            <div className="config-section2-card-header">
              <h3>Platform Settings</h3>
            </div>
            <div className="config-section2-card-body">
              {settings.map((elem, index) => (
                <div key={index} className="config-section2-card-list">
                  <div className="config-section2-card-list-icon">
                    {elem.icon()}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700 }}>{elem.name}</div>
                    <div>{elem.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* card3 */}
        </div>
        {/* section 2 */}
      </div>
    </>
  );
}
