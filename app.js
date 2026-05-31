const patterns = [
  {
    id: "hammer",
    name: "锤子线",
    english: "Hammer",
    category: "单根 K 线",
    bias: "偏多",
    scene: "下跌趋势末端或阶段性支撑附近",
    summary: "锤子线说明盘中曾被大幅打压，但收盘前买盘重新夺回主动权。它本身是底部警示，不是单独的买入指令。",
    tags: ["底部警示", "长下影线", "需要确认"],
    candles: [
      { label: "锤子线", open: 103, close: 108, high: 110, low: 72 },
    ],
    details: {
      "图形构成": "实体较小，位于全天价格区间上方；下影线通常至少为实体的 2 倍；上影线很短或没有。",
      "市场含义": "空方盘中继续压低价格，但低位承接增强，收盘重新靠近高位，说明卖压可能开始衰竭。",
      "确认条件": "下一根 K 线继续收高，或放量站上锤子线实体上沿；若同时靠近重要支撑，可信度更高。",
      "失效条件": "随后跌破锤子线最低价，说明低位承接失败，原下跌趋势可能继续。",
      "学习备注": "锤子线必须放在下跌背景中看；在上涨过程中出现，含义会明显变化。",
      "A 股案例": "预留：后续记录股票代码、出现日期、当时趋势和之后 3/5/10 个交易日表现。",
    },
    compare: [
      "与上吊线形状相似，核心区别是出现位置：锤子线在下跌后，上吊线在上涨后。",
      "阳线锤子线更直观，但阴线锤子线也可以成立，关键是下影线和位置。",
    ],
  },
  {
    id: "hanging-man",
    name: "上吊线",
    english: "Hanging Man",
    category: "单根 K 线",
    bias: "偏空",
    scene: "上涨趋势末端或阶段性压力附近",
    summary: "上吊线表示上涨后盘中出现明显抛压，虽然收盘可能被拉回，但多方稳定性已经受到考验。",
    tags: ["顶部警示", "长下影线", "需要确认"],
    candles: [
      { label: "上吊线", open: 108, close: 104, high: 110, low: 72 },
    ],
    details: {
      "图形构成": "小实体位于价格区间上方，下影线很长，上影线很短或没有；颜色不是决定因素。",
      "市场含义": "高位出现剧烈下探，说明已有资金愿意在上涨后卖出，市场开始测试多方承接。",
      "确认条件": "下一根 K 线低开低走，或收盘跌破上吊线实体下沿；压力位附近出现更值得重视。",
      "失效条件": "随后放量突破上吊线最高价，说明卖压被吸收，上涨趋势可能延续。",
      "学习备注": "不要因为它长得像锤子线就直接看多，位置决定含义。",
      "A 股案例": "预留：后续补充上涨末端出现后是否引发调整的真实样本。",
    },
    compare: [
      "与锤子线的形状几乎一样，但锤子线看底部，上吊线看顶部。",
      "单独一根上吊线只是警示，确认阴线比形态本身更重要。",
    ],
  },
  {
    id: "inverted-hammer",
    name: "倒锤子线",
    english: "Inverted Hammer",
    category: "单根 K 线",
    bias: "偏多",
    scene: "下跌趋势末端，尤其是连续杀跌后的低位区域",
    summary: "倒锤子线显示多方曾尝试向上反攻，但收盘未能完全守住成果。它提示反弹意愿出现，需要后续确认。",
    tags: ["底部试探", "长上影线", "等待确认"],
    candles: [
      { label: "倒锤子线", open: 82, close: 86, high: 118, low: 80 },
    ],
    details: {
      "图形构成": "实体较小，位于价格区间下方；上影线较长；下影线很短或没有。",
      "市场含义": "多方在低位发动上攻，虽然收盘回落，但向上的试探已经出现，空方控制力可能下降。",
      "确认条件": "下一根 K 线向上收高，最好突破倒锤子线上影线的一部分或收复实体上沿。",
      "失效条件": "随后继续跌破倒锤子线最低价，说明反攻失败。",
      "学习备注": "倒锤子线的确认要求通常比锤子线更高，因为长上影也说明上方卖压明显。",
      "A 股案例": "预留：后续补充连续下跌后的反弹试探案例。",
    },
    compare: [
      "与流星线形状相似，倒锤子线出现在下跌后，流星线出现在上涨后。",
      "长上影不能简单理解为利空，必须结合趋势背景。",
    ],
  },
  {
    id: "shooting-star",
    name: "流星线",
    english: "Shooting Star",
    category: "单根 K 线",
    bias: "偏空",
    scene: "上涨趋势末端、加速上涨后或压力位附近",
    summary: "流星线说明多方盘中冲高失败，收盘重新回落，常作为顶部警示信号观察。",
    tags: ["顶部警示", "冲高回落", "压力确认"],
    candles: [
      { label: "流星线", open: 108, close: 104, high: 138, low: 102 },
    ],
    details: {
      "图形构成": "小实体位于价格区间下方，上影线较长，下影线很短或没有。",
      "市场含义": "价格冲高后遇到明显卖压，追高资金被套，多方推进能力减弱。",
      "确认条件": "下一根 K 线低开或收阴，跌破流星线实体下沿；若伴随放量冲高回落，警示更强。",
      "失效条件": "随后有效突破流星线最高价，说明压力被消化。",
      "学习备注": "流星线不是看到长上影就卖出，而是要看它是否出现在已经上涨后的敏感位置。",
      "A 股案例": "预留：后续补充高位冲高回落后调整的 A 股样本。",
    },
    compare: [
      "与倒锤子线形状相似，核心区别仍然是出现位置。",
      "普通长上影线不一定是流星线，实体位置和趋势背景都要满足。",
    ],
  },
  {
    id: "bullish-engulfing",
    name: "看涨吞没",
    english: "Bullish Engulfing",
    category: "双根 K 线",
    bias: "偏多",
    scene: "下跌趋势末端、回调低位或重要支撑附近",
    summary: "看涨吞没由后一根阳线完全吞没前一根阴线实体，表示买盘反击力度明显增强。",
    tags: ["底部反转", "双根组合", "强反击"],
    candles: [
      { label: "前阴", open: 108, close: 95, high: 111, low: 92 },
      { label: "后阳", open: 92, close: 114, high: 117, low: 90 },
    ],
    details: {
      "图形构成": "第一根为阴线，第二根为阳线；第二根实体覆盖第一根实体，最好伴随更大的成交量。",
      "市场含义": "空方延续下跌后被多方快速反制，前一日卖压被后一日买盘吸收。",
      "确认条件": "第二根阳线收盘后已经有初步确认；若随后继续站上吞没阳线高点，可靠性提高。",
      "失效条件": "随后跌回吞没阳线实体内部并跌破其低点，说明反转失败。",
      "学习备注": "吞没的是实体，不一定要求吞没上下影线；但吞没范围越充分，信号越清晰。",
      "A 股案例": "预留：后续记录低位放量阳包阴案例。",
    },
    compare: [
      "与刺透形态相比，看涨吞没的第二根阳线反击更彻底。",
      "横盘中频繁出现的小吞没意义较弱，需要趋势背景配合。",
    ],
  },
  {
    id: "bearish-engulfing",
    name: "看跌吞没",
    english: "Bearish Engulfing",
    category: "双根 K 线",
    bias: "偏空",
    scene: "上涨趋势末端、反弹高位或重要压力附近",
    summary: "看跌吞没由后一根阴线完全吞没前一根阳线实体，说明卖盘突然取得优势。",
    tags: ["顶部反转", "双根组合", "强抛压"],
    candles: [
      { label: "前阳", open: 95, close: 108, high: 111, low: 92 },
      { label: "后阴", open: 112, close: 90, high: 114, low: 88 },
    ],
    details: {
      "图形构成": "第一根为阳线，第二根为阴线；第二根实体覆盖第一根实体，出现在上涨后更有意义。",
      "市场含义": "多方推进被空方反手压制，前一日买盘被后一日卖盘完全覆盖。",
      "确认条件": "随后继续收低，或跌破吞没阴线低点；压力位附近、放量下跌时警示增强。",
      "失效条件": "随后重新站上吞没阴线高点，说明卖压被化解。",
      "学习备注": "在上涨初期出现的看跌吞没未必可靠，容易只是短线换手。",
      "A 股案例": "预留：后续记录高位阴包阳后的调整案例。",
    },
    compare: [
      "与乌云盖顶相比，看跌吞没的第二根阴线覆盖更充分。",
      "高位放量阴包阳需要特别留意，但仍要结合趋势级别。",
    ],
  },
  {
    id: "piercing-pattern",
    name: "刺透形态",
    english: "Piercing Pattern",
    category: "双根 K 线",
    bias: "偏多",
    scene: "下跌趋势末端或阶段性低位",
    summary: "刺透形态是下跌后第二根阳线深入前一根阴线实体内部，说明多方开始有效反击。",
    tags: ["底部反转", "双根组合", "反击未完全吞没"],
    candles: [
      { label: "长阴", open: 116, close: 92, high: 118, low: 90 },
      { label: "刺透阳", open: 88, close: 106, high: 108, low: 86 },
    ],
    details: {
      "图形构成": "第一根为较长阴线；第二根低开后收成阳线，收盘价深入第一根阴线实体一半以上。",
      "市场含义": "空方低开延续杀跌，但多方在低位承接并推回到前一日实体中部以上。",
      "确认条件": "第二根阳线收盘越接近前阴开盘价越强；随后继续收高可进一步确认。",
      "失效条件": "随后跌破第二根阳线低点，说明低开后的反击失败。",
      "学习备注": "刺透形态低开特征很重要；如果只是普通阳线反弹，含义会弱一些。",
      "A 股案例": "预留：A 股存在涨跌停和集合竞价影响，后续案例需注明是否有跳空。",
    },
    compare: [
      "与看涨吞没相比，刺透形态没有完全覆盖前一根阴线实体。",
      "若第二根阳线只收回前阴实体一小部分，不能算标准刺透。",
    ],
  },
  {
    id: "dark-cloud-cover",
    name: "乌云盖顶",
    english: "Dark Cloud Cover",
    category: "双根 K 线",
    bias: "偏空",
    scene: "上涨趋势末端或阶段性高位",
    summary: "乌云盖顶是上涨后第二根阴线深入前一根阳线实体内部，提示冲高后的卖压转强。",
    tags: ["顶部反转", "双根组合", "冲高转弱"],
    candles: [
      { label: "长阳", open: 92, close: 116, high: 118, low: 90 },
      { label: "盖顶阴", open: 120, close: 102, high: 122, low: 100 },
    ],
    details: {
      "图形构成": "第一根为较长阳线；第二根高开后收成阴线，收盘价深入第一根阳线实体一半以下。",
      "市场含义": "多方高开延续乐观情绪，但盘中被卖盘压回，说明高位承接开始不足。",
      "确认条件": "第二根阴线收盘越接近前阳开盘价越强；随后继续收低或跌破前阳中点更可靠。",
      "失效条件": "随后重新突破第二根阴线高点，说明高位卖压被消化。",
      "学习备注": "乌云盖顶不一定立刻大跌，但它提醒上涨趋势已经出现质量问题。",
      "A 股案例": "预留：后续补充高开低走且后续回落的真实案例。",
    },
    compare: [
      "与看跌吞没相比，乌云盖顶没有完全吞没前一根阳线实体。",
      "如果第二根阴线没有跌入前阳实体一半以下，警示力度不足。",
    ],
  },
  {
    id: "morning-star",
    name: "早晨之星",
    english: "Morning Star",
    category: "三根组合",
    bias: "偏多",
    scene: "下跌趋势末端，尤其是恐慌下跌后",
    summary: "早晨之星由长阴、小实体星线和长阳组成，表达从空方主导到多方接管的过程。",
    tags: ["底部反转", "三根组合", "情绪转折"],
    candles: [
      { label: "长阴", open: 118, close: 92, high: 120, low: 90 },
      { label: "星线", open: 88, close: 90, high: 94, low: 84 },
      { label: "长阳", open: 93, close: 116, high: 118, low: 91 },
    ],
    details: {
      "图形构成": "第一根长阴延续下跌；第二根小实体显示犹豫；第三根长阳明显收复第一根阴线实体。",
      "市场含义": "市场从单边下跌进入犹豫，再由多方强力反击，情绪发生阶段性转折。",
      "确认条件": "第三根阳线收盘深入第一根阴线实体，越接近或超过第一根开盘价越强。",
      "失效条件": "随后跌破星线低点，说明底部转折失败。",
      "学习备注": "星线可以是十字线或小实体；是否跳空要结合市场制度和个股流动性看。",
      "A 股案例": "预留：后续记录大跌后缩量犹豫再放量反包的案例。",
    },
    compare: [
      "与早晨十字星相比，早晨之星的中间 K 线不一定是十字线。",
      "第三根阳线是关键，没有强阳确认就只是下跌中的停顿。",
    ],
  },
  {
    id: "evening-star",
    name: "黄昏之星",
    english: "Evening Star",
    category: "三根组合",
    bias: "偏空",
    scene: "上涨趋势末端，尤其是加速上涨后",
    summary: "黄昏之星由长阳、小实体星线和长阴组成，表达从多方主导到空方接管的过程。",
    tags: ["顶部反转", "三根组合", "情绪转折"],
    candles: [
      { label: "长阳", open: 90, close: 116, high: 118, low: 88 },
      { label: "星线", open: 121, close: 119, high: 125, low: 116 },
      { label: "长阴", open: 115, close: 92, high: 117, low: 90 },
    ],
    details: {
      "图形构成": "第一根长阳延续上涨；第二根小实体显示上涨迟疑；第三根长阴明显打入第一根阳线实体。",
      "市场含义": "上涨热情先达到高潮，随后动能减弱，最后空方用长阴确认高位转弱。",
      "确认条件": "第三根阴线收盘深入第一根阳线实体，越接近或跌破第一根开盘价越强。",
      "失效条件": "随后突破星线高点，说明顶部压力被重新消化。",
      "学习备注": "黄昏之星常见于短期情绪过热后，但不能脱离大周期趋势判断。",
      "A 股案例": "预留：后续补充高位加速后转弱样本。",
    },
    compare: [
      "与黄昏十字星相比，中间 K 线不一定是十字线。",
      "第三根阴线越强，形态越完整；没有第三根确认时不要提前定性。",
    ],
  },
  {
    id: "doji",
    name: "十字线",
    english: "Doji",
    category: "单根 K 线",
    bias: "中性",
    scene: "趋势途中、支撑压力位、突破前后都可能出现",
    summary: "十字线表示开盘价与收盘价接近，市场暂时缺乏明确方向。它是犹豫信号，方向要由位置和后续 K 线决定。",
    tags: ["犹豫", "方向待定", "位置决定含义"],
    candles: [
      { label: "十字线", open: 101, close: 101.5, high: 122, low: 82 },
    ],
    details: {
      "图形构成": "开盘价和收盘价非常接近，实体极小；上下影线长度可以不同。",
      "市场含义": "多空双方拉锯后收盘回到接近平衡的位置，说明当前方向暂时无法延续。",
      "确认条件": "在上涨末端后收阴，偏顶部警示；在下跌末端后收阳，偏底部警示。",
      "失效条件": "若后续沿原趋势继续放量推进，十字线只代表短暂停顿。",
      "学习备注": "十字线出现频率高，不能单独使用；越是在关键位置出现，越值得记录。",
      "A 股案例": "预留：后续分别记录顶部十字线和底部十字线案例。",
    },
    compare: [
      "与星线不同，十字线强调开收盘接近；星线强调小实体和位置关系。",
      "长腿十字、墓碑十字、蜻蜓十字含义不同，后续可以拆成单独卡片。",
    ],
  },
  {
    id: "harami",
    name: "孕线形态",
    english: "Harami",
    category: "双根 K 线",
    bias: "中性",
    scene: "上涨或下跌趋势后，常作为动能减弱的警示",
    summary: "孕线由大实体后接小实体组成，后者被前者实体包住，表示原趋势推进开始收缩。",
    tags: ["动能收缩", "双根组合", "等待突破"],
    candles: [
      { label: "母线", open: 118, close: 92, high: 120, low: 90 },
      { label: "孕线", open: 98, close: 106, high: 108, low: 96 },
    ],
    details: {
      "图形构成": "第一根为较大实体；第二根实体较小，并被第一根实体包在内部。方向可看涨也可看跌。",
      "市场含义": "原趋势突然收缩，市场从单边推进转为犹豫，可能进入反转或整理。",
      "确认条件": "向上突破母线高点偏多；向下跌破母线低点偏空；在关键位置出现更有参考价值。",
      "失效条件": "若随后继续沿原趋势突破并放量，孕线只代表短暂停顿。",
      "学习备注": "孕线不是强反转信号，强度通常弱于吞没形态，重点是观察突破方向。",
      "A 股案例": "预留：后续记录上涨孕线和下跌孕线各一类案例。",
    },
    compare: [
      "与吞没形态方向相反：吞没是第二根包住第一根，孕线是第二根被第一根包住。",
      "十字孕线比普通小实体孕线更能体现犹豫，但仍需要后续确认。",
    ],
  },
  {
    id: "bottom-fractal",
    name: "底分型",
    english: "Bottom Fractal",
    category: "分型结构",
    bias: "偏多",
    scene: "下跌或回调过程中，常用于识别阶段性低点",
    summary: "底分型由三根 K 线组成，中间一根的低点低于左右两根，常用于观察下跌动能是否开始收敛。",
    tags: ["阶段低点", "三根组合", "缠论常用"],
    candles: [
      { label: "左侧", open: 112, close: 100, high: 116, low: 96 },
      { label: "中间低点", open: 99, close: 94, high: 104, low: 82 },
      { label: "右侧确认", open: 96, close: 108, high: 112, low: 94 },
    ],
    details: {
      "图形构成": "三根 K 线中，中间 K 线的低点低于左右两根低点；更严格的用法还会看高点关系和包含关系处理。",
      "市场含义": "价格向下试探后没有继续创出更低的有效低点，说明阶段性卖压可能减弱。",
      "确认条件": "右侧 K 线出现后才能确认底分型；若随后突破右侧 K 线高点，底部意义更强。",
      "失效条件": "确认后很快跌破中间 K 线低点，说明底分型失败，下跌延续。",
      "学习备注": "底分型不是买点本身，更像是观察低点结构的基础零件，需要结合趋势、级别和背驰。",
      "A 股案例": "预留：后续记录回调末端出现底分型并向上突破的案例。",
    },
    compare: [
      "与锤子线不同，底分型强调三根 K 线之间的高低点结构。",
      "底分型在小级别图上很多，级别越小噪音越多。",
    ],
  },
  {
    id: "top-fractal",
    name: "顶分型",
    english: "Top Fractal",
    category: "分型结构",
    bias: "偏空",
    scene: "上涨或反弹过程中，常用于识别阶段性高点",
    summary: "顶分型由三根 K 线组成，中间一根的高点高于左右两根，提示上涨动能可能开始停顿。",
    tags: ["阶段高点", "三根组合", "缠论常用"],
    candles: [
      { label: "左侧", open: 92, close: 106, high: 110, low: 90 },
      { label: "中间高点", open: 108, close: 114, high: 126, low: 104 },
      { label: "右侧确认", open: 112, close: 100, high: 116, low: 96 },
    ],
    details: {
      "图形构成": "三根 K 线中，中间 K 线的高点高于左右两根高点；实战中还需处理包含关系。",
      "市场含义": "价格向上试探后无法继续抬高高点，说明追涨力量可能减弱。",
      "确认条件": "右侧 K 线出现后才能确认顶分型；若随后跌破右侧 K 线低点，顶部意义更强。",
      "失效条件": "确认后重新突破中间 K 线高点，说明顶部结构被破坏。",
      "学习备注": "顶分型用于识别结构转折，但不能脱离大级别趋势；强趋势中可能连续失效。",
      "A 股案例": "预留：后续记录上涨末端出现顶分型并回落的案例。",
    },
    compare: [
      "与流星线不同，顶分型不要求单根 K 线有长上影，而是看三根 K 线的相对位置。",
      "顶分型和底分型经常成对用于划分笔或波段。",
    ],
  },
  {
    id: "island-reversal",
    name: "岛形反转",
    english: "Island Reversal",
    category: "窗口/跳空",
    bias: "中性",
    scene: "上涨末端或下跌末端，出现连续跳空隔离出一段价格区域",
    summary: "岛形反转由一个跳空进入和一个反向跳空离开组成，中间 K 线像孤岛一样被隔开，常提示情绪急剧反转。",
    tags: ["跳空", "情绪反转", "强警示"],
    candles: [
      { label: "原趋势", open: 95, close: 106, high: 108, low: 92 },
      { label: "跳空进入", open: 116, close: 122, high: 126, low: 114 },
      { label: "孤岛区域", open: 121, close: 118, high: 124, low: 116 },
      { label: "反向跳空", open: 106, close: 98, high: 108, low: 94 },
    ],
    details: {
      "图形构成": "先沿原趋势跳空，形成孤立价格区；随后反方向跳空离开，中间区域与两侧价格有明显缺口。",
      "市场含义": "原趋势的情绪高潮被突然反向定价打断，被困在孤岛区域的资金容易形成后续压力或支撑。",
      "确认条件": "反向跳空后不快速回补缺口，且后续沿新方向推进，形态更可靠。",
      "失效条件": "反向跳空很快被回补，并重新回到孤岛区域，说明反转力度不足。",
      "学习备注": "A 股涨跌停制度会放大跳空和缺口现象，判断时要注意是否由一字板或消息驱动造成。",
      "A 股案例": "预留：后续记录顶部岛形和底部岛形各一类案例。",
    },
    compare: [
      "与普通窗口不同，岛形反转必须有进入缺口和离开缺口。",
      "它可以看多也可以看空，方向取决于原趋势和反向跳空方向。",
    ],
  },
  {
    id: "rising-window",
    name: "上升窗口",
    english: "Rising Window",
    category: "窗口/跳空",
    bias: "偏多",
    scene: "上涨趋势或突破过程中",
    summary: "上升窗口指后一段价格整体跳到前一段价格上方，缺口区域常被视为后续支撑。",
    tags: ["跳空", "支撑", "持续形态"],
    candles: [
      { label: "跳空前", open: 92, close: 100, high: 103, low: 90 },
      { label: "窗口后", open: 112, close: 120, high: 122, low: 110 },
    ],
    details: {
      "图形构成": "后一根 K 线最低价高于前一根 K 线最高价，中间留下未成交价格区域。",
      "市场含义": "买盘愿意用更高价格成交，说明需求强于供给，缺口区域可能成为支撑。",
      "确认条件": "后续回踩窗口上沿或缺口区域不被完全回补，并再次向上。",
      "失效条件": "窗口被快速完全回补，尤其是放量跌回缺口下方，持续意义减弱。",
      "学习备注": "窗口越出现在关键突破位，参考价值越高；普通小缺口不要过度解读。",
      "A 股案例": "预留：记录突破平台后的上升窗口案例。",
    },
    compare: [
      "与岛形反转不同，上升窗口只有一个跳空，主要看持续和支撑。",
      "缺口支撑不是绝对支撑，回补速度和成交量很重要。",
    ],
  },
  {
    id: "falling-window",
    name: "下降窗口",
    english: "Falling Window",
    category: "窗口/跳空",
    bias: "偏空",
    scene: "下跌趋势或跌破支撑过程中",
    summary: "下降窗口指后一段价格整体跳到前一段价格下方，缺口区域常成为后续压力。",
    tags: ["跳空", "压力", "持续形态"],
    candles: [
      { label: "跳空前", open: 120, close: 112, high: 122, low: 110 },
      { label: "窗口后", open: 100, close: 92, high: 102, low: 90 },
    ],
    details: {
      "图形构成": "后一根 K 线最高价低于前一根 K 线最低价，中间留下未成交价格区域。",
      "市场含义": "卖盘愿意用更低价格成交，说明供给压过需求，缺口区域可能转为压力。",
      "确认条件": "后续反抽窗口下沿或缺口区域受阻，并继续向下。",
      "失效条件": "窗口被快速完全回补，尤其是放量站回缺口上方，下跌持续意义减弱。",
      "学习备注": "下跌窗口在消息冲击或破位时更常见，要结合位置判断是否已经过度恐慌。",
      "A 股案例": "预留：记录跌破平台后的下降窗口案例。",
    },
    compare: [
      "与乌云盖顶不同，下降窗口强调价格缺口，而不是两根实体的覆盖关系。",
      "窗口越大，情绪越强，但也越容易出现技术性反抽。",
    ],
  },
  {
    id: "three-white-soldiers",
    name: "三白兵",
    english: "Three White Soldiers",
    category: "三根组合",
    bias: "偏多",
    scene: "底部反转初期或整理区间向上突破后",
    summary: "三白兵由三根连续上升的阳线组成，显示多方持续推进，常作为强势反转或持续信号。",
    tags: ["连续阳线", "多方推进", "强势"],
    candles: [
      { label: "第一兵", open: 90, close: 102, high: 104, low: 88 },
      { label: "第二兵", open: 100, close: 112, high: 114, low: 98 },
      { label: "第三兵", open: 110, close: 122, high: 124, low: 108 },
    ],
    details: {
      "图形构成": "连续三根阳线，收盘价逐步抬高，实体较长，通常每根开盘在前一根实体内部或附近。",
      "市场含义": "多方连续三天取得主动，说明上涨不是单日脉冲，而是持续买盘推动。",
      "确认条件": "出现在底部或突破位更有意义；成交量温和放大优于极端放量。",
      "失效条件": "第三根后立即出现长阴吞没或跌回第一根阳线内部，说明追高力量不足。",
      "学习备注": "高位出现过长的三白兵可能反而代表短线过热，不能机械看多。",
      "A 股案例": "预留：记录低位三连阳突破案例。",
    },
    compare: [
      "与普通三连阳相比，三白兵要求实体质量和收盘价推进更清晰。",
      "如果上影线越来越长，要警惕推进过程中卖压增强。",
    ],
  },
  {
    id: "three-black-crows",
    name: "三只乌鸦",
    english: "Three Black Crows",
    category: "三根组合",
    bias: "偏空",
    scene: "顶部反转初期或整理区间向下跌破后",
    summary: "三只乌鸦由三根连续下跌的阴线组成，显示空方持续压制，常作为弱势反转或持续信号。",
    tags: ["连续阴线", "空方压制", "弱势"],
    candles: [
      { label: "第一鸦", open: 122, close: 110, high: 124, low: 108 },
      { label: "第二鸦", open: 112, close: 100, high: 114, low: 98 },
      { label: "第三鸦", open: 102, close: 90, high: 104, low: 88 },
    ],
    details: {
      "图形构成": "连续三根阴线，收盘价逐步降低，实体较长，通常每根开盘在前一根实体内部或附近。",
      "市场含义": "空方连续压低价格，反弹承接不足，市场情绪由乐观转向谨慎或恐慌。",
      "确认条件": "出现在高位或跌破支撑后更值得重视；若伴随放量下跌，警示增强。",
      "失效条件": "随后快速出现大阳线收复第三根甚至第二根阴线，说明下跌未获得延续。",
      "学习备注": "低位连续阴线可能是恐慌释放，不能只凭三根阴线追空。",
      "A 股案例": "预留：记录高位三连阴破位案例。",
    },
    compare: [
      "与普通三连阴相比，三只乌鸦强调连续收低和实体压制。",
      "如果第三根出现长下影，说明低位承接开始增强，警示力度会下降。",
    ],
  },
  {
    id: "rising-three-methods",
    name: "上升三法",
    english: "Rising Three Methods",
    category: "持续形态",
    bias: "偏多",
    scene: "已有上涨趋势中的短暂停顿",
    summary: "上升三法由长阳、数根小幅回调 K 线和再次长阳组成，表示上涨趋势中的整理后延续。",
    tags: ["趋势延续", "整理", "多方控盘"],
    candles: [
      { label: "长阳", open: 90, close: 116, high: 118, low: 88 },
      { label: "小回调", open: 114, close: 108, high: 115, low: 106 },
      { label: "小回调", open: 109, close: 104, high: 110, low: 102 },
      { label: "小回调", open: 105, close: 108, high: 110, low: 103 },
      { label: "再长阳", open: 109, close: 124, high: 126, low: 108 },
    ],
    details: {
      "图形构成": "先有一根长阳，随后几根小实体回调不跌破长阳低点，最后一根长阳向上突破整理区。",
      "市场含义": "上涨后出现获利回吐，但回调幅度受控，最后多方再次发力。",
      "确认条件": "最后一根长阳突破第一根长阳高点或整理区高点，形态确认。",
      "失效条件": "整理 K 线跌破第一根长阳低点，说明趋势延续结构被破坏。",
      "学习备注": "核心不是固定三根小 K 线，而是强势上涨后的受控整理与再突破。",
      "A 股案例": "预留：记录趋势股上涨中继案例。",
    },
    compare: [
      "与孕线不同，上升三法强调趋势延续而不是反转警示。",
      "如果整理阶段成交量明显放大且跌破关键位置，就不再是健康整理。",
    ],
  },
  {
    id: "falling-three-methods",
    name: "下降三法",
    english: "Falling Three Methods",
    category: "持续形态",
    bias: "偏空",
    scene: "已有下跌趋势中的短暂停顿",
    summary: "下降三法由长阴、数根小幅反弹 K 线和再次长阴组成，表示下跌趋势中的整理后延续。",
    tags: ["趋势延续", "整理", "空方控盘"],
    candles: [
      { label: "长阴", open: 124, close: 98, high: 126, low: 96 },
      { label: "小反弹", open: 100, close: 106, high: 108, low: 99 },
      { label: "小反弹", open: 105, close: 110, high: 112, low: 104 },
      { label: "小反弹", open: 109, close: 106, high: 111, low: 104 },
      { label: "再长阴", open: 105, close: 90, high: 106, low: 88 },
    ],
    details: {
      "图形构成": "先有一根长阴，随后几根小实体反弹不突破长阴高点，最后一根长阴向下跌破整理区。",
      "市场含义": "下跌后出现短线修复，但反弹力度受限，最后空方再次压制。",
      "确认条件": "最后一根长阴跌破第一根长阴低点或整理区低点，形态确认。",
      "失效条件": "整理 K 线突破第一根长阴高点，说明下跌延续结构被破坏。",
      "学习备注": "下降三法常用于识别下跌中继，不能把弱反弹误认为底部反转。",
      "A 股案例": "预留：记录破位后弱反弹再下跌案例。",
    },
    compare: [
      "与刺透形态不同，下降三法中的反弹不应强到改变下跌结构。",
      "若最后长阴没有跌破整理区，形态还没有完成。",
    ],
  },
  {
    id: "gravestone-doji",
    name: "墓碑十字线",
    english: "Gravestone Doji",
    category: "单根 K 线",
    bias: "偏空",
    scene: "上涨末端或压力位附近更有参考价值",
    summary: "墓碑十字线开收盘接近低位，上影线很长，表示冲高失败后卖压重新占优。",
    tags: ["长上影", "十字线", "顶部警示"],
    candles: [
      { label: "墓碑十字", open: 92, close: 92.5, high: 128, low: 90 },
    ],
    details: {
      "图形构成": "开盘价和收盘价接近，且靠近最低价；上影线很长，下影线很短或没有。",
      "市场含义": "多方盘中大幅拉升，但收盘几乎回到起点，说明上方卖压强。",
      "确认条件": "下一根 K 线收阴或跌破墓碑十字低点，顶部警示更明确。",
      "失效条件": "随后有效突破墓碑十字最高价，说明冲高压力被消化。",
      "学习备注": "低位出现墓碑十字未必看空，可能只是反弹试探失败，必须看位置。",
      "A 股案例": "预留：记录压力位冲高失败案例。",
    },
    compare: [
      "与流星线相比，墓碑十字线实体更小，开收盘更接近。",
      "与普通十字线相比，它的长上影更强调上方抛压。",
    ],
  },
  {
    id: "dragonfly-doji",
    name: "蜻蜓十字线",
    english: "Dragonfly Doji",
    category: "单根 K 线",
    bias: "偏多",
    scene: "下跌末端或支撑位附近更有参考价值",
    summary: "蜻蜓十字线开收盘接近高位，下影线很长，表示低位下探后买盘重新拉回。",
    tags: ["长下影", "十字线", "底部警示"],
    candles: [
      { label: "蜻蜓十字", open: 118, close: 117.5, high: 120, low: 82 },
    ],
    details: {
      "图形构成": "开盘价和收盘价接近，且靠近最高价；下影线很长，上影线很短或没有。",
      "市场含义": "空方盘中大幅打压，但低位买盘承接强，收盘重新回到高位附近。",
      "确认条件": "下一根 K 线收阳或突破蜻蜓十字高点，底部警示更明确。",
      "失效条件": "随后跌破蜻蜓十字最低价，说明低位承接失败。",
      "学习备注": "上涨高位出现蜻蜓十字不一定看多，也可能是剧烈分歧后的警示。",
      "A 股案例": "预留：记录支撑位下探回升案例。",
    },
    compare: [
      "与锤子线相比，蜻蜓十字线实体更小，开收盘更接近。",
      "与普通十字线相比，它的长下影更强调低位承接。",
    ],
  },
];

