// /transactions

import { ArrowDown, ArrowRight } from "react-feather";
import Header from "../../objects/Header/Header.js";
import "./help.css";

export default function Help() {
  return (
    <>
      <Header active={""} />
      <div id="transactions-main">
        <h2 style={{ color: "white" }}>Frequently Asked Question</h2>
        <p style={{ marginTop: 16, marginBottom: 25, color: "white" }}>
          Here is a compilation of commonly asked questions. <br></br>
          If your problem continues, you can contact our team by sending a
          message at the bottom of this page.
        </p>

        <div className="help-body">
          <h3 className="help-q">
            <ArrowDown className="help-arrow" /> What cryptocurrencies or tokens
            are supported in the Airdrop Farming Software?
          </h3>
          <p className="help-a">
            The Airdrop Farming software company supports a variety of
            protocols, allowing users to farm various cryptocurrencies and
            tokens. As of now, the supported protocols include Base, Linea,
            Scroll, ZKSync. <br></br> <br></br>
            These protocols enable users to engage in Airdrop Farming activities
            with a diverse range of digital assets, providing flexibility and
            choice in thier farming strategies.
          </p>
        </div>
        {/*  */}

        <div className="help-body" style={{ borderTop: "none" }}>
          <h3 className="help-q">
            <ArrowDown className="help-arrow" /> What are the risks associated
            with Airdrop Farming?
          </h3>
          <p className="help-a">
            The Airdrop Farming software company supports...
          </p>
        </div>
        {/*  */}

        <form id="help-form">
          <div>
            <h3 style={{ color: "white" }}>Helpdesk</h3>
          </div>
          <input type="email" placeholder="E-mail" className="help-form-inp" />
          <input type="text" placeholder="Topic" className="help-form-inp" />
          <textarea
            placeholder="Please type your question here"
            className="help-form-inp"
            style={{ resize: "none", height: " 100px" }}
          ></textarea>
          <button id="help-form-btn">Send</button>
        </form>
      </div>
    </>
  );
}
