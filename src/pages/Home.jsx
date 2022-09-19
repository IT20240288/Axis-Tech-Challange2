import React, { useEffect, useState } from "react";
import "./Styles.css";
import photo from "./images/Frame 2 (1).png";
import photo2 from "./images/Success 3 1.png";
import axios from "axios";
import photo3 from "./images/Illustration.png";
import photo4 from "./images/Group 2.png";
import photo5 from "./images/Logo.png";
import photo6 from "./images/sun.png";

export default function Home() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [pay, setPay] = useState(false);
  const [dark, setDark] = useState(false);

  const getData = async () => {
    // {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //       "X-Api-Key": "dev"
    //     }
    //   }
    try {
      const res = await axios.get(
        "https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/fundraising"
      );
      if (res.status === 200) {
        console.log("data", res);
        setData(res.data);
      }
    } catch (e) {
      console.log("error", e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className={
        dark
          ? `${(document.body.className = "dark")}`
          : `${(document.body.className = "light")}`
      }
    >
      <div className="header">
        <div>
          <img
            src={photo5}
            alt="pic"
            width={263.31}
            height={55.31}
            className="Img"
          />
        </div>
        <div className="darkBtnContainer">
          <img
            src={photo6}
            alt="pic"
            width={263.31}
            height={55.31}
            className="Img6"
          />
          <label class="switch">
            <input type="checkbox" onClick={() => setDark(!dark)} />
            <span class="slider round"></span>
          </label>
        </div>
      </div>

      <div className="rectangle">
        <img
          src={photo3}
          alt="pic"
          className="img1"
          style={{
            borderRadius: 10,
            width: "367.1px;",
            height: "266px;",
            left: "192px;",
            top: "202px;",
            gap: "10px;",
            padding: "0px;"
          }}
        />

        <div className="h1">We want give them a better tommorow!</div>
        <div className="h2">
          {" "}
          Lorem lpsum is simply dummy text of the printing and typesetting
          industry. Lorem lpsum has been the industry's standard dummy text ever
          since the 1500s{" "}
        </div>
        <button className="startBtn">Get Started</button>
      </div>

      <div>
        <img
          src={photo4}
          alt="pic"
          className="img4"
          width={46}
          height={44}
          style={{ borderRadius: 10 }}
        />
      </div>

      <div
        className="h3"
        style={!dark ? { color: "#000" } : { color: "#C6C7CD" }}
      >
        Projects
      </div>

      <div className="cardContainer">
        {!visible ? (
          <div className="card">
            <img
              src={photo}
              alt="pic"
              width={336}
              height={174}
              left={593}
              top={609}
              style={{ borderRadius: 10, left: "593px;", top: "609px" }}
            />
            <div style={{ margin: "17px 0 22px 0", width: 330 }}>
              <span className="title1">Build school Wellawaya Sri Lanka</span>
            </div>
            <div className="progressBar" />
            <div className="fundAmount">
              <span style={{ fontSize: 16, fontWeight: "bold" }}>$ 6000</span>
              <span style={{ fontSize: 12, marginLeft: 5 }}>Raised</span>
            </div>
            <button className="donateBtn" onClick={() => setVisible(true)}>
              Donate Now
            </button>
          </div>
        ) : (
          <>
            {!pay ? (
              <div className="card">
                <button className="closeBtn" onClick={() => setVisible(false)}>
                  X
                </button>
                <div>
                  <h3>Select the amount that you want to donate</h3>
                </div>
                <div>
                   {" "}
                  <input
                    className="radioBtn"
                    type="radio"
                    id="$10"
                    name="fav_language"
                    value="$10"
                  />
                   {" "}
                  <label className="label" for="$10">
                    $10
                  </label>
                  <br />
                   {" "}
                  <input
                    className="radioBtn"
                    type="radio"
                    id="$50"
                    name="fav_language"
                    value="$50"
                  />
                   {" "}
                  <label className="label" for="510">
                    $50
                  </label>
                  <br /> {" "}
                  <input
                    className="radioBtn"
                    type="radio"
                    id="$100"
                    name="fav_language"
                    value="$100"
                  />
                   {" "}
                  <label className="label" for="$100">
                    $100
                  </label>
                  <br /> {" "}
                  <input
                    className="radioBtn"
                    type="radio"
                    id="$500"
                    name="fav_language"
                    value="$500"
                  />
                   {" "}
                  <label className="label" for="$500">
                    $500
                  </label>
                  <br /> {" "}
                  <input
                    className="radioBtn"
                    type="radio"
                    id="$1000"
                    name="fav_language"
                    value="$1000"
                  />
                   {" "}
                  <label className="label" for="$1000">
                    $1000
                  </label>
                  <br />
                </div>
                <button className="payBtn" onClick={() => setPay(true)}>
                  Pay Now
                </button>
              </div>
            ) : (
              <div className="card">
                <img
                  src={photo2}
                  alt="pic"
                  width={293}
                  height={233}
                  className="doneImg"
                />
                <div>
                  <span className="doneTitle">
                    You have successfully made the donation!
                  </span>
                </div>
                <button
                  className="doneBtn"
                  onClick={() => {
                    setPay(false);
                    setVisible(false);
                  }}
                >
                  Done
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