const categories = ["全部", "单根 K 线", "双根 K 线", "三根组合", "分型结构", "窗口/跳空", "持续形态"];
const biases = ["全部", "偏多", "偏空", "中性"];
const markets = [
  {
    id: "cn",
    label: "A 股",
    hint: "中国市场习惯：红涨绿跌。",
    upText: "阳线 / 红涨",
    downText: "阴线 / 绿跌",
  },
  {
    id: "us",
    label: "美股",
    hint: "美股等海外图表常见：绿涨红跌。",
    upText: "阳线 / 绿涨",
    downText: "阴线 / 红跌",
  },
];

function loadFavoriteIds() {
  try {
    const value = JSON.parse(localStorage.getItem("kandleline-favorites") || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

const state = {
  activeCategory: "全部",
  activeBias: "全部",
  query: "",
  activeId: patterns[0].id,
  activeMarket: localStorage.getItem("kandleline-market") || "cn",
  activeCaseTab: "local",
  favoritesOnly: false,
  favoriteIds: loadFavoriteIds(),
  selectedCaseImage: "",
  selectedCaseImageName: "",
};

const nodes = {
  searchInput: document.querySelector("#searchInput"),
  favoritesOnlyButton: document.querySelector("#favoritesOnlyButton"),
  favoriteCount: document.querySelector("#favoriteCount"),
  categoryFilters: document.querySelector("#categoryFilters"),
  biasFilters: document.querySelector("#biasFilters"),
  marketFilters: document.querySelector("#marketFilters"),
  marketHint: document.querySelector("#marketHint"),
  patternList: document.querySelector("#patternList"),
  patternCategory: document.querySelector("#patternCategory"),
  patternTitle: document.querySelector("#patternTitle"),
  favoriteButton: document.querySelector("#favoriteButton"),
  patternSubtitle: document.querySelector("#patternSubtitle"),
  patternTags: document.querySelector("#patternTags"),
  chartCanvas: document.querySelector("#chartCanvas"),
  marketBadge: document.querySelector("#marketBadge"),
  legendUpText: document.querySelector("#legendUpText"),
  legendDownText: document.querySelector("#legendDownText"),
  detailGrid: document.querySelector("#detailGrid"),
  studyHeading: document.querySelector("#studyHeading"),
  compareList: document.querySelector("#compareList"),
  personalNote: document.querySelector("#personalNote"),
  noteStatus: document.querySelector("#noteStatus"),
  resetViewButton: document.querySelector("#resetViewButton"),
  tabButtons: document.querySelectorAll("[data-case-tab]"),
  caseLocalPanel: document.querySelector("#caseLocalPanel"),
  caseRepoPanel: document.querySelector("#caseRepoPanel"),
  caseForm: document.querySelector("#caseForm"),
  caseImageInput: document.querySelector("#caseImageInput"),
  caseUploadText: document.querySelector("#caseUploadText"),
  caseStockInput: document.querySelector("#caseStockInput"),
  caseDateInput: document.querySelector("#caseDateInput"),
  caseMarketInput: document.querySelector("#caseMarketInput"),
  caseOutcomeInput: document.querySelector("#caseOutcomeInput"),
  caseNoteInput: document.querySelector("#caseNoteInput"),
  caseList: document.querySelector("#caseList"),
  repoGuide: document.querySelector("#repoGuide"),
};

function compressImageFile(file, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const image = new Image();
    image.addEventListener("load", () => {
      const maxWidth = 1280;
      const scale = Math.min(1, maxWidth / image.width);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(image.width * scale);
      canvas.height = Math.round(image.height * scale);
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      callback(canvas.toDataURL("image/jpeg", 0.82));
    });
    image.src = reader.result;
  });
  reader.readAsDataURL(file);
}

function getBiasClass(bias) {
  if (bias === "偏多") return "bias-bullish";
  if (bias === "偏空") return "bias-bearish";
  return "bias-neutral";
}

function isFavorite(patternId) {
  return state.favoriteIds.includes(patternId);
}

function saveFavorites() {
  localStorage.setItem("kandleline-favorites", JSON.stringify(state.favoriteIds));
}

function toggleFavorite(patternId) {
  if (isFavorite(patternId)) {
    state.favoriteIds = state.favoriteIds.filter((id) => id !== patternId);
  } else {
    state.favoriteIds = [...state.favoriteIds, patternId];
  }
  saveFavorites();
  keepActivePatternVisible();
  render();
}

function renderFavoriteControls() {
  const active = isFavorite(state.activeId);
  nodes.favoriteButton.classList.toggle("active", active);
  nodes.favoriteButton.querySelector("span").textContent = active ? "★" : "☆";
  nodes.favoriteButton.title = active ? "取消收藏当前形态" : "收藏当前形态";
  nodes.favoritesOnlyButton.classList.toggle("active", state.favoritesOnly);
  nodes.favoritesOnlyButton.querySelector("span").textContent = state.favoritesOnly ? "★" : "☆";
  nodes.favoriteCount.textContent = String(state.favoriteIds.length);
}

function makeButton({ label, active, onClick, className = "filter-button" }) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `${className}${active ? " active" : ""}`;
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function renderFilters() {
  nodes.categoryFilters.replaceChildren(
    ...categories.map((category) =>
      makeButton({
        label: category,
        active: state.activeCategory === category,
        onClick: () => {
          state.activeCategory = category;
          keepActivePatternVisible();
          render();
        },
      }),
    ),
  );

  nodes.biasFilters.replaceChildren(
    ...biases.map((bias) =>
      makeButton({
        label: bias,
        active: state.activeBias === bias,
        onClick: () => {
          state.activeBias = bias;
          keepActivePatternVisible();
          render();
        },
      }),
    ),
  );

  nodes.marketFilters.replaceChildren(
    ...markets.map((market) =>
      makeButton({
        label: market.label,
        active: state.activeMarket === market.id,
        onClick: () => {
          state.activeMarket = market.id;
          localStorage.setItem("kandleline-market", market.id);
          render();
        },
      }),
    ),
  );
}

function getVisiblePatterns() {
  const query = state.query.trim().toLowerCase();
  return patterns.filter((pattern) => {
    const categoryMatch = state.activeCategory === "全部" || pattern.category === state.activeCategory;
    const biasMatch = state.activeBias === "全部" || pattern.bias === state.activeBias;
    const favoriteMatch = !state.favoritesOnly || isFavorite(pattern.id);
    const searchable = [
      pattern.name,
      pattern.english,
      pattern.category,
      pattern.bias,
      pattern.scene,
      pattern.summary,
      ...pattern.tags,
      ...Object.values(pattern.details),
    ]
      .join(" ")
      .toLowerCase();
    return categoryMatch && biasMatch && favoriteMatch && (!query || searchable.includes(query));
  });
}

function keepActivePatternVisible() {
  const visible = getVisiblePatterns();
  if (visible.length && !visible.some((pattern) => pattern.id === state.activeId)) {
    state.activeId = visible[0].id;
  }
}

function renderPatternList(visiblePatterns) {
  if (!visiblePatterns.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "没有找到匹配的形态。可以换一个关键词，或切回全部分类。";
    nodes.patternList.replaceChildren(empty);
    return;
  }

  const buttons = visiblePatterns.map((pattern) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `pattern-button${pattern.id === state.activeId ? " active" : ""}`;
    button.innerHTML = `<strong>${pattern.name}</strong>${isFavorite(pattern.id) ? '<i class="mini-star">★</i>' : ""}<span>${pattern.category} / ${pattern.bias} / ${pattern.scene}</span>`;
    button.addEventListener("click", () => {
      state.activeId = pattern.id;
      renderActivePattern();
      renderPatternList(getVisiblePatterns());
    });
    return button;
  });

  nodes.patternList.replaceChildren(...buttons);
}

