import Script from "next/script";

const interactionScripts = [
  "page-effects",
  "navbar",
  "contributions",
  "tech-stack",
];

export default function PortfolioInteractions() {
  return interactionScripts.map((script) => (
    <Script
      key={script}
      src={`/portfolio/${script}.js`}
      strategy="afterInteractive"
    />
  ));
}
