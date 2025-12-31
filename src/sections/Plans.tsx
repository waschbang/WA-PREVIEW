
import foundationIcon from "@/assets/icons/foundation.png";
import premiumIcon from "@/assets/icons/premium.png";
import scaleIcon from "@/assets/icons/scale.png";
import customIcon from "@/assets/icons/custom.png";
import whiteCheck from "@/assets/icons/WhiteCheck.png";
import greenCheck from "@/assets/icons/GreenCheck.png";
import arrowRight from "@/assets/icons/Arrow rigth.png";

const PricingPlans = () => {
  const plans = [
    {
      name: "Foundation",
      tagline: "For Brands that are just starting out",
      price: {
        oneTime: "2L–2.5L setup",
        monthly: "50K retainer",
        adSpend: "—",
      },
      description:
        "Perfect for brands setting up WhatsApp performance for the first time.",
      features: [
        "Campaign setup & onboarding",
        "1-2 Journeys + broadcast/ month",
        "Compliance & sender setup",
        "Basic analytics dashboard",
      ],
      popular: false,
    },
    {
      name: "Growth",
      tagline: "For scaling campaigns across journeys",
      price: {
        oneTime: "Custom",
        monthly: "50K retainer",
        adSpend: "As needed",
      },
      description:
        "Built for brands ready to scale performance with multi-journey automation.",
      features: [
        "Advanced automations",
        "Monthly optimisation + A/B tests",
        "Playbooks & content operations",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Scale",
      tagline: "High volume campaigns with AD amplification",
      price: {
        oneTime: "Custom",
        monthly: "50K retainer",
        adSpend: "5L+ recommended",
      },
      description:
        "Best for high-frequency, high-volume performance and experimentation.",
      features: [
        "High frequency sends & journeys",
        "Custom dashboard & reporting",
        "Ad amplification strategy",
        "Dedicated strategist",
      ],
      popular: false,
    },
    {
      name: "Custom",
      tagline: "Bespoke strategy crafted for your exact needs",
      price: { oneTime: "Custom", monthly: "Custom monthly retainer", adSpend: "Custom" },
      description:
        "A fully tailored engagement designed around your goals, timelines and performance.",
      features: [
        "Tailored scope & deliverables",
        "Dedicated execution team",
        "Flexible billing",
        "SLA-based support",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 md:py-20"
      style={{
        backgroundColor: "#053E2B",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-12 text-white">
          <h2
            className="font-sora text-center"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600,
              color: "white",
              fontSize: "48px",
              lineHeight: "1.2",
              letterSpacing: "0.01em",
            }}
          >
            Flexible plans for every stage
          </h2>

          <p
            className="text-sm md:text-base max-w-3xl mx-auto mt-4 leading-relaxed"
            style={{ color: "#BBBBBB" }}
          >
            All packages include onboarding, brand-aligned content, compliance
            assurance, and expert campaign management. Simple pricing. No
            surprises.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1320px] mx-auto justify-items-center">
          {plans.map((plan, index) => {
            const isPremium = plan.name === "Growth";
            const oneTimeLabel =
              plan.price.oneTime === "2L–2.5L setup"
                ? "₹2–2.5 Lakhs"
                : plan.price.oneTime === "Custom"
                  ? "₹Custom Setup"
                  : plan.price.oneTime;
            const monthlyLabel =
              plan.price.monthly === "Custom monthly retainer"
                ? "+ Custom monthly retainer"
                : `+ ${plan.price.monthly}`;
            const adSpendLabel =
              plan.price.adSpend === "—"
                ? "+ No fixed ad spend"
                : `+ Ad spend: ${plan.price.adSpend}`;
            const iconMap: Record<string, string> = {
              Foundation: foundationIcon,
              Growth: premiumIcon,
              Scale: scaleIcon,
              Custom: customIcon,
            };

            return (
              <div
                key={index}
                className={`relative rounded-[20px] border border-white/5 ${isPremium
                  ? "text-white"
                  : "bg-white text-gray-800"
                  }`}
                style={{
                  width: "100%",
                  maxWidth: "308px",
                  height: "794px",
                  padding: "24px",
                  overflow: "hidden",
                  borderRadius: "20px",
                  backgroundColor: isPremium ? "#1a9432" : "white",
                  backgroundImage: isPremium
                    ? "linear-gradient(180deg, #4fd96a 0%, #3cc957 20%, #2cb849 40%, #22a73d 60%, #1a9432 80%, #1a9432 100%)"
                    : "none",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 20px 25px -5px rgba(0, 0, 0, 0.05)",
                  transform: "translateY(0) perspective(1000px) rotateX(0.5deg)",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                  textRendering: "optimizeLegibility",
                }}
              >
                {/* Most Popular Badge for Growth */}
                {isPremium && (
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      backgroundColor: "#E8F5E9",
                      color: "#2E7D32",
                      fontSize: "12px",
                      fontWeight: 500,
                      padding: "6px 12px",
                      borderRadius: "20px",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div style={{ marginBottom: "16px" }}>
                  <img
                    src={iconMap[plan.name]}
                    alt={`${plan.name} icon`}
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                {/* Plan Name & Tagline */}
                <div style={{ marginBottom: "8px" }}>
                  <h3
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: "24px",
                      marginBottom: "4px",
                      color: isPremium ? "white" : "#081b14",
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "1.4",
                      minHeight: "40px",
                      color: isPremium ? "rgba(255,255,255,0.8)" : "#4b5563",
                    }}
                  >
                    {plan.tagline}
                  </p>
                </div>

                {/* Pricing */}
                <div style={{ marginBottom: "50px" }}>
                  <p
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: "24px",
                      color: isPremium ? "white" : "#053E2B",
                    }}
                  >
                    {oneTimeLabel}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      marginTop: "4px",
                      color: isPremium ? "rgba(255,255,255,0.8)" : "#053E2B",
                    }}
                  >
                    {monthlyLabel}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: isPremium ? "rgba(255,255,255,0.8)" : "#053E2B",
                    }}
                  >
                    {adSpendLabel}
                  </p>
                </div>

                {/* CTA Button */}
                <div style={{ marginBottom: "40px", display: "flex", justifyContent: "center" }}>
                  <a
                    href="https://calendly.com/wa-schbang/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      style={{
                        width: "auto",
                        padding: "14px 55px",
                        height: "52px",
                        borderRadius: "12px",
                        border: "1px solid #E7E8F1",
                        backgroundColor: "white",
                        color: "black",
                        fontWeight: 600,
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        cursor: "pointer",
                      }}
                    >
                      <span>{isPremium ? "Book a Demo" : "Get a Quote"}</span>
                      <img src={arrowRight} alt="arrow" style={{ width: "14px", height: "14px" }} />
                    </button>
                  </a>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    backgroundColor: isPremium ? "rgba(255,255,255,0.3)" : "#e2e8f0",
                    marginBottom: "20px",
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "1.5",
                    marginBottom: "50px",
                    minHeight: "50px",
                    color: isPremium ? "rgba(255,255,255,0.9)" : "#374151",
                  }}
                >
                  {plan.description}
                </p>

                {/* Features List */}
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "20px",
                      }}
                    >
                      <img
                        src={isPremium ? whiteCheck : greenCheck}
                        alt="check"
                        style={{
                          width: "18px",
                          height: "18px",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Sora', sans-serif",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "1.4",
                          color: isPremium ? "rgba(255,255,255,0.9)" : "#374151",
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