function valueToY(value, min, max, height, padding) {
  return padding + ((max - value) / (max - min)) * (height - padding * 2);
}

function renderChart(pattern) {
  const width = nodes.chartCanvas.clientWidth;
  const height = nodes.chartCanvas.clientHeight;
  const padding = 34;
  const allValues = pattern.candles.flatMap((candle) => [candle.open, candle.close, candle.high, candle.low]);
  const rawMin = Math.min(...allValues);
  const rawMax = Math.max(...allValues);
  const range = rawMax - rawMin || 1;
  const min = rawMin - range * 0.12;
  const max = rawMax + range * 0.12;
  const step = width / (pattern.candles.length + 1);

  const baselines = [0.25, 0.5, 0.75].map((ratio) => {
    const line = document.createElement("div");
    line.className = "baseline";
    line.style.top = `${height * ratio}px`;
    const label = document.createElement("span");
    label.textContent = ratio === 0.25 ? "高位" : ratio === 0.5 ? "中位" : "低位";
    line.appendChild(label);
    return line;
  });

  const candleNodes = pattern.candles.map((candle, index) => {
    const direction = Math.abs(candle.open - candle.close) <= range * 0.04 ? "neutral" : candle.close > candle.open ? "up" : "down";
    const x = step * (index + 1);
    const highY = valueToY(candle.high, min, max, height, padding);
    const lowY = valueToY(candle.low, min, max, height, padding);
    const openY = valueToY(candle.open, min, max, height, padding);
    const closeY = valueToY(candle.close, min, max, height, padding);
    const bodyTop = Math.min(openY, closeY);
    const bodyHeight = Math.max(Math.abs(closeY - openY), 4);

    const candleNode = document.createElement("div");
    candleNode.className = `candle ${direction}`;
    candleNode.style.left = `${x}px`;
    candleNode.style.top = "0";
    candleNode.style.height = `${height}px`;

    const wick = document.createElement("div");
    wick.className = "wick";
    wick.style.top = `${highY}px`;
    wick.style.height = `${lowY - highY}px`;

    const body = document.createElement("div");
    body.className = "body";
    body.style.top = `${bodyTop}px`;
    body.style.height = `${bodyHeight}px`;

    const label = document.createElement("div");
    label.className = "candle-label";
    label.textContent = candle.label;

    candleNode.append(wick, body, label);
    return candleNode;
  });

  nodes.chartCanvas.replaceChildren(...baselines, ...candleNodes);
}

