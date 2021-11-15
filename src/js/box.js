import React, { useState } from "react";
import "../css/box.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
let toggle = () => {
  let detail = document.querySelector(".event-details");
  detail.classList.toggle("details-active");
  let events = document.querySelector(".up-events-content");
  events.classList.toggle("blur");
};

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h3>Socail Media Feeds</h3>
      </div>

      <div className="rectangle">
        <div className="ions">
          <a href="#" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
        </div>

        <div className=" fb">
          <h2>FACEBOOK FEEDS</h2>

          <div className="up-events">
            ==
            <div className="container">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBytecodeLearners-103644071079006%2F&tabs=timeline&width=310&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>

      </div>

      <div className="rectangle1">
        <div className=" inst">
          <div className="ions">
            <a href="#" className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </div>

          <h2>INSTAGRAM FEEDS</h2>
          <scrollbar>
            <div className="up-events">
              ==
              <div className="container">
                <div className="scroller">
                  <ul>
                    <script
                      src="https://apps.elfsight.com/p/platform.js"
                      defer
                    ></script>
                    <div class="elfsight-app-374005f4-2ae5-4d39-a083-d8f560628e8c">
                      </div>
                  </ul>
                </div>
              </div>
            </div>
          </scrollbar>
        </div>
      </div>

      <div className="rectangle2">
        <div className=" twit">
          <div className="ions">
            <a
              href="https://twitter.com/ByteCodeLearner?ref_src=twsrc%5Etfw"
              className="twitter social"
            >
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
          </div>

          <h2>TWITTER FEEDS</h2>
          <div className="container">
            <div className="scroller">
              <ul>
                <a
                  class="twitter-timeline"
                  href="https://twitter.com/ByteCodeLearner?ref_src=twsrc%5Etfw"
                >
                  Tweets by ByteCodeLearner
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"
                ></script>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>

    //   </div>
  );
}
export default App;
