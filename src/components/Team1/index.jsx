/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/founder.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                 Founder 
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Mr. Oghenekaro Akarue is a Delta State born businessman and a philanthropist, he is the Chairman/CEO of Ethan Media Nigeria Limited whose headquarters is in Lagos.

In this interview with the CEO, he took us through the journey of how he started his media company and how he is changing the face of the media industry to become the new face of media.

Prior to founding Ethan Media Limited, Mr Akarue was expatriate managing director of Plumb Line Global Services, Ghana.
                </p>
              </Split>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