function getActiveMarket() {
  return markets.find((market) => market.id === state.activeMarket) || markets[0];
}

function renderMarketMode() {
  const market = getActiveMarket();
  document.body.classList.toggle("market-us", market.id === "us");
  nodes.marketHint.textContent = market.hint;
  nodes.marketBadge.textContent = market.hint;
  nodes.legendUpText.textContent = market.upText;
  nodes.legendDownText.textContent = market.downText;
}

function renderDetails(pattern) {
  const rows = [
    ["类型", `${pattern.category} / ${pattern.bias}`],
    ["出现位置", pattern.scene],
    ...Object.entries(pattern.details),
  ].map(([term, description]) => {
    const row = document.createElement("div");
    row.className = "detail-row";
    const dt = document.createElement("dt");
    dt.textContent = term;
    const dd = document.createElement("dd");
    dd.textContent = description;
    row.append(dt, dd);
    return row;
  });

  nodes.detailGrid.replaceChildren(...rows);
}

function renderCompare(pattern) {
  nodes.compareList.replaceChildren(
    ...pattern.compare.map((item) => {
      const div = document.createElement("div");
      div.className = "compare-item";
      div.textContent = item;
      return div;
    }),
  );
}

function getNoteKey(patternId) {
  return `kandleline-note:${patternId}`;
}

