import { useRef, useEffect, useState } from "react";

// Import carousel images
import whatsapp1 from "@/assets/whatsapp/Whatsapp1.png";
import whatsapp2 from "@/assets/whatsapp/Whatsapp2.png";
import whatsapp3 from "@/assets/whatsapp/Whatsapp3.png";
import whatsapp4 from "@/assets/whatsapp/Whatsapp4.png";
import whatsapp5 from "@/assets/whatsapp/Whatsapp5.png";
import whatsapp6 from "@/assets/whatsapp/Whatsapp6.png";
import whatsapp7 from "@/assets/whatsapp/Whatsapp7.png";

const carouselImages = [
    { id: 1, src: whatsapp1, alt: "WhatsApp Action 1" },
    { id: 2, src: whatsapp2, alt: "WhatsApp Action 2" },
    { id: 3, src: whatsapp3, alt: "WhatsApp Action 3" },
    { id: 4, src: whatsapp4, alt: "WhatsApp Action 4" },
    { id: 5, src: whatsapp5, alt: "WhatsApp Action 5" },
    { id: 6, src: whatsapp6, alt: "WhatsApp Action 6" },
    { id: 7, src: whatsapp7, alt: "WhatsApp Action 7" },
];

const Carousel2 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile view
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !carouselRef.current) return;

            const container = containerRef.current;
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const sectionTop = rect.top;
            const sectionHeight = container.offsetHeight - windowHeight;

            if (sectionTop <= 0 && sectionTop >= -sectionHeight) {
                const progress = Math.abs(sectionTop) / sectionHeight;
                setScrollProgress(Math.min(Math.max(progress, 0), 1));
            } else if (sectionTop > 0) {
                setScrollProgress(0);
            } else {
                setScrollProgress(1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Responsive card dimensions - maximized for mobile as requested
    const cardWidth = isMobile ? 410 : 450;
    const cardHeight = isMobile ? 680 : 570;
    const gap = isMobile ? 20 : -20;

    // Calculate the carousel translation based on scroll progress
    const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1200;

    if (isMobile) {
        // Mobile: Single card at a time, centered
        const totalCards = carouselImages.length;
        const cardPlusGap = cardWidth + gap;
        // Start from 0 (first card visible) and scroll through all cards
        const maxTranslate = (totalCards - 1) * cardPlusGap;
        const translateX = -scrollProgress * maxTranslate;

        // Calculate dynamic left padding to center the first card
        const leftPadding = (typeof window !== "undefined" ? window.innerWidth : 360) / 2 - cardWidth / 2;

        return (
            <section
                ref={containerRef}
                style={{
                    // Increased height for slower/smoother scroll (100vh per card)
                    height: `${totalCards * 100}vh`,
                    backgroundColor: "#f5f5f5",
                    position: "relative",
                }}
            >
                {/* Sticky container */}
                <div
                    style={{
                        position: "sticky",
                        top: 0,
                        height: "100vh",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        // Center vertically but align flex-start for carousel logic
                        justifyContent: "center",
                        alignItems: "flex-start",
                        // Increased top spacing as requested
                        paddingTop: "120px",
                        paddingBottom: "10px",
                    }}
                >
                    {/* Header */}
                    <h2
                        style={{
                            fontFamily: "'Sora', sans-serif",
                            fontWeight: 600,
                            // Increased header size for mobile for more impact
                            fontSize: "36px",
                            lineHeight: "1.1",
                            color: "#171717",
                            textAlign: "center",
                            marginBottom: "20px",
                            letterSpacing: "0.01em",
                            width: "100%",
                            padding: "0 20px",
                        }}
                    >
                        Explore WhatsApp <br /> in Action
                    </h2>

                    {/* Carousel */}
                    <div
                        ref={carouselRef}
                        style={{
                            display: "flex",
                            gap: `${gap}px`,
                            paddingLeft: `${Math.max(0, leftPadding)}px`,
                            transform: `translateX(${translateX}px)`,
                            transition: "transform 0.1s linear",
                            willChange: "transform",
                        }}
                    >
                        {carouselImages.map((image) => (
                            <div
                                key={image.id}
                                style={{
                                    width: `${cardWidth}px`,
                                    height: `${cardHeight}px`,
                                    flexShrink: 0,
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    background: "transparent",

                                }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        objectPosition: "center",
                                        display: "block",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Desktop view
    const totalCarouselWidth = carouselImages.length * cardWidth + (carouselImages.length - 1) * gap;
    // Account for the 60px left padding to stop exactly at the edge
    const maxTranslate = Math.max(0, totalCarouselWidth - (viewportWidth - 60));
    const translateX = -scrollProgress * maxTranslate;

    return (
        <section
            ref={containerRef}
            style={{
                height: "300vh",
                backgroundColor: "#f5f5f5",
                position: "relative",
            }}
        >
            {/* Sticky container */}
            <div
                style={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    // Centering ensures Title + Cards stay together in one frame
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: "60px",
                    // Safety gap for navbar - increased to nudge content lower
                    paddingTop: "160px",
                    paddingBottom: "100px",
                }}
            >
                {/* Header */}
                <h2
                    style={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 600,
                        fontSize: "48px",
                        color: "#171717",
                        textAlign: "center",
                        marginBottom: "15px", // Reduced gap to keep frame tight
                        letterSpacing: "0.01em",
                        width: "100%",
                        paddingRight: "60px",
                    }}
                >
                    Explore WhatsApp in Action
                </h2>

                {/* Carousel */}
                <div
                    ref={carouselRef}
                    style={{
                        display: "flex",
                        gap: isMobile ? `${gap}px` : "0", // Gap doesn't support negative values
                        transform: `translateX(${translateX}px)`,
                        transition: "transform 0.1s ease-out",
                    }}
                >
                    {carouselImages.map((image) => (
                        <div
                            key={image.id}
                            style={{
                                width: `${cardWidth}px`,
                                height: `${cardHeight}px`,
                                flexShrink: 0,
                                borderRadius: "24px",
                                overflow: "hidden",
                                background: "transparent",
                                transition: "transform 0.3s ease",
                                cursor: "pointer",
                                marginRight: isMobile ? "0" : `${gap}px`, // Use negative margin for desktop overlap
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-12px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    display: "block",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel2;
