export const CATEGORIES = [
  { id: "forehand", label: "Forehand", color: "#2d6a4f" },
  { id: "backhand", label: "Backhand", color: "#1d3557" },
  { id: "serve", label: "Serve", color: "#bc4749" },
  { id: "volleys", label: "Volleys", color: "#7b2cbf" },
  { id: "drop", label: "Drop Shots", color: "#ca6702" },
  { id: "gameplay", label: "Game Play", color: "#40916c" },
];

/** Your personal focus — shown on Today and on approach/net drills */
export const PLAYER_FOCUS = {
  title: "Your match habit to fix",
  problem:
    "You stay on the baseline too long. Points turn into long rallies and you get tired.",
  rule:
    "Rule for practice and matches: if the ball lands inside the service line, you move forward. No extra rally ball.",
  cue: "Say out loud after every short ball: “Go.” Then approach.",
};

export const DRILLS = [
  // ── FOREHAND ──
  {
    id: "fh-crosscourt",
    category: "forehand",
    name: "Cross-Court Consistency",
    balls: 20,
    duration: "8 min",
    difficulty: "Foundation",
    machine: {
      speed: "Medium (50-60%)",
      spin: "Light topspin",
      feed: "3 sec interval",
      placement: "Forehand corner, no oscillation",
      height: "Normal",
    },
    focus: ["Rally depth past service line", "Finish over the net with margin", "Recover to center after each shot"],
    setup: "Stand on deuce side baseline. Target cross-court to ad corner.",
    howTo: [
      "Start ready: racket up, weight on toes, split step as the ball leaves the machine.",
      "Turn shoulders early — unit turn before the ball bounces.",
      "Contact out in front, brush up for topspin, finish over your opposite shoulder.",
      "Aim deep (past service line) with 2–3 feet of net clearance — consistency first.",
      "After contact, recover 2–3 steps toward center before the next feed.",
    ],
  },
  {
    id: "fh-inside-out",
    category: "forehand",
    name: "Inside-Out Forehand",
    balls: 15,
    duration: "6 min",
    difficulty: "Intermediate",
    machine: {
      speed: "Medium-slow (45%)",
      spin: "Light topspin",
      feed: "3.5 sec interval",
      placement: "Backhand side (run-around feed)",
      height: "Normal",
    },
    focus: ["Quick footwork to run around backhand", "Open stance or semi-open", "Aim deep to ad corner"],
    setup: "Start center baseline. Move early when ball lands on your backhand side.",
    howTo: [
      "As soon as you see the feed to your backhand side, take two quick steps around it.",
      "Plant the outside foot and load — don’t stretch for a late backhand.",
      "Hit inside-out to the ad corner (deep cross-court from deuce side perspective).",
      "Keep the swing full; don’t poke — this is your pattern to open the court.",
      "Recover toward center after each ball so the next feed isn’t a scramble.",
    ],
  },
  {
    id: "fh-approach",
    category: "forehand",
    name: "Forehand Approach + Volley",
    balls: 15,
    duration: "7 min",
    difficulty: "Intermediate",
    finishesPoint: true,
    machine: {
      speed: "Slow-medium (40%)",
      spin: "Flat or light topspin",
      feed: "4 sec interval",
      placement: "Short ball to forehand (inside service line)",
      height: "Low-normal",
    },
    focus: ["Take ball on the rise", "Approach down the line", "Split step and first volley deep"],
    setup: "After forehand approach, move forward. Partner feed or self-toss volley if machine can't reach net.",
    howTo: [
      "This is YOUR key drill. Short ball = automatic approach. Do not stay back.",
      "Move forward into the ball; take it early, preferably on the rise.",
      "Approach down the line (safer than cross-court for finishing). Hit deep through the court.",
      "Keep moving through contact — freeze at the baseline and the point stays long.",
      "Split step at the service line as the ‘return’ would leave the opponent’s racket.",
      "First volley: punch deep to the middle or open court. Don’t go for a sharp angle yet.",
      "If the machine can’t feed a volley, shadow the volley footwork after every approach.",
    ],
  },
  {
    id: "fh-pressure",
    category: "forehand",
    name: "Forehand Under Pressure",
    balls: 10,
    duration: "5 min",
    difficulty: "Advanced",
    machine: {
      speed: "Fast (65-70%)",
      spin: "Heavy topspin",
      feed: "2 sec interval",
      placement: "Random horizontal oscillation",
      height: "Normal-high",
    },
    focus: ["Compact prep on fast balls", "Block or drive when late", "Stay balanced through contact"],
    setup: "Start at baseline center. React to random feeds — no pre-positioning.",
    howTo: [
      "Shorten your backswing — on fast balls, compact prep beats a big loop.",
      "Move your feet first; don’t reach with the arm.",
      "If late, block deep middle rather than swing and miss.",
      "Stay balanced: head still, finish the shot, then recover.",
      "Goal: survive pressure without spraying — depth over winners.",
    ],
  },

  // ── BACKHAND ──
  {
    id: "bh-crosscourt",
    category: "backhand",
    name: "Backhand Cross-Court Rally",
    balls: 20,
    duration: "8 min",
    difficulty: "Foundation",
    machine: {
      speed: "Medium (50%)",
      spin: "Light topspin",
      feed: "3 sec interval",
      placement: "Backhand corner, no oscillation",
      height: "Normal",
    },
    focus: ["Early prep with shoulder turn", "Drive through the ball", "Target deep cross-court"],
    setup: "Ad side baseline. Aim cross-court to deuce corner.",
    howTo: [
      "Turn shoulders immediately on recognition — backhand needs early prep.",
      "Step into the ball; drive through contact, don’t slap.",
      "Aim deep cross-court for margin; use the long diagonal of the court.",
      "Keep contact out in front; if contact is late, the ball floats or goes wide.",
      "Recover to center after every shot — same habit as match play.",
    ],
  },
  {
    id: "bh-down-line",
    category: "backhand",
    name: "Backhand Down the Line",
    balls: 15,
    duration: "6 min",
    difficulty: "Intermediate",
    machine: {
      speed: "Medium-slow (45%)",
      spin: "Light topspin",
      feed: "3.5 sec interval",
      placement: "Backhand side, slightly neutral",
      height: "Normal",
    },
    focus: ["Closed stance on down-the-line", "Hit through contact zone", "Keep ball straight — avoid pulling wide"],
    setup: "Alternate: 5 cross-court, 5 down-the-line, repeat pattern.",
    howTo: [
      "Use a more closed stance for down-the-line — body facing the target line.",
      "Hit through the ball; don’t open the face early or it pulls wide.",
      "Aim just inside the sideline, past the service line for depth.",
      "Alternate pattern: cross-court (safe) then down-the-line (change).",
      "In matches, down-the-line often sets up your approach — commit to it.",
    ],
  },
  {
    id: "bh-slice",
    category: "backhand",
    name: "Backhand Slice Approach",
    balls: 15,
    duration: "7 min",
    difficulty: "Intermediate",
    finishesPoint: true,
    machine: {
      speed: "Slow (35-40%)",
      spin: "Flat",
      feed: "4 sec interval",
      placement: "Mid-court backhand side",
      height: "Normal-high",
    },
    focus: ["Low-to-high slice path", "Keep slice deep, not floating", "Follow to service line"],
    setup: "Use slice to approach, then move in for a volley (self or basket).",
    howTo: [
      "Mid-court ball = slice approach, then come in. This shortens the point.",
      "High-to-low path with a firm wrist; keep the slice low and deep, not floaty.",
      "Aim deep down the line or deep middle — give yourself time to close.",
      "Follow the shot to the service line; don’t admire and stay back.",
      "Split step, then punch the first volley deep. Habit: approach → volley → finish.",
    ],
  },
  {
    id: "bh-topspin",
    category: "backhand",
    name: "Backhand Topspin Generator",
    balls: 10,
    duration: "5 min",
    difficulty: "Advanced",
    machine: {
      speed: "Medium (55%)",
      spin: "Heavy topspin",
      feed: "2.5 sec interval",
      placement: "Backhand corner",
      height: "Normal-high (shoulder level)",
    },
    focus: ["Brush up through contact", "Use legs for power", "Clear the net with shape"],
    setup: "Focus on spin over pace. Aim for heavy, deep balls.",
    howTo: [
      "Load the legs; power comes from below, not a bigger arm swing.",
      "Brush up the back of the ball for heavy topspin — shape over the net.",
      "Aim deep; heavy topspin that sits mid-court invites an attack (yours or theirs).",
      "On high balls, wait and swing up — don’t poke.",
      "Use this when you need a safe reset, then look for the next short ball to finish.",
    ],
  },

  // ── SERVE ──
  {
    id: "sv-placement",
    category: "serve",
    name: "Serve Placement Targets",
    balls: 30,
    duration: "12 min",
    difficulty: "Foundation",
    machine: {
      speed: "Off — basket serve practice",
      spin: "N/A",
      feed: "N/A",
      placement: "Use ball basket, not machine",
      height: "N/A",
    },
    focus: ["Toss consistency", "Flat serve to T and wide", "Second serve with spin"],
    setup: "Place targets in service boxes. 10 to deuce T, 10 to ad wide, 10 second serves.",
    howTo: [
      "Same toss every time — toss is the foundation of placement.",
      "First serves: 10 to the T (deuce), 10 wide (ad). Hit targets, not just hard.",
      "Second serves: spin and margin; land deep in the box.",
      "After each serve, freeze your finish for 1 second — balance check.",
      "Think one shot ahead: where do you want their return so you can attack?",
    ],
  },
  {
    id: "sv-plus-one",
    category: "serve",
    name: "Serve + One Pattern",
    balls: 20,
    duration: "10 min",
    difficulty: "Intermediate",
    finishesPoint: true,
    machine: {
      speed: "Medium (50%)",
      spin: "Light topspin",
      feed: "Manual trigger after serve",
      placement: "Return to forehand or backhand (set before each rep)",
      height: "Normal",
    },
    focus: ["Serve placement first", "First ball aggressive to open court", "Recover quickly after serve"],
    setup: "Hit serve, then immediately play machine feed. Alternate deuce/ad serve direction.",
    howTo: [
      "Serve with a plan: wide serve → first ball to open court (or opposite).",
      "After the serve, move into the court — don’t camp on the baseline.",
      "First ball (plus-one) should be aggressive: deep and directional, not a soft rally ball.",
      "If the plus-one lands short for the opponent, take the next ball and come forward.",
      "This drill trains ending points in 3–4 shots instead of 12.",
    ],
  },
  {
    id: "sv-kick",
    category: "serve",
    name: "Kick Serve Development",
    balls: 20,
    duration: "10 min",
    difficulty: "Intermediate",
    machine: {
      speed: "Off — basket serve practice",
      spin: "N/A",
      feed: "N/A",
      placement: "Use ball basket",
      height: "N/A",
    },
    focus: ["Brush up and across", "Aim high over net to ad side", "Bounce above opponent's shoulder"],
    setup: "20 kick serves to ad box. Mark a target zone 3 feet from sideline.",
    howTo: [
      "Toss slightly behind your head; brush up and across the ball.",
      "Aim high over the net — kick needs shape, not a flat trajectory.",
      "Target the ad box, deep; bounce should jump up above shoulder height.",
      "Use this as a reliable second serve and to pull opponents wide.",
      "After a kick out wide, look for a short reply and move in.",
    ],
  },
  {
    id: "sv-volley",
    category: "serve",
    name: "Serve & Volley",
    balls: 10,
    duration: "8 min",
    difficulty: "Advanced",
    finishesPoint: true,
    machine: {
      speed: "Medium (55%)",
      spin: "Flat",
      feed: "Manual trigger",
      placement: "Return at body or feet",
      height: "Normal",
    },
    focus: ["Serve wide to pull return", "Close quickly to net", "Block volley deep middle"],
    setup: "Serve and volley 10 times. Machine simulates return at your feet.",
    howTo: [
      "Serve wide to pull them off the court, then sprint forward immediately.",
      "First steps after contact are decisive — hesitate and you stay in long rallies.",
      "Split step as the return is struck; racket out in front.",
      "On balls at your feet: stay low, punch deep middle — don’t scoop up.",
      "Goal: finish the point at the net. Count successful finishes out of 10.",
    ],
  },

  // ── VOLLEYS ──
  {
    id: "vl-reflex",
    category: "volleys",
    name: "Volley Reflex Drill",
    balls: 20,
    duration: "7 min",
    difficulty: "Foundation",
    finishesPoint: true,
    machine: {
      speed: "Medium-fast (60%)",
      spin: "Flat",
      feed: "2 sec interval",
      placement: "At net height, alternating FH/BH",
      height: "Low (net level)",
    },
    focus: ["Compact punch volley", "Contact in front of body", "Recover racket to ready position"],
    setup: "Stand 3 feet from net, center. Machine feeds alternating sides.",
    howTo: [
      "Ready position: racket head up, hands in front — not down by your hip.",
      "No big swing. Punch / block with a short forward move of the racket.",
      "Contact in front of your body; if contact is beside you, you’re late.",
      "After each volley, return to ready before the next ball.",
      "Think: volleys end points. Crisp contact > fancy angles.",
    ],
  },
  {
    id: "vl-fh-line",
    category: "volleys",
    name: "Forehand Volley Down the Line",
    balls: 15,
    duration: "6 min",
    difficulty: "Intermediate",
    finishesPoint: true,
    machine: {
      speed: "Medium (50%)",
      spin: "Flat",
      feed: "3 sec interval",
      placement: "Forehand volley side",
      height: "Net level",
    },
    focus: ["Turn shoulders slightly", "Punch through, not swing", "Aim deep to corner"],
    setup: "Position at net on deuce side. Volley down the line past service line.",
    howTo: [
      "Small shoulder turn toward the ball; keep the punch compact.",
      "Aim deep down the line — past the service line into the corner.",
      "Step into the volley; weight goes forward, not stuck on the back foot.",
      "If the ball is high, punch it away; if low, stay low and firm.",
      "After the volley, close another step — finish closer to the net.",
    ],
  },
  {
    id: "vl-bh-cross",
    category: "volleys",
    name: "Backhand Volley Cross-Court",
    balls: 15,
    duration: "6 min",
    difficulty: "Intermediate",
    finishesPoint: true,
    machine: {
      speed: "Medium (50%)",
      spin: "Flat",
      feed: "3 sec interval",
      placement: "Backhand volley side",
      height: "Net level",
    },
    focus: ["Firm wrist at contact", "Cross-court angle", "Move through the volley"],
    setup: "Position at net on ad side. Cross-court to deuce corner.",
    howTo: [
      "Firm wrist — soft hands float the ball and give them time.",
      "Use the cross-court angle to open the court after you’ve moved them.",
      "Move through the volley; don’t plant and reach.",
      "Contact out in front on the backhand volley — late contact dumps in the net.",
      "Link this to matches: approach, then use BH volley to finish short points.",
    ],
  },
  {
    id: "vl-transition",
    category: "volleys",
    name: "Approach & First Volley",
    balls: 10,
    duration: "8 min",
    difficulty: "Advanced",
    finishesPoint: true,
    machine: {
      speed: "Slow-medium (45%)",
      spin: "Light topspin",
      feed: "4 sec interval",
      placement: "Short ball to either side",
      height: "Low-normal",
    },
    focus: ["Split step at service line", "First volley deep middle", "Close for put-away"],
    setup: "Hit approach from baseline feed, move to net. Use remaining balls for volley finish.",
    howTo: [
      "PRIMARY HABIT DRILL: short ball → approach → first volley. No exceptions.",
      "Hit the approach deep (down the line or deep middle), keep moving forward.",
      "Split step at the service line — this is where most 3.5 players freeze instead.",
      "First volley goes deep middle to cut off angles; second ball is the put-away.",
      "If you feel yourself stopping at the baseline, reset and redo that rep.",
      "Track score: X/10 times you finished at the net. Aim for 7+.",
    ],
  },
  {
    id: "vl-come-forward",
    category: "volleys",
    name: "Come-Forward Habit (Short Ball Rule)",
    balls: 20,
    duration: "10 min",
    difficulty: "Intermediate",
    finishesPoint: true,
    machine: {
      speed: "Medium (50%)",
      spin: "Light topspin",
      feed: "3.5 sec interval",
      placement: "Mix: deep then short every other ball",
      height: "Normal / low on short feeds",
    },
    focus: ["Spot the short ball early", "Commit forward immediately", "Never hit and stay"],
    setup: "Deep ball = rally deep. Short ball = approach and close. No third option.",
    howTo: [
      "Built for your weakness: you stay back and grind. This rewires that habit.",
      "On deep feeds: hit deep cross-court and recover. Stay disciplined.",
      "On short feeds (inside service line): say “Go,” move in, approach down the line.",
      "Continue to the service line and punch a first volley (or shadow it).",
      "Never hit a short ball and back up. That choice creates the long, tiring rallies.",
      "Success = every short ball ends with you inside the service line.",
    ],
  },

  // ── DROP SHOTS ──
  {
    id: "dp-reaction",
    category: "drop",
    name: "Drop Shot Reaction",
    balls: 20,
    duration: "8 min",
    difficulty: "Intermediate",
    machine: {
      speed: "Alternating: deep 55% / short 30%",
      spin: "Light topspin (deep), backspin (short)",
      feed: "3 sec interval",
      placement: "Alternate deep baseline and short mid-court",
      height: "Normal (deep), low (short)",
    },
    focus: ["Read ball early", "Soft hands on short balls", "Disguise drop — same prep as drive"],
    setup: "On short feed, play drop shot. On deep feed, rally cross-court.",
    howTo: [
      "Read early: if the feed is short, decide drop vs approach before contact.",
      "Same prep as a drive so the drop is disguised.",
      "Soft hands, open face slightly, land the ball in the service box with backspin.",
      "After a good drop, move in — don’t watch. Be ready for the next ball.",
      "If the drop sits up, treat the next ball as a finish opportunity at the net.",
    ],
  },
  {
    id: "dp-fh",
    category: "drop",
    name: "Forehand Drop from Baseline",
    balls: 20,
    duration: "7 min",
    difficulty: "Intermediate",
    machine: {
      speed: "Medium (50%)",
      spin: "Light topspin",
      feed: "3.5 sec interval",
      placement: "Forehand corner",
      height: "Normal",
    },
    focus: ["Same swing prep as topspin", "Soft grip at contact", "Land in service box, cross-court"],
    setup: "Every 3rd ball is a drop shot. Other two are regular cross-court drives.",
    howTo: [
      "Pattern: drive, drive, drop. Keeps the drop unexpected.",
      "Use the same unit turn as a normal forehand, then soften the grip at contact.",
      "Aim cross-court into the service box — more net and court to work with.",
      "If you’re off-balance, skip the drop and drive deep instead.",
      "Drop is a change-up; still look to finish the next ball forward when they dig it up.",
    ],
  },
  {
    id: "dp-passing",
    category: "drop",
    name: "Drop-Shot / Passing Pattern",
    balls: 20,
    duration: "8 min",
    difficulty: "Advanced",
    machine: {
      speed: "Slow-medium (45%)",
      spin: "Light topspin",
      feed: "3 sec interval",
      placement: "Mid-court neutral balls",
      height: "Normal",
    },
    focus: ["Drop when imaginary opponent at net", "Passing shot down the line on next ball", "Change pace effectively"],
    setup: "Alternate: drop shot, then drive passing shot. Simulates cat-and-mouse at net.",
    howTo: [
      "Ball 1: drop as if they’re at net — pull them forward.",
      "Ball 2: drive a passing shot (down the line or lob) as if they closed.",
      "This trains changing pace so you’re not stuck in baseline grind mode.",
      "When YOU are the one who approached, remember: first volley deep, then put-away.",
      "Use drops sparingly in matches; combine with approaching on short balls.",
    ],
  },

  // ── GAME PLAY ──
  {
    id: "gp-rally-target",
    category: "gameplay",
    name: "Cross-Court Rally to Target",
    balls: 20,
    duration: "8 min",
    difficulty: "Foundation",
    machine: {
      speed: "Medium (55%)",
      spin: "Light topspin",
      feed: "2.5 sec interval",
      placement: "Random horizontal oscillation",
      height: "Normal",
    },
    focus: ["Build point with depth", "Wait for short ball to attack", "Recover to center every shot"],
    setup: "Rally cross-court. Only attack when ball lands inside service line.",
    howTo: [
      "Build with depth — don’t go for winners from behind the baseline.",
      "Your attack trigger: ball lands inside the service line → you go forward.",
      "Until then: deep cross-court, recover, wait. Patience with a plan.",
      "When the short ball comes, approach — do not hit another rally ball from mid-court.",
      "This is how you stop long, tiring points: build → short ball → finish.",
    ],
  },
  {
    id: "gp-approach-finish",
    category: "gameplay",
    name: "Approach & Finish Pattern",
    balls: 20,
    duration: "10 min",
    difficulty: "Intermediate",
    finishesPoint: true,
    machine: {
      speed: "Medium (50%)",
      spin: "Light topspin",
      feed: "3 sec interval",
      placement: "Short ball every 3rd feed",
      height: "Low-normal",
    },
    focus: ["Recognize short ball", "Approach down the line", "Finish with volley or groundstroke"],
    setup: "Play out 2-shot pattern: approach + finish. Reset after each point.",
    howTo: [
      "Every 3rd ball is short on purpose — treat it like a match short ball.",
      "Shot 1: approach down the line, deep. Keep moving forward.",
      "Shot 2: finish with volley or aggressive groundstroke — point over.",
      "Reset after each pattern. Quality of the finish matters more than pace.",
      "If you catch yourself staying back on a short ball, stop and redo that rep.",
    ],
  },
  {
    id: "gp-defense-offense",
    category: "gameplay",
    name: "Defensive to Offensive",
    balls: 10,
    duration: "6 min",
    difficulty: "Advanced",
    machine: {
      speed: "Fast (65%)",
      spin: "Heavy topspin",
      feed: "2 sec interval",
      placement: "Wide angles with oscillation",
      height: "Normal-high",
    },
    focus: ["High defensive lob when stretched", "Reset with deep middle ball", "Attack on neutral ball"],
    setup: "On wide balls, defend with height. On center balls, attack.",
    howTo: [
      "Wide/stretched: high and deep (lob or moonball) — buy time, don’t go for glory.",
      "Neutral ball back to center: reset deep middle, recover to center.",
      "When you get a shorter or weaker ball: switch to offense and move in.",
      "Defense is temporary. Your goal is still to find a short ball and finish.",
      "Avoid the trap: defending forever until you’re too tired to attack.",
    ],
  },
  {
    id: "gp-point-sim",
    category: "gameplay",
    name: "Point Simulation",
    balls: 10,
    duration: "8 min",
    difficulty: "Advanced",
    finishesPoint: true,
    machine: {
      speed: "Varies by pattern",
      spin: "Varies",
      feed: "2.5 sec interval",
      placement: "Random oscillation",
      height: "Normal",
    },
    focus: ["Play each sequence as a real point", "Serve imaginary score (30-30)", "Win or lose — reset mentally"],
    setup: "Treat every 3-ball sequence as one point: serve return, rally, finish.",
    howTo: [
      "Imagine score: 30-30. Play the 3-ball sequence like a real point.",
      "Intent: end the point by ball 3 when possible — approach or aggressive finish.",
      "If you grind all 3 balls from the baseline, that rep fails your goal.",
      "Win or lose the imaginary point, then reset mentally for the next one.",
      "Match transfer: shorter points = less fatigue in the third set.",
    ],
  },
  {
    id: "gp-short-points",
    category: "gameplay",
    name: "Short-Point Challenge",
    balls: 20,
    duration: "10 min",
    difficulty: "Intermediate",
    finishesPoint: true,
    machine: {
      speed: "Medium (50%)",
      spin: "Light topspin",
      feed: "3 sec interval",
      placement: "Short ball every other feed",
      height: "Normal / low",
    },
    focus: ["Finish in 4 shots or fewer", "Come forward on every short ball", "Track energy, not just winners"],
    setup: "Every other ball is short. Your job: end the pattern at the net or with an approach winner.",
    howTo: [
      "Scoring: you get 1 point only if you finish inside the service line or with a clear approach winner.",
      "Deep ball: hit deep. Short ball: go forward. No mid-court soft rally balls.",
      "Aim for 12/20 successful finishes. That is match-ready habit.",
      "Notice how less grinding feels — this is the antidote to getting tired in matches.",
      "Carry the same rule into matches: short ball = go.",
    ],
  },
];