function getCaseKey(patternId) {
  return `kandleline-cases:${patternId}`;
}

function loadNote(patternId) {
  nodes.personalNote.value = localStorage.getItem(getNoteKey(patternId)) || "";
  nodes.noteStatus.textContent = "本地保存";
}

function saveNote() {
  localStorage.setItem(getNoteKey(state.activeId), nodes.personalNote.value);
  nodes.noteStatus.textContent = "已保存";
  window.clearTimeout(saveNote.timer);
  saveNote.timer = window.setTimeout(() => {
    nodes.noteStatus.textContent = "本地保存";
  }, 1200);
}

function loadLocalCases(patternId) {
  try {
    return JSON.parse(localStorage.getItem(getCaseKey(patternId)) || "[]");
  } catch {
    return [];
  }
}

function saveLocalCases(patternId, cases) {
  localStorage.setItem(getCaseKey(patternId), JSON.stringify(cases));
}

function getRepoCases(patternId) {
  return (window.KANDLELINE_REPO_CASES || []).filter((item) => item.patternId === patternId);
}

function createCaseCard(caseItem, source) {
  const card = document.createElement("article");
  card.className = "case-card";

  if (caseItem.image) {
    const image = document.createElement("img");
    image.src = caseItem.image;
    image.alt = `${caseItem.stock || "未命名股票"} ${caseItem.date || ""} ${caseItem.outcome || ""}`;
    card.appendChild(image);
  }

  const body = document.createElement("div");
  body.className = "case-card-body";

  const title = document.createElement("div");
  title.className = "case-card-title";
  title.innerHTML = `<span>${caseItem.stock || "未命名案例"}</span><span class="tag">${caseItem.outcome || "待观察"}</span>`;

  const meta = document.createElement("div");
  meta.className = "case-card-meta";
  meta.textContent = `${caseItem.market || "未标注市场"} / ${caseItem.date || "未标注日期"} / ${source}`;

  const note = document.createElement("div");
  note.className = "case-card-note";
  note.textContent = caseItem.note || "暂无复盘备注。";

  body.append(title, meta, note);

  if (source === "本地") {
    const actions = document.createElement("div");
    actions.className = "case-actions";
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "text-button";
    removeButton.textContent = "删除";
    removeButton.addEventListener("click", () => {
      const cases = loadLocalCases(state.activeId).filter((item) => item.id !== caseItem.id);
      saveLocalCases(state.activeId, cases);
      renderCases();
    });
    actions.appendChild(removeButton);
    body.appendChild(actions);
  }

  card.appendChild(body);
  return card;
}

