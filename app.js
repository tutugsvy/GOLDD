const CSV_FILE = "./transfers.csv?v=1783770608839";
const TARGET_WALLET = "9riMZpnQvSAwd9HYAdfbVpog5dKvWsKQjM9HZuXaw2H6";
const ADMIN_ALLOWED_WALLETS = [TARGET_WALLET, "EuihNhM5yJnE7p7FHqAhKvsvNeaUdyALaAh6bUXPxKpo"];
const ADMIN_AUTH_MAX_AGE_MS = 9 * 60 * 1000;
const POINT_POOL = 10_000;
const AT_RISK_POINT_THRESHOLD = 3;
const STANDARD_MIN_POINTS_PER_WALLET = 1;
const DUST_SOL_THRESHOLD = 0.0025;
const DUST_MIN_POINTS_PER_WALLET = 0.1;
const POINT_UNITS_PER_POINT = 10;
const LIST_PAGE_SIZE = 250;
const BOOSTER_SHARE_TEXT = "I just successfully joined the whitelist for sushifrogs.fun.\n\nMore info at: @pepetoshi. Distribution reimagined, in real time! 🐸";
const MINING_STATE_ENDPOINT = "/.netlify/functions/mining-state";
const MINING_BLOCKS_ENDPOINT = "/.netlify/functions/mining-blocks";
const MINING_ADMIN_ENDPOINT = "/.netlify/functions/mining-admin";
const MINING_BLOCK_PAGE_SIZE = 12;
const ARCADE_STORAGE_KEY = "frogDashScoresV1";
const ARCADE_PUBLIC_SCORES_ENDPOINT = "/.netlify/functions/arcade-scores";
const ARCADE_RUNS_ENDPOINT = "/.netlify/functions/arcade-runs";
const ARCADE_SCORE_LIMIT = 500;
const ARCADE_LEADERBOARD_PAGE_SIZE = 6;
const ARCADE_LEADERBOARD_MAX_RESULTS = 24;
const ARCADE_PRIZE_WINNER_LIMIT = 3;
const ARCADE_SCORE_WINDOW_MS = 24 * 60 * 60 * 1000;
const ARCADE_TODAY = new Date().toISOString().slice(0, 10);
const TEMPLE_RUN_STORAGE_KEY = "templeFrogRunBestV1";
const TEMPLE_RUN_CONFIG = {
  height: 540,
  width: 960,
  horizonY: 132,
  playerY: 424,
  baseSpeed: 0.34,
  maxSpeed: 1.18,
  speedGain: 0.00018,
  spawnMin: 0.72,
  spawnMax: 1.18,
};
const TEMPLE_RUN_LEVELS = [
  { accent: "#d8ff4f", level: 1, min: 0, name: "Outer Gate", speed: 0, spawn: 1.08 },
  { accent: "#72d7c9", level: 2, min: 480, name: "Moss Hall", speed: 0.08, spawn: 0.96 },
  { accent: "#ffd84a", level: 3, min: 1150, name: "Relic Turn", speed: 0.16, spawn: 0.84 },
  { accent: "#ffb55a", level: 4, min: 2100, name: "Vault Bridge", speed: 0.26, spawn: 0.74 },
  { accent: "#ff8f7a", level: 5, min: 3400, name: "Idol Wake", speed: 0.38, spawn: 0.66 },
  { accent: "#d8ff4f", level: 6, min: 5200, name: "Temple Frenzy", speed: 0.5, spawn: 0.58 },
];
const TEMPLE_RUN_OBSTACLES = [
  { avoid: "lane", color: "#8a5f37", h: 74, name: "relic", w: 74, weight: 1.05 },
  { avoid: "jump", color: "#4a6b4b", h: 32, name: "gap", w: 116, weight: 0.85 },
  { avoid: "slide", color: "#d7b56a", h: 96, name: "gate", w: 128, weight: 0.74 },
  { avoid: "lane", color: "#5f6f62", h: 92, name: "pillar", w: 82, weight: 0.94 },
];
const HOLDER_MULTIPLIER_TIERS = [
  { max: 1, multiplier: 1.15 },
  { max: 3, multiplier: 1.2 },
  { max: 5, multiplier: 1.25 },
  { max: 10, multiplier: 1.3 },
  { max: Infinity, multiplier: 1.35 },
];
const FROG_COLLECTION_MINT = "5AZDDcVuPNFfzNdEcbPiuiokiPvkePFxJRo1J6XviN8t";
const HOLDER_CHECK_ENDPOINT = "/.netlify/functions/check-holder";
const HOLDER_DIRECT_RPC_ENDPOINT = "https://annabelle-t1bcwh-fast-mainnet.helius-rpc.com/";
const HOLDER_DIRECT_PAGE_LIMIT = 1000;
const HOLDER_DIRECT_MAX_PAGES = 10;
const ARCADE_CONFIG = {
  baseSpeed: 320,
  coinPoints: 12,
  distanceScale: 0.08,
  gravity: 1700,
  groundY: 422,
  height: 540,
  holdBoost: -1050,
  jumpVelocity: -735,
  maxHoldSeconds: 0.2,
  maxScoreSpeedBoost: 160,
  maxSpeed: 1025,
  playerHeight: 76,
  playerWidth: 92,
  playerX: 146,
  scoreSpeedFactor: 2.35,
  speedGain: 0.055,
  width: 960,
};
const ARCADE_LEVELS = [
  {
    accent: "#d8ff4f",
    level: 1,
    maxPattern: 1,
    min: 0,
    name: "Garden",
    patternChance: 0.02,
    sky: ["#d8ff4f", "#72d7c9", "#17361f"],
    spawnMax: 1.48,
    spawnMin: 1.05,
    speedBoost: 0,
  },
  {
    accent: "#8ef06d",
    level: 2,
    maxPattern: 2,
    min: 380,
    name: "Pond Rush",
    patternChance: 0.12,
    sky: ["#cfff3d", "#66d9bf", "#11351d"],
    spawnMax: 1.25,
    spawnMin: 0.9,
    speedBoost: 24,
  },
  {
    accent: "#ffd84a",
    level: 3,
    maxPattern: 2,
    min: 900,
    name: "Temple Steps",
    patternChance: 0.23,
    sky: ["#f2ff5c", "#72d7c9", "#1f3d1d"],
    spawnMax: 1.12,
    spawnMin: 0.78,
    speedBoost: 54,
  },
  {
    accent: "#ffb55a",
    level: 4,
    maxPattern: 3,
    min: 1650,
    name: "Coin Storm",
    patternChance: 0.34,
    sky: ["#ffd84a", "#79d9a8", "#193720"],
    spawnMax: 1,
    spawnMin: 0.68,
    speedBoost: 94,
  },
  {
    accent: "#ff8f7a",
    level: 5,
    maxPattern: 3,
    min: 2750,
    name: "Ridiculous",
    patternChance: 0.47,
    sky: ["#ffd35a", "#6ad4c8", "#102416"],
    spawnMax: 0.86,
    spawnMin: 0.58,
    speedBoost: 142,
  },
  {
    accent: "#d8ff4f",
    level: 6,
    maxPattern: 3,
    min: 4300,
    name: "Vault Frenzy",
    patternChance: 0.6,
    sky: ["#d8ff4f", "#55c4b9", "#0b1e13"],
    spawnMax: 0.78,
    spawnMin: 0.52,
    speedBoost: 195,
  },
];
const ARCADE_OBSTACLE_TYPES = [
  { color: "#7b4b28", h: 34, minLevel: 1, name: "log", w: 92, weight: 1.25 },
  { color: "#59695a", h: 52, minLevel: 1, name: "rock", w: 62, weight: 1.05 },
  { color: "#d8a039", h: 50, minLevel: 1, name: "crate", w: 56, weight: 1 },
  { color: "#315f35", h: 42, minLevel: 1, name: "stump", w: 68, weight: 1 },
  { color: "#5ac758", h: 28, minLevel: 2, name: "lily", w: 112, weight: 0.86 },
  { color: "#ffcf3d", h: 64, minLevel: 3, name: "lantern", w: 48, weight: 0.64 },
  { color: "#254c36", h: 38, minLevel: 3, name: "vault", w: 128, weight: 0.48 },
  { color: "#72d7c9", h: 78, minLevel: 4, name: "totem", w: 50, weight: 0.42 },
];

const state = {
  characterIndex: 0,
  pointsVisibleCount: LIST_PAGE_SIZE,
  whitelistPhase: "phase1",
  whitelistVisibleCount: LIST_PAGE_SIZE,
  rows: [],
  transfers: [],
  wallets: [],
  sort: "points",
};

const els = {
  characterCode: document.querySelector("#characterCode"),
  characterImage: document.querySelector("#characterImage"),
  characterLore: document.querySelector("#characterLore"),
  characterMeta: document.querySelector("#characterMeta"),
  characterName: document.querySelector("#characterName"),
  characterPanel: document.querySelector(".character-panel"),
  characterStage: document.querySelector("#characterStage"),
  characterStrip: document.querySelector("#characterStrip"),
  emptyState: document.querySelector("#emptyState"),
  leaderCards: document.querySelector("#leaderCards"),
  nextCharacter: document.querySelector("#nextCharacter"),
  prevCharacter: document.querySelector("#prevCharacter"),
  searchInput: document.querySelector("#searchInput"),
  sortSelect: document.querySelector("#sortSelect"),
  topPoints: document.querySelector("#topPoints"),
  transferCount: document.querySelector("#transferCount"),
  walletCount: document.querySelector("#walletCount"),
  walletLoadMore: document.querySelector("#walletLoadMore"),
  walletRows: document.querySelector("#walletRows"),
  phaseOneCount: document.querySelector("#phaseOneCount"),
  whitelistEmptyState: document.querySelector("#whitelistEmptyState"),
  whitelistLoadMore: document.querySelector("#whitelistLoadMore"),
  whitelistPhaseLabel: document.querySelector("#whitelistPhaseLabel"),
  whitelistResult: document.querySelector("#whitelistResult"),
  whitelistRows: document.querySelector("#whitelistRows"),
  whitelistSearchInput: document.querySelector("#whitelistSearchInput"),
  whitelistStatus: document.querySelector("#whitelistStatus"),
  whitelistSummary: document.querySelector("#whitelistSummary"),
  miningAdminExportPayouts: document.querySelector("#miningAdminExportPayouts"),
  miningAdminConnect: document.querySelector("#miningAdminConnect"),
  miningAdminGate: document.querySelector("#miningAdminGate"),
  miningAdminMineDue: document.querySelector("#miningAdminMineDue"),
  miningAdminOutput: document.querySelector("#miningAdminOutput"),
  miningAdminPanel: document.querySelector(".mining-admin-panel"),
  miningAdminPause: document.querySelector("#miningAdminPause"),
  miningAdminPrivate: document.querySelector("#miningAdminPrivate"),
  miningAdminResume: document.querySelector("#miningAdminResume"),
  miningAdminStatus: document.querySelector("#miningAdminStatus"),
  miningAdminStatusNote: document.querySelector("#miningAdminStatusNote"),
  miningAdminSyncHolders: document.querySelector("#miningAdminSyncHolders"),
  miningBlocksNext: document.querySelector("#miningBlocksNext"),
  miningBlocksPage: document.querySelector("#miningBlocksPage"),
  miningBlocksPrev: document.querySelector("#miningBlocksPrev"),
  miningBlocksCompleted: document.querySelector("#miningBlocksCompleted"),
  miningCurrentReward: document.querySelector("#miningCurrentReward"),
  miningCycleBlock: document.querySelector("#miningCycleBlock"),
  miningCycleCountdown: document.querySelector("#miningCycleCountdown"),
  miningCycleMeter: document.querySelector("#miningCycleMeter"),
  miningCycleStatus: document.querySelector("#miningCycleStatus"),
  miningDistributed: document.querySelector("#miningDistributed"),
  miningFrogForm: document.querySelector("#miningFrogForm"),
  miningFrogResult: document.querySelector("#miningFrogResult"),
  miningFrogSearch: document.querySelector("#miningFrogSearch"),
  miningHashLine: document.querySelector("#miningHashLine"),
  miningHistory: document.querySelector("#miningHistory"),
  miningHistoryEmpty: document.querySelector("#miningHistoryEmpty"),
  miningLoadedUnminted: document.querySelector("#miningLoadedUnminted"),
  miningLoadedUnmintedCount: document.querySelector("#miningLoadedUnmintedCount"),
  miningMintedFrogs: document.querySelector("#miningMintedFrogs"),
  miningMintPercent: document.querySelector("#miningMintPercent"),
  miningNextReward: document.querySelector("#miningNextReward"),
  miningOwnedPendingCount: document.querySelector("#miningOwnedPendingCount"),
  miningOwnershipContent: document.querySelector("#miningOwnershipContent"),
  miningOwnershipFilename: document.querySelector("#miningOwnershipFilename"),
  miningOwnershipForm: document.querySelector("#miningOwnershipForm"),
  miningPreviewImport: document.querySelector("#miningPreviewImport"),
  miningProductiveFrogs: document.querySelector("#miningProductiveFrogs"),
  miningReduction: document.querySelector("#miningReduction"),
  miningRefresh: document.querySelector("#miningRefresh"),
  miningRemaining: document.querySelector("#miningRemaining"),
  miningReveal: document.querySelector("#miningReveal"),
  miningRevealFrog: document.querySelector("#miningRevealFrog"),
  miningRevealReward: document.querySelector("#miningRevealReward"),
  miningRevealStatus: document.querySelector("#miningRevealStatus"),
  miningRichestFrogs: document.querySelector("#miningRichestFrogs"),
  miningRig: document.querySelector("#miningRig"),
  miningRigBlock: document.querySelector("#miningRigBlock"),
  miningRigCountdown: document.querySelector("#miningRigCountdown"),
  miningScanner: document.querySelector("#miningScanner"),
  miningSoundToggle: document.querySelector("#miningSoundToggle"),
  miningTotalFrogs: document.querySelector("#miningTotalFrogs"),
  miningUniqueMiners: document.querySelector("#miningUniqueMiners"),
  miningUnpaid: document.querySelector("#miningUnpaid"),
  arcadeBest: document.querySelector("#arcadeBest"),
  arcadeBackToLobby: document.querySelector("#arcadeBackToLobby"),
  arcadeCanvas: document.querySelector("#frogDashCanvas"),
  arcadeConnectWallet: document.querySelector("#arcadeConnectWallet"),
  arcadeCurrentLeader: document.querySelector("#arcadeCurrentLeader"),
  arcadeCurrentLeaderScore: document.querySelector("#arcadeCurrentLeaderScore"),
  arcadeGamePanel: document.querySelector("#arcadeGamePanel"),
  arcadeHolderRun: document.querySelector("#arcadeHolderRun"),
  arcadeHolderStatus: document.querySelector("#arcadeHolderStatus"),
  arcadeLastWinners: document.querySelector("#arcadeLastWinners"),
  arcadeLeaderboardPage: document.querySelector("#arcadeLeaderboardPage"),
  arcadeLeaderboard: document.querySelector("#arcadeLeaderboard"),
  arcadeLeaderboardTitle: document.querySelector("#arcadeLeaderboardTitle"),
  arcadeLevel: document.querySelector("#arcadeLevel"),
  arcadeLobby: document.querySelector("#arcadeLobby"),
  arcadeMode: document.querySelector("#arcadeMode"),
  arcadeOpenFrogDash: document.querySelector("#arcadeOpenFrogDash"),
  arcadeOpenTempleRun: document.querySelector("#arcadeOpenTempleRun"),
  arcadeOverlay: document.querySelector("#arcadeOverlay"),
  arcadePlayer: document.querySelector(".arcade-player"),
  arcadePlayerName: document.querySelector("#arcadePlayerName"),
  arcadeScore: document.querySelector("#arcadeScore"),
  arcadeStageWrap: document.querySelector(".arcade-stage-wrap"),
  arcadeStart: document.querySelector("#arcadeStart"),
  arcadeStatus: document.querySelector("#arcadeStatus"),
  arcadeRoundCountdown: document.querySelector("#arcadeRoundCountdown"),
  arcadeRunAttempts24h: document.querySelector("#arcadeRunAttempts24h"),
  arcadeRunAttemptsNote: document.querySelector("#arcadeRunAttemptsNote"),
  arcadeTodayBest: document.querySelector("#arcadeTodayBest"),
  arcadeWalletRun: document.querySelector("#arcadeWalletRun"),
  arcadeWalletStatus: document.querySelector("#arcadeWalletStatus"),
  arcadeAccessPanel: document.querySelector(".arcade-access-panel"),
  templeBackToLobby: document.querySelector("#templeBackToLobby"),
  templeRunBest: document.querySelector("#templeRunBest"),
  templeRunCanvas: document.querySelector("#templeRunCanvas"),
  templeRunCoins: document.querySelector("#templeRunCoins"),
  templeRunLevel: document.querySelector("#templeRunLevel"),
  templeRunMode: document.querySelector("#templeRunMode"),
  templeRunOverlay: document.querySelector("#templeRunOverlay"),
  templeRunPanel: document.querySelector("#templeGamePanel"),
  templeRunScore: document.querySelector("#templeRunScore"),
  templeRunStart: document.querySelector("#templeRunStart"),
  templeRunStatus: document.querySelector("#templeRunStatus"),
};

const arcadeBoardButtons = document.querySelectorAll("[data-arcade-board]");
const arcadePageButtons = document.querySelectorAll("[data-arcade-page]");
const tabButtons = document.querySelectorAll("[data-tab-target]");
const tabLinks = document.querySelectorAll("[data-tab-link]");
const tabPanels = document.querySelectorAll("[data-tab-panel]");
const phaseButtons = document.querySelectorAll("[data-phase]");

const characters = [
  {
    code: "Specimen 000",
    lore: "The first ridiculous frog, staring at the entire distribution experiment like it already knows the ending.",
    meta: "Original vault witness",
    name: "Genesis Green",
    src: "./nft-pfp.jpg",
    tone: "green",
  },
  {
    code: "Specimen 014",
    lore: "Carries a cigar, a turquoise sky, and the expression of someone who found the secret mint list early.",
    meta: "Smoke signal trait",
    name: "Cigar Oracle",
    src: "./pfp1.png",
    tone: "teal",
  },
  {
    code: "Specimen 027",
    lore: "Blue skin, red hoodie, and a campaign slogan for turning the whole collection into a daily mining machine.",
    meta: "Manifesto hoodie",
    name: "Blue Manifesto",
    src: "./pfp2.png",
    tone: "pink",
  },
  {
    code: "Specimen 041",
    lore: "A red-skinned tactician in dragon silk, cataloged after appearing in the high-conviction wing of the archive.",
    meta: "Dragon coat",
    name: "Dragon Silk",
    src: "./pfp3.png",
    tone: "red",
  },
  {
    code: "Specimen 052",
    lore: "Golden robe, gold mouth, gold attitude. This one looks like it charges interest on eye contact.",
    meta: "Gold-mouth rare",
    name: "Golden Robe",
    src: "./pfp4.png",
    tone: "gold",
  },
  {
    code: "Specimen 063",
    lore: "A blue sovereign with dollar eyes, recorded immediately before the vault started making strange noises.",
    meta: "Crowned vault seeker",
    name: "Crown Velocity",
    src: "./pfp5.png",
    tone: "blue",
  },
  {
    code: "Specimen 079",
    lore: "Transparent anatomy, exposed conviction, and a face that says the tokenomics are visible from inside the bones.",
    meta: "X-ray body",
    name: "X-Ray Saint",
    src: "./pfp7.png",
    tone: "bone",
  },
  {
    code: "Specimen 088",
    lore: "Night-vision goggles, radioactive grin, and the calm of a frog who has already seen tomorrow's distribution.",
    meta: "Future-goggles",
    name: "Night Vision",
    src: "./pfp8.png",
    tone: "lime",
  },
  {
    code: "Specimen ???",
    lore: "As there are a lot more to be revealed.",
    meta: "Hidden collection file",
    name: "More To Be Revealed",
    src: "./reveal-more.png",
    tone: "mystery",
  },
];

