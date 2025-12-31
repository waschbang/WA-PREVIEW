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

    // Responsive card dimensions
    const cardWidth = isMobile ? 320 : 500;
    const cardHeight = isMobile ? 407 : 636;
    const gap = isMobile ? 20 : 10;

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
        // (Viewport Width - Card Width) / 2
        // Default to a safe value if window is undefined, but useEffect handles hydration
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
                        // Align start so we can manually center first card with padding
                        alignItems: "flex-start",
                        // Push everything down significantly to avoid navbar overlap
                        paddingTop: "120px",
                    }}
                >
                    {/* Header */}
                    <h2
                        style={{
                            fontFamily: "'Sora', sans-serif",
                            fontWeight: 600,
                            // Smaller header on mobile
                            fontSize: "24px",
                            color: "#171717",
                            textAlign: "center",
                            marginBottom: "40px",
                            letterSpacing: "0.01em",
                            width: "100%",
                            padding: "0 20px",
                        }}
                    >
                        Explore WhatsApp in Action
                    </h2>

                    {/* Carousel */}
                    <div
                        ref={carouselRef}
                        style={{
                            display: "flex",
                            gap: `${gap}px`,
                            // Add leftPadding to transform or container to center first item
                            // Adding to paddingLeft of container would vary with resize better? 
                            // Or interacting with translateX? 
                            // Let's add it to the transform origin effectively by padding the container
                            paddingLeft: `${Math.max(0, leftPadding)}px`,
                            transform: `translateX(${translateX}px)`,
                            transition: "transform 0.1s linear", // Changed to linear for smoother scroll-lock feel? Or stick to ease-out. User said "smoother"
                            // ease-out can feel laggy if scroll is fast. linear follows scroll position exactly. 
                            // But usually a slight ease is nice. Let's try to match scroll better.
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
                                    // Slight scale effect for focus could be nice but keeping it simple first
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
    const carouselWidth = carouselImages.length * (cardWidth + gap);
    const maxTranslate = carouselWidth - viewportWidth + 200;
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
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: "60px",
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
                        marginBottom: "5px",
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
                        gap: `${gap}px`,
                        transform: `translateX(${translateX}px)`,
                        transition: "transform 0.1s ease-out",
                        paddingRight: "100px",
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
};

export default Carousel2;