function renderCases() {
  const localCases = loadLocalCases(state.activeId);
  const repoCases = getRepoCases(state.activeId).filter((item) => item.image || item.stock || item.note);
  const allCards = [
    ...repoCases.map((item) => createCaseCard(item, "仓库")),
    ...localCases.map((item) => createCaseCard(item, "本地")),
  ];

  if (!allCards.length) {
    const empty = document.createElement("div");
    empty.className = "case-empty";
    empty.textContent = "当前形态还没有实战案例。可以先上传本地截图做个人复盘；如果想让别人下载仓库后也能看到，需要把图片和案例记录提交到仓库。";
    nodes.caseList.replaceChildren(empty);
    return;
  }

  nodes.caseList.replaceChildren(...allCards);
}

function renderRepoGuide(pattern) {
  const imagePath = `cases/${pattern.id}/your-image.png`;
  const snippet = `{
  id: "${pattern.id}-your-stock-yyyymmdd",
  patternId: "${pattern.id}",
  stock: "股票名称 股票代码",
  market: "A 股",
  date: "2026-05-31",
  outcome: "有效",
  image: "./${imagePath}",
  note: "趋势背景、确认信号、失效位置、后续 3/5/10 个交易日表现。"
}`;

  nodes.repoGuide.innerHTML = `
    <div>本地上传适合个人整理，但图片保存在当前浏览器里，不会自动进入 Git 仓库。</div>
    <div>如果希望朋友下载仓库后也能看到案例，建议把截图放到 <strong>cases/${pattern.id}/</strong>，再把下面这种记录加入 <strong>cases.js</strong>。</div>
    <code>${snippet}</code>
  `;
}

