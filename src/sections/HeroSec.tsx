import { Button } from "@/ui/button";
import Marquee from "react-fast-marquee";
import pdp from "@/assets/pdp.png";
import imagine from "@/assets/Imagine logo.png";
import skillhouse from "@/assets/skillhouse.png";
import schbang from "@/assets/Schbang Logo_Main.png";
import level from "@/assets/levellogo.png";
import bgVideo from "@/assets/vids/bg-video.mp4";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="
        relative w-full 
        min-h-[650px] sm:min-h-[720px] lg:h-[1024px]
        overflow-hidden 
        gpu-layer 
        flex items-center justify-center 
        font-sans
      "
      style={{ backgroundColor: "#fff9de", fontFamily: "Sora" }}
    >
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          {...{ 'webkit-playsinline': 'true' } as any}
          {...{ 'x5-video-player-type': 'h5' } as any}
          {...{ 'x5-video-player-fullscreen': 'false' } as any}
          className="w-full h-full object-cover"
          style={{ pointerEvents: 'none' }}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>

      {/* TOP Fade (STRONGER + BIGGER) */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-b from-[#fff9de] to-transparent z-[2]" />

      {/* BOTTOM Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 sm:h-56 lg:h-80 bg-gradient-to-b from-transparent via-[#fff9de]/70 to-white z-[3]" />

      {/* MAIN CENTER CONTENT */}
      <div
        className="
          relative z-[4] 
          w-full 
          text-center 
          space-y-4 sm:space-y-5 
          pt-16 sm:pt-20 lg:pt-24
          pb-28 sm:pb-40 lg:pb-48
          lg:-translate-y-10
          px-4 sm:px-6
        "
      >
        {/* TITLE */}
        <h1
          className="
            font-semibold leading-tight text-neutral-900 w-full
            text-[1.9rem] 
            sm:text-[clamp(2.1rem,4.2vw+1rem,3.6rem)]
            mt-8 sm:mt-0
          "
        >
          Drive <span className="font-semibold">3–5X Revenue</span> with
          <br />
          <span className="font-semibold">
            <span style={{ color: "#009926" }}>AI + WhatsApp Marketing</span>
          </span>
        </h1>

        {/* SUBTEXT */}
        <div
          className="leading-relaxed text-center font-medium w-full"
          style={{
            color: "#858771",
            fontSize: "clamp(0.95rem, 1.2vw + 0.25rem, 1.2rem)",
            textShadow: "0 1px 2px rgba(0,0,0,0.18)",
          }}
        >
          <p>
            Schbang crafts strategic, automated WhatsApp marketing designed to
            generate leads, build loyalty, and
            <br className="hidden sm:inline" /> scale your brand&apos;s success.
          </p>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4 w-full">
          <a href="https://calendly.com/wa-schbang/new-meeting?month=2025-12" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="
                w-full sm:w-auto 
                h-11 sm:h-12
                px-7 sm:px-9
                rounded-2xl 
                font-semibold
                bg-transparent
                text-neutral-900 
                border border-neutral-300 
                shadow-sm
              "
              style={{
                fontSize: "clamp(0.95rem, 1.1vw + 0.25rem, 1.15rem)",
                fontFamily:
                  "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              }}
            >
              Contact Now
            </Button>
          </a>

          {/* TRY DEMO */}
          <div className="w-full sm:w-auto text-center">
            <a
              href="https://calendly.com/wa-schbang/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="
                  w-full sm:w-[230px]
                  h-11 sm:h-12 
                  px-9
                  rounded-2xl 
                  text-white 
                  font-semibold
                  bg-[#00c732] 
                  hover:bg-[#00b02c] 
                  backdrop-blur-md 
                  border border-white/30 
                  ring-1 ring-white/20 
                  shadow-md
                "
                style={{
                  fontSize: "clamp(0.95rem, 1.1vw + 0.25rem, 1.15rem)",
                  fontFamily:
                    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                }}
              >
                Try Demo
              </Button>
            </a>

            <div
              className="mt-2 font-medium"
              style={{
                color: "#858771",
                fontSize: "clamp(0.78rem, 1vw + 0.2rem, 0.95rem)",
                textShadow: "0 1px 2px rgba(0,0,0,0.18)",
              }}
            >
              {/* Takes 30 secs */}
            </div>
          </div>
        </div>
      </div>

      {/* MARQUEE + Trusted text */}
      <div
        className="
          absolute 
          left-0 w-full 
          z-[5] 
          flex flex-col items-center 
          gap-2 sm:gap-4 lg:gap-6
          bottom-10 sm:bottom-20 lg:bottom-32
        "
      >
        {/* Trusted by text */}
        <div
          className="font-medium text-center w-full"
          style={{
            color: "#858771",
            fontSize: "clamp(0.9rem, 1vw + 0.3rem, 1.2rem)",
            textShadow: "0 1px 2px rgba(0,0,0,0.18)",
          }}
        >
          Trusted by 50+ brands
        </div>

        {/* MARQUEE */}
        <div className="w-full">
          <Marquee
            speed={40}
            gradient={false}
            pauseOnHover
            autoFill
            className="py-1 w-full"
          >
            {[pdp, imagine, skillhouse, schbang, level].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="client logo"
                className="w-auto object-contain mx-4 sm:mx-8 lg:mx-14"
                style={{
                  height:
                    idx === 0 || idx === 2
                      ? "clamp(2.4rem, 4vw, 4.4rem)"
                      : "clamp(1.6rem, 2.8vw, 3rem)",
                }}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