export const SESSION_TEMPLATES = [
  {
    id: "balanced",
    name: "Balanced Session",
    description: "Full 45–60 min session covering groundstrokes, net, and finish patterns.",
    duration: "50–60 min",
    blocks: [
      { drillId: "fh-crosscourt", balls: 40 },
      { drillId: "bh-crosscourt", balls: 40 },
      { drillId: "vl-reflex", balls: 40 },
      { drillId: "gp-rally-target", balls: 40 },
      { drillId: "fh-approach", balls: 40 },
      { drillId: "gp-short-points", balls: 40 },
    ],
  },
  {
    id: "forehand-focus",
    name: "Forehand Focus",
    description: "Deep forehand work with approach finishes — ~4 hopper loads.",
    duration: "45–55 min",
    blocks: [
      { drillId: "fh-crosscourt", balls: 50 },
      { drillId: "fh-inside-out", balls: 40 },
      { drillId: "fh-pressure", balls: 30 },
      { drillId: "fh-approach", balls: 50 },
      { drillId: "gp-approach-finish", balls: 40 },
      { drillId: "gp-short-points", balls: 30 },
    ],
  },
  {
    id: "net-game",
    name: "Net Game",
    description: "Volleys, approaches, and finishing at net for a full workout.",
    duration: "45–55 min",
    blocks: [
      { drillId: "vl-reflex", balls: 40 },
      { drillId: "vl-fh-line", balls: 30 },
      { drillId: "vl-bh-cross", balls: 30 },
      { drillId: "vl-come-forward", balls: 60 },
      { drillId: "vl-transition", balls: 40 },
      { drillId: "gp-approach-finish", balls: 40 },
    ],
  },
  {
    id: "finish-points",
    name: "Finish Points (Anti-Grind)",
    description: "Your main session: rewire staying back — come forward and end points. ~4 hoppers.",
    duration: "50–60 min",
    blocks: [
      { drillId: "fh-crosscourt", balls: 30 },
      { drillId: "bh-crosscourt", balls: 30 },
      { drillId: "vl-come-forward", balls: 60 },
      { drillId: "fh-approach", balls: 40 },
      { drillId: "gp-approach-finish", balls: 40 },
      { drillId: "gp-short-points", balls: 40 },
    ],
  },
  {
    id: "serve-return",
    name: "Serve + Return",
    description: "Serve patterns, plus-one, then attack short balls for ~50 minutes.",
    duration: "45–55 min",
    blocks: [
      { drillId: "sv-placement", balls: 40 },
      { drillId: "sv-kick", balls: 30 },
      { drillId: "sv-plus-one", balls: 40 },
      { drillId: "gp-rally-target", balls: 40 },
      { drillId: "fh-approach", balls: 40 },
      { drillId: "gp-short-points", balls: 40 },
    ],
  },
  {
    id: "match-prep",
    name: "Match Prep",
    description: "Match patterns and short-point finishing over a full session.",
    duration: "50–60 min",
    blocks: [
      { drillId: "fh-crosscourt", balls: 30 },
      { drillId: "bh-crosscourt", balls: 30 },
      { drillId: "gp-rally-target", balls: 40 },
      { drillId: "gp-approach-finish", balls: 50 },
      { drillId: "gp-short-points", balls: 50 },
      { drillId: "gp-point-sim", balls: 40 },
    ],
  },
  {
    id: "baseline-weapons",
    name: "Baseline Weapons",
    description: "Forehand + backhand depth, then approach on short balls. ~4 hoppers.",
    duration: "50–60 min",
    blocks: [
      { drillId: "fh-crosscourt", balls: 50 },
      { drillId: "bh-crosscourt", balls: 40 },
      { drillId: "bh-down-line", balls: 30 },
      { drillId: "fh-inside-out", balls: 30 },
      { drillId: "fh-approach", balls: 50 },
      { drillId: "gp-rally-target", balls: 40 },
    ],
  },
];

