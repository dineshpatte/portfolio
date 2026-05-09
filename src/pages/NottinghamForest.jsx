import { useRef } from "react";
import forestImage from "../assets/image.png";
import forestPdf from "../assets/anotomy-NF.pdf";

const sections = [
  {
    type: "intro",
    title: "The Anotomy of Nottingham Forest",
    subtitle: "(Rise, Fall and Comeback)",
  },
  {
    type: "section",
    heading: "Introduction",
    content: [
      "Look at the badge of Nottingham Forest. Two stars sit above it, each one representing a European Cup. The biggest club trophy in the world, won twice, back to back.",
      "A club from a city of 300,000 people. A ground that sits next to a river. 30,000 seats.",
      "They did it in 1979. Then they did it again in 1980. Back to back. Nobody expected it the first time. Nobody could believe it the second.",
      "And then, slowly, painfully they disappeared.",
      "Not overnight. Not in a single disaster. Just a long, grinding fall from the very top of European football into the third tier of English football. Twenty three years outside the top flight. A fanbase watching clubs with a fraction of their history play in stadiums that should have been theirs.",
      "But this isn't just a story about falling.",
      "It's about coming back.",
      "This is Nottingham Forest.",
    ],
  },
  {
    type: "chapter",
    heading:
      "Chapter 1 — Before the Miracle: The Founding of Nottingham Forest",
    content: [
      "It started not with football, but with hockey.",
      "In 1865, a group of shinney players — shinney being a sport not unlike hockey — gathered at the Clinton Arms on Shakespeare Street in Nottingham. One of them, a man named JS Scrimshaw, put forward a proposition: forget shinney, let's play football instead. The room agreed. And just like that, Nottingham Forest Football Club was born.",
      "At that same meeting, they made another decision that would define the club forever. They would play in Garibaldi Red — named after the leader of the Italian Redshirts freedom fighters, whose revolutionary spirit was capturing imaginations across England at the time. Fifteen men, a colour inspired by a rebellion, and a dream. Nobody in that pub could have imagined what those colours would one day mean.",
    ],
  },
  {
    type: "section",
    heading: "Pioneers Before They Were Champions",
    content: [
      "Forest didn't just play football in those early years — they helped shape it.",
      "In 1874, they became the first English side to wear shin guards. In 1878, their match against Sheffield Norfolk became the first recorded occasion in England where a referee used a whistle to officiate a game. And it was a Forest man, Sam Widdowson, who invented the classical formation — goalkeeper, two full backs, three half backs, five forwards — a system so effective it dominated football thinking until the 1960s.",
      "This was a club that was quietly, without fuss, writing football history before football even knew what it was.",
    ],
  },
  {
    type: "section",
    heading: "Finding Their Feet",
    content: [
      "The early decades were nomadic ones. Forest drifted between grounds — the Forest Racecourse, the Castle Ground, Trent Bridge, the Parkside Ground, the Gregory Ground — never quite settling, always searching. It wasn't until 1898 that they found a permanent home, when a community fundraising effort scraped together £3,000 to secure The City Ground on the banks of the River Trent. They've been there ever since.",
      "On the pitch, progress was slower than their pioneering spirit suggested it should be. When the Football League was formed in 1888, Forest applied and were rejected. They played instead in the Football Alliance, winning it in 1892 to finally earn their place among the league clubs.",
      "But the FA Cup was where Forest first tasted glory. In the 1878-79 season, fresh from absorbing talent following the collapse of Notts Castle Club, they entered the FA Cup for the first time. They beat local rivals Notts County 3-1 in the first round and went all the way to the semi-finals before losing narrowly to Old Etonians.",
      "The final would have to wait — but not for long.",
    ],
  },
  {
    type: "section",
    heading: "The First Piece of Silverware",
    content: [
      "The 1897-98 season remains one of the most remarkable in the club's early history. Forest had reached four previous FA Cup semi-finals and fallen at each one. This time they made it through, beating Grimsby Town, Gainsborough Trinity, West Bromwich Albion and Southampton to reach the final at Crystal Palace against Derby County.",
      "Nobody gave them a chance. Five days before the final, Derby had hammered Forest 5-0 in a league match. The papers had already written the script.",
      "Forest tore it up.",
      "Manager Harry Radford made six changes from the side beaten in that league humiliation, fielding a well-rested team in front of 62,000 fans. The final score: Forest 3, Derby 1. Their first major trophy, won as underdogs, against the odds, in front of one of the largest crowds the sport had ever seen.",
      "It wouldn't be the last time Nottingham Forest won something nobody thought they could.",
    ],
  },
  {
    type: "chapter",
    heading:
      "Chapter 2 — The Messiah and the Miracle: The Brian Clough Era (1975–1993)",
    content: [
      "Before Clough, there was promise. Always promise, never delivery.",
      "Post-war Nottingham was buzzing with optimism and Forest rode that energy — nearly 33,000 turned up for the first home game of the 1946-47 season against Newcastle. But the good feeling didn't last. Two years later they were relegated to the Third Division, spending two seasons in the lower reaches before clawing their way back up.",
      "By 1957 they were back in the First Division after an 18-year absence. Two seasons later they won the FA Cup, their second — beating Luton Town 2-1 despite playing most of the game with ten men, having gone into the final as the side Luton had hammered just weeks before. Sound familiar? Forest had a habit of winning things nobody thought they could.",
      "Then came 1966-67. England had just won the World Cup and football fever was everywhere. Forest, managed by Johnny Carey, went for the league and cup double and almost pulled it off. Crowds of 40,000. A city daring to dream. But injuries crept in at the worst possible moment and the double slipped away — a semi-final exit and a runners-up medal in the league. So close.",
      "And then, nothing.",
      "Poor management decisions, a stubborn committee structure, a proud amateurism that refused to modernise. The club that had 40,000 fans turning up every week somehow couldn't build on it. Managers came and went — Matt Gillies, Dave Mackay, Allan Brown. The crowds thinned. The ambition faded. Forest drifted back into the Second Division and stayed there.",
      "It seemed like a familiar, frustrating story. A club with history but no future.",
      "Then, on 6 January 1975, everything changed.",
    ],
  },
  {
    type: "section",
    heading: "The Arrival",
    content: [
      "Brian Clough walked through the door and Nottingham Forest was never the same again.",
      "He wasn't supposed to be there. Clough was one of the most magnetic, controversial and brilliant football minds England had ever produced — a man who had taken Derby County from the Second Division to the league title, who had opinions louder than anyone in the game, who had famously lasted just 44 days at Leeds United before being sacked. He was too big for Nottingham Forest, people said. Too difficult. Too much.",
      "They were wrong about all of it.",
      "Clough immediately began reshaping the squad in his own image. He brought in Jimmy Gordon as first-team coach, signed John O'Hare and John McGovern from Leeds, and convinced John Robertson and Martin O'Neill — both of whom had requested transfers under the previous manager — to stay. Frank Clark arrived on a free transfer from Newcastle at the end of that first season. His first full season ended with Forest in eighth place in the Second Division. Respectable. Nothing more.",
      "But Clough was building something. You could feel it.",
    ],
  },
  {
    type: "section",
    heading: "Enter Taylor",
    content: [
      "If Clough was the fire, Peter Taylor was the oxygen.",
      "In July 1976, Clough's old partner from Derby arrived as assistant manager and the whole operation shifted into another gear. Where Clough was instinct and inspiration, Taylor was detail and judgment — a brilliant spotter of players, a calm head next to a volatile one. Together they were something entirely different to anything English football had seen.",
      "The results came fast. Forest won promotion back to Division One. They won the Anglo-Scottish Cup — not exactly a glamour trophy, Clough himself called it an appetiser — but it mattered. It told the players they could win. That winning was normal. That winning was expected.",
      "Clough and Taylor had their contracts extended. One year later, Forest won the First Division title by seven points.",
      "Seven points. In their first season back in the top flight. A team that had been in the Second Division two years earlier.",
    ],
  },
  {
    type: "section",
    heading: "Europe",
    content: [
      "Nobody was ready for what came next.",
      "Forest entered the European Cup for the first time in 1978-79 and simply didn't stop. Liverpool, the dominant force in English and European football at the time, were beaten in the first round. Forest kept going — organised, disciplined, tactically brilliant, playing with a confidence that seemed to belong to a club ten times their size.",
      "The final was in Munich. Their opponents were Malmö of Sweden. One goal — a Trevor Francis header, the man Clough had made Britain's first £1 million footballer just months earlier — was enough. Nottingham Forest, a club from a city of 300,000 people, were champions of Europe.",
      "Then they did it again.",
      "In 1980, Forest returned to the European Cup final in Madrid and beat Hamburg 1-0. John Robertson, the quiet winger from Scotland who Clough had once described as a slob before turning him into one of the best players in Europe, scored the only goal. Back to back European Cups. A feat that Real Madrid, Bayern Munich and Ajax had achieved and almost nobody else.",
      "Those two stars went on the badge. They're still there today.",
    ],
  },
  {
    type: "section",
    heading: "The Beginning of the End",
    content: [
      "All empires fall. This one fell slowly, and then all at once.",
      "The Clough and Taylor partnership ended in 1980 when Taylor retired — though the two fell out bitterly afterwards, a wound that never fully healed. Clough carried on alone. Forest remained competitive through the early 1980s, winning League Cups, still a force in English football. But the extraordinary peak of 1979 and 1980 was never revisited.",
      "The transfers got worse. The results got inconsistent. The squad aged. And Clough, the man who had seemed untouchable, began to look mortal.",
      "By the 1992-93 season it was unravelling in real time. Discontent was mounting in the boardroom. On 1 March 1993, the club held its first extraordinary shareholder meeting in 23 years — a group of shareholders raising formal questions about how Clough was running things. He survived it. But relegation was coming and everyone could see it.",
      "On 26 April 1993, Brian Clough announced his retirement.",
    ],
  },
  {
    type: "section",
    heading: "The Last Day",
    content: [
      "The City Ground was packed. Supporters were weeping openly in the stands. Grown men and women who had watched this club win the European Cup twice couldn't hold it together, because they understood what was ending. Not just a manager. An era. An identity. A feeling that Nottingham Forest were somehow special, somehow capable of things that defied all logic and expectation.",
      "The final game was away at Ipswich. Forest lost 2-1. The last goal of the Brian Clough era was scored by his own son, Nigel — a detail so poetic and so painful that it could only happen in football.",
      "Clough took his bows. Dignified, quiet, for once in his life without words.",
      "And then he was gone.",
      "Forest were relegated. The greatest era in the club's history was over. And nobody quite knew who Nottingham Forest were supposed to be without him.",
      "They were about to spend 23 years finding out.",
    ],
  },
  {
    type: "chapter",
    heading:
      "Chapter 3 — The Anatomy of a Fall: What Clough Built and How It Collapsed (1993–2022)",
    content: [
      "To understand why Nottingham Forest fell so far after Brian Clough, you first have to understand exactly what he built and why it was almost impossible to replace.",
    ],
  },
  {
    type: "section",
    heading: "The Clough Blueprint: How He Actually Did It",
    content: [
      "Clough's genius wasn't complicated. In fact, that was precisely the point.",
      'He believed in simplicity, both on and off the pitch. "If God had wanted us to play football in the clouds, he\'d have put grass up there," he famously said. While other managers obsessed over systems and formations, Clough dismissed tactics as an overcomplicated distraction. "Players lose you games, not tactics. There\'s so much crap talked about tactics by people who barely know how to win at dominoes," he once said. And he meant it.',
      "On the pitch, Clough deployed Forest in a fluid and flexible 4-4-2. But to call it just a 4-4-2 undersells what it actually was. It was so fluid it could easily be considered a 4-3-3 or 4-2-3-1, with players dragging opponents all over the pitch by moving into channels, dropping into space, overlapping and cutting in. The system had no rigid shape — it breathed and shifted based on what the game demanded.",
      "Defensively, the team would sit deep and narrow, soak up pressure, then burst forward with pace and dribbles, direct running and forward passes. They were masters of the defensive block and the devastating counter attack — a style that suffocated European opponents who expected English teams to come at them from the first whistle.",
      "Full backs Viv Anderson and Kenny Burns were both adept at pushing forward and supporting the attack, while in midfield, Martin O'Neill acted as the playmaker and Ian Bowyer served as a tenacious tackler. Up front the partnership was pace against power — wingers John Robertson and Trevor Francis known for their pace and dribbling, with Peter Withe offering physical presence and Garry Birtles providing speed and movement.",
      "But more than any formation or system, what Clough built was a culture. He trusted players to express themselves within a clear framework, minimising unnecessary complexity. His teams were known for composure, discipline, and an ability to outperform technically superior opponents.",
      "His man management was unlike anything English football had seen. He knew which players needed to be wound up, and those that needed an arm around their shoulder. He had half his dressing room hating his guts, wanting to prove him wrong, and the other half wanting to do anything for him. Both halves ran through walls on a Saturday.",
      "Peter Taylor's role in all of this cannot be overstated. Where Clough was the personality and the inspiration, Taylor was the scout and the strategist — the man who identified John Robertson as a potential European Cup winner when everyone else had written him off, the man who kept Clough grounded when his ego threatened to overwhelm the operation. Together they were greater than the sum of their parts. Separately, as they would discover, both were diminished.",
      "This was the blueprint. Simple football, played with discipline and confidence, managed by a man who understood people better than he understood tactics. And it worked because every single component — the system, the players, the culture, the partnership — was connected. Pull one thread and the whole thing unravelled.",
      "In 1993, they pulled all the threads at once.",
    ],
  },
  {
    type: "section",
    heading: "The Cracks Before the Collapse",
    content: [
      "The warning signs were there before Clough even retired.",
      "The 1992-93 season was a slow-motion disaster. Forest opened it perfectly — on 16 August 1992, they beat Liverpool 1-0 in the very first live televised Premier League match, Teddy Sheringham scoring the only goal. It felt like the beginning of something. It was actually the beginning of the end.",
      "One week later, Sheringham transferred to Tottenham. Forest's form slumped. And it never recovered. The quality coming in was not matching the quality being sold — Darren Wassall, signed to replace Des Walker, didn't make the grade and was soon out again. Robert Rosario, with all the will in the world, was not the man to replace what Sheringham brought to the side and he was only signed in March and could easily be considered a panic buy.",
      "This was the first sign of what would plague Forest for the next three decades — reactive, desperate transfer business. Selling the good players, panic buying the replacements, hoping it would work out. It never did.",
    ],
  },
  {
    type: "section",
    heading: "After the Messiah: The Managerial Carousel",
    content: [
      "When Clough left, Forest needed someone who could maintain the culture, the identity, the way of doing things he had built over 18 years. What they got instead was a revolving door.",
      "In the 86 years before Brian Clough joined in 1975, Forest had a total of 14 managers. In the 25 years since he left, they had 29 managers and 13 caretakers. Read that again. Twenty nine managers in twenty five years. Before Clough, each manager was in charge for an average of 248 games. In the post-Clough era, each manager was in charge for an average of only 90 games.",
      "This is the single most damning statistic in Nottingham Forest's post-Clough history. You cannot build a playing identity, a tactical system, a club culture, with a new manager every 90 games. You cannot recruit players around a philosophy when the philosophy changes every season. You cannot develop young talent when the coach who signed them is gone before they break into the first team.",
      "Clough's system worked because it had time to embed. His players understood it not just intellectually but instinctively — they had lived it for years. Every manager who came after him was essentially starting from scratch, and then being replaced before they could finish.",
      "Frank Clark came first and did reasonably well — promotion at the first attempt, third place in the Premier League in 1995, European football back at the City Ground. But the squad was aging and the money wasn't there to rebuild it properly. By 1997 they were relegated again and Clark was gone.",
      "What followed was a grim parade. Dave Bassett. Ron Atkinson. David Platt. Paul Hart. Joe Kinnear. Each one arriving with promises, each one leaving with the club roughly where they found it or worse. Different formations, different styles, different ideas — none of them given enough time to make any of it stick.",
      "And tactically, none of them could replicate what Clough had done. His system demanded a very specific type of player — intelligent, disciplined, comfortable sitting deep and transitioning fast. The managers who followed tried to impose their own systems without the players or the time to make them work. Forest became a club without a footballing identity, which is a fatal condition in professional football.",
    ],
  },
  {
    type: "section",
    heading: "Rock Bottom",
    content: [
      "In 2005, Nottingham Forest — winners of back-to-back European Cups — were playing in League One. The same division as Hartlepool, Chesterfield and Bournemouth. The City Ground, which had once shaken with 40,000 fans watching European football under floodlights, echoed with crowds less than half that size watching football of a quality that would have made Brian Clough wince.",
      "It was the lowest point in the club's 140 year history. And the cruelest part was this — the fans kept coming. Through League One, through the endless Championship mediocrity, through the bad owners and the worse transfers, the supporters of Nottingham Forest turned up. Keeping alive the memory of something extraordinary, even when the club on the pitch gave them very little reason to.",
    ],
  },
  {
    type: "chapter",
    heading: "Chapter 4 — The Second Coming: Nottingham Forest After 2022",
    content: [
      "When Steve Cooper guided Nottingham Forest back to the Premier League on that electric night at Wembley in May 2022, nobody quite knew what came next. Twenty three years away is a long time. The Premier League had changed beyond recognition. The money, the pace, the global reach of it — Forest were walking back into a completely different world to the one they had left in 1999.",
      "What followed was messy, expensive, chaotic and ultimately remarkably successful.",
    ],
  },
  {
    type: "section",
    heading: "The Great Rebuild: Throwing Everything at Survival",
    content: [
      "The summer of 2022 was unlike anything English football had seen from a promoted club. The club spent over £250 million on new players across multiple windows, bringing in more than 30 signings. Thirty signings. In one summer. Players arriving every few days — a goalkeeper, a centre back, a winger, a striker. The squad was being rebuilt almost entirely from scratch in the space of weeks.",
      "Critics called it reckless. Chaotic. A gamble that couldn't possibly work when players had no time to gel, no shared understanding of the system, no idea who their teammates even were. And in truth, the first two seasons back were a struggle. Forest finished 16th in 2022-23, then 17th in 2023-24. Two seasons of grinding, uncomfortable Premier League survival. VAR controversies, defensive battles, moments of real quality buried under the anxiety of a club not quite sure it belonged at this level yet.",
      "But they stayed up. Both times. And that mattered more than people gave them credit for.",
    ],
  },
  {
    type: "section",
    heading: "Cooper Out, Nuno In",
    content: [
      "At the end of 2023, the club made a decision that shocked and hurt many Forest supporters — Steve Cooper, the man who had brought them back to the Premier League, was sacked. For fans who had watched Cooper turn a bottom-of-the-Championship club into a top flight one, it felt like an ungrateful ending to a beautiful story.",
      "But Marinakis was thinking bigger. Enter Nuno Espirito Santo — a manager with a clear tactical identity, Premier League experience and a track record of overachieving with limited resources at Wolverhampton Wanderers.",
      "Nuno's system was in some ways a modern echo of what Clough had built four decades earlier. His style of play focuses on quick transitions in counterattacks, moving from defensive positions to the final third in just a few seconds with pacey players. On the defensive side, he employs a wide pressing trap, where Forest suffocate opponents in the wide zones to win the ball back and regain possession.",
      "Sit deep. Stay disciplined. Win the ball. Attack with pace. It is not identical to Clough's system — football has evolved too much for that — but the philosophy rhymes. Defence as the foundation, transitions as the weapon. Brian Clough would have recognised the outline even if the details had changed.",
      "Forest deployed a 4-2-3-1, with Matz Sels in goal behind a back four built around the imposing Brazilian centre back Murillo and Nikola Milenkovic. Elliot Anderson and Nicolas Dominguez formed a disciplined double pivot in midfield, with Morgan Gibbs-White operating as the creative brain in the front third. And up front, Chris Wood — a striker nobody expected to become a Premier League force at 32 — scored 20 league goals in the 2024-25 season. Twenty goals. For a club that had spent most of the previous two decades in the Championship.",
      "Forest were not always enjoyable to watch, becoming notorious for their defensive-minded football and time-wasting tactics. Nuno was pragmatic to a fault, and he made no apologies for it. Results were what mattered. The football could be pretty later.",
    ],
  },
  {
    type: "section",
    heading: "The 2024-25 Season: Europe Returns",
    content: [
      "The 2024-25 season was the one that made the football world sit up and take notice.",
      "One of the stories of the season in English football was the outstanding performances of Nuno's Nottingham Forest, who remained firmly in contention for UEFA Champions League qualification for much of the campaign, sitting in third place in England's top flight at one point, six points clear of fifth-placed Manchester City.",
      "Champions League football. For Nottingham Forest. The same club that was in League One in 2005. The same club that had 29 managers in 25 years after Clough left. The same club whose ownership had placed them under a transfer embargo just nine years earlier.",
      "They didn't quite make the Champions League in the end — a seventh-place finish marked Forest's best top-flight performance since they ended the 1994-95 season in third, representing a remarkable turnaround from their dismal 17th-place showing in 2023-24. But seventh place was enough. Due to multi-club ownership rules affecting Crystal Palace, Nottingham Forest took their place in the Europa League.",
      "European football. Back at the City Ground. For the first time in decades.",
      "The fans who had stood in League One in 2005, who had watched bad owners burn through managers and money, who had kept the faith through twenty three years of hurt — they were going to watch their club in European competition again. Not the Champions League, not yet. But Europe. A start.",
    ],
  },
  {
    type: "section",
    heading: "The Business Finally Making Sense",
    content: [
      "What separates this era from the chaos of the Al-Hasawi years is structure. Marinakis has spent enormous sums — in January 2025 he converted £72 million of loans to equity, and in June a further £17 million — but the spending now follows a logic. Targeted signings, players who fit the system, a manager trusted to build something over more than one season.",
      "Key arrivals like Elliot Anderson from Newcastle and Nikola Milenkovic became central figures rather than forgotten experiments. Morgan Gibbs-White, Forest's most creative player, turned down interest from Tottenham to sign a new contract — a statement of ambition that would have been unthinkable five years ago.",
      "The City Ground itself is being transformed. Planning permission was granted to demolish the current Peter Taylor Stand and replace it with a brand-new 10,000-seater stand, taking the City Ground's capacity above 35,000. Longer term plans could see it reach 42,000. The ground that Brian Clough won two European Cups in front of, that sat half empty during the League One years, is being rebuilt for a future that finally looks like it might match the past.",
    ],
  },
  {
    type: "chapter",
    heading: "Conclusion — The Story Isn't Over",
    content: [
      "Nobody could have written this script. Not even Brian Clough, and he was the most audacious man English football ever produced.",
      "As this piece is written — May 2026 — Nottingham Forest are in the semi-finals of the UEFA Europa League. One win away from a European final. The club that spent three seasons in League One. The club that had 29 managers in 25 years. The club that was placed under a transfer embargo because it couldn't pay its bills. That club is 90 minutes from Istanbul.",
      "Let that breathe for a moment.",
      "The 2025-26 season should have broken Nottingham Forest. It nearly did.",
      "Nuno Espirito Santo — the manager who had delivered seventh place and European qualification the previous season — was relieved of his duties after just three Premier League matches. His replacement, Ange Postecoglou, arrived with a reputation as one of the most progressive attacking coaches in world football. He lost six and drew two of his eight matches in charge, a pitiful run that lasted just 39 days — the second-shortest managerial reign in Premier League history. Forest were bottom of the table. Their fans were furious. European football, which had felt like the beginning of something, was threatening to become the background noise to another relegation battle.",
      "Sean Dyche came in as the third manager of the season. Direct, disciplined, no-nonsense — one of his first acts was making Forest run more. Morgan Gibbs-White later revealed: \"We've been running, running, running. He's been putting us to work, but we needed it to compete at the highest level.\" Dyche steadied the ship, won important games against Liverpool and Tottenham, guided Forest through to the Europa League knockout stages. But on 12 February 2026 he was dismissed, leaving the club 17th in the Premier League after a goalless draw with bottom-of-the-table Wolves — a game in which Forest fired 35 shots without scoring, the most by any Premier League side without a goal since 2016.",
      "Four managers in one season. A club apparently tearing itself apart.",
      "And then Vitor Pereira walked through the door.",
    ],
  },
  {
    type: "section",
    heading: "Pereira and the Resurrection",
    content: [
      "Pereira had previously worked with Marinakis at Olympiacos, winning the league and cup double with the Greek side. This was an owner turning to someone he trusted completely, an act of clarity in the middle of chaos.",
      "The transformation was immediate and almost miraculous. Under Pereira, Forest became the highest-scoring team in the Premier League since his appointment. Under the three managers before him, Forest's points per game was 1.04. Under Pereira it jumped to 1.5 — a rate that, applied across the whole season, would have placed them in sixth, one position below the Champions League places.",
      "On the pitch it was breathtaking. Forest hit their stride in April — drawing with Aston Villa before thrashing Burnley 4-1 and Sunderland 5-0 in the Premier League, then beating the Villans 1-0 in the first leg of their Europa League semi-final. Pereira's side executed a tactical masterclass against Unai Emery — Mr Europa League himself — with an intoxicating mix of energy, desire and ambition that took control of the tie.",
      "Chris Wood, 34 years old, scoring in a European semi-final. Morgan Gibbs-White, the kid who turned down Tottenham to stay at Forest, pulling the strings. Omari Hutchinson, a £37.5 million summer signing, running at defenders under the City Ground floodlights as the ground shook around him.",
      "It felt like something. It felt like history repeating itself in the most beautiful way possible.",
    ],
  },
  {
    type: "section",
    heading: "The Final Statement",
    content: [
      "There is a statue of Brian Clough in the centre of Nottingham. He stands at the junction of King Street and Queen Street, hands in his pockets, looking out at the city he transformed. Below him, on the badge of the club he made immortal, two stars sit quietly above the Garibaldi Red.",
      "Those two stars have meant different things at different points in this story. In 1980, they meant greatness. In 2005, in League One, they meant heartbreak — the distance between what this club was and what it had become. For twenty three years they were a reminder of what had been lost.",
      "Now, in May 2026, they mean something else entirely. They mean this club never forgot who it was. They mean that identity, real identity — the kind built by a man in a green jumper on the banks of the River Trent — can survive decades of failure, bad owners, managerial carousels and near-oblivion.",
      "Nottingham Forest are not back to where Clough took them. Not yet. Perhaps not ever — what he achieved may genuinely never be replicated, by anyone, anywhere. But they are moving in the right direction. They are playing European football. They are building a bigger stadium. They are winning games that matter.",
      "And somewhere in the city, in the stands of a ground that once echoed with emptiness, fans who waited twenty three years are watching their club in a European semi-final.",
      'Brian Clough once said "You win something once and people say it\'s all down to luck. You win it twice and it shuts the buggers up."',
      "He won it twice. He shut everyone up.",
      "Nottingham Forest are not done talking yet.",
    ],
  },
];

export default function NottinghamForest() {
  const pdfRef = useRef(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = forestPdf;
    link.download = "anotomy-NF.pdf";
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
      {/* Hero */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "80px 24px 40px",
        }}
      >
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
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "700",
            lineHeight: 1.1,
            marginBottom: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          The Anotomy of Nottingham Forest
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#aaa",
            marginBottom: "32px",
            fontStyle: "italic",
          }}
        >
          Rise, Fall and Comeback
        </p>
        <div
          style={{
            height: "1px",
            backgroundColor: "#222",
            marginBottom: "64px",
          }}
        />

        <img
          src={forestImage}
          alt="Nottingham Forest"
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