function renderCaseTabs() {
  nodes.tabButtons.forEach((button) => {
    const active = button.dataset.caseTab === state.activeCaseTab;
    button.classList.toggle("active", active);
  });
  nodes.caseLocalPanel.classList.toggle("hidden", state.activeCaseTab !== "local");
  nodes.caseRepoPanel.classList.toggle("hidden", state.activeCaseTab !== "repo");
}

function renderActivePattern() {
  const pattern = patterns.find((item) => item.id === state.activeId) || patterns[0];
  nodes.patternCategory.textContent = `${pattern.category} / ${pattern.english}`;
  nodes.patternTitle.textContent = pattern.name;
  nodes.patternSubtitle.textContent = pattern.summary;
  nodes.studyHeading.textContent = pattern.name;

  const tags = [
    `${pattern.bias}倾向`,
    ...pattern.tags,
  ].map((tag, index) => {
    const span = document.createElement("span");
    span.className = `tag${index === 0 ? ` ${getBiasClass(pattern.bias)}` : ""}`;
    span.textContent = tag;
    return span;
  });
  nodes.patternTags.replaceChildren(...tags);

  renderChart(pattern);
  renderDetails(pattern);
  renderCompare(pattern);
  loadNote(pattern.id);
  renderCases();
  renderRepoGuide(pattern);
  renderFavoriteControls();
}