export const HOPPER_SIZE = 60;
export const SESSION_BALL_TARGET = { min: 200, ideal: 240, max: 250 };

export function getSessionBalls(blocks) {
  return blocks.reduce((sum, b) => sum + b.balls, 0);
}

export function getHopperLoads(balls) {
  return Math.ceil(balls / HOPPER_SIZE);
}

export function formatSessionMeta(blocks, duration) {
  const balls = getSessionBalls(blocks);
  const hoppers = getHopperLoads(balls);
  return {
    balls,
    hoppers,
    duration: duration || "45–60 min",
    label: `${balls} balls · ${hoppers} hoppers · ${duration || "45–60 min"}`,
  };
}

/**
 * Realistic schedule: 2–3 Slinger sessions per week (not every day).
 * Each session is ~200–250 balls (refill hopper 3–4 times), 45–60 minutes.
 * Session 1 always prioritizes finishing points (your main weakness).
 */
export const WEEKLY_SCHEDULES = {
  2: {
    label: "2 sessions / week",
    note: "Two full workouts (~45–60 min, 200–250 balls each). Finish-focused day + weapons day.",
    sessions: [
      {
        id: "s1",
        label: "Session 1",
        suggestedDay: "Tue",
        focus: "volleys",
        templateId: "finish-points",
        why: "Priority: rewire staying back. Full session of approach + finish work.",
      },
      {
        id: "s2",
        label: "Session 2",
        suggestedDay: "Sat",
        focus: "forehand",
        templateId: "baseline-weapons",
        why: "Build FH/BH depth, then practice approaching on short balls.",
      },
    ],
  },
  3: {
    label: "3 sessions / week",
    note: "Three full workouts. Finish points, baseline weapons, then serve patterns.",
    sessions: [
      {
        id: "s1",
        label: "Session 1",
        suggestedDay: "Tue",
        focus: "volleys",
        templateId: "finish-points",
        why: "Priority: come forward and end points shorter.",
      },
      {
        id: "s2",
        label: "Session 2",
        suggestedDay: "Thu",
        focus: "forehand",
        templateId: "baseline-weapons",
        why: "Weapons from the back, still linked to approach on short balls.",
      },
      {
        id: "s3",
        label: "Session 3",
        suggestedDay: "Sat",
        focus: "serve",
        templateId: "serve-return",
        why: "Serve + first ball, then finish — useful before weekend matches.",
      },
    ],
  },
};

