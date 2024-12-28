import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const usePreventScroll = (isLoading) => {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isLoading]);
};

const Hero = () => {
  const [currrentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 3;
  const nextVideoRef = useRef(null);

  usePreventScroll(isLoading);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currrentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currrentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(50% 0%, 100% 0%, 88% 81%, 17% 96%, 0% 0%)",
      borderRadius: "20% 0 30% 0",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;

  useEffect(() => {
    if(isLoading) return;
      const timer = setTimeout(() => {
        setHasClicked(true);
      }, 100);
      return () => clearTimeout(timer);
  }, [isLoading]);

  useEffect(() => {
    if (isHovered) {
      setHasClicked(false);
    }
  }, [isHovered]);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-black">
          <div className="loader"></div>
        </div>
      )}

      <div
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
        id="video-frame"
      >
        <div className="">
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              className={`origin-center transition-all duration-500 ease-in ${
                hasClicked ? "opacity-0 scale-50" : "opacity-100 scale-100"
              } hover:scale-100 hover:opacity-100`}
              onClick={handleMiniVdClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currrentIndex)}
            loop
            muted
            playsInline
            autoPlay
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currrentIndex === totalVideos - 1 ? 1 : currrentIndex
            )}
            playsInline
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          W<b>E</b>bdev
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Full St<b>a</b>ck
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Axellerosh
              <br />
              Lubi
            </p>
            <a href="mailto:lubi.axellerosh@gmail.com">
              <Button
                id="watch-trailer"
                title="Drop a message"
                leftIcon={<TiLocationArrow />}
                containerClass="!bg-yellow-300 flex-center gap-1"
              />
            </a>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        W<b>e</b>bdev
      </h1>
    </div>
  );
};

export default Hero;
