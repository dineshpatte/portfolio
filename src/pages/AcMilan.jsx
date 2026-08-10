import { useRef } from "react";
import milanImage from "../assets/milan-image.png";
import milanPdf from "../assets/AC_Milan_Rise_Fall_Rebirth.pdf";

const sections = [
  {
    type: "intro",
    title: "AC Milan: Rise, Fall & Rebirth",
    subtitle: "A Story of Glory, Decline, and Redemption",
  },
  {
    type: "section",
    heading: "Introduction",
    content: [
      "Look at the badge of AC Milan. Seven stars sit above it, each one representing a European Cup. More than any English club. More than any Spanish club bar Real Madrid. Seven.",
      "A club from the fashion capital of the world. A ground shared with their city rivals. A red and black shirt recognised on every continent.",
      "They won in 1963. Then 1969. Then 1989, 1990, 1994, 2003 and 2007. Back to back in the late eighties. A dynasty built under one of the most powerful men in Italian history.",
      "And then, slowly, painfully, they fell.",
      "Not in a single disaster. Not overnight. Just a long, grinding slide from the summit of European football into mid-table irrelevance, bad owners, financial chaos, and seasons without Champions League football that felt unthinkable for a club of their stature.",
      "But this isn't just a story about falling.",
      "It's about what happens after.",
      "This is AC Milan.",
    ],
  },
  {
    type: "chapter",
    heading: "Chapter 1 — The Glory Days",
    content: [
      "When Silvio Berlusconi took over AC Milan in 1986, the club was in financial ruin and had recently been relegated for a match-fixing scandal. What followed was one of the most remarkable transformations in football history.",
      "Berlusconi paired his ambition with visionary coaches — first Arrigo Sacchi, then Fabio Capello — and assembled a squad that redefined the game. Marco van Basten, Ruud Gullit, and Frank Rijkaard formed a nucleus that dismantled opponents across Europe. Sacchi's revolutionary 4-4-2 pressing system was years ahead of its time, and the results were emphatic: back-to-back European Cups in 1989 and 1990, and a Serie A dominance that established Milan as Italy's — and arguably the world's — greatest club.",
      "The dominance continued into the new millennium. Paolo Maldini, Alessandro Costacurta, and Dida anchored one of the meanest defences in European football history. A generation of supporters grew up believing that Milan winning was simply the natural order of things.",
    ],
  },
  {
    type: "section",
    heading: "The Peak",
    content: [
      "The 2003 Champions League win over Juventus — settled on penalties after a goalless final at Old Trafford — and the unforgettable 2007 triumph against Liverpool in Athens stand as the twin peaks of the Berlusconi era.",
      "The Athens final was revenge for Istanbul. In 2005, Milan had led Liverpool 3-0 at half-time in one of the greatest finals ever played, only to concede three goals in six minutes and lose on penalties. Two years later, in Greece, they made no mistake. Filippo Inzaghi scored twice. Liverpool pulled one back but it wasn't enough. Milan were champions of Europe for the seventh time.",
      "At their height, they were the benchmark for every club in the world. The question wasn't whether Milan were the best. It was by how much.",
    ],
  },
  {
    type: "chapter",
    heading: "Chapter 2 — The Struggle",
    content: [
      "The seeds of decline were planted even before the 2007 Champions League triumph. The club had developed a habit of extending the careers of aging stars rather than building for the future. Legends like Clarence Seedorf, Andrea Pirlo, Filippo Inzaghi, and Ronaldinho were kept on long past their best years, and meaningful succession planning was largely absent.",
      "Berlusconi's political troubles and shifting priorities meant investment in the squad dried up. While Juventus rebuilt smartly and Inter spent heavily in cycles, Milan grew stagnant.",
    ],
  },
  {
    type: "section",
    heading: "The Last Hurrah",
    content: [
      "The 2011-12 Scudetto — won largely through the brilliance of Zlatan Ibrahimovic and Thiago Silva — proved to be a last hurrah rather than the start of a new era. Both players left the following summer, and the club never replaced what they brought.",
      "The transfer market told the story clearly: panic buys, overpriced veterans, and a failure to develop youth into first-team regulars. Milan became a club living off a reputation they were no longer backing up with results.",
    ],
  },
  {
    type: "section",
    heading: "The Chinese Disaster",
    content: [
      "The nadir came with the 2017 sale to Chinese businessman Yonghong Li — a deal that proved disastrous almost immediately. Li's mysterious finances unravelled quickly, the club breached UEFA's Financial Fair Play regulations, and within 18 months the American hedge fund Elliott Management had seized control after Li defaulted on a loan.",
      "In between, Milan had spent lavishly and recklessly — signing players like Leonardo Bonucci, Andre Silva, and Lucas Biglia — without any coherent sporting strategy. The result was chaos on and off the pitch, mid-table Serie A finishes, and seasons without Champions League football that damaged the club's ability to attract top talent.",
      "For a club that had won seven European Cups, it was a humiliation.",
    ],
  },
  {
    type: "chapter",
    heading: "Chapter 3 — The Rebuild & Current Situation",
    content: [
      "Elliott Management, despite being an unlikely footballing custodian, proved to be exactly what Milan needed: financial discipline and a clear structure. The hedge fund installed a proper sporting hierarchy, and crucially, brought Paolo Maldini back to the club as Technical Director — a symbolic and practical masterstroke.",
      "Maldini, alongside sporting director Frederic Massara, built a young, hungry squad on a fraction of rivals' budgets. Rafael Leao, Theo Hernandez, Mike Maignan, Sandro Tonali — players signed smartly, developed carefully, and built around a coherent identity under manager Stefano Pioli.",
    ],
  },
  {
    type: "section",
    heading: "The 2022 Scudetto",
    content: [
      "The 2021-22 season delivered the payoff. Milan won their first Serie A title in eleven years — the 2022 Scudetto — and it felt like proof that the model worked. Smart recruitment. Youth development. A coherent identity on the pitch. For the first time in a decade, Milan felt like a club with a direction.",
      "In 2022, RedBird Capital Partners acquired the club from Elliott, bringing fresh American investment and ambitious plans. The new ownership era has not been without turbulence — the controversial departure of Maldini in 2023 raised serious concerns — but Milan returned to being a consistent Champions League presence.",
    ],
  },
  {
    type: "section",
    heading: "2024–26: More Turbulence",
    content: [
      "The 2024-25 season proved that Milan's problems were far from solved. Paulo Fonseca was appointed in the summer of 2024 but lasted only six months. After a string of poor results that left Milan eighth in Serie A, the club turned to Sergio Conceicao in December 2024.",
      "Conceicao's arrival sparked an immediate moment of joy — he guided Milan to the Supercoppa Italiana, beating fierce rivals Inter in Saudi Arabia in only his second game in charge. It felt like a turning point. It was not. The season unravelled badly: Milan finished eighth in Serie A, missed out on European football entirely, and were dumped out of the Champions League in the knockout phase playoffs. Conceicao was sacked.",
      "For 2025-26, Milan turned to Massimiliano Allegri — fresh from his acrimonious exit from Juventus. The appointment raised eyebrows but RedBird backed the move. The season showed improvement: Milan finished fifth, secured Europa League football, and boasted an unbeaten run of 24 league matches at one stage. Rafael Leao and Christian Pulisic remained the creative sparks. But the gap to the genuine title contenders remained vast — Inter won the Scudetto comfortably.",
      "Three different managers in the space of twelve months is not the behaviour of a club with a coherent vision. Until RedBird can demonstrate they will commit to a long-term sporting strategy, Milan will continue to drift.",
    ],
  },
  {
    type: "chapter",
    heading: "Conclusion",
    content: [
      "AC Milan's story over the past three decades is a masterclass in both how to build a footballing dynasty and how quickly one can unravel. From Sacchi's revolutionary pressing machine to the chaos of the Yonghong Li years, the club has experienced extremes few others can match.",
      "The 2022 Scudetto offered genuine hope that Milan's identity had been rediscovered. What the past two seasons have made clear is that short-term thinking — chopping and changing managers, panic recruitment, chasing results over building a project — is still a problem at the club.",
      "One thing is certain: the world watches AC Milan differently to other clubs. The history, the shirt, the San Siro — they carry an expectation that a return to the summit is not just possible, but inevitable.",
      "Whether that belief is justified will define the next chapter of one of football's most storied clubs.",
    ],
  },
];

