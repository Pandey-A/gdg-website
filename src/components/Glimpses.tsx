"use client";

import { useEffect } from "react";
import { Hubot_Sans, } from "next/font/google";

import Image from "next/image";

import Heading from "../components/ui/Heading";

const hubot = Hubot_Sans({
  subsets: ["latin"],
  weight: ["800", "700"],
});

const Panorama: React.FC = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://panorama-slider.uiinitiative.com/assets/index.c1d53924.css";
    document.head.appendChild(link);

    const preloadLink = document.createElement("link");
    preloadLink.rel = "modulepreload";
    preloadLink.href =
      "https://panorama-slider.uiinitiative.com/assets/vendor.dba6b2d2.js";
    document.head.appendChild(preloadLink);

    const script = document.createElement("script");
    script.type = "module";
    script.crossOrigin = "anonymous";
    script.src =
      "https://panorama-slider.uiinitiative.com/assets/index.d2ce9dca.js";
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(preloadLink);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className=" py-20" id="glimpses">
        {/* <div
                    className="relative flex justify-center items-center my-3" style={{ height: 205 }} >
                    <Image className="absolute" src={Bgimage} alt="bgimage" width={200} height={200} />
                    <h2 className={`${mona.className} text-center text-6xl`}>GLIMPSES</h2>
                </div> */}
        <div
          className="relative flex justify-center items-center mb-10"
          style={{ height: 205 }}
        >
          <Heading title="GLIMPSES" geometry="Sphere" />{" "}
        </div>
        <p className="text-center text-lg" style={hubot.style}>
          A sneak peek into the innovation, energy, and
        </p>
        <p className={` ${hubot.style} text-center text-lg`}>
          brilliance that shaped last year&apos;s incredible
         event experience!
        </p>
        <h1
          className="text-center font-extrabold text-4xl md:text-7xl my-3 "
          style={hubot.style}
        >
          GDG&apos;24
        </h1>
        <div className="panorama-slider">
          <div className="swiper">
            <div className="swiper-wrapper">
            <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Memories/image04.png"
                  alt="image07"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Memories/image03.png"
                  alt="image07"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Memories/image02.png"
                  alt="image07"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Memories/image08.png"
                  alt="image07"
                  width={200}
                  height={100}
                />
              </div>
            <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Memories/image07.png"
                  alt="image07"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Memories/image06.png"
                  alt="image07"
                  width={200}
                  height={100}
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="slide-image"
                  src="/Memories/image05.png"
                  alt="image07"
                  width={200}
                  height={100}
                />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>

        </div>
        <div className="flex justify-center items-center">

          <p className="text-center pr-2 pl-4" style={hubot.style}>
            Swipe Left
          </p>
          <Image
            src="/Glimpsesimages/arrow.png"
            alt="arrow"
            width={20}
            height={10}
          />
        </div>
      </div>
    </>
  );
};

export default Panorama;