function render() {
  renderFilters();
  renderMarketMode();
  renderCaseTabs();
  const visiblePatterns = getVisiblePatterns();
  renderPatternList(visiblePatterns);
  if (visiblePatterns.length) {
    renderActivePattern();
  } else {
    renderFavoriteControls();
  }
}

nodes.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  keepActivePatternVisible();
  render();
});

nodes.personalNote.addEventListener("input", saveNote);

nodes.favoritesOnlyButton.addEventListener("click", () => {
  state.favoritesOnly = !state.favoritesOnly;
  keepActivePatternVisible();
  render();
});

nodes.favoriteButton.addEventListener("click", () => {
  toggleFavorite(state.activeId);
});

nodes.tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.activeCaseTab = button.dataset.caseTab;
    renderCaseTabs();
  });
});

nodes.caseImageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  nodes.caseUploadText.textContent = "正在处理图片...";
  compressImageFile(file, (dataUrl) => {
    state.selectedCaseImage = dataUrl;
    state.selectedCaseImageName = file.name;
    nodes.caseUploadText.textContent = `已选择：${file.name}`;
  });
});

nodes.caseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const caseItem = {
    id: `local-${Date.now()}`,
    patternId: state.activeId,
    stock: nodes.caseStockInput.value.trim(),
    market: nodes.caseMarketInput.value,
    date: nodes.caseDateInput.value,
    outcome: nodes.caseOutcomeInput.value,
    image: state.selectedCaseImage,
    imageName: state.selectedCaseImageName,
    note: nodes.caseNoteInput.value.trim(),
  };

  const cases = loadLocalCases(state.activeId);
  cases.unshift(caseItem);
  saveLocalCases(state.activeId, cases);

  state.selectedCaseImage = "";
  state.selectedCaseImageName = "";
  nodes.caseUploadText.textContent = "上传走势图截图";
  nodes.caseImageInput.value = "";
  nodes.caseStockInput.value = "";
  nodes.caseDateInput.value = "";
  nodes.caseOutcomeInput.value = "待观察";
  nodes.caseNoteInput.value = "";
  renderCases();
});

nodes.resetViewButton.addEventListener("click", () => {
  state.activeCategory = "全部";
  state.activeBias = "全部";
  state.query = "";
  state.activeId = patterns[0].id;
  nodes.searchInput.value = "";
  render();
});

window.addEventListener("resize", () => {
  renderActivePattern();
});

render();