const numberFormat = new Intl.NumberFormat("en", { maximumFractionDigits: 4 });
const integerFormat = new Intl.NumberFormat("en", { maximumFractionDigits: 0 });
const pointFormat = new Intl.NumberFormat("en", { maximumFractionDigits: 1 });
let characterTimer = null;
let arcadePrizeTimer = null;
let arcadeScoreRefreshTimer = null;
let arcadeRunCounterTimer = null;
const arcadeFrogImage = new Image();
arcadeFrogImage.src = "./fr2.png";
const templeFrogImage = new Image();
templeFrogImage.src = "./fr2.png";

const arcade = {
  collected: 0,
  coins: [],
  ctx: null,
  distance: 0,
  gameOver: false,
  groundMarks: [],
  holderCheckStatus: "idle",
  holderMessage: "Holder mode unlocks after NFT ownership verification.",
  isHolder: false,
  lastTime: 0,
  level: 1,
  levelCue: 0,
  leaderboardMode: "24h",
  leaderboardPage: 0,
  mode: "idle",
  nftCount: 0,
  obstacles: [],
  particles: [],
  practice: false,
  pressing: false,
  publicScores: [],
  publicScoresStatus: "idle",
  rafId: 0,
  rngSeed: 1,
  runAttempts24h: 0,
  runAttemptsStatus: "idle",
  running: false,
  score: 0,
  scoreSaved: false,
  scroll: 0,
  shake: 0,
  spawnTimer: 0,
  speed: ARCADE_CONFIG.baseSpeed,
  walletAddress: "",
  walletName: "",
  player: {
    grounded: true,
    h: ARCADE_CONFIG.playerHeight,
    holdTime: 0,
    vy: 0,
    w: ARCADE_CONFIG.playerWidth,
    x: ARCADE_CONFIG.playerX,
    y: ARCADE_CONFIG.groundY - ARCADE_CONFIG.playerHeight,
  },
};

const templeRun = {
  best: readTempleRunBest(),
  coins: 0,
  ctx: null,
  distance: 0,
  entities: [],
  gameOver: false,
  lastTime: 0,
  lane: 0,
  laneVisual: 0,
  level: 1,
  levelCue: 0,
  mode: "idle",
  particles: [],
  pointerStart: null,
  rafId: 0,
  rngSeed: 1,
  running: false,
  score: 0,
  shake: 0,
  slideTime: 0,
  spawnTimer: 0.9,
  speed: TEMPLE_RUN_CONFIG.baseSpeed,
  tunnelGlow: 0,
  jump: {
    active: false,
    time: 0,
    duration: 0.62,
  },
};

const mining = {
  blockCursorStack: [0],
  blockHasMore: false,
  blockHistoryRows: [],
  blockLoading: false,
  blockNextCursor: null,
  blockPageIndex: 0,
  countdownTimer: null,
  data: null,
  lastLoadAt: 0,
  loading: false,
  serverOffsetMs: 0,
  sound: false,
};

const miningAdmin = {
  message: "",
  signedAt: 0,
  signature: "",
  walletAddress: "",
  walletName: "",
};

function tabFromHash() {
  if (window.location.hash === "#info") return "info";
  if (window.location.hash === "#mining") return "mining";
  if (window.location.hash === "#arcade") return "arcade";
  if (window.location.hash === "#points") return "points";
  if (window.location.hash === "#whitelist") return "whitelist";
  return "mint";
}

function setArcadeScreen(screen = "lobby") {
  const nextScreen = screen === "game" ? "frogdash" : ["frogdash", "temple"].includes(screen) ? screen : "lobby";

  if (nextScreen !== "frogdash" && arcade.running) {
    arcade.running = false;
    arcade.pressing = false;
    els.arcadeStageWrap?.classList.remove("is-running");
    setArcadeMessage("Ready", "HOW FAR CAN YOUR FROG DASH?", "Start a run, then tap, click, or press Space to jump.");
    updateArcadeHud();
  }

  if (nextScreen !== "temple" && templeRun.running) {
    templeRun.running = false;
    els.templeRunCanvas?.parentElement?.classList.remove("is-running");
    setTempleRunMessage("Ready", "ENTER THE FROG TEMPLE.", "Choose a lane, dodge relics, and collect vault coins.");
    updateTempleRunHud();
  }

  if (els.arcadeLobby) els.arcadeLobby.hidden = nextScreen !== "lobby";
  if (els.arcadeGamePanel) els.arcadeGamePanel.hidden = nextScreen !== "frogdash";
  if (els.templeRunPanel) els.templeRunPanel.hidden = nextScreen !== "temple";

  if (nextScreen === "frogdash") {
    window.requestAnimationFrame(drawArcade);
  } else if (nextScreen === "temple") {
    window.requestAnimationFrame(drawTempleRun);
  }
}