/** Off days are for rest or match play — not another machine session */
export const OFF_DAY = {
  title: "No machine today",
  tips: [
    "Rest, light hitting, or play a match — don’t force an extra Slinger day.",
    "In matches: short ball inside the service line → say “Go” and move forward.",
    "Aim for shorter points so you don’t grind yourself tired.",
  ],
};

export function getSchedule(sessionsPerWeek = 2) {
  return WEEKLY_SCHEDULES[sessionsPerWeek] || WEEKLY_SCHEDULES[2];
}

export function getSessionForDay(dayName, sessionsPerWeek = 2) {
  const schedule = getSchedule(sessionsPerWeek);
  return schedule.sessions.find((s) => s.suggestedDay === dayName) || null;
}

export function getDrillById(id) {
  return DRILLS.find((d) => d.id === id);
}

export function getDrillsByCategory(categoryId) {
  return DRILLS.filter((d) => d.category === categoryId);
}

export function getCategory(id) {
  return CATEGORIES.find((c) => c.id === id);
}

/** Build a ~240-ball custom session from selected categories */
export function buildCustomSession(categoryIds, totalBalls = SESSION_BALL_TARGET.ideal) {
  const eligible = DRILLS.filter((d) => categoryIds.includes(d.category));
  if (eligible.length === 0) return [];

  const count = Math.min(eligible.length, 6);
  const selected = eligible.slice(0, count);
  const perDrill = Math.floor(totalBalls / selected.length);
  const blocks = selected.map((d) => ({
    drillId: d.id,
    balls: perDrill,
  }));

  const used = blocks.reduce((s, b) => s + b.balls, 0);
  if (used < totalBalls && blocks.length > 0) {
    blocks[0].balls += totalBalls - used;
  }
  return blocks;
}