export default function ACMilan() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = milanPdf;
    link.download = "AC_Milan_Rise_Fall_Rebirth.pdf";
    link.click();
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "80px 24px 40px",
        }}
      >
        {/* Label */}
        <div style={{ marginBottom: "12px" }}>
          <span
            style={{
              fontSize: "13px",
              color: "#888",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Blog · Football
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "700",
            lineHeight: 1.1,
            marginBottom: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          AC Milan: Rise, Fall & Rebirth
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#aaa",
            marginBottom: "32px",
            fontStyle: "italic",
          }}
        >
          A Story of Glory, Decline, and Redemption
        </p>

        <div
          style={{
            height: "1px",
            backgroundColor: "#222",
            marginBottom: "64px",
          }}
        />

        {/* Hero Image */}
        <img
          src={milanImage}
          alt="AC Milan"
          style={{
            width: "100%",
            maxHeight: "600px",
            borderRadius: "12px",
            marginBottom: "48px",
            objectFit: "cover",
          }}
        />

        {/* Content */}
        {sections.map((section, i) => (
          <div key={i} style={{ marginBottom: "48px" }}>
            {section.type === "chapter" ? (
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "700",
                  marginBottom: "24px",
                  paddingTop: "16px",
                  borderTop: "1px solid #333",
                  letterSpacing: "-0.01em",
                }}
              >
                {section.heading}
              </h2>
            ) : section.heading ? (
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginBottom: "16px",
                  color: "#fff",
                }}
              >
                {section.heading}
              </h3>
            ) : null}

            {section.content &&
              section.content.map((para, j) => (
                <p
                  key={j}
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: "1.8",
                    color: "#ccc",
                    marginBottom: "16px",
                  }}
                >
                  {para}
                </p>
              ))}
          </div>
        ))}

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "#222",
            margin: "64px 0 48px",
          }}
        />

        {/* Download */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            marginBottom: "80px",
          }}
        >
          <p style={{ color: "#888", fontSize: "0.9rem" }}>
            Read the full piece as a document
          </p>
          <button
            onClick={handleDownload}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 24px",
              backgroundColor: "transparent",
              color: "#fff",
              border: "1px solid #fff",
              borderRadius: "8px",
              fontSize: "0.95rem",
              fontWeight: "500",
              cursor: "pointer",
              transition: "background-color 0.2s, color 0.2s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = "#000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#fff";
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