function setActiveTab(tabName, updateHash = true) {
  const nextTab = ["mint", "info", "mining", "arcade", "points", "whitelist"].includes(tabName) ? tabName : "mint";

  tabPanels.forEach((panel) => {
    panel.hidden = panel.dataset.tabPanel !== nextTab;
  });

  tabButtons.forEach((button) => {
    const isActive = button.dataset.tabTarget === nextTab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  if (updateHash) {
    window.history.replaceState(null, "", `#${nextTab}`);
  }

  if (nextTab === "arcade") {
    setArcadeScreen("lobby");
  } else if (nextTab === "mining") {
    startMiningTimers();
    loadMiningState();
  }
}

function renderCharacterStrip() {
  if (!els.characterStrip) return;

  els.characterStrip.innerHTML = characters
    .map(
      (character, index) => `
        <button class="character-card" type="button" data-character-index="${index}" aria-pressed="${index === state.characterIndex}">
          <img src="${character.src}" alt="" aria-hidden="true" />
          <span>${escapeHtml(character.code)}</span>
          <strong>${escapeHtml(character.name)}</strong>
        </button>
      `,
    )
    .join("");
}

function setCharacter(index, animate = true) {
  if (!els.characterImage) return;

  const nextIndex = (index + characters.length) % characters.length;
  const character = characters[nextIndex];
  state.characterIndex = nextIndex;
  window.clearTimeout(characterTimer);

  const updateCharacter = () => {
    els.characterImage.src = character.src;
    els.characterImage.alt = `${character.name} $SHIFROGS NFT character`;
    els.characterCode.textContent = character.code;
    els.characterName.textContent = character.name;
    els.characterMeta.textContent = character.meta;
    els.characterLore.textContent = character.lore;
    els.characterStage.dataset.tone = character.tone;
    els.characterPanel.dataset.tone = character.tone;

    els.characterStrip?.querySelectorAll("[data-character-index]").forEach((button) => {
      const isActive = Number(button.dataset.characterIndex) === nextIndex;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  if (!animate) {
    updateCharacter();
    return;
  }

  els.characterStage.classList.add("is-switching");
  els.characterPanel.classList.add("is-switching");
  characterTimer = window.setTimeout(() => {
    updateCharacter();
    window.requestAnimationFrame(() => {
      els.characterStage.classList.remove("is-switching");
      els.characterPanel.classList.remove("is-switching");
    });
  }, 140);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }

  const headers = rows.shift() || [];
  return rows
    .filter((values) => values.some(Boolean))
    .map((values) =>
      Object.fromEntries(headers.map((header, index) => [header.trim(), values[index] ?? ""])),
    );
}

function toNumber(value) {
  const number = Number(String(value || "").replaceAll(",", ""));
  return Number.isFinite(number) ? number : 0;
}

function normalizeAmount(row) {
  const amount = toNumber(row.Amount);
  const decimals = toNumber(row.Decimals);
  if (!decimals) return amount;
  return amount / 10 ** decimals;
}

function shortWallet(wallet) {
  if (!wallet || wallet.length < 14) return wallet || "Unknown";
  return `${wallet.slice(0, 7)}...${wallet.slice(-7)}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(value) {
  if (!value) return "Unknown";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    month: "short",
  }).format(date);
}

function solscanWallet(wallet) {
  return `https://solscan.io/account/${wallet}`;
}

function shareOnXUrl(text) {
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
}

function miningBlockLabel(blockNumber) {
  return `Block #${String(Math.max(1, Number(blockNumber || 1))).padStart(6, "0")}`;
}

function miningFrogLabel(frogNumber) {
  return `Frog #${String(Math.max(1, Number(frogNumber || 1))).padStart(4, "0")}`;
}

function formatFrogAmount(amount, symbol = "FROG") {
  const value = Math.max(0, Math.round(Number(amount || 0)));
  return `${integerFormat.format(value)} $${symbol || "FROG"}`;
}

function formatMiningCountdown(milliseconds) {
  const ms = Math.max(0, Math.round(Number(milliseconds || 0)));
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const centiseconds = Math.floor((ms % 1000) / 10);
  if (totalSeconds < 10) return `${minutes}:${String(seconds).padStart(2, "0")}.${String(centiseconds).padStart(2, "0")}`;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function miningStatusCopy(status) {
  if (status === "PAUSED") return "Rig status: Paused";
  if (status === "MAINTENANCE") return "Rig status: Maintenance";
  if (status === "SEALING_DUE") return "Rig status: Waiting for backend seal";
  return "Rig status: Mining";
}

function miningRewardStatusCopy(status) {
  if (status === "PENDING_PAYOUT") return "Pending distribution";
  if (status === "LOCKED_UNTIL_MINT") return "Locked until mint";
  if (status === "PAID") return "Distributed";
  if (status === "VOID") return "Void";
  return "No reward";
}

function miningRewardTierCopy(tier) {
  if (tier === "JACKPOT") return "Jackpot";
  if (tier === "GEM") return "Gem";
  if (tier === "MINTED_NORMAL") return "Minted";
  if (tier === "UNMINTED_NORMAL") return "Unminted";
  return "Reward";
}

function miningRewardTierClass(tier) {
  if (tier === "JACKPOT") return "is-jackpot";
  if (tier === "GEM") return "is-gem";
  if (tier === "MINTED_NORMAL") return "is-minted";
  return "is-unminted";
}

function miningRewardStatusControl(block, status, statusClass) {
  const canAdminMarkDistributed =
    block.rewardStatus === "PENDING_PAYOUT" && block.rewardId && miningAdminSessionValid();

  if (!canAdminMarkDistributed) {
    return `<span class="mining-status-pill ${statusClass}">${escapeHtml(status)}</span>`;
  }

  return `
    <button
      class="mining-status-pill ${statusClass}"
      type="button"
      data-mining-mark-distributed="${escapeHtml(block.rewardId)}"
      title="Mark this pending reward as distributed"
      aria-label="Mark ${escapeHtml(miningFrogLabel(block.winnerFrogId))} reward as distributed"
    >
      ${escapeHtml(status)}
    </button>
  `;
}

function miningFrogTreasureCopy(amount, config = {}) {
  const value = Math.max(0, Math.round(Number(amount || 0)));
  if (value >= Number(config.jackpotMin || 700000)) return "Jackpot loaded";
  if (value >= Number(config.gemMin || 100000)) return "Gem loaded";
  if (value > 0) return "Reward locked until this Frog is minted";
  return "Waiting for a sealed block";
}

function miningShortHash(hash) {
  if (!hash) return "hash: waiting for backend confirmation";
  return `hash: ${hash.slice(0, 10)}...${hash.slice(-8)}`;
}

function miningNow() {
  return Date.now() + mining.serverOffsetMs;
}

function setMiningServerStatus(message, error = false) {
  if (els.miningCycleStatus) els.miningCycleStatus.textContent = message;
  els.miningRig?.classList.toggle("is-offline", Boolean(error));
}

function updateMiningCountdown() {
  if (!mining.data?.currentCycle) return;

  const cycle = mining.data.currentCycle;
  const openedAt = Date.parse(cycle.openedAt || "");
  const closesAt = Date.parse(cycle.closesAt || "");
  const now = miningNow();
  const remaining = Number.isFinite(closesAt) ? closesAt - now : 0;
  const duration = Number.isFinite(openedAt) && Number.isFinite(closesAt) ? Math.max(1, closesAt - openedAt) : 1;
  const progress = Number.isFinite(openedAt) ? clamp((now - openedAt) / duration, 0, 1) : 0;
  const countdown = remaining <= 0 ? "sealing" : formatMiningCountdown(remaining);

  if (els.miningCycleCountdown) {
    els.miningCycleCountdown.textContent = remaining <= 0 ? "Waiting for server-confirmed block..." : `Next block in ${countdown}`;
  }
  if (els.miningRigCountdown) {
    els.miningRigCountdown.textContent = remaining <= 0 ? "Next block: sealing" : `Next block in ${countdown}`;
  }
  if (els.miningCycleMeter) {
    els.miningCycleMeter.style.width = `${Math.max(3, Math.round(progress * 100))}%`;
  }
  if (els.miningScanner) {
    const total = Math.max(1, Number(mining.data.config?.totalFrogs || 10000));
    const scan = Math.max(1, Math.min(total, Math.floor(((now / 87) % total) + 1)));
    els.miningScanner.textContent = `#${String(scan).padStart(4, "0")}`;
  }

  els.miningRig?.classList.toggle("is-sealing", remaining <= 10000 && mining.data.config?.active);

  if (remaining <= 0 && Date.now() - mining.lastLoadAt > 2000 && !mining.loading) {
    loadMiningState();
  }
}

function renderMiningStatElements(data) {
  const stats = data.stats || {};
  const config = data.config || {};
  const symbol = config.tokenSymbol || "FROG";
  const currentTier = miningRewardTierCopy(stats.currentRewardTier);
  const nextTier = miningRewardTierCopy(stats.nextRewardTier);

  if (els.miningCurrentReward) els.miningCurrentReward.textContent = formatFrogAmount(stats.currentBlockReward, symbol);
  if (els.miningNextReward) {
    els.miningNextReward.textContent = `${currentTier} now. Next ${nextTier}: ${formatFrogAmount(stats.nextBlockReward, symbol)}`;
  }
  if (els.miningDistributed) els.miningDistributed.textContent = formatFrogAmount(stats.totalFrogDiscovered, symbol);
  if (els.miningRemaining) {
    els.miningRemaining.textContent =
      stats.remainingMiningAllocation === null ? "Unconfigured" : formatFrogAmount(stats.remainingMiningAllocation, symbol);
  }
  if (els.miningReduction) {
    els.miningReduction.textContent =
      config.emissionModel === "daily_random"
        ? `${formatFrogAmount(stats.dailyBudget, symbol)} / day`
        : `${integerFormat.format(config.decreasePerBlock || 0)} $${symbol}`;
  }
  if (els.miningBlocksCompleted) els.miningBlocksCompleted.textContent = integerFormat.format(stats.blocksCompleted || 0);
  if (els.miningTotalFrogs) els.miningTotalFrogs.textContent = integerFormat.format(stats.totalFrogs || 3333);
  if (els.miningMintedFrogs) els.miningMintedFrogs.textContent = integerFormat.format(stats.frogsMinted || 0);
  if (els.miningMintPercent) {
    const source = stats.holderSnapshotAssetCount ? "holder snapshot" : "ownership imports";
    els.miningMintPercent.textContent = `${Math.round((stats.mintPercentage || 0) * 1000) / 10}% from ${source}`;
  }
  if (els.miningUniqueMiners) els.miningUniqueMiners.textContent = integerFormat.format(stats.uniqueFrogsMined || 0);
  if (els.miningUnpaid) els.miningUnpaid.textContent = formatFrogAmount(stats.totalFrogUnpaid, symbol);
  if (els.miningLoadedUnmintedCount) {
    els.miningLoadedUnmintedCount.textContent = integerFormat.format(stats.unmintedFrogsCarryingRewards || 0);
  }
  if (els.miningOwnedPendingCount) {
    els.miningOwnedPendingCount.textContent = integerFormat.format(stats.ownedFrogsWithPendingRewards || 0);
  }
}

function miningFrogAction(frog, config) {
  if (!frog || frog.minted || !frog.displayMintUrl) return "";

  const label = frog.exactMintSupported ? `Mint ${miningFrogLabel(frog.frogNumber)}` : "Visit Mint";
  const note = frog.exactMintSupported ? "" : "<small>Exact Frog minting is not configured.</small>";
  return `
    <a class="mining-mini-action" href="${escapeHtml(frog.displayMintUrl)}" target="_blank" rel="noopener noreferrer">
      ${escapeHtml(label)}
    </a>
    ${note}
  `;
}

function renderMiningUnmintedList(element, frogs, data) {
  if (!element) return;
  const config = data.config || {};
  const symbol = config.tokenSymbol || "FROG";

  if (!frogs?.length) {
    element.innerHTML = `<li class="mining-empty-row">No loaded unminted Frogs yet.</li>`;
    return;
  }

  element.innerHTML = frogs
    .map((frog, index) => {
      const label = frog.exactMintSupported ? `Mint ${miningFrogLabel(frog.frogNumber)}` : "Visit Mint";
      const action = frog.displayMintUrl
        ? `
          <a class="mining-mini-action mining-unminted-action" href="${escapeHtml(frog.displayMintUrl)}" target="_blank" rel="noopener noreferrer">
            ${escapeHtml(label)}
          </a>
        `
        : `<span class="mining-unminted-note">Mint link pending</span>`;

      return `
        <li class="mining-unminted-row">
          <span>#${index + 1}</span>
          <div class="mining-unminted-main">
            <strong>${miningFrogLabel(frog.frogNumber)}</strong>
            <small>${escapeHtml(miningFrogTreasureCopy(frog.unpaidAmount, config))}</small>
          </div>
          <div class="mining-unminted-value">
            <strong>${formatFrogAmount(frog.unpaidAmount, symbol)}</strong>
            ${action}
          </div>
        </li>
      `;
    })
    .join("");
}

function renderMiningLeaderList(element, frogs, mode, data) {
  if (!element) return;
  const config = data.config || {};
  const symbol = config.tokenSymbol || "FROG";

  if (!frogs?.length) {
    element.innerHTML = `<li class="mining-empty-row">No confirmed data yet.</li>`;
    return;
  }

  element.innerHTML = frogs
    .map((frog, index) => {
      const metric =
        mode === "blocks"
          ? `${integerFormat.format(frog.blocksMined || 0)} block${frog.blocksMined === 1 ? "" : "s"}`
          : formatFrogAmount(mode === "unminted" ? frog.unpaidAmount : frog.lifetimeMinedAmount, symbol);
      return `
        <li>
          <span>#${index + 1}</span>
          <strong>${miningFrogLabel(frog.frogNumber)}</strong>
          <small>${escapeHtml(metric)}</small>
          ${mode === "unminted" ? miningFrogAction(frog, config) : ""}
        </li>
      `;
    })
    .join("");
}

function renderMiningLeaderboards(data) {
  const boards = data.leaderboards || {};
  renderMiningLeaderList(els.miningRichestFrogs, boards.richest || [], "richest", data);
  renderMiningLeaderList(els.miningProductiveFrogs, boards.productive || [], "blocks", data);
  renderMiningUnmintedList(els.miningLoadedUnminted, boards.loadedUnminted || [], data);
}

function miningCompletedBlockCount(data = mining.data) {
  return Number(data?.stats?.blocksCompleted || 0);
}

function rememberMiningHistoryBlocks(blocks, data = mining.data) {
  if (!Array.isArray(blocks)) return mining.blockHistoryRows;

  if (blocks.length > 0) {
    mining.blockHistoryRows = blocks;
    return mining.blockHistoryRows;
  }

  return mining.blockHistoryRows;
}

function renderMiningHistory(data) {
  if (!els.miningHistory) return;
  const incomingBlocks = Array.isArray(data.blocks) ? data.blocks : [];
  const blocks = incomingBlocks.length > 0 || miningCompletedBlockCount(data) <= 0 ? incomingBlocks : mining.blockHistoryRows;
  const symbol = data.config?.tokenSymbol || "FROG";
  rememberMiningHistoryBlocks(blocks, data);

  if (els.miningHistoryEmpty) els.miningHistoryEmpty.hidden = blocks.length > 0;
  els.miningHistory.innerHTML = blocks
    .map((block) => {
      const owner = block.currentOwnerWallet || block.ownerAtMining || "";
      const status = miningRewardStatusCopy(block.rewardStatus);
      const ownerLine = owner ? `Owned by ${shortWallet(owner)}` : "Still available to mint";
      const statusClass = block.rewardStatus === "PENDING_PAYOUT" ? "is-pending" : block.rewardStatus === "PAID" ? "is-paid" : "is-locked";
      const tierClass = miningRewardTierClass(block.rewardTier);
      const tierCopy = miningRewardTierCopy(block.rewardTier);
      return `
        <article class="mining-block-card">
          <div class="mining-block-spine" aria-hidden="true"></div>
          <div>
            <span>${miningBlockLabel(block.blockNumber)}</span>
            <strong>${miningFrogLabel(block.winnerFrogId)}</strong>
            <small>Mined ${escapeHtml(formatDate(block.closesAt))}</small>
          </div>
          <div>
            <span>Block reward</span>
            <span class="mining-tier-pill ${tierClass}">${escapeHtml(tierCopy)}</span>
            <strong>${formatFrogAmount(block.rewardAmount, symbol)}</strong>
            <small>Lifetime total: ${formatFrogAmount(block.frogLifetimeTotalAfterBlock, symbol)}</small>
          </div>
          <div>
            ${miningRewardStatusControl(block, status, statusClass)}
            <small title="${escapeHtml(owner)}">${escapeHtml(ownerLine)}</small>
            ${!block.currentMinted ? miningFrogAction({ ...block, displayMintUrl: block.mintUrl, frogNumber: block.winnerFrogId }, data.config) : ""}
          </div>
          <button
            class="mining-proof"
            type="button"
            data-mining-copy-hash="${escapeHtml(block.randomnessHash || "")}"
            title="Copy full proof hash"
            aria-label="Copy proof hash for ${escapeHtml(miningBlockLabel(block.blockNumber))}"
          >
            <strong>Proof</strong>
            <small>${escapeHtml(miningShortHash(block.randomnessHash).replace("hash: ", ""))}</small>
          </button>
        </article>
      `;
    })
    .join("");
}

function updateMiningHistoryControls() {
  const currentPage = mining.blockPageIndex + 1;
  const canGoPrev = currentPage > 1;
  const canGoNext = Boolean(mining.blockHasMore && mining.blockNextCursor);

  if (els.miningBlocksPage) {
    els.miningBlocksPage.textContent = mining.blockLoading
      ? "Loading sealed blocks..."
      : `Page ${currentPage} · ${MINING_BLOCK_PAGE_SIZE} per page`;
  }

  if (els.miningBlocksPrev) els.miningBlocksPrev.disabled = mining.blockLoading || !canGoPrev;
  if (els.miningBlocksNext) els.miningBlocksNext.disabled = mining.blockLoading || !canGoNext;
}

async function loadMiningBlocks({ reset = false } = {}) {
  if (mining.blockLoading) return;
  if (reset) {
    mining.blockCursorStack = [0];
    mining.blockHasMore = false;
    mining.blockNextCursor = null;
    mining.blockPageIndex = 0;
  }

  mining.blockLoading = true;
  updateMiningHistoryControls();

  try {
    const before = mining.blockCursorStack[mining.blockPageIndex] || 0;
    const params = new URLSearchParams({ limit: String(MINING_BLOCK_PAGE_SIZE) });
    if (before) params.set("before", String(before));
    const response = await fetch(`${MINING_BLOCKS_ENDPOINT}?${params.toString()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Mining blocks could not be loaded.");
    const data = await response.json();
    if (data.error) throw new Error(data.error);

    mining.blockHasMore = Boolean(data.hasMore);
    mining.blockNextCursor = data.nextCursor || null;
    renderMiningHistory({ ...(mining.data || {}), blocks: data.blocks || [] });
  } catch (error) {
    if (els.miningHistoryEmpty) {
      const hasConfirmedRows = mining.blockHistoryRows.length > 0 || miningCompletedBlockCount() > 0;
      els.miningHistoryEmpty.hidden = hasConfirmedRows;
      if (!hasConfirmedRows) els.miningHistoryEmpty.textContent = error.message || "Mining blocks could not be loaded.";
    }
  } finally {
    mining.blockLoading = false;
    updateMiningHistoryControls();
  }
}

function moveMiningBlockPage(direction) {
  if (mining.blockLoading) return;

  if (direction === "next") {
    if (!mining.blockHasMore || !mining.blockNextCursor) return;
    mining.blockPageIndex += 1;
    mining.blockCursorStack[mining.blockPageIndex] = mining.blockNextCursor;
  } else if (direction === "prev") {
    if (mining.blockPageIndex <= 0) return;
    mining.blockPageIndex -= 1;
  }

  loadMiningBlocks();
}

async function copyMiningProofHash(button) {
  const hash = button?.dataset?.miningCopyHash || "";
  if (!hash) return;

  const label = button.querySelector("strong");
  const originalText = label?.textContent || "Proof";

  try {
    await navigator.clipboard.writeText(hash);
    button.classList.add("is-copied");
    if (label) label.textContent = "Copied";
  } catch {
    button.classList.add("is-copied");
    if (label) label.textContent = "Hash ready";
  }

  window.setTimeout(() => {
    button.classList.remove("is-copied");
    if (label) label.textContent = originalText;
  }, 1400);
}

function renderMiningReveal(data) {
  const latest = data.blocks?.[0];
  const symbol = data.config?.tokenSymbol || "FROG";
  if (!latest) {
    if (els.miningRevealStatus) els.miningRevealStatus.textContent = "Waiting for first sealed block";
    if (els.miningRevealFrog) els.miningRevealFrog.textContent = "Frog #----";
    if (els.miningRevealReward) els.miningRevealReward.textContent = "No reward confirmed yet.";
    if (els.miningHashLine) els.miningHashLine.textContent = "hash: waiting for backend confirmation";
    return;
  }

  if (els.miningRevealStatus) els.miningRevealStatus.textContent = `${miningBlockLabel(latest.blockNumber)} mined`;
  if (els.miningRevealFrog) els.miningRevealFrog.textContent = miningFrogLabel(latest.winnerFrogId);
  if (els.miningRevealReward) {
    const tier = miningRewardTierCopy(latest.rewardTier).toLowerCase();
    const stateText = latest.currentMinted
      ? `${tier} reward: ${formatFrogAmount(latest.rewardAmount, symbol)}. Status: pending distribution.`
      : `${tier} reward locked inside this Frog: ${formatFrogAmount(latest.rewardAmount, symbol)}.`;
    els.miningRevealReward.textContent = stateText;
  }
  if (els.miningHashLine) els.miningHashLine.textContent = miningShortHash(latest.randomnessHash);
}

function renderMiningFrogResult(frog, data) {
  if (!els.miningFrogResult || !frog) return;
  const symbol = data.config?.tokenSymbol || "FROG";
  const owner = frog.currentOwnerWallet || "";
  const status = frog.minted ? `Owned by ${shortWallet(owner)}` : frog.unpaidAmount > 0 ? "Available, carrying rewards" : "Available to mint";

  els.miningFrogResult.innerHTML = `
    <span>${escapeHtml(status)}</span>
    <strong>${miningFrogLabel(frog.frogNumber)}</strong>
    <p>
      Lifetime mined: ${formatFrogAmount(frog.lifetimeMinedAmount, symbol)}<br />
      Attached unpaid balance: ${formatFrogAmount(frog.unpaidAmount, symbol)}<br />
      Paid rewards: ${formatFrogAmount(frog.paidAmount, symbol)}<br />
      Blocks mined: ${integerFormat.format(frog.blocksMined || 0)}
    </p>
    ${frog.minted ? `<small title="${escapeHtml(owner)}">Owner wallet: ${escapeHtml(owner)}</small>` : miningFrogAction(frog, data.config)}
  `;
}

function renderMiningState(data) {
  mining.data = data;
  const cycle = data.currentCycle || {};
  const serverTime = Date.parse(cycle.serverTime || "");
  if (Number.isFinite(serverTime)) mining.serverOffsetMs = serverTime - Date.now();

  if (els.miningCycleBlock) els.miningCycleBlock.textContent = miningBlockLabel(cycle.blockNumber);
  if (els.miningRigBlock) els.miningRigBlock.textContent = miningBlockLabel(cycle.blockNumber);
  setMiningServerStatus(miningStatusCopy(cycle.status));
  renderMiningStatElements(data);
  renderMiningReveal(data);
  renderMiningLeaderboards(data);
  renderMiningHistory(data);
  if (data.frog) renderMiningFrogResult(data.frog, data);
  updateMiningCountdown();
}

function renderMiningOffline(error) {
  const message = error?.message || "Mining backend is not reachable from this preview.";
  mining.data = null;
  setMiningServerStatus("Rig status: Server offline", true);
  if (els.miningCycleCountdown) els.miningCycleCountdown.textContent = "Netlify Functions are required for live mining.";
  if (els.miningRigCountdown) els.miningRigCountdown.textContent = "Backend confirmation unavailable";
  if (els.miningRevealStatus) els.miningRevealStatus.textContent = "No fake blocks shown";
  if (els.miningRevealFrog) els.miningRevealFrog.textContent = "Server offline";
  if (els.miningRevealReward) els.miningRevealReward.textContent = message;
  if (els.miningHistoryEmpty) {
    els.miningHistoryEmpty.hidden = false;
    els.miningHistoryEmpty.textContent = message;
  }
}

async function markMiningRewardDistributed(button) {
  const rewardId = button?.dataset?.miningMarkDistributed || "";
  if (!rewardId || button.disabled) return;

  const originalText = button.textContent;
  const statusColumn = button.closest("div");
  const existingError = statusColumn?.querySelector(".mining-status-error");
  existingError?.remove();
  button.disabled = true;
  button.textContent = "Marking...";

  const result = await runMiningAdminAction("markRewardPaid", {
    reason: "Admin marked pending distribution as distributed from the mining block history.",
    rewardId,
  });

  if (result?.ok) {
    button.classList.remove("is-pending");
    button.classList.add("is-paid");
    button.removeAttribute("data-mining-mark-distributed");
    button.textContent = "Distributed";
    return;
  }

  const errorMessage = result?.error || "Distribution update failed. Please try again.";
  if (statusColumn) {
    const errorNode = document.createElement("small");
    errorNode.className = "mining-status-error";
    errorNode.textContent = errorMessage;
    statusColumn.append(errorNode);
  }
  button.title = errorMessage;
  button.textContent = "Try again";
  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 1400);
}

async function loadMiningState(frogNumber = "") {
  if (mining.loading) return;
  mining.loading = true;
  mining.lastLoadAt = Date.now();

  try {
    const params = new URLSearchParams({ blockLimit: "12" });
    if (frogNumber) params.set("frog", frogNumber);
    const response = await fetch(`${MINING_STATE_ENDPOINT}?${params.toString()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Mining server did not return a valid state.");
    const data = await response.json();
    if (data.error) throw new Error(data.error);
    renderMiningState(data);
    loadMiningBlocks({ reset: true });
  } catch (error) {
    renderMiningOffline(error);
  } finally {
    mining.loading = false;
  }
}

function startMiningTimers() {
  if (!mining.countdownTimer) {
    mining.countdownTimer = window.setInterval(updateMiningCountdown, 250);
  }
}

function isAllowedMiningAdminWallet(wallet) {
  const normalized = String(wallet || "").trim().toLowerCase();
  return ADMIN_ALLOWED_WALLETS.some((allowed) => allowed.toLowerCase() === normalized);
}

function bytesToBase64(bytes) {
  const list = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes || []);
  let binary = "";
  list.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return window.btoa(binary);
}

function miningAdminNonce() {
  const bytes = new Uint8Array(16);
  window.crypto?.getRandomValues?.(bytes);
  return [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function miningAdminMessage(wallet) {
  return [
    "SushiFrogs mining admin authorization.",
    `Wallet: ${wallet}`,
    `Origin: ${window.location.origin}`,
    `Issued At: ${new Date().toISOString()}`,
    `Nonce: ${miningAdminNonce()}`,
  ].join("\n");
}

function miningAdminSessionValid() {
  return Boolean(
    miningAdmin.walletAddress &&
      miningAdmin.message &&
      miningAdmin.signature &&
      Date.now() - miningAdmin.signedAt < ADMIN_AUTH_MAX_AGE_MS &&
      isAllowedMiningAdminWallet(miningAdmin.walletAddress),
  );
}

function updateMiningAdminGate() {
  const unlocked = miningAdminSessionValid();
  els.miningAdminPanel?.classList.toggle("is-unlocked", unlocked);
  if (els.miningAdminPrivate) els.miningAdminPrivate.hidden = !unlocked;
  if (els.miningAdminStatus) {
    els.miningAdminStatus.textContent = unlocked ? `Unlocked: ${shortWallet(miningAdmin.walletAddress)}` : "Locked";
  }
  if (els.miningAdminStatusNote) {
    els.miningAdminStatusNote.textContent = unlocked
      ? "Signed admin session active. Re-sign if it expires."
      : "Connect and sign with the configured admin wallet.";
  }
  if (els.miningAdminConnect) {
    els.miningAdminConnect.textContent = unlocked ? "Re-sign Admin" : "Unlock Admin";
  }
}

function miningAdminAuthPayload() {
  if (!miningAdminSessionValid()) {
    updateMiningAdminGate();
    return null;
  }

  return {
    message: miningAdmin.message,
    signature: miningAdmin.signature,
    wallet: miningAdmin.walletAddress,
  };
}

async function connectMiningAdminWallet() {
  const wallet = availableSolanaWallet();
  if (!wallet) {
    setMiningAdminOutput("No Solana wallet found. Open with Phantom or Solflare installed.");
    return;
  }
  if (!wallet.provider.signMessage) {
    setMiningAdminOutput(`${wallet.name} does not support message signing in this browser.`);
    return;
  }

  try {
    setMiningAdminOutput(`Connecting ${wallet.name} admin wallet...`);
    const response = await wallet.provider.connect();
    const publicKey = response?.publicKey || wallet.provider.publicKey;
    const address = publicKey?.toString?.() || "";
    if (!isAllowedMiningAdminWallet(address)) {
      miningAdmin.walletAddress = address;
      miningAdmin.walletName = wallet.name;
      miningAdmin.message = "";
      miningAdmin.signature = "";
      miningAdmin.signedAt = 0;
      updateMiningAdminGate();
      setMiningAdminOutput(`Not authorized. Connected wallet ${shortWallet(address)} is not the configured admin wallet.`);
      return;
    }

    const message = miningAdminMessage(address);
    const encodedMessage = new TextEncoder().encode(message);
    const signed = await wallet.provider.signMessage(encodedMessage, "utf8");
    const signature = signed?.signature || signed;
    miningAdmin.walletAddress = address;
    miningAdmin.walletName = wallet.name;
    miningAdmin.message = message;
    miningAdmin.signature = typeof signature === "string" ? signature : bytesToBase64(signature);
    miningAdmin.signedAt = Date.now();
    updateMiningAdminGate();
    loadMiningBlocks();
    setMiningAdminOutput(`Admin unlocked for ${shortWallet(address)}.`);
  } catch (error) {
    setMiningAdminOutput(error?.message || "Admin wallet unlock was cancelled.");
  }
}

async function miningAdminRequest(action, extra = {}) {
  const adminAuth = miningAdminAuthPayload();
  if (!adminAuth) {
    if (els.miningAdminOutput) els.miningAdminOutput.textContent = "Unlock with the configured admin wallet before using admin controls.";
    return null;
  }

  const response = await fetch(MINING_ADMIN_ENDPOINT, {
    body: JSON.stringify({ action, adminAuth, ...extra }),
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (action === "exportPayouts" || action === "exportOwnership") {
    if (!response.ok) throw new Error(await response.text());
    return response;
  }

  const data = await response.json();
  if (!response.ok || data.error) throw new Error(data.error || "Admin action failed.");
  return data;
}

function setMiningAdminOutput(value) {
  if (!els.miningAdminOutput) return;
  els.miningAdminOutput.textContent = typeof value === "string" ? value : JSON.stringify(value, null, 2);
}

async function runMiningAdminAction(action, extra = {}) {
  try {
    setMiningAdminOutput("Working...");
    const data = await miningAdminRequest(action, extra);
    if (!data) return { error: "Admin authorization is not active.", ok: false };
    if (data.written === false) {
      const message = data.error || "Mining state changed while saving. Please try again.";
      setMiningAdminOutput(message);
      return { data, error: message, ok: false };
    }
    setMiningAdminOutput(data.result || data);
    if (data.state) {
      renderMiningState(data.state);
      loadMiningBlocks({ reset: true });
    }
    return { data, ok: true };
  } catch (error) {
    const message = error.message || "Admin action failed.";
    setMiningAdminOutput(message);
    return { error: message, ok: false };
  }
}

async function downloadMiningPayouts() {
  try {
    setMiningAdminOutput("Preparing payout CSV...");
    const response = await miningAdminRequest("exportPayouts");
    if (!response) return;
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "frog-mining-pending-payouts.csv";
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    setMiningAdminOutput("Pending payout CSV exported.");
  } catch (error) {
    setMiningAdminOutput(error.message || "Export failed.");
  }
}

function riskBadge(wallet) {
  if (!wallet || wallet.points >= AT_RISK_POINT_THRESHOLD) return "";
  return `
    <span class="risk-badge" tabindex="0" role="note" title="Low points. Raise your level to secure priority." aria-label="At Risk. Low points. Raise your level to secure priority." data-tooltip="Low points. Raise your level to secure priority.">
      <strong>At Risk</strong>
    </span>
  `;
}

function buildWallets(rows) {
  const wallets = new Map();

  rows.forEach((row) => {
    const wallet = wallets.get(row.From) || {
      address: row.From,
      lastTransfer: "",
      points: 0,
      totalSol: 0,
      transfers: 0,
    };

    const solAmount = normalizeAmount(row);

    wallet.transfers += 1;
    wallet.totalSol += solAmount;
    wallet.lastTransfer = !wallet.lastTransfer || row["Human Time"] > wallet.lastTransfer ? row["Human Time"] : wallet.lastTransfer;
    wallets.set(row.From, wallet);
  });

  const list = [...wallets.values()];
  distributePoints(list);

  return list;
}

function distributePoints(wallets) {
  if (!wallets.length) return;

  const totalSol = wallets.reduce((sum, wallet) => sum + wallet.totalSol, 0);
  const pointPoolUnits = POINT_POOL * POINT_UNITS_PER_POINT;
  let baseUnitTotal = 0;

  wallets.forEach((wallet) => {
    wallet.isDust = wallet.totalSol < DUST_SOL_THRESHOLD;
    const basePoints = wallet.totalSol < DUST_SOL_THRESHOLD ? DUST_MIN_POINTS_PER_WALLET : STANDARD_MIN_POINTS_PER_WALLET;
    wallet.pointUnits = Math.round(basePoints * POINT_UNITS_PER_POINT);
    wallet.points = wallet.pointUnits / POINT_UNITS_PER_POINT;
    baseUnitTotal += wallet.pointUnits;
  });

  if (baseUnitTotal > pointPoolUnits) {
    wallets.forEach((wallet) => {
      wallet.pointUnits = 0;
    });
    baseUnitTotal = 0;
  }

  const remainingPoolUnits = pointPoolUnits - baseUnitTotal;
  const variableWallets = wallets.some((wallet) => !wallet.isDust) ? wallets.filter((wallet) => !wallet.isDust) : wallets;
  const variableTotalSol = variableWallets.reduce((sum, wallet) => sum + wallet.totalSol, 0);

  const allocations = variableWallets.map((wallet) => {
    const rawShare = variableTotalSol > 0 ? (wallet.totalSol / variableTotalSol) * remainingPoolUnits : remainingPoolUnits / variableWallets.length;
    const wholeShare = Math.floor(rawShare);

    wallet.pointUnits += wholeShare;
    wallet.points = wallet.pointUnits / POINT_UNITS_PER_POINT;

    return {
      remainder: rawShare - wholeShare,
      totalSol: wallet.totalSol,
      wallet,
    };
  });

  let pointUnitsLeft = pointPoolUnits - wallets.reduce((sum, wallet) => sum + wallet.pointUnits, 0);
  allocations
    .sort((a, b) => b.remainder - a.remainder || b.totalSol - a.totalSol)
    .forEach((allocation) => {
      if (pointUnitsLeft <= 0) return;
      allocation.wallet.pointUnits += 1;
      allocation.wallet.points = allocation.wallet.pointUnits / POINT_UNITS_PER_POINT;
      pointUnitsLeft -= 1;
    });
}

function rankedWallets() {
  return [...state.wallets].sort((a, b) => b.points - a.points || b.totalSol - a.totalSol);
}

function visibleWallets() {
  const query = els.searchInput.value.trim().toLowerCase();
  return state.wallets
    .filter((wallet) => wallet.address.toLowerCase().includes(query))
    .sort((a, b) => {
      if (state.sort === "sol") return b.totalSol - a.totalSol;
      if (state.sort === "transfers") return b.transfers - a.transfers;
      if (state.sort === "recent") return String(b.lastTransfer).localeCompare(String(a.lastTransfer));
      return b.points - a.points || b.totalSol - a.totalSol;
    });
}

function resetPointsLimit() {
  state.pointsVisibleCount = LIST_PAGE_SIZE;
}

function resetWhitelistLimit() {
  state.whitelistVisibleCount = LIST_PAGE_SIZE;
}

function updateLoadMoreButton(button, visibleCount, totalCount) {
  if (!button) return;

  const shownCount = Math.min(visibleCount, totalCount);
  const isHidden = totalCount <= shownCount;
  button.hidden = isHidden;
  button.closest(".load-more-row")?.toggleAttribute("hidden", isHidden);
  const label = button.querySelector("span");
  if (label) {
    label.textContent = `${integerFormat.format(shownCount)} / ${integerFormat.format(totalCount)} shown`;
  }
}

function setWhitelistPhase(phase) {
  state.whitelistPhase = phase === "phase2" || phase === "public" ? phase : "phase1";
  resetWhitelistLimit();

  phaseButtons.forEach((button) => {
    const isActive = button.dataset.phase === state.whitelistPhase;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderWhitelist();
}

function whitelistPhaseName() {
  if (state.whitelistPhase === "phase2") return "Phase 2";
  if (state.whitelistPhase === "public") return "Public Mint";
  return "Phase 1";
}

function phaseWallets() {
  if (state.whitelistPhase !== "phase1") return [];
  return rankedWallets();
}

function renderWhitelist() {
  if (!els.whitelistRows) return;

  const query = els.whitelistSearchInput.value.trim().toLowerCase();
  const phaseName = whitelistPhaseName();
  const wallets = phaseWallets();
  const matchingWallets = wallets.filter((wallet) => wallet.address.toLowerCase().includes(query));
  const exactMatch = Boolean(query && wallets.some((wallet) => wallet.address.toLowerCase() === query));

  els.phaseOneCount.textContent = integerFormat.format(state.wallets.length);
  els.whitelistPhaseLabel.textContent = phaseName;

  if (state.whitelistPhase === "public") {
    els.whitelistStatus.textContent = "All wallets are eligible for Public Mint.";
    els.whitelistSummary.textContent = query
      ? "That wallet can join the public mint when public mint opens."
      : "No whitelist slot is needed for Public Mint. Every wallet is eligible.";
    els.whitelistEmptyState.hidden = true;
    els.whitelistRows.innerHTML = `
      <tr>
        <td class="rank-cell phase-cell" data-label="Phase"><span class="phase-pill">Public Mint</span></td>
        <td class="wallet-cell" data-label="Wallet">
          <strong>Any wallet</strong>
          <small>Public mint does not require a whitelist address.</small>
        </td>
        <td class="score-cell whitelist-status-cell" data-label="Status">
          <span class="status-stack">
            <span class="status-pill">Eligible</span>
          </span>
        </td>
        <td class="booster-cell" data-label="Booster">
          <a class="booster-share" href="${shareOnXUrl(BOOSTER_SHARE_TEXT)}" target="_blank" rel="noreferrer">
            <strong>Booster</strong>
            <span>Share on X</span>
          </a>
        </td>
      </tr>
    `;
    updateLoadMoreButton(els.whitelistLoadMore, 1, 1);
    return;
  }

  if (state.whitelistPhase === "phase2") {
    els.whitelistStatus.textContent = "Phase 2 whitelist is empty for now.";
    els.whitelistSummary.textContent = query
      ? "This wallet has not been added to Phase 2 yet."
      : "Phase 2 addresses will be added here as they come.";
    els.whitelistRows.innerHTML = "";
    els.whitelistEmptyState.hidden = false;
    els.whitelistEmptyState.textContent = "No Phase 2 wallets yet.";
    updateLoadMoreButton(els.whitelistLoadMore, 0, 0);
    return;
  }

  if (!state.wallets.length) {
    els.whitelistStatus.textContent = "Loading Phase 1 whitelist...";
    els.whitelistSummary.textContent = "Phase 1 uses every wallet already visible in Wallet Points.";
  } else if (!query) {
    els.whitelistStatus.textContent = `${integerFormat.format(wallets.length)} wallets are eligible for Phase 1.`;
    els.whitelistSummary.textContent = "Paste a wallet to confirm exact Phase 1 eligibility.";
  } else if (exactMatch) {
    els.whitelistStatus.textContent = "Wallet is eligible for Phase 1.";
    els.whitelistSummary.textContent = "Exact match found in the Wallet Points sender list.";
  } else if (matchingWallets.length) {
    els.whitelistStatus.textContent = "No exact match yet.";
    els.whitelistSummary.textContent = `${integerFormat.format(matchingWallets.length)} partial wallet match${matchingWallets.length === 1 ? "" : "es"} shown below.`;
  } else {
    els.whitelistStatus.textContent = "Wallet is not on Phase 1.";
    els.whitelistSummary.textContent = "No Phase 1 wallet matched that search.";
  }

  els.whitelistEmptyState.hidden = matchingWallets.length > 0;
  els.whitelistEmptyState.textContent = state.wallets.length ? "No Phase 1 wallets match your search." : "Loading whitelist...";
  const walletsToRender = matchingWallets.slice(0, state.whitelistVisibleCount);
  updateLoadMoreButton(els.whitelistLoadMore, state.whitelistVisibleCount, matchingWallets.length);
  els.whitelistRows.innerHTML = walletsToRender
    .map(
      (wallet) => `
        <tr>
          <td class="rank-cell phase-cell" data-label="Phase"><span class="phase-pill">Phase 1</span></td>
          <td class="wallet-cell" data-label="Wallet">
            <a href="${solscanWallet(wallet.address)}" target="_blank" rel="noreferrer">${escapeHtml(shortWallet(wallet.address, 8, 8))}</a>
            <small>${escapeHtml(wallet.address)}</small>
          </td>
          <td class="score-cell whitelist-status-cell" data-label="Status">
            <span class="status-stack">
              <span class="status-pill">Eligible</span>
              ${riskBadge(wallet)}
            </span>
          </td>
          <td class="booster-cell" data-label="Booster">
            <a class="booster-share" href="${shareOnXUrl(BOOSTER_SHARE_TEXT)}" target="_blank" rel="noreferrer">
              <strong>Booster</strong>
              <span>Share on X</span>
            </a>
          </td>
        </tr>
      `,
    )
    .join("");
}

function render() {
  const wallets = visibleWallets();
  const walletsToRender = wallets.slice(0, state.pointsVisibleCount);
  const pointPool = state.wallets.reduce((sum, wallet) => sum + wallet.points, 0);
  const topPoints = Math.max(...state.wallets.map((wallet) => wallet.points), 1);
  const topSol = Math.max(...state.wallets.map((wallet) => wallet.totalSol), 1);
  const rankMap = new Map(rankedWallets().map((wallet, index) => [wallet.address, index + 1]));

  els.walletCount.textContent = integerFormat.format(state.wallets.length);
  els.transferCount.textContent = integerFormat.format(state.transfers.length);
  els.topPoints.textContent = pointFormat.format(pointPool);
  els.emptyState.hidden = wallets.length > 0;
  els.emptyState.textContent = state.wallets.length ? "No wallets match your search." : "No wallets found.";
  updateLoadMoreButton(els.walletLoadMore, state.pointsVisibleCount, wallets.length);
  renderLeaderCards();

  els.walletRows.innerHTML = walletsToRender
    .map((wallet) => {
      const rank = rankMap.get(wallet.address);
      const rowClass = rank <= 3 ? "top-row" : "";
      const pointWidth = Math.max(3, Math.min(100, (wallet.points / topPoints) * 100));
      const solWidth = Math.max(3, Math.min(100, (wallet.totalSol / topSol) * 100));

      return `
        <tr class="${rowClass}">
          <td class="rank-cell" data-label="Rank">
            <span class="rank-badge">#${rank}</span>
          </td>
          <td class="wallet-cell" data-label="Wallet">
            <a href="${solscanWallet(wallet.address)}" target="_blank" rel="noreferrer">${escapeHtml(shortWallet(wallet.address, 8, 8))}</a>
            <small>${escapeHtml(wallet.address)}</small>
          </td>
          <td class="score-cell" data-label="Points">
            <strong>${pointFormat.format(wallet.points)}</strong>
            <span class="meter points-meter"><i style="width: ${pointWidth}%"></i></span>
          </td>
          <td class="sol-cell" data-label="SOL">
            <strong>${numberFormat.format(wallet.totalSol)} $SHIFROGS</strong>
            <span class="meter sol-meter"><i style="width: ${solWidth}%"></i></span>
          </td>
          <td class="transfer-cell" data-label="Transfers">
            <span>${integerFormat.format(wallet.transfers)}</span>
          </td>
          <td class="date-cell" data-label="Recent">${formatDate(wallet.lastTransfer)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderLeaderCards() {
  const topWallets = rankedWallets().slice(0, 3);
  const topPoints = Math.max(...topWallets.map((wallet) => wallet.points), 1);

  if (!topWallets.length) {
    els.leaderCards.innerHTML = `
      <article class="leader-card placeholder">
        <span class="card-rank">#?</span>
        <strong>Loading CSV</strong>
        <small>Waiting for sender cards</small>
      </article>
    `;
    return;
  }

  els.leaderCards.innerHTML = topWallets
    .map((wallet, index) => {
      const width = Math.max(4, Math.min(100, (wallet.points / topPoints) * 100));

      return `
        <article class="leader-card tier-${index + 1}">
          <span class="card-rank">#${index + 1}</span>
          <img class="card-creature" src="./fr2.png" alt="" aria-hidden="true" />
          <strong>${escapeHtml(shortWallet(wallet.address, 5, 5))}</strong>
          <small>${pointFormat.format(wallet.points)} pts</small>
          <em>${numberFormat.format(wallet.totalSol)} $SHIFROGS</em>
          <span class="card-meter"><i style="width: ${width}%"></i></span>
        </article>
      `;
    })
    .join("");
}

function ensureArcadeContext() {
  if (!els.arcadeCanvas) return false;
  if (!arcade.ctx) {
    arcade.ctx = els.arcadeCanvas.getContext("2d");
  }
  return Boolean(arcade.ctx);
}

function arcadeRunnerName() {
  if (arcade.walletAddress) return shortWallet(arcade.walletAddress);
  const name = els.arcadePlayerName?.value.trim();
  return name || "Ridiculous Frog";
}

function arcadeModeName(mode = arcade.mode) {
  if (mode === "practice") return "Practice";
  if (mode === "wallet") return "Guest";
  if (mode === "holder") return "Holder";
  if (mode === "live") return "Live";
  if (mode === "fallen") return "Fallen";
  return "Idle";
}

function arcadeScoreMode(score) {
  if (score?.mode === "holder" || score?.mode === "wallet" || score?.mode === "live") return score.mode;
  const multiplier = Number(score?.multiplier || 1);
  const nftCount = Number(score?.nftCount || 0);
  if (score?.wallet && (nftCount > 0 || multiplier > 1)) return "holder";
  if (score?.wallet) return "wallet";
  return "live";
}

function arcadeRunBadge(score) {
  const mode = score ? arcadeScoreMode(score) : arcade.mode || "live";
  if (mode === "holder") return "HOLDER";
  if (mode === "wallet") return "GUEST";
  return "LIVE";
}

function arcadeScoreMultiplier() {
  return arcade.mode === "holder" ? arcadeHolderMultiplier() : 1;
}

function arcadeHolderMultiplier(nftCount = arcade.nftCount) {
  if (!nftCount) return 1;
  const tier = HOLDER_MULTIPLIER_TIERS.find((item) => nftCount <= item.max);
  return tier?.multiplier || 1;
}

function arcadeMultiplierLabel(multiplier = arcadeHolderMultiplier()) {
  return `${multiplier.toFixed(2)}x`;
}

function defaultArcadeMode() {
  if (arcade.isHolder) return "holder";
  if (arcade.walletAddress) return "wallet";
  return "live";
}

function availableSolanaWallet() {
  if (window.solana?.isPhantom) {
    return { name: "Phantom", provider: window.solana };
  }

  if (window.solflare?.isSolflare) {
    return { name: "Solflare", provider: window.solflare };
  }

  if (window.solana?.connect) {
    return { name: "Solana Wallet", provider: window.solana };
  }

  return null;
}

function updateArcadeAccessUi() {
  const connected = Boolean(arcade.walletAddress);
  const holder = Boolean(arcade.isHolder);

  els.arcadeAccessPanel?.classList.toggle("is-connected", connected);
  els.arcadeAccessPanel?.classList.toggle("is-holder", holder);
  els.arcadeAccessPanel?.classList.toggle("is-error", arcade.holderCheckStatus === "error" || arcade.holderCheckStatus === "unconfigured");

  if (els.arcadeWalletStatus) {
    els.arcadeWalletStatus.textContent = connected
      ? `${arcade.walletName || "Wallet"}: ${shortWallet(arcade.walletAddress)}`
      : "Connect wallet to attach runs.";
  }

  if (els.arcadeHolderStatus) {
    els.arcadeHolderStatus.textContent = arcade.holderMessage;
  }

  if (els.arcadePlayer) {
    els.arcadePlayer.classList.toggle("is-wallet-locked", connected);
  }

  if (els.arcadePlayerName) {
    els.arcadePlayerName.disabled = connected;
    if (connected) {
      els.arcadePlayerName.value = "";
      els.arcadePlayerName.placeholder = shortWallet(arcade.walletAddress);
    } else {
      els.arcadePlayerName.placeholder = "Wallet or name";
    }
  }

  if (els.arcadeConnectWallet) {
    els.arcadeConnectWallet.textContent = connected ? "Wallet Connected" : "Connect Wallet";
  }

  if (els.arcadeWalletRun) {
    els.arcadeWalletRun.disabled = !connected;
  }

  if (els.arcadeHolderRun) {
    els.arcadeHolderRun.disabled = !connected || !holder;
    els.arcadeHolderRun.textContent = holder ? `Holder Run ${arcadeMultiplierLabel()}` : "Holder Run";
  }
}

async function connectArcadeWallet() {
  const wallet = availableSolanaWallet();
  if (!wallet) {
    arcade.holderCheckStatus = "error";
    arcade.holderMessage = "No Solana wallet found. Open this page with Phantom or Solflare installed.";
    updateArcadeAccessUi();
    return false;
  }

  try {
    arcade.holderCheckStatus = "checking";
    arcade.holderMessage = `Connecting ${wallet.name}...`;
    updateArcadeAccessUi();

    const response = await wallet.provider.connect();
    const publicKey = response?.publicKey || wallet.provider.publicKey;
    if (!publicKey) throw new Error("Wallet did not return a public key.");

    arcade.walletAddress = publicKey.toString();
    arcade.walletName = wallet.name;
    arcade.isHolder = false;
    arcade.nftCount = 0;
    arcade.holderMessage = "Wallet connected. Checking NFT holder access...";
    updateArcadeAccessUi();
    await verifyArcadeHolder();
    return true;
  } catch (error) {
    arcade.holderCheckStatus = "error";
    arcade.holderMessage = error?.message || "Wallet connection was cancelled.";
    updateArcadeAccessUi();
    return false;
  }
}

async function ensureArcadeWallet() {
  if (arcade.walletAddress) return true;
  return connectArcadeWallet();
}

function arcadeAssetBelongsToFrogCollection(asset) {
  return (
    Array.isArray(asset?.grouping) &&
    asset.grouping.some((group) => group.group_key === "collection" && group.group_value === FROG_COLLECTION_MINT)
  );
}

function applyArcadeHolderResult(result, source) {
  arcade.isHolder = Boolean(result.isHolder);
  arcade.nftCount = Number(result.nftCount || 0);
  arcade.holderCheckStatus = arcade.isHolder ? "holder" : "checked";

  if (arcade.isHolder) {
    arcade.holderMessage = `Holder mode unlocked. ${integerFormat.format(arcade.nftCount)} frog NFT${arcade.nftCount === 1 ? "" : "s"} found. Boost: ${arcadeMultiplierLabel()}.`;
    return;
  }

  arcade.holderMessage = `Wallet connected, but no SushiFrogs NFT was found by ${source}.`;
}

async function readArcadeHolderError(response) {
  try {
    const body = await response.json();
    return body.error || body.message || `Holder endpoint returned ${response.status}.`;
  } catch {
    if (response.status === 404) return "Holder endpoint is not deployed on this site.";
    if (response.status === 405 || response.status === 501) return "Holder endpoint is not available on this server.";
    return `Holder endpoint returned ${response.status}.`;
  }
}

async function checkArcadeHolderViaFunction(wallet) {
  const response = await fetch(HOLDER_CHECK_ENDPOINT, {
    body: JSON.stringify({ wallet }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(await readArcadeHolderError(response));
  }

  const result = await response.json();
  if (result.configured === false) {
    throw new Error(result.message || "Holder endpoint is not configured.");
  }

  return result;
}

async function checkArcadeHolderDirectly(wallet) {
  let nftCount = 0;

  for (let page = 1; page <= HOLDER_DIRECT_MAX_PAGES; page += 1) {
    const response = await fetch(HOLDER_DIRECT_RPC_ENDPOINT, {
      body: JSON.stringify({
        id: `frog-holder-${page}`,
        jsonrpc: "2.0",
        method: "getAssetsByOwner",
        params: {
          displayOptions: {
            showCollectionMetadata: false,
            showFungible: false,
            showNativeBalance: false,
          },
          limit: HOLDER_DIRECT_PAGE_LIMIT,
          ownerAddress: wallet,
          page,
        },
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    if (!response.ok) {
      throw new Error(`Direct holder check returned ${response.status}.`);
    }

    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message || "Direct holder check failed.");
    }

    const assets = Array.isArray(data.result?.items) ? data.result.items : [];
    nftCount += assets.filter(arcadeAssetBelongsToFrogCollection).length;

    const total = Number(data.result?.total || 0);
    if (!assets.length || page * HOLDER_DIRECT_PAGE_LIMIT >= total) break;
  }

  return {
    collectionId: FROG_COLLECTION_MINT,
    configured: true,
    isHolder: nftCount > 0,
    nftCount,
    wallet,
  };
}

async function verifyArcadeHolder() {
  if (!arcade.walletAddress) return;

  arcade.holderCheckStatus = "checking";
  arcade.holderMessage = "Checking SushiFrogs NFT ownership...";
  updateArcadeAccessUi();

  try {
    const result = await checkArcadeHolderViaFunction(arcade.walletAddress);
    applyArcadeHolderResult(result, "secure holder check");
  } catch (functionError) {
    arcade.holderMessage = "Secure holder check is offline. Trying direct NFT scan...";
    updateArcadeAccessUi();

    try {
      const result = await checkArcadeHolderDirectly(arcade.walletAddress);
      applyArcadeHolderResult(result, "direct NFT scan");
    } catch (directError) {
      arcade.isHolder = false;
      arcade.nftCount = 0;
      arcade.holderCheckStatus = "error";
      arcade.holderMessage = directError?.message || functionError?.message || "Holder check failed.";
    }
  }

  updateArcadeAccessUi();
}

function seedFromText(text) {
  let seed = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    seed ^= text.charCodeAt(index);
    seed = Math.imul(seed, 16777619);
  }
  return seed >>> 0 || 1;
}

function arcadeRandom() {
  arcade.rngSeed = (Math.imul(arcade.rngSeed, 1664525) + 1013904223) >>> 0;
  return arcade.rngSeed / 4294967296;
}

function arcadeRandomRange(min, max) {
  return min + arcadeRandom() * (max - min);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function arcadeProgressPoints() {
  return arcade.distance + arcade.collected * ARCADE_CONFIG.coinPoints;
}

function arcadeDifficulty(progress = arcadeProgressPoints()) {
  for (let index = ARCADE_LEVELS.length - 1; index >= 0; index -= 1) {
    if (progress >= ARCADE_LEVELS[index].min) return ARCADE_LEVELS[index];
  }
  return ARCADE_LEVELS[0];
}

function arcadeWeightedPick(items) {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let marker = arcadeRandom() * totalWeight;

  for (const item of items) {
    marker -= item.weight;
    if (marker <= 0) return item;
  }

  return items[items.length - 1];
}

function arcadeObstacleType(difficulty = arcadeDifficulty()) {
  const available = ARCADE_OBSTACLE_TYPES.filter((type) => difficulty.level >= type.minLevel);
  return arcadeWeightedPick(available);
}

function arcadeSpeedForDifficulty(difficulty = arcadeDifficulty()) {
  const progress = arcadeProgressPoints();
  const scoreBoost = Math.min(ARCADE_CONFIG.maxScoreSpeedBoost, Math.sqrt(progress) * ARCADE_CONFIG.scoreSpeedFactor);
  return Math.min(
    ARCADE_CONFIG.maxSpeed,
    ARCADE_CONFIG.baseSpeed + arcade.distance * ARCADE_CONFIG.speedGain + difficulty.speedBoost + scoreBoost,
  );
}

function setArcadeMessage(status, title, detail) {
  if (els.arcadeStatus) els.arcadeStatus.textContent = status;
  const titleEl = els.arcadeOverlay?.querySelector("strong");
  const detailEl = els.arcadeOverlay?.querySelector("small");
  if (titleEl) titleEl.textContent = title;
  if (detailEl) detailEl.textContent = detail;
}

function arcadeScoreId(score) {
  if (score?.id) return String(score.id);
  const identity = score?.wallet || score?.name || "anonymous";
  return `${score?.at || ""}-${identity}-${score?.score || 0}-${score?.mode || "live"}`;
}

function arcadeScoreFingerprint(score) {
  const mode = score?.mode || "live";
  const identity = score?.wallet || score?.name || "anonymous";
  const scoreValue = Math.round(Number(score?.score || 0));
  const distance = Math.round(Number(score?.distance || 0));
  const collected = Math.round(Number(score?.collected || 0));
  const nftCount = Math.round(Number(score?.nftCount || 0));
  return `${mode}|${identity}|${scoreValue}|${distance}|${collected}|${nftCount}`;
}

function arcadeScoresAreLikelySame(a, b) {
  if (arcadeScoreFingerprint(a) !== arcadeScoreFingerprint(b)) return false;

  const aTime = arcadeScoreTimestamp(a);
  const bTime = arcadeScoreTimestamp(b);
  if (!aTime || !bTime) return true;

  return Math.abs(aTime - bTime) <= 120000;
}

function normalizeArcadeScores(scores) {
  return Array.isArray(scores) ? scores.filter((score) => score && Number.isFinite(Number(score.score))).map((score) => ({
    ...score,
    score: Math.max(0, Math.round(Number(score.score || 0))),
  })) : [];
}

function mergeArcadeScoreList(scores) {
  const merged = [];

  normalizeArcadeScores(scores).forEach((score) => {
    const existingIndex = merged.findIndex(
      (existing) => arcadeScoreId(existing) === arcadeScoreId(score) || arcadeScoresAreLikelySame(existing, score),
    );

    if (existingIndex >= 0) {
      const existing = merged[existingIndex];
      if (arcadeScoreTimestamp(score) >= arcadeScoreTimestamp(existing)) {
        merged[existingIndex] = score;
      }
      return;
    }

    merged.push(score);
  });

  return merged;
}

function getLocalArcadeScores() {
  try {
    const scores = JSON.parse(window.localStorage.getItem(ARCADE_STORAGE_KEY) || "[]");
    return normalizeArcadeScores(scores);
  } catch {
    return [];
  }
}

function getArcadeScores() {
  if (arcade.publicScoresStatus === "ready" || arcade.publicScores.length) {
    return normalizeArcadeScores(arcade.publicScores);
  }

  return mergeArcadeScoreList([...getLocalArcadeScores(), ...normalizeArcadeScores(arcade.publicScores)]);
}

function saveArcadeScores(scores) {
  try {
    const nextScores = mergeArcadeScoreList(scores)
      .sort((a, b) => b.score - a.score || String(a.at).localeCompare(String(b.at)))
      .slice(0, ARCADE_SCORE_LIMIT);
    window.localStorage.setItem(ARCADE_STORAGE_KEY, JSON.stringify(nextScores));
  } catch {
    // Local scores are a nice-to-have; gameplay should still work if storage is blocked.
  }
}

async function loadArcadePublicScores() {
  if (arcade.publicScoresStatus !== "ready") {
    arcade.publicScoresStatus = "loading";
  }

  try {
    const response = await fetch(`${ARCADE_PUBLIC_SCORES_ENDPOINT}?t=${Date.now()}`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
      method: "GET",
    });
    if (!response.ok) throw new Error("Public leaderboard unavailable.");

    const data = await response.json();
    const incomingScores = normalizeArcadeScores(data.scores);
    arcade.publicScores = arcade.publicScoresStatus === "ready"
      ? mergeArcadeScoreList([...arcade.publicScores, ...incomingScores])
      : incomingScores;
    arcade.publicScoresStatus = "ready";
    renderArcadeStats();
  } catch {
    arcade.publicScoresStatus = arcade.publicScores.length ? "ready" : "local";
  }
}

function startArcadeScoreRefreshTimer() {
  if (arcadeScoreRefreshTimer) return;
  arcadeScoreRefreshTimer = window.setInterval(loadArcadePublicScores, 15000);
}

function arcadeRunAttemptId(mode) {
  const identity = arcade.walletAddress || arcadeRunnerName() || "anonymous";
  return `${new Date().toISOString()}-${mode}-${identity}-${Math.random().toString(36).slice(2, 10)}`;
}

function renderArcadeRunAttempts() {
  if (els.arcadeRunAttempts24h) {
    els.arcadeRunAttempts24h.textContent = integerFormat.format(arcade.runAttempts24h || 0);
  }

  if (!els.arcadeRunAttemptsNote) return;

  if (arcade.runAttemptsStatus === "ready") {
    els.arcadeRunAttemptsNote.textContent = "global run clicks counted live";
  } else if (arcade.runAttemptsStatus === "local") {
    els.arcadeRunAttemptsNote.textContent = "public counter loads on the live site";
  } else {
    els.arcadeRunAttemptsNote.textContent = "loading public run counter";
  }
}

async function loadArcadeRunAttempts() {
  if (arcade.runAttemptsStatus !== "ready") {
    arcade.runAttemptsStatus = "loading";
    renderArcadeRunAttempts();
  }

  try {
    const response = await fetch(`${ARCADE_RUNS_ENDPOINT}?t=${Date.now()}`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
      method: "GET",
    });
    if (!response.ok) throw new Error("Public run counter unavailable.");

    const data = await response.json();
    arcade.runAttempts24h = Math.max(arcade.runAttempts24h || 0, Math.round(Number(data.count24h || 0)));
    arcade.runAttemptsStatus = "ready";
  } catch {
    arcade.runAttemptsStatus = "local";
  }

  renderArcadeRunAttempts();
}

async function recordArcadeRunAttempt(mode) {
  const optimisticCount = Math.max(0, arcade.runAttempts24h || 0) + 1;
  arcade.runAttempts24h = optimisticCount;
  renderArcadeRunAttempts();

  try {
    const response = await fetch(`${ARCADE_RUNS_ENDPOINT}?t=${Date.now()}`, {
      body: JSON.stringify({
        holder: arcade.isHolder,
        id: arcadeRunAttemptId(mode),
        mode,
        name: arcadeRunnerName(),
        nftCount: arcade.nftCount,
        wallet: arcade.walletAddress,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      cache: "no-store",
      method: "POST",
    });
    if (!response.ok) throw new Error("Run counter submit failed.");

    const data = await response.json();
    arcade.runAttempts24h = Math.max(optimisticCount, Math.round(Number(data.count24h || optimisticCount)));
    arcade.runAttemptsStatus = "ready";
  } catch {
    arcade.runAttempts24h = optimisticCount;
    arcade.runAttemptsStatus = "local";
  }

  renderArcadeRunAttempts();
}

async function submitArcadeScore(score) {
  try {
    const response = await fetch(`${ARCADE_PUBLIC_SCORES_ENDPOINT}?t=${Date.now()}`, {
      body: JSON.stringify(score),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      cache: "no-store",
      method: "POST",
    });
    if (!response.ok) throw new Error("Score submit failed.");

    const data = await response.json();
    arcade.publicScores = mergeArcadeScoreList([...arcade.publicScores, ...normalizeArcadeScores(data.scores)]);
    arcade.publicScoresStatus = "ready";
    renderArcadeStats();
  } catch {
    arcade.publicScoresStatus = arcade.publicScores.length ? "ready" : "local";
  }
}

function saveArcadeScore() {
  if (arcade.score <= 0 || arcade.scoreSaved) return;
  arcade.scoreSaved = true;

  const score = {
    at: new Date().toISOString(),
    collected: arcade.collected,
    day: ARCADE_TODAY,
    distance: Math.round(arcade.distance),
    mode: arcade.mode,
    multiplier: arcadeScoreMultiplier(),
    name: arcadeRunnerName(),
    nftCount: arcade.nftCount,
    score: arcade.score,
    wallet: arcade.walletAddress,
  };
  score.id = arcadeScoreId(score);

  const scores = getLocalArcadeScores();
  scores.push(score);
  scores.sort((a, b) => b.score - a.score || String(a.at).localeCompare(String(b.at)));
  saveArcadeScores(scores);
  arcade.leaderboardPage = 0;
  submitArcadeScore(score);
}

function arcadeScoreTimestamp(score) {
  const timestamp = Date.parse(score.at || "");
  return Number.isFinite(timestamp) ? timestamp : 0;
}

function arcadeRoundStart(timestamp = Date.now()) {
  const date = new Date(timestamp);
  date.setHours(0, 0, 0, 0);
  return date.getTime();
}

function arcadeRoundEnd(timestamp = Date.now()) {
  return arcadeRoundStart(timestamp) + ARCADE_SCORE_WINDOW_MS;
}

function arcadeRoundKey(timestamp = Date.now()) {
  const date = new Date(arcadeRoundStart(timestamp));
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function arcadeFormatCountdown(milliseconds) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds].map((part) => String(part).padStart(2, "0")).join(":");
}

function arcadeLeaderboardName(score) {
  if (score.wallet) return shortWallet(score.wallet);
  return score.name || "Ridiculous Frog";
}

function arcadeHolderScores(scores) {
  return scores.filter((score) => arcadeScoreMode(score) === "holder");
}

function arcadeTopScore(scores) {
  return [...scores].sort((a, b) => b.score - a.score || arcadeScoreTimestamp(a) - arcadeScoreTimestamp(b))[0] || null;
}

function arcadePreviousRoundWinners(holderScores, currentRoundStart) {
  const roundLeaders = new Map();

  holderScores.forEach((score) => {
    const timestamp = arcadeScoreTimestamp(score);
    const roundStart = arcadeRoundStart(timestamp);
    if (!timestamp || roundStart >= currentRoundStart) return;

    const key = arcadeRoundKey(timestamp);
    const currentLeader = roundLeaders.get(key);
    if (!currentLeader || score.score > currentLeader.score) {
      roundLeaders.set(key, score);
    }
  });

  return [...roundLeaders.entries()]
    .sort((a, b) => String(b[0]).localeCompare(String(a[0])))
    .slice(0, ARCADE_PRIZE_WINNER_LIMIT)
    .map(([key, score]) => ({ key, score }));
}

function arcadeLeaderboardLine(score, label = "") {
  const mode = arcadeScoreMode(score);
  const multiplier = Number(score.multiplier || 1);
  const badge = arcadeRunBadge(score);
  const boost = mode === "holder" && multiplier > 1 ? `<em class="arcade-run-boost">${multiplier.toFixed(2)}x</em>` : "";
  const labelText = label ? `<b>${escapeHtml(label)}</b>` : "";

  return `
    <li${label ? ' class="is-last-winner"' : ""}>
      <span class="arcade-leaderboard-entry">
        <em class="arcade-run-badge is-${mode}">${badge}</em>
        ${labelText}
        <span class="arcade-run-name">${escapeHtml(arcadeLeaderboardName(score))}</span>
        ${boost}
      </span>
      <strong>${integerFormat.format(score.score)}</strong>
    </li>
  `;
}

function updateArcadeLeaderboardPager(totalScores) {
  const pageCount = totalScores > 0 ? Math.ceil(totalScores / ARCADE_LEADERBOARD_PAGE_SIZE) : 0;

  if (els.arcadeLeaderboardPage) {
    els.arcadeLeaderboardPage.textContent = pageCount ? `${arcade.leaderboardPage + 1}/${pageCount}` : "0/0";
  }

  arcadePageButtons.forEach((button) => {
    const direction = button.dataset.arcadePage;
    button.disabled =
      pageCount <= 1 ||
      (direction === "prev" && arcade.leaderboardPage <= 0) ||
      (direction === "next" && arcade.leaderboardPage >= pageCount - 1);
  });
}

function renderArcadeLeaderboardList(scores, emptyMarkup) {
  const leaderboardScores = scores.slice(0, ARCADE_LEADERBOARD_MAX_RESULTS);
  const pageCount = leaderboardScores.length ? Math.ceil(leaderboardScores.length / ARCADE_LEADERBOARD_PAGE_SIZE) : 0;

  if (!leaderboardScores.length) {
    arcade.leaderboardPage = 0;
    updateArcadeLeaderboardPager(0);
    els.arcadeLeaderboard.innerHTML = emptyMarkup;
    return;
  }

  arcade.leaderboardPage = Math.max(0, Math.min(arcade.leaderboardPage, pageCount - 1));
  const start = arcade.leaderboardPage * ARCADE_LEADERBOARD_PAGE_SIZE;
  const pageScores = leaderboardScores.slice(start, start + ARCADE_LEADERBOARD_PAGE_SIZE);

  updateArcadeLeaderboardPager(leaderboardScores.length);
  els.arcadeLeaderboard.innerHTML = pageScores.map((score) => arcadeLeaderboardLine(score)).join("");
}

function renderArcadePrizeBoard(scores, now = Date.now()) {
  const holderScores = arcadeHolderScores(scores);
  const roundStart = arcadeRoundStart(now);
  const roundEnd = arcadeRoundEnd(now);
  const currentRoundScores = holderScores.filter((score) => {
    const timestamp = arcadeScoreTimestamp(score);
    return timestamp >= roundStart && timestamp < roundEnd;
  });
  const currentLeader = arcadeTopScore(currentRoundScores);

  if (els.arcadeCurrentLeader) {
    els.arcadeCurrentLeader.textContent = currentLeader ? arcadeLeaderboardName(currentLeader) : "Waiting for HOLDER run";
  }
  if (els.arcadeCurrentLeaderScore) {
    els.arcadeCurrentLeaderScore.textContent = currentLeader
      ? `${integerFormat.format(currentLeader.score)} pts · ${arcadeMultiplierLabel(Number(currentLeader.multiplier || 1))}`
      : "HOLDER scores only";
  }
  if (els.arcadeRoundCountdown) {
    els.arcadeRoundCountdown.textContent = arcadeFormatCountdown(roundEnd - now);
  }
  if (els.arcadeLastWinners) {
    const winners = arcadePreviousRoundWinners(holderScores, roundStart);
    els.arcadeLastWinners.textContent = winners.length
      ? winners.map(({ key, score }) => `${key}: ${arcadeLeaderboardName(score)} · ${integerFormat.format(score.score)}`).join(" / ")
      : "No closed rounds yet";
  }
}

function startArcadePrizeTimer() {
  if (arcadePrizeTimer) return;
  arcadePrizeTimer = window.setInterval(() => {
    renderArcadePrizeBoard(getArcadeScores(), Date.now());
  }, 1000);
}

function startArcadeRunCounterTimer() {
  if (arcadeRunCounterTimer) return;
  arcadeRunCounterTimer = window.setInterval(loadArcadeRunAttempts, 30000);
}

function renderArcadeStats() {
  const now = Date.now();
  const scores = getArcadeScores();
  const allTimeScores = [...scores].sort((a, b) => b.score - a.score || arcadeScoreTimestamp(a) - arcadeScoreTimestamp(b));
  const recentScores = allTimeScores.filter((score) => now - arcadeScoreTimestamp(score) <= ARCADE_SCORE_WINDOW_MS);
  const expiredScores = allTimeScores.filter((score) => now - arcadeScoreTimestamp(score) > ARCADE_SCORE_WINDOW_MS);
  const bestScore = allTimeScores[0]?.score || 0;
  const recentBest = recentScores[0]?.score || 0;

  if (els.arcadeBest) els.arcadeBest.textContent = integerFormat.format(bestScore);
  if (els.arcadeTodayBest) els.arcadeTodayBest.textContent = integerFormat.format(recentBest);
  if (els.arcadeMode) els.arcadeMode.textContent = arcade.running ? arcadeModeName() : arcade.gameOver ? "Fallen" : "Idle";
  renderArcadePrizeBoard(scores, now);

  arcadeBoardButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.arcadeBoard === arcade.leaderboardMode);
  });

  if (!els.arcadeLeaderboard) return;

  if (arcade.leaderboardMode === "all") {
    if (els.arcadeLeaderboardTitle) els.arcadeLeaderboardTitle.textContent = "All time leaderboard";
    renderArcadeLeaderboardList(
      allTimeScores,
      `
        <li>
          <span>No all-time runs yet</span>
          <strong>0</strong>
        </li>
      `,
    );
    return;
  }

  if (els.arcadeLeaderboardTitle) els.arcadeLeaderboardTitle.textContent = "24hrs leaderboard";

  if (!recentScores.length) {
    if (expiredScores.length) {
      updateArcadeLeaderboardPager(0);
      els.arcadeLeaderboard.innerHTML = arcadeLeaderboardLine(expiredScores[0], "Last winner:");
      return;
    }

    renderArcadeLeaderboardList(
      [],
      `
        <li>
          <span>No runs in the last 24hrs</span>
          <strong>0</strong>
        </li>
      `,
    );
    return;
  }

  renderArcadeLeaderboardList(recentScores, "");
}

function updateArcadeHud() {
  const difficulty = arcadeDifficulty();
  if (els.arcadeScore) {
    els.arcadeScore.textContent = integerFormat.format(arcade.score);
  }
  if (els.arcadeLevel) {
    els.arcadeLevel.textContent = `Level ${difficulty.level} · ${difficulty.name}`;
  }
  if (els.arcadeMode) {
    els.arcadeMode.textContent = arcade.running ? arcadeModeName() : arcade.gameOver ? "Fallen" : "Idle";
  }
}

function resetArcadeState(mode = "live") {
  const runMode = typeof mode === "boolean" ? "live" : mode;

  arcade.collected = 0;
  arcade.coins = [];
  arcade.distance = 0;
  arcade.gameOver = false;
  arcade.lastTime = 0;
  arcade.level = 1;
  arcade.levelCue = 0;
  arcade.mode = runMode;
  arcade.obstacles = [];
  arcade.particles = [];
  arcade.practice = false;
  arcade.pressing = false;
  arcade.rngSeed = seedFromText(`${ARCADE_TODAY}-${arcadeRunnerName()}-${Date.now()}`);
  arcade.running = true;
  arcade.score = 0;
  arcade.scoreSaved = false;
  arcade.shake = 0;
  arcade.scroll = 0;
  arcade.spawnTimer = 0.52;
  arcade.speed = ARCADE_CONFIG.baseSpeed;
  arcade.player = {
    grounded: true,
    h: ARCADE_CONFIG.playerHeight,
    holdTime: 0,
    vy: 0,
    w: ARCADE_CONFIG.playerWidth,
    x: ARCADE_CONFIG.playerX,
    y: ARCADE_CONFIG.groundY - ARCADE_CONFIG.playerHeight,
  };
}

function startArcade(mode = "live") {
  if (!ensureArcadeContext()) return;

  const runMode = typeof mode === "boolean" ? "live" : mode;
  if (runMode === "wallet" && !arcade.walletAddress) return;
  if (runMode === "holder" && !arcade.isHolder) return;

  window.cancelAnimationFrame(arcade.rafId);
  resetArcadeState(runMode);
  els.arcadeStageWrap?.classList.add("is-running");
  setArcadeMessage(
    `${arcadeModeName(runMode)} Run`,
    runMode === "holder" ? "HOLDER RUN UNLOCKED." : "RUN. JUMP. BE RIDICULOUS.",
    runMode === "holder"
      ? `Holder mode adds a ${arcadeMultiplierLabel()} score multiplier. The temple gets faster as points climb.`
      : "Tap, click, Space, or Arrow Up to jump. Higher points unlock harder patterns.",
  );
  if (els.arcadeStart) els.arcadeStart.textContent = "Run It Back";
  updateArcadeHud();
  renderArcadeStats();
  recordArcadeRunAttempt(runMode);
  arcade.rafId = window.requestAnimationFrame(arcadeLoop);
}

function endArcade() {
  arcade.running = false;
  arcade.gameOver = true;
  arcade.pressing = false;
  saveArcadeScore();
  els.arcadeStageWrap?.classList.remove("is-running");
  setArcadeMessage(
    "Has Fallen",
    "HAS FALLEN.",
    `Final score: ${integerFormat.format(arcade.score)}. Press Run It Back when ready.`,
  );
  updateArcadeHud();
  renderArcadeStats();
  drawArcade();
}

function arcadeLoop(time) {
  if (!arcade.running) return;

  if (!arcade.lastTime) arcade.lastTime = time;
  const dt = Math.min((time - arcade.lastTime) / 1000, 0.034);
  arcade.lastTime = time;

  updateArcade(dt);
  drawArcade();
  arcade.rafId = window.requestAnimationFrame(arcadeLoop);
}

function arcadeJumpStart(event) {
  if (event?.cancelable) event.preventDefault();
  if (!arcade.running) return;

  arcade.pressing = true;
  if (!arcade.player.grounded) return;

  arcade.player.grounded = false;
  arcade.player.holdTime = 0;
  arcade.player.vy = ARCADE_CONFIG.jumpVelocity;
  spawnArcadeDust(arcade.player.x + 18, ARCADE_CONFIG.groundY - 12, 7, "#d8ff4f");
}

function arcadeJumpEnd() {
  arcade.pressing = false;
}

function isArcadeVisible() {
  const arcadePanel = document.querySelector('[data-tab-panel="arcade"]');
  return Boolean(arcadePanel && !arcadePanel.hidden && els.arcadeGamePanel && !els.arcadeGamePanel.hidden);
}

function isTypingTarget(target) {
  return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement;
}

function isArcadeControlKey(event) {
  return event.code === "Space" || event.code === "ArrowUp";
}

function blurArcadeControl(target) {
  if (target instanceof HTMLElement) {
    target.blur();
  }
}

function createArcadeObstacle(type, xOffset = 0) {
  return {
    ...type,
    x: ARCADE_CONFIG.width + 46 + xOffset,
    y: ARCADE_CONFIG.groundY - type.h + 4,
  };
}

function addArcadeCoin(x, y, radius = 15) {
  arcade.coins.push({
    active: true,
    r: radius,
    x,
    y,
  });
}

function spawnArcadeCoinArc(startX, difficulty, patternSize) {
  const coinCount = Math.min(5, Math.max(2, patternSize + Math.floor(arcadeRandomRange(1, difficulty.level >= 4 ? 4 : 3))));
  const spacing = arcadeRandomRange(38, 54);
  const baseY = arcadeRandomRange(238, 318) - difficulty.level * 6;
  const arcHeight = arcadeRandomRange(20, 46) + difficulty.level * 3;

  for (let index = 0; index < coinCount; index += 1) {
    const progress = coinCount === 1 ? 0 : index / (coinCount - 1);
    addArcadeCoin(startX + index * spacing, baseY - Math.sin(progress * Math.PI) * arcHeight, 14 + Math.min(3, difficulty.level * 0.35));
  }
}

function arcadePatternSize(difficulty) {
  let patternSize = 1;

  if (difficulty.maxPattern >= 2 && arcadeRandom() < difficulty.patternChance) {
    patternSize = 2;
  }

  if (difficulty.maxPattern >= 3 && arcadeRandom() < difficulty.patternChance * 0.48) {
    patternSize = 3;
  }

  return patternSize;
}

function spawnArcadeObstacle() {
  const difficulty = arcadeDifficulty();
  const patternSize = arcadePatternSize(difficulty);
  let xOffset = 0;

  for (let index = 0; index < patternSize; index += 1) {
    const type = arcadeObstacleType(difficulty);
    const obstacle = createArcadeObstacle(type, xOffset);
    arcade.obstacles.push(obstacle);

    if (index === 0 || arcadeRandom() > 0.42) {
      spawnArcadeCoinArc(obstacle.x + obstacle.w + arcadeRandomRange(28, 72), difficulty, index + 1);
    }

    xOffset += type.w + arcadeRandomRange(150, 252) + difficulty.level * 6;
  }

  if (patternSize > 1) {
    arcade.shake = Math.max(arcade.shake, 0.08);
  }

  const speedFactor = clamp(1.08 - (arcade.speed - ARCADE_CONFIG.baseSpeed) / 1900, 0.84, 1.08);
  arcade.spawnTimer = arcadeRandomRange(difficulty.spawnMin, difficulty.spawnMax) * speedFactor;
}

function updateArcade(dt) {
  arcade.scroll += arcade.speed * dt;
  arcade.distance += arcade.speed * dt * ARCADE_CONFIG.distanceScale;
  const difficulty = arcadeDifficulty();
  arcade.speed = arcadeSpeedForDifficulty(difficulty);

  if (difficulty.level !== arcade.level) {
    arcade.level = difficulty.level;
    arcade.levelCue = 1.2;
    arcade.shake = Math.max(arcade.shake, 0.15);
    spawnArcadeDust(arcade.player.x + arcade.player.w / 2, arcade.player.y + arcade.player.h / 2, 18, difficulty.accent);
  }

  arcade.levelCue = Math.max(0, arcade.levelCue - dt);
  arcade.shake = Math.max(0, arcade.shake - dt * 1.5);

  if (arcade.pressing && !arcade.player.grounded && arcade.player.vy < 0 && arcade.player.holdTime < ARCADE_CONFIG.maxHoldSeconds) {
    arcade.player.vy += ARCADE_CONFIG.holdBoost * dt;
    arcade.player.holdTime += dt;
  }

  arcade.player.vy += ARCADE_CONFIG.gravity * dt;
  arcade.player.y += arcade.player.vy * dt;

  const floorY = ARCADE_CONFIG.groundY - arcade.player.h;
  if (arcade.player.y >= floorY) {
    arcade.player.y = floorY;
    arcade.player.vy = 0;
    arcade.player.grounded = true;
  }

  arcade.spawnTimer -= dt;
  if (arcade.spawnTimer <= 0) {
    spawnArcadeObstacle();
  }

  if (arcade.speed > 570 && arcadeRandom() < dt * clamp((arcade.speed - 540) / 170, 0.3, 2.8)) {
    spawnArcadeDust(arcade.player.x - 12, arcade.player.y + arcade.player.h - 10, 1, difficulty.accent);
  }

  arcade.obstacles.forEach((obstacle) => {
    obstacle.x -= arcade.speed * dt;
  });
  arcade.coins.forEach((coin) => {
    coin.x -= arcade.speed * dt;
    coin.y += Math.sin((arcade.scroll + coin.x) / 34) * dt * 16;
  });
  arcade.particles.forEach((particle) => {
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
    particle.vy += 520 * dt;
    particle.life -= dt;
  });

  const playerBounds = arcadePlayerBounds();
  for (const obstacle of arcade.obstacles) {
    if (rectsOverlap(playerBounds, arcadeObstacleBounds(obstacle))) {
      arcade.shake = 0.22;
      spawnArcadeDust(arcade.player.x + arcade.player.w / 2, arcade.player.y + arcade.player.h / 2, 14, "#ff8f7a");
      endArcade();
      return;
    }
  }

  arcade.coins.forEach((coin) => {
    if (!coin.active) return;
    if (rectsOverlap(playerBounds, { h: coin.r * 2, w: coin.r * 2, x: coin.x - coin.r, y: coin.y - coin.r })) {
      coin.active = false;
      arcade.collected += 1;
      spawnArcadeDust(coin.x, coin.y, 10, difficulty.accent || "#ffd84a");
    }
  });

  arcade.obstacles = arcade.obstacles.filter((obstacle) => obstacle.x + obstacle.w > -60);
  arcade.coins = arcade.coins.filter((coin) => coin.active && coin.x + coin.r > -40);
  arcade.particles = arcade.particles.filter((particle) => particle.life > 0);
  arcade.score = Math.max(0, Math.floor(arcadeProgressPoints() * arcadeScoreMultiplier()));
  updateArcadeHud();
}

function arcadePlayerBounds() {
  return {
    h: arcade.player.h - 23,
    w: arcade.player.w - 28,
    x: arcade.player.x + 15,
    y: arcade.player.y + 16,
  };
}

function arcadeObstacleBounds(obstacle) {
  return {
    h: obstacle.h - 6,
    w: obstacle.w - 10,
    x: obstacle.x + 5,
    y: obstacle.y + 5,
  };
}

function rectsOverlap(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function spawnArcadeDust(x, y, count, color) {
  for (let index = 0; index < count; index += 1) {
    arcade.particles.push({
      color,
      life: arcadeRandomRange(0.22, 0.56),
      size: arcadeRandomRange(4, 9),
      vx: arcadeRandomRange(-160, 120),
      vy: arcadeRandomRange(-240, -40),
      x,
      y,
    });
  }
}

function drawArcade() {
  if (!ensureArcadeContext()) return;

  const ctx = arcade.ctx;
  const { height, width } = ARCADE_CONFIG;
  ctx.clearRect(0, 0, width, height);

  ctx.save();
  if (arcade.shake > 0) {
    const shakeAmount = arcade.shake * 14;
    ctx.translate(Math.sin(arcade.scroll * 0.18) * shakeAmount, Math.cos(arcade.scroll * 0.16) * shakeAmount);
  }
  drawArcadeBackground(ctx);
  drawArcadeCoins(ctx);
  drawArcadeObstacles(ctx);
  drawArcadePlayer(ctx);
  drawArcadeParticles(ctx);
  drawArcadeLevelCue(ctx);
  ctx.restore();
}

function drawArcadeBackground(ctx) {
  const { groundY, height, width } = ARCADE_CONFIG;
  const difficulty = arcadeDifficulty();
  const sky = ctx.createLinearGradient(0, 0, width, height);
  sky.addColorStop(0, difficulty.sky[0]);
  sky.addColorStop(0.48, difficulty.sky[1]);
  sky.addColorStop(1, difficulty.sky[2]);
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);

  ctx.globalAlpha = 0.28;
  ctx.strokeStyle = "#172016";
  ctx.lineWidth = 2;
  for (let y = -((arcade.scroll * 0.18) % 24); y < groundY; y += 24) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y + 46);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  if (arcade.speed > 520) {
    const streakCount = Math.floor(clamp((arcade.speed - 500) / 85, 2, 8));
    ctx.save();
    ctx.globalAlpha = clamp((arcade.speed - 500) / 900, 0.12, 0.38);
    ctx.strokeStyle = "#fffbe4";
    ctx.lineWidth = 4;
    for (let index = 0; index < streakCount; index += 1) {
      const y = 72 + index * 42 + ((arcade.scroll * (0.42 + index * 0.03)) % 54);
      ctx.beginPath();
      ctx.moveTo(width - ((arcade.scroll * 1.35 + index * 146) % (width + 220)), y);
      ctx.lineTo(width - ((arcade.scroll * 1.35 + index * 146) % (width + 220)) + 116, y + 18);
      ctx.stroke();
    }
    ctx.restore();
  }

  ctx.fillStyle = "rgba(255, 251, 228, 0.34)";
  ctx.fillRect(0, 0, width, groundY);

  ctx.fillStyle = "#226c38";
  ctx.beginPath();
  ctx.moveTo(0, groundY - 42);
  for (let x = 0; x <= width; x += 80) {
    ctx.lineTo(x, groundY - 42 - Math.sin((x + arcade.scroll * 0.35) / 96) * 28);
  }
  ctx.lineTo(width, groundY + 16);
  ctx.lineTo(0, groundY + 16);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#b9f28b";
  ctx.fillRect(0, groundY - 12, width, 34);
  ctx.fillStyle = "#172016";
  ctx.fillRect(0, groundY + 19, width, 5);
  ctx.fillStyle = "#102416";
  ctx.fillRect(0, groundY + 24, width, height - groundY - 24);

  for (let x = -((arcade.scroll * 0.9) % 76); x < width + 76; x += 76) {
    ctx.save();
    ctx.translate(x, groundY + 37);
    ctx.rotate(-0.1);
    ctx.fillStyle = "#72d7c9";
    roundPath(ctx, -22, -8, 45, 12, 8);
    ctx.fill();
    ctx.strokeStyle = "#172016";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
  }

  ctx.fillStyle = "#fffbe4";
  ctx.font = "900 20px Trebuchet MS, sans-serif";
  ctx.fillText("FROG DASH", width - 162, 42);
  ctx.fillStyle = difficulty.accent;
  ctx.strokeStyle = "#172016";
  ctx.lineWidth = 5;
  roundPath(ctx, width - 188, 55, 146, 34, 10);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#172016";
  ctx.font = "900 15px Trebuchet MS, sans-serif";
  ctx.fillText(`LVL ${difficulty.level} · ${Math.round(arcade.speed)}`, width - 176, 78);
}

function drawArcadeCoins(ctx) {
  arcade.coins.forEach((coin) => {
    ctx.save();
    ctx.translate(coin.x, coin.y);
    ctx.rotate((arcade.scroll + coin.x) / 70);
    ctx.fillStyle = "#ffd84a";
    ctx.strokeStyle = "#172016";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(0, 0, coin.r, coin.r * 0.76, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#172016";
    ctx.font = "900 18px Trebuchet MS, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("$", 0, 1);
    ctx.restore();
  });
}

function drawArcadeObstacles(ctx) {
  arcade.obstacles.forEach((obstacle) => {
    ctx.save();
    ctx.translate(obstacle.x, obstacle.y);
    ctx.fillStyle = obstacle.color;
    ctx.strokeStyle = "#172016";
    ctx.lineWidth = 4;

    if (obstacle.name === "log") {
      roundPath(ctx, 0, 0, obstacle.w, obstacle.h, 18);
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = "rgba(255, 251, 228, 0.45)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(12, 10);
      ctx.lineTo(obstacle.w - 14, 9);
      ctx.stroke();
    } else if (obstacle.name === "rock") {
      ctx.beginPath();
      ctx.moveTo(8, obstacle.h);
      ctx.lineTo(0, 20);
      ctx.lineTo(19, 2);
      ctx.lineTo(48, 0);
      ctx.lineTo(obstacle.w, 24);
      ctx.lineTo(obstacle.w - 10, obstacle.h);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else if (obstacle.name === "crate") {
      roundPath(ctx, 0, 0, obstacle.w, obstacle.h, 6);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(8, 8);
      ctx.lineTo(obstacle.w - 8, obstacle.h - 8);
      ctx.moveTo(obstacle.w - 8, 8);
      ctx.lineTo(8, obstacle.h - 8);
      ctx.stroke();
    } else if (obstacle.name === "lily") {
      ctx.beginPath();
      ctx.ellipse(obstacle.w / 2, obstacle.h / 2 + 5, obstacle.w / 2, obstacle.h / 2, -0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = "#fffbe4";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(18, obstacle.h / 2 + 4);
      ctx.quadraticCurveTo(obstacle.w / 2, 2, obstacle.w - 18, obstacle.h / 2 + 5);
      ctx.stroke();
    } else if (obstacle.name === "lantern") {
      roundPath(ctx, 5, 8, obstacle.w - 10, obstacle.h - 8, 12);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#fffbe4";
      roundPath(ctx, 14, 18, obstacle.w - 28, obstacle.h - 30, 6);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#172016";
      ctx.fillRect(obstacle.w / 2 - 3, 0, 6, 12);
    } else if (obstacle.name === "vault") {
      roundPath(ctx, 0, 0, obstacle.w, obstacle.h, 19);
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = "#d8ff4f";
      ctx.lineWidth = 4;
      for (let stripe = 16; stripe < obstacle.w - 12; stripe += 28) {
        ctx.beginPath();
        ctx.moveTo(stripe, 7);
        ctx.lineTo(stripe + 14, obstacle.h - 8);
        ctx.stroke();
      }
    } else if (obstacle.name === "totem") {
      roundPath(ctx, 0, 0, obstacle.w, obstacle.h, 8);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#fffbe4";
      ctx.beginPath();
      ctx.arc(16, 22, 7, 0, Math.PI * 2);
      ctx.arc(obstacle.w - 16, 22, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#172016";
      ctx.fillRect(14, 39, obstacle.w - 28, 5);
    } else {
      roundPath(ctx, 0, 0, obstacle.w, obstacle.h, 12);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#d8ff4f";
      ctx.beginPath();
      ctx.arc(obstacle.w - 16, 13, 6, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  });
}

function drawArcadePlayer(ctx) {
  const player = arcade.player;
  ctx.save();
  ctx.translate(player.x + player.w / 2, player.y + player.h / 2);
  ctx.rotate(Math.max(-0.18, Math.min(0.18, player.vy / 3600)));
  ctx.scale(player.grounded ? 1 : 1.02, player.grounded ? 1 : 0.98);

  if (arcadeFrogImage.complete && arcadeFrogImage.naturalWidth) {
    ctx.drawImage(arcadeFrogImage, -player.w / 2 - 12, -player.h / 2 - 26, player.w + 34, player.h + 40);
  } else {
    ctx.fillStyle = "#49b64d";
    ctx.strokeStyle = "#172016";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.ellipse(0, 0, player.w / 2, player.h / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  ctx.restore();
}

function drawArcadeParticles(ctx) {
  arcade.particles.forEach((particle) => {
    ctx.save();
    ctx.globalAlpha = Math.max(0, particle.life * 2);
    ctx.fillStyle = particle.color;
    ctx.strokeStyle = "#172016";
    ctx.lineWidth = 2;
    roundPath(ctx, particle.x, particle.y, particle.size, particle.size, 3);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  });
}

function drawArcadeLevelCue(ctx) {
  if (arcade.levelCue <= 0) return;

  const difficulty = arcadeDifficulty();
  const { width } = ARCADE_CONFIG;
  const alpha = clamp(arcade.levelCue, 0, 1);
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(width / 2, 112 - (1 - alpha) * 18);
  ctx.rotate(-0.025);
  ctx.fillStyle = difficulty.accent;
  ctx.strokeStyle = "#172016";
  ctx.lineWidth = 5;
  roundPath(ctx, -144, -30, 288, 62, 18);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#172016";
  ctx.font = "900 24px Trebuchet MS, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`LEVEL ${difficulty.level}: ${difficulty.name}`, 0, 0);
  ctx.restore();
}

function ensureTempleRunContext() {
  if (!els.templeRunCanvas) return false;
  if (!templeRun.ctx) {
    templeRun.ctx = els.templeRunCanvas.getContext("2d");
  }
  return Boolean(templeRun.ctx);
}

function readTempleRunBest() {
  try {
    return Math.max(0, Math.round(Number(window.localStorage.getItem(TEMPLE_RUN_STORAGE_KEY) || 0)));
  } catch {
    return 0;
  }
}

function saveTempleRunBest(score) {
  templeRun.best = Math.max(templeRun.best || 0, Math.round(Number(score || 0)));
  try {
    window.localStorage.setItem(TEMPLE_RUN_STORAGE_KEY, String(templeRun.best));
  } catch {
    // The temple run still plays if local storage is unavailable.
  }
}

function templeRandom() {
  templeRun.rngSeed = (Math.imul(templeRun.rngSeed, 1103515245) + 12345) >>> 0;
  return templeRun.rngSeed / 4294967296;
}

function templeRandomRange(min, max) {
  return min + templeRandom() * (max - min);
}

function templeWeightedPick(items) {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let marker = templeRandom() * totalWeight;

  for (const item of items) {
    marker -= item.weight;
    if (marker <= 0) return item;
  }

  return items[items.length - 1];
}

function templeDifficulty(progress = templeRun.score) {
  for (let index = TEMPLE_RUN_LEVELS.length - 1; index >= 0; index -= 1) {
    if (progress >= TEMPLE_RUN_LEVELS[index].min) return TEMPLE_RUN_LEVELS[index];
  }
  return TEMPLE_RUN_LEVELS[0];
}

function templeSpeedForDifficulty(difficulty = templeDifficulty()) {
  return Math.min(
    TEMPLE_RUN_CONFIG.maxSpeed,
    TEMPLE_RUN_CONFIG.baseSpeed + difficulty.speed + templeRun.distance * TEMPLE_RUN_CONFIG.speedGain,
  );
}

function templeLaneX(lane, z) {
  const center = TEMPLE_RUN_CONFIG.width / 2;
  const depth = clamp(1 - z, 0, 1);
  const laneWidth = lerp(42, 190, depth);
  return center + lane * laneWidth;
}

function templeProjection(lane, z) {
  const depth = clamp(1 - z, 0, 1);
  const y = lerp(TEMPLE_RUN_CONFIG.horizonY, TEMPLE_RUN_CONFIG.playerY, depth ** 0.78);
  const scale = lerp(0.24, 1.18, depth ** 0.86);
  return {
    depth,
    scale,
    x: templeLaneX(lane, z),
    y,
  };
}

function templeJumpHeight() {
  if (!templeRun.jump.active) return 0;
  const progress = clamp(templeRun.jump.time / templeRun.jump.duration, 0, 1);
  return Math.sin(progress * Math.PI) * 112;
}

function setTempleRunMessage(status, title, detail) {
  if (els.templeRunStatus) els.templeRunStatus.textContent = status;
  const titleEl = els.templeRunOverlay?.querySelector("strong");
  const detailEl = els.templeRunOverlay?.querySelector("small");
  if (titleEl) titleEl.textContent = title;
  if (detailEl) detailEl.textContent = detail;
}

function updateTempleRunHud() {
  const difficulty = templeDifficulty();

  if (els.templeRunScore) {
    els.templeRunScore.textContent = integerFormat.format(templeRun.score);
  }

  if (els.templeRunLevel) {
    els.templeRunLevel.textContent = `Level ${difficulty.level} · ${difficulty.name}`;
  }

  if (els.templeRunBest) {
    els.templeRunBest.textContent = integerFormat.format(templeRun.best || 0);
  }

  if (els.templeRunCoins) {
    els.templeRunCoins.textContent = integerFormat.format(templeRun.coins || 0);
  }

  if (els.templeRunMode) {
    els.templeRunMode.textContent = templeRun.running ? "Running" : templeRun.gameOver ? "Fallen" : "Idle";
  }
}

function resetTempleRunState() {
  templeRun.coins = 0;
  templeRun.distance = 0;
  templeRun.entities = [];
  templeRun.gameOver = false;
  templeRun.lastTime = 0;
  templeRun.lane = 0;
  templeRun.laneVisual = 0;
  templeRun.level = 1;
  templeRun.levelCue = 0;
  templeRun.mode = "running";
  templeRun.particles = [];
  templeRun.pointerStart = null;
  templeRun.rngSeed = seedFromText(`temple-run-${Date.now()}-${Math.random()}`);
  templeRun.running = true;
  templeRun.score = 0;
  templeRun.shake = 0;
  templeRun.slideTime = 0;
  templeRun.spawnTimer = 0.62;
  templeRun.speed = TEMPLE_RUN_CONFIG.baseSpeed;
  templeRun.tunnelGlow = 0;
  templeRun.jump = {
    active: false,
    duration: 0.62,
    time: 0,
  };
}

function startTempleRun() {
  if (!ensureTempleRunContext()) return;

  window.cancelAnimationFrame(templeRun.rafId);
  resetTempleRunState();
  els.templeRunCanvas?.parentElement?.classList.add("is-running");
  setTempleRunMessage("Temple Run", "THE TEMPLE WAKES.", "Swipe, use arrows, WASD, Space, or Down to survive.");
  updateTempleRunHud();
  templeRun.rafId = window.requestAnimationFrame(templeRunLoop);
}

function endTempleRun(reason = "The temple caught you.") {
  templeRun.running = false;
  templeRun.gameOver = true;
  templeRun.mode = "fallen";
  templeRun.shake = Math.max(templeRun.shake, 0.28);
  saveTempleRunBest(templeRun.score);
  els.templeRunCanvas?.parentElement?.classList.remove("is-running");
  setTempleRunMessage("Has Fallen", "TEMPLE SPLASH.", `${reason} Final score: ${integerFormat.format(templeRun.score)}.`);
  updateTempleRunHud();
  drawTempleRun();
}

function templeRunLoop(time) {
  if (!templeRun.running) return;

  if (!templeRun.lastTime) templeRun.lastTime = time;
  const dt = Math.min((time - templeRun.lastTime) / 1000, 0.034);
  templeRun.lastTime = time;

  updateTempleRun(dt);
  drawTempleRun();
  templeRun.rafId = window.requestAnimationFrame(templeRunLoop);
}

function templeMoveLane(direction) {
  if (!templeRun.running) return;
  const nextLane = clamp(templeRun.lane + direction, -1, 1);
  if (nextLane === templeRun.lane) return;
  templeRun.lane = nextLane;
  templeRun.shake = Math.max(templeRun.shake, 0.035);
  spawnTempleParticles(templeLaneX(templeRun.lane, 0.04), TEMPLE_RUN_CONFIG.playerY - 18, 8, "#72d7c9");
}

function templeJump() {
  if (!templeRun.running || templeRun.jump.active || templeRun.slideTime > 0.18) return;
  templeRun.jump.active = true;
  templeRun.jump.time = 0;
  spawnTempleParticles(templeLaneX(templeRun.lane, 0.04), TEMPLE_RUN_CONFIG.playerY - 8, 12, "#d8ff4f");
}

function templeSlide() {
  if (!templeRun.running || templeRun.jump.active) return;
  templeRun.slideTime = 0.58;
  spawnTempleParticles(templeLaneX(templeRun.lane, 0.04), TEMPLE_RUN_CONFIG.playerY, 10, "#ffd84a");
}

function handleTempleRunAction(action) {
  if (!templeRun.running) {
    startTempleRun();
    return;
  }

  if (action === "left") {
    templeMoveLane(-1);
  } else if (action === "right") {
    templeMoveLane(1);
  } else if (action === "up" || action === "jump") {
    templeJump();
  } else if (action === "down" || action === "slide") {
    templeSlide();
  }
}

function isTempleRunVisible() {
  const arcadePanel = document.querySelector('[data-tab-panel="arcade"]');
  return Boolean(arcadePanel && !arcadePanel.hidden && els.templeRunPanel && !els.templeRunPanel.hidden);
}

function isTempleRunControlKey(event) {
  return ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "KeyA", "KeyD", "KeyW", "KeyS", "Space"].includes(event.code);
}

function handleTempleRunKey(event) {
  if (!isTempleRunControlKey(event)) return false;
  if (event.repeat && event.code !== "ArrowLeft" && event.code !== "ArrowRight") return true;

  if (event.code === "ArrowLeft" || event.code === "KeyA") {
    handleTempleRunAction("left");
  } else if (event.code === "ArrowRight" || event.code === "KeyD") {
    handleTempleRunAction("right");
  } else if (event.code === "ArrowDown" || event.code === "KeyS") {
    handleTempleRunAction("slide");
  } else {
    handleTempleRunAction("jump");
  }

  return true;
}

function templePointerDown(event) {
  if (event?.cancelable) event.preventDefault();
  templeRun.pointerStart = {
    time: Date.now(),
    x: event.clientX,
    y: event.clientY,
  };
}

function templePointerEnd(event) {
  if (event?.cancelable) event.preventDefault();
  const start = templeRun.pointerStart;
  templeRun.pointerStart = null;

  if (!start) {
    handleTempleRunAction("jump");
    return;
  }

  const dx = event.clientX - start.x;
  const dy = event.clientY - start.y;
  const distance = Math.hypot(dx, dy);

  if (!templeRun.running) {
    startTempleRun();
    return;
  }

  if (distance < 22 || Date.now() - start.time < 90) {
    handleTempleRunAction("jump");
  } else if (Math.abs(dx) > Math.abs(dy)) {
    handleTempleRunAction(dx > 0 ? "right" : "left");
  } else {
    handleTempleRunAction(dy > 0 ? "slide" : "jump");
  }
}

function templePointerCancel() {
  templeRun.pointerStart = null;
}

function spawnTempleEntity(entity) {
  templeRun.entities.push({
    ...entity,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  });
}

function spawnTempleCoinTrail(lane, count, startZ, spacing = 0.075) {
  for (let index = 0; index < count; index += 1) {
    spawnTempleEntity({
      lane,
      phase: templeRandom() * Math.PI * 2,
      type: "coin",
      z: startZ + index * spacing,
    });
  }
}

function spawnTemplePattern() {
  const difficulty = templeDifficulty();
  const obstacle = templeWeightedPick(TEMPLE_RUN_OBSTACLES);
  const obstacleLane = Math.round(templeRandomRange(-1.45, 1.45));
  const safeLanes = [-1, 0, 1].filter((lane) => lane !== obstacleLane);
  const coinLane = safeLanes[Math.floor(templeRandom() * safeLanes.length)] ?? 0;
  const coinCount = clamp(3 + difficulty.level + Math.floor(templeRandomRange(0, 4)), 4, 10);

  spawnTempleEntity({
    lane: obstacleLane,
    obstacle,
    type: "obstacle",
    z: 1.08,
  });

  spawnTempleCoinTrail(coinLane, coinCount, 1.01, 0.055);

  if (difficulty.level >= 3 && templeRandom() < 0.42) {
    const secondLane = safeLanes.find((lane) => lane !== coinLane) ?? obstacleLane;
    spawnTempleCoinTrail(secondLane, Math.max(2, Math.floor(coinCount / 2)), 1.22, 0.065);
  }

  if (difficulty.level >= 5 && templeRandom() < 0.2) {
    const decoyLane = safeLanes[Math.floor(templeRandom() * safeLanes.length)] ?? 0;
    spawnTempleEntity({
      lane: decoyLane,
      obstacle: TEMPLE_RUN_OBSTACLES.find((item) => item.name === "relic") || obstacle,
      type: "obstacle",
      z: 1.34,
    });
  }

  const speedFactor = clamp(1.08 - templeRun.speed * 0.22, 0.68, 1.08);
  templeRun.spawnTimer = templeRandomRange(TEMPLE_RUN_CONFIG.spawnMin, TEMPLE_RUN_CONFIG.spawnMax) * difficulty.spawn * speedFactor;
}

function updateTempleRun(dt) {
  const difficulty = templeDifficulty();
  templeRun.speed = templeSpeedForDifficulty(difficulty);
  templeRun.distance += templeRun.speed * dt * 255;
  templeRun.tunnelGlow += dt * (1 + templeRun.speed * 0.5);
  templeRun.laneVisual = lerp(templeRun.laneVisual, templeRun.lane, clamp(dt * 11, 0, 1));

  if (difficulty.level !== templeRun.level) {
    templeRun.level = difficulty.level;
    templeRun.levelCue = 1.35;
    templeRun.shake = Math.max(templeRun.shake, 0.16);
    spawnTempleParticles(TEMPLE_RUN_CONFIG.width / 2, TEMPLE_RUN_CONFIG.horizonY + 24, 28, difficulty.accent);
  }

  templeRun.levelCue = Math.max(0, templeRun.levelCue - dt);
  templeRun.shake = Math.max(0, templeRun.shake - dt * 1.35);
  templeRun.slideTime = Math.max(0, templeRun.slideTime - dt);

  if (templeRun.jump.active) {
    templeRun.jump.time += dt;
    if (templeRun.jump.time >= templeRun.jump.duration) {
      templeRun.jump.active = false;
      templeRun.jump.time = 0;
    }
  }

  templeRun.spawnTimer -= dt;
  if (templeRun.spawnTimer <= 0) {
    spawnTemplePattern();
  }

  const zStep = templeRun.speed * dt;
  templeRun.entities.forEach((entity) => {
    entity.z -= zStep;
    if (entity.type === "coin") {
      entity.phase += dt * 5;
    }
  });

  templeRun.particles.forEach((particle) => {
    particle.x += particle.vx * dt;
    particle.y += particle.vy * dt;
    particle.vy += 280 * dt;
    particle.life -= dt;
  });

  for (const entity of templeRun.entities) {
    if (entity.type !== "obstacle" || entity.checked || entity.z > 0.16 || entity.z < -0.06) continue;
    if (Math.round(entity.lane) !== templeRun.lane) {
      entity.checked = true;
      continue;
    }

    const avoid = entity.obstacle?.avoid || "lane";
    const jumpSafe = avoid === "jump" && templeJumpHeight() > 52;
    const slideSafe = avoid === "slide" && templeRun.slideTime > 0.18;

    if (jumpSafe || slideSafe) {
      entity.checked = true;
      spawnTempleParticles(templeLaneX(entity.lane, 0.06), TEMPLE_RUN_CONFIG.playerY - 18, 10, "#d8ff4f");
      continue;
    }

    if (avoid === "lane") {
      endTempleRun("A relic blocked the lane.");
    } else if (avoid === "jump") {
      endTempleRun("A broken stone caught your feet.");
    } else {
      endTempleRun("The temple gate clipped the run.");
    }
    return;
  }

  templeRun.entities.forEach((entity) => {
    if (entity.type !== "coin" || entity.collected || entity.z > 0.14 || entity.z < -0.08) return;
    if (Math.round(entity.lane) !== templeRun.lane) return;
    if (templeRun.slideTime > 0.38) return;

    entity.collected = true;
    templeRun.coins += 1;
    const projection = templeProjection(entity.lane, entity.z);
    spawnTempleParticles(projection.x, projection.y - 20, 8, "#ffd84a");
  });

  templeRun.entities = templeRun.entities.filter((entity) => entity.z > -0.18 && !entity.collected);
  templeRun.particles = templeRun.particles.filter((particle) => particle.life > 0);
  templeRun.score = Math.max(0, Math.floor(templeRun.distance + templeRun.coins * 18));
  updateTempleRunHud();
}

function spawnTempleParticles(x, y, count, color) {
  for (let index = 0; index < count; index += 1) {
    templeRun.particles.push({
      color,
      life: templeRandomRange(0.28, 0.72),
      size: templeRandomRange(4, 10),
      vx: templeRandomRange(-120, 120),
      vy: templeRandomRange(-160, -30),
      x,
      y,
    });
  }
}

function drawTempleRun() {
  if (!ensureTempleRunContext()) return;

  const ctx = templeRun.ctx;
  const { height, width } = TEMPLE_RUN_CONFIG;
  ctx.clearRect(0, 0, width, height);

  ctx.save();
  if (templeRun.shake > 0) {
    const shakeAmount = templeRun.shake * 18;
    ctx.translate(Math.sin(templeRun.tunnelGlow * 11) * shakeAmount, Math.cos(templeRun.tunnelGlow * 9) * shakeAmount);
  }

  drawTempleBackground(ctx);
  drawTempleEntities(ctx);
  drawTemplePlayer(ctx);
  drawTempleParticles(ctx);
  drawTempleLevelCue(ctx);
  ctx.restore();
}

function drawTempleBackground(ctx) {
  const { height, horizonY, playerY, width } = TEMPLE_RUN_CONFIG;
  const difficulty = templeDifficulty();
  const center = width / 2;

  const sky = ctx.createLinearGradient(0, 0, width, height);
  sky.addColorStop(0, "#061008");
  sky.addColorStop(0.42, "#18391f");
  sky.addColorStop(0.72, "#4c7246");
  sky.addColorStop(1, difficulty.accent);
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.globalAlpha = 0.18;
  ctx.strokeStyle = "#fffbe4";
  ctx.lineWidth = 2;
  for (let y = -((templeRun.distance * 0.2) % 24); y < height; y += 24) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y + 56);
    ctx.stroke();
  }
  ctx.restore();

  const portalPulse = 0.5 + Math.sin(templeRun.tunnelGlow * 2.4) * 0.5;
  const portal = ctx.createRadialGradient(center, horizonY + 6, 12, center, horizonY + 6, 210);
  portal.addColorStop(0, `rgba(255, 251, 228, ${0.78 + portalPulse * 0.12})`);
  portal.addColorStop(0.26, "rgba(216, 255, 79, 0.35)");
  portal.addColorStop(0.58, "rgba(114, 215, 201, 0.18)");
  portal.addColorStop(1, "rgba(6, 16, 8, 0)");
  ctx.fillStyle = portal;
  ctx.beginPath();
  ctx.arc(center, horizonY + 6, 230, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(247, 241, 200, 0.2)";
  ctx.strokeStyle = "rgba(23, 32, 22, 0.82)";
  ctx.lineWidth = 5;

  [-1, 1].forEach((side) => {
    ctx.beginPath();
    ctx.moveTo(center + side * 64, horizonY);
    ctx.lineTo(side < 0 ? 0 : width, playerY + 112);
    ctx.lineTo(side < 0 ? 0 : width, 0);
    ctx.lineTo(center + side * 118, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  });

  const path = ctx.createLinearGradient(0, horizonY, 0, height);
  path.addColorStop(0, "#24381f");
  path.addColorStop(0.42, "#8b7f4b");
  path.addColorStop(1, "#d9c071");
  ctx.fillStyle = path;
  ctx.strokeStyle = "#172016";
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(center - 62, horizonY);
  ctx.lineTo(center + 62, horizonY);
  ctx.lineTo(width - 80, height);
  ctx.lineTo(80, height);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.save();
  ctx.strokeStyle = "rgba(255, 251, 228, 0.48)";
  ctx.lineWidth = 4;
  [-0.5, 0.5].forEach((lane) => {
    ctx.beginPath();
    ctx.moveTo(center + lane * 58, horizonY + 4);
    ctx.lineTo(center + lane * 260, height + 10);
    ctx.stroke();
  });
  ctx.restore();

  for (let marker = 0; marker < 13; marker += 1) {
    const z = ((marker * 0.12 + templeRun.distance * 0.004) % 1.2) - 0.08;
    const projection = templeProjection(0, z);
    const laneWidth = lerp(70, 430, projection.depth);
    const alpha = clamp(projection.depth, 0.05, 0.5);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = "#172016";
    ctx.lineWidth = lerp(1, 5, projection.depth);
    ctx.beginPath();
    ctx.moveTo(center - laneWidth, projection.y);
    ctx.lineTo(center + laneWidth, projection.y);
    ctx.stroke();
    ctx.restore();
  }

  drawTemplePillars(ctx, -1);
  drawTemplePillars(ctx, 1);

  ctx.fillStyle = "rgba(255, 251, 228, 0.86)";
  ctx.font = "900 20px Trebuchet MS, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText("TEMPLE FROG RUN", width - 46, 42);
  ctx.textAlign = "left";
  ctx.fillStyle = difficulty.accent;
  ctx.strokeStyle = "#172016";
  ctx.lineWidth = 5;
  roundPath(ctx, width - 200, 56, 158, 35, 10);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#172016";
  ctx.font = "900 15px Trebuchet MS, sans-serif";
  ctx.fillText(`LVL ${difficulty.level} · ${Math.round(templeRun.speed * 100)}`, width - 184, 79);
}

function drawTemplePillars(ctx, side) {
  const { height, horizonY, width } = TEMPLE_RUN_CONFIG;
  const center = width / 2;
  for (let index = 0; index < 7; index += 1) {
    const z = ((index * 0.19 + templeRun.distance * 0.0034) % 1.26) - 0.1;
    const depth = clamp(1 - z, 0, 1);
    const y = lerp(horizonY - 24, height - 34, depth ** 0.82);
    const scale = lerp(0.36, 1.75, depth);
    const x = center + side * lerp(110, 452, depth);
    const pillarWidth = 36 * scale;
    const pillarHeight = 92 * scale;

    ctx.save();
    ctx.globalAlpha = clamp(depth + 0.12, 0.18, 0.92);
    ctx.translate(x, y);
    ctx.fillStyle = side < 0 ? "#304a2f" : "#49683d";
    ctx.strokeStyle = "#172016";
    ctx.lineWidth = 4;
    roundPath(ctx, -pillarWidth / 2, -pillarHeight, pillarWidth, pillarHeight, 7 * scale);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#ffd84a";
    ctx.beginPath();
    ctx.arc(0, -pillarHeight + 20 * scale, 8 * scale, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "rgba(255, 251, 228, 0.35)";
    ctx.fillRect(-pillarWidth / 2 + 8 * scale, -pillarHeight + 12 * scale, 6 * scale, pillarHeight - 24 * scale);
    ctx.restore();
  }
}

function drawTempleEntities(ctx) {
  [...templeRun.entities]
    .sort((a, b) => b.z - a.z)
    .forEach((entity) => {
      if (entity.type === "coin") {
        drawTempleCoin(ctx, entity);
      } else {
        drawTempleObstacle(ctx, entity);
      }
    });
}

function drawTempleCoin(ctx, coin) {
  const projection = templeProjection(coin.lane, coin.z);
  if (projection.depth <= 0 || coin.z > 1.12) return;
  const radius = 14 * projection.scale;
  const bob = Math.sin(coin.phase || 0) * 6 * projection.scale;

  ctx.save();
  ctx.translate(projection.x, projection.y - 34 * projection.scale + bob);
  ctx.rotate((coin.phase || 0) * 0.38);
  ctx.fillStyle = "#ffd84a";
  ctx.strokeStyle = "#172016";
  ctx.lineWidth = Math.max(2, 4 * projection.scale);
  ctx.beginPath();
  ctx.ellipse(0, 0, radius, radius * 0.72, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#172016";
  ctx.font = `900 ${Math.max(10, 17 * projection.scale)}px Trebuchet MS, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("$", 0, 1);
  ctx.restore();
}

function drawTempleObstacle(ctx, entity) {
  const projection = templeProjection(entity.lane, entity.z);
  if (projection.depth <= 0 || entity.z > 1.16) return;

  const obstacle = entity.obstacle || TEMPLE_RUN_OBSTACLES[0];
  const w = obstacle.w * projection.scale;
  const h = obstacle.h * projection.scale;
  const x = projection.x - w / 2;
  const y = projection.y - h;

  ctx.save();
  ctx.globalAlpha = clamp(projection.depth + 0.08, 0.12, 1);
  ctx.fillStyle = obstacle.color;
  ctx.strokeStyle = "#172016";
  ctx.lineWidth = Math.max(2, 5 * projection.scale);

  if (obstacle.name === "gap") {
    ctx.fillStyle = "#07100a";
    roundPath(ctx, x, y + h * 0.22, w, h * 0.76, 12 * projection.scale);
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = "rgba(255, 251, 228, 0.38)";
    ctx.lineWidth = Math.max(2, 3 * projection.scale);
    ctx.beginPath();
    ctx.moveTo(x + w * 0.1, y + h * 0.44);
    ctx.lineTo(x + w * 0.9, y + h * 0.32);
    ctx.stroke();
  } else if (obstacle.name === "gate") {
    roundPath(ctx, x, y, w, h, 10 * projection.scale);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#fffbe4";
    roundPath(ctx, x + w * 0.22, y + h * 0.18, w * 0.56, h * 0.22, 7 * projection.scale);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#172016";
    ctx.font = `900 ${Math.max(9, 13 * projection.scale)}px Trebuchet MS, sans-serif`;
    ctx.textAlign = "center";
    ctx.fillText("DUCK", projection.x, y + h * 0.34);
  } else if (obstacle.name === "pillar") {
    roundPath(ctx, x, y, w, h, 8 * projection.scale);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#ffd84a";
    ctx.beginPath();
    ctx.arc(projection.x, y + h * 0.28, 8 * projection.scale, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  } else {
    roundPath(ctx, x, y, w, h, 14 * projection.scale);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "rgba(255, 251, 228, 0.36)";
    ctx.beginPath();
    ctx.arc(x + w * 0.33, y + h * 0.3, 9 * projection.scale, 0, Math.PI * 2);
    ctx.arc(x + w * 0.67, y + h * 0.3, 9 * projection.scale, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#172016";
    ctx.fillRect(x + w * 0.28, y + h * 0.63, w * 0.44, Math.max(3, h * 0.06));
  }

  ctx.restore();
}

function drawTemplePlayer(ctx) {
  const projection = templeProjection(templeRun.laneVisual, 0.035);
  const jumpOffset = templeJumpHeight();
  const sliding = templeRun.slideTime > 0;
  const w = sliding ? 108 : 96;
  const h = sliding ? 66 : 92;
  const x = projection.x;
  const y = TEMPLE_RUN_CONFIG.playerY - jumpOffset;

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate((templeRun.laneVisual - templeRun.lane) * -0.08);
  ctx.scale(sliding ? 1.1 : 1, sliding ? 0.78 : 1);

  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.beginPath();
  ctx.ellipse(0, h * 0.42 + jumpOffset * 0.18, w * 0.44, 12, 0, 0, Math.PI * 2);
  ctx.fill();

  if (templeFrogImage.complete && templeFrogImage.naturalWidth) {
    ctx.drawImage(templeFrogImage, -w / 2 - 10, -h / 2 - 28, w + 24, h + 42);
  } else {
    ctx.fillStyle = "#49b64d";
    ctx.strokeStyle = "#172016";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.ellipse(0, -8, w / 2, h / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  ctx.restore();
}

function drawTempleParticles(ctx) {
  templeRun.particles.forEach((particle) => {
    ctx.save();
    ctx.globalAlpha = clamp(particle.life * 1.8, 0, 1);
    ctx.fillStyle = particle.color;
    ctx.strokeStyle = "#172016";
    ctx.lineWidth = 2;
    roundPath(ctx, particle.x, particle.y, particle.size, particle.size, 3);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  });
}

function drawTempleLevelCue(ctx) {
  if (templeRun.levelCue <= 0) return;

  const difficulty = templeDifficulty();
  const alpha = clamp(templeRun.levelCue, 0, 1);
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(TEMPLE_RUN_CONFIG.width / 2, 112 - (1 - alpha) * 18);
  ctx.rotate(0.02);
  ctx.fillStyle = difficulty.accent;
  ctx.strokeStyle = "#172016";
  ctx.lineWidth = 5;
  roundPath(ctx, -170, -31, 340, 64, 18);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#172016";
  ctx.font = "900 23px Trebuchet MS, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(`LEVEL ${difficulty.level}: ${difficulty.name}`, 0, 0);
  ctx.restore();
}

function roundPath(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function initializeArcade() {
  if (!ensureArcadeContext()) return;

  setArcadeScreen("lobby");
  renderArcadeStats();
  startArcadePrizeTimer();
  startArcadeScoreRefreshTimer();
  startArcadeRunCounterTimer();
  loadArcadePublicScores();
  loadArcadeRunAttempts();
  updateArcadeAccessUi();
  drawArcade();
  updateTempleRunHud();
  drawTempleRun();

  arcadeFrogImage.addEventListener("load", drawArcade, { once: true });
  templeFrogImage.addEventListener("load", drawTempleRun, { once: true });
  els.arcadeOpenFrogDash?.addEventListener("click", (event) => {
    blurArcadeControl(event.currentTarget);
    setArcadeScreen("game");
  });
  els.arcadeOpenTempleRun?.addEventListener("click", (event) => {
    blurArcadeControl(event.currentTarget);
    setArcadeScreen("temple");
  });
  els.arcadeBackToLobby?.addEventListener("click", (event) => {
    blurArcadeControl(event.currentTarget);
    setArcadeScreen("lobby");
  });
  els.templeBackToLobby?.addEventListener("click", (event) => {
    blurArcadeControl(event.currentTarget);
    setArcadeScreen("lobby");
  });
  els.templeRunStart?.addEventListener("click", (event) => {
    blurArcadeControl(event.currentTarget);
    startTempleRun();
  });
  els.arcadeStart?.addEventListener("click", (event) => {
    blurArcadeControl(event.currentTarget);
    startArcade(defaultArcadeMode());
  });
  els.arcadeConnectWallet?.addEventListener("click", async (event) => {
    blurArcadeControl(event.currentTarget);
    await connectArcadeWallet();
  });
  els.arcadeWalletRun?.addEventListener("click", async (event) => {
    blurArcadeControl(event.currentTarget);
    if (await ensureArcadeWallet()) startArcade("wallet");
  });
  els.arcadeHolderRun?.addEventListener("click", async (event) => {
    blurArcadeControl(event.currentTarget);
    if (!arcade.walletAddress && !(await ensureArcadeWallet())) return;
    if (!arcade.isHolder) await verifyArcadeHolder();
    if (arcade.isHolder) startArcade("holder");
  });
  arcadeBoardButtons.forEach((button) => {
    button.addEventListener("click", () => {
      arcade.leaderboardMode = button.dataset.arcadeBoard === "all" ? "all" : "24h";
      arcade.leaderboardPage = 0;
      renderArcadeStats();
    });
  });
  arcadePageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      arcade.leaderboardPage += button.dataset.arcadePage === "next" ? 1 : -1;
      renderArcadeStats();
    });
  });
  els.arcadeCanvas?.addEventListener("pointerdown", arcadeJumpStart);
  els.arcadeCanvas?.addEventListener("pointerup", arcadeJumpEnd);
  els.arcadeCanvas?.addEventListener("pointercancel", arcadeJumpEnd);
  els.arcadeCanvas?.addEventListener("pointerleave", arcadeJumpEnd);
  els.templeRunCanvas?.addEventListener("pointerdown", templePointerDown);
  els.templeRunCanvas?.addEventListener("pointerup", templePointerEnd);
  els.templeRunCanvas?.addEventListener("pointercancel", templePointerCancel);
  els.templeRunCanvas?.addEventListener("pointerleave", templePointerCancel);

  window.addEventListener("keydown", (event) => {
    if (!isArcadeVisible() || isTypingTarget(event.target)) return;
    if (!isArcadeControlKey(event)) return;
    if (event.cancelable) event.preventDefault();
    if (!event.repeat) arcadeJumpStart(event);
  });
  window.addEventListener("keyup", (event) => {
    if (!isArcadeVisible() || isTypingTarget(event.target)) return;
    if (!isArcadeControlKey(event)) return;
    if (event.cancelable) event.preventDefault();
    arcadeJumpEnd();
  });
  window.addEventListener("keydown", (event) => {
    if (!isTempleRunVisible() || isTypingTarget(event.target)) return;
    if (!handleTempleRunKey(event)) return;
    if (event.cancelable) event.preventDefault();
  });
}

async function loadCsv() {
  try {
    const response = await fetch(CSV_FILE);
    if (!response.ok) throw new Error("Could not load CSV");

    state.rows = parseCsv(await response.text());
    state.transfers = state.rows.filter((row) => row.From && row.Flow === "in" && row.To === TARGET_WALLET);
    state.wallets = buildWallets(state.transfers);
    render();
    renderWhitelist();
  } catch (error) {
    els.emptyState.hidden = false;
    els.emptyState.textContent = error.message;
    els.whitelistEmptyState.hidden = false;
    els.whitelistEmptyState.textContent = error.message;
  }
}

els.searchInput.addEventListener("input", () => {
  resetPointsLimit();
  render();
});
els.sortSelect.addEventListener("change", () => {
  state.sort = els.sortSelect.value;
  resetPointsLimit();
  render();
});

els.walletLoadMore?.addEventListener("click", () => {
  state.pointsVisibleCount += LIST_PAGE_SIZE;
  render();
});

els.whitelistSearchInput?.addEventListener("input", () => {
  resetWhitelistLimit();
  renderWhitelist();
});

els.whitelistLoadMore?.addEventListener("click", () => {
  state.whitelistVisibleCount += LIST_PAGE_SIZE;
  renderWhitelist();
});

phaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setWhitelistPhase(button.dataset.phase);
  });
});

els.miningRefresh?.addEventListener("click", () => {
  const frogNumber = els.miningFrogSearch?.value.trim() || "";
  loadMiningState(frogNumber);
});
els.miningBlocksPrev?.addEventListener("click", () => moveMiningBlockPage("prev"));
els.miningBlocksNext?.addEventListener("click", () => moveMiningBlockPage("next"));

els.miningSoundToggle?.addEventListener("click", () => {
  mining.sound = !mining.sound;
  els.miningSoundToggle.textContent = mining.sound ? "Sound On" : "Sound Off";
  els.miningSoundToggle.setAttribute("aria-pressed", String(mining.sound));
});

els.miningFrogForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const frogNumber = Math.max(1, Math.min(3333, Math.round(Number(els.miningFrogSearch?.value || 0))));
  if (!frogNumber) return;
  loadMiningState(String(frogNumber));
});

document.addEventListener("click", (event) => {
  const distributionButton = event.target.closest("[data-mining-mark-distributed]");
  if (distributionButton) {
    markMiningRewardDistributed(distributionButton);
    return;
  }

  const proofButton = event.target.closest("[data-mining-copy-hash]");
  if (!proofButton) return;
  copyMiningProofHash(proofButton);
});

els.miningAdminConnect?.addEventListener("click", connectMiningAdminWallet);
els.miningAdminPause?.addEventListener("click", () => runMiningAdminAction("pauseMining"));
els.miningAdminResume?.addEventListener("click", () => runMiningAdminAction("resumeMining"));
els.miningAdminMineDue?.addEventListener("click", () => runMiningAdminAction("mineDue", { limit: 8 }));
els.miningAdminSyncHolders?.addEventListener("click", () => runMiningAdminAction("syncHolderSnapshot"));
els.miningAdminExportPayouts?.addEventListener("click", downloadMiningPayouts);
els.miningPreviewImport?.addEventListener("click", () =>
  runMiningAdminAction("previewOwnership", {
    content: els.miningOwnershipContent?.value || "",
    filename: els.miningOwnershipFilename?.value || "ownership.csv",
    format: (els.miningOwnershipFilename?.value || "ownership.csv").toLowerCase().endsWith(".json") ? "json" : "csv",
  }),
);
els.miningOwnershipForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  runMiningAdminAction("importOwnership", {
    content: els.miningOwnershipContent?.value || "",
    filename: els.miningOwnershipFilename?.value || "ownership.csv",
    format: (els.miningOwnershipFilename?.value || "ownership.csv").toLowerCase().endsWith(".json") ? "json" : "csv",
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveTab(button.dataset.tabTarget);
  });
});

tabLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveTab(link.dataset.tabLink);
  });
});

els.prevCharacter?.addEventListener("click", () => {
  setCharacter(state.characterIndex - 1);
});

els.nextCharacter?.addEventListener("click", () => {
  setCharacter(state.characterIndex + 1);
});

els.characterStrip?.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  const button = target?.closest("[data-character-index]");
  if (!button) return;
  setCharacter(Number(button.dataset.characterIndex));
});

window.addEventListener("hashchange", () => {
  setActiveTab(tabFromHash(), false);
});

renderCharacterStrip();
setCharacter(0, false);
updateMiningAdminGate();
initializeArcade();
setWhitelistPhase("phase1");
setActiveTab(tabFromHash(), false);
loadCsv();
