// 観光地の「くわしく」の中身と、京都の名物（2026-11-12）。
// 元：Gemini Deep Research の調べ（2026-11-11）を、公式サイト・京都市の資料で照らし合わせた物。
// まとめのノート：01_Obsidian/大学の授業/AIゼミ/2026-11-12_AIゼミ_京都の観光地ランキングと名物.md
// 決まり：
// - 公式で確かめた時間・料金はそのまま書く。確かめられなかった物は「（公式で未確認）」を付ける
// - 分からない物は書かない（画面には「未確認」と出る）
// - order：一覧に先に並べる順（京都市の調査・口コミのランキングをもとにした）
// - rank：ランキングの説明（京都市の調査の場所ごとの順位は、本冊PDFでは未確認）

window.yorimichiSpotInfo = {
  "清水寺": {
    order: 1,
    rank: "京都市の調査で外国人の訪問先1位・口コミ（フォートラベル）1位",
    summary: "音羽山の中腹に建つ世界遺産のお寺。本堂の「清水の舞台」から京都の街を見わたせる、京都でいちばん人が集まる名所です。",
    highlights: ["本堂（清水の舞台）からのながめ", "山の中腹に並ぶお堂", "春の桜・秋の紅葉"],
    hours: "6:00〜18:00（7・8月は18:30まで）",
    fee: "500円（公式で未確認）",
    official: "https://www.kiyomizudera.or.jp/",
    sources: ["https://www.kiyomizudera.or.jp/news/open-hour.php", "https://4travel.jp/domestic/area/kinki/kyoto/kankospot"],
    checked: "2026-11-12"
  },
  "伏見稲荷大社": {
    order: 2,
    rank: "京都市の調査で外国人の訪問先4位・口コミ2位",
    summary: "全国にある稲荷神社のおおもとの神社。朱色の鳥居がトンネルのように続く「千本鳥居」で知られています。",
    highlights: ["千本鳥居", "本殿", "稲荷山の参道（山の上まで続く）"],
    hours: "境内はいつでもお参りできる（公式で未確認）",
    fee: "無料（公式で未確認）",
    official: "https://inari.jp/",
    sources: ["https://inari.jp/", "https://4travel.jp/domestic/area/kinki/kyoto/kankospot"],
    checked: "2026-11-12"
  },
  "金閣寺（鹿苑寺）": {
    order: 3,
    rank: "京都市の調査で外国人の訪問先6位・口コミ3位",
    summary: "室町時代に足利義満が建てた世界遺産のお寺。金色にかがやく舎利殿（金閣）と、池のまわりを歩く庭園が見どころです。",
    highlights: ["金色の舎利殿（金閣）", "池のまわりの庭園", "季節で変わる庭のながめ"],
    hours: "9:00〜17:00",
    fee: "500円（公式で未確認）",
    official: "https://www.shokoku-ji.jp/kinkakuji/",
    sources: ["https://www.shokoku-ji.jp/kinkakuji/faq/"],
    checked: "2026-11-12"
  },
  "元離宮二条城": {
    order: 4,
    rank: "京都市の調査で外国人の訪問先2位・口コミ11位",
    summary: "徳川家康が建てた世界遺産のお城。大政奉還の舞台になった二の丸御殿や庭園が残っています。",
    highlights: ["二の丸御殿と障壁画", "唐門", "庭園と天守閣跡からのながめ"],
    hours: "8:45〜16:00受付、17:00閉城（公式で未確認）",
    fee: "入城のみ800円／入城＋二の丸御殿1,300円",
    official: "https://nijo-jocastle.city.kyoto.lg.jp/",
    sources: ["https://nijo-jocastle.city.kyoto.lg.jp/admission/fee/"],
    checked: "2026-11-12"
  },
  "八坂神社": {
    order: 5,
    rank: "京都市の調査で外国人の訪問先9位・口コミ6位",
    summary: "四条通の東のはしにある古い神社。祇園祭のもとになった、災いをはらう神様として信仰されています。",
    highlights: ["社殿", "四条通の正面に建つ門", "祇園祭とのつながり"],
    hours: "いつでもお参りできる（公式で未確認）",
    fee: "無料（公式で未確認）",
    official: "http://www.yasaka-jinja.or.jp/",
    sources: ["http://www.yasaka-jinja.or.jp/sanpai/"],
    checked: "2026-11-12"
  },
  "錦市場": {
    order: 6,
    rank: "京都市の調査で外国人の訪問先7位（錦市場周辺）・口コミ16位",
    summary: "約390mのアーケードに食材のお店が並ぶ「京の台所」。京野菜や漬物、魚のお店が集まっています。",
    highlights: ["京の食材のお店が並ぶ通り", "店先で食べられる軽食", "400年以上の歴史"],
    hours: "通りは公道。お店ごとに営業時間がちがう",
    fee: "通るのは無料",
    official: "https://www.kyoto-nishiki.or.jp/",
    note: "市場の中で、食べながら歩くのはご遠慮ください（公式の案内）。買ったお店の前か店内で食べます。",
    sources: ["https://www.kyoto-nishiki.or.jp/manner/"],
    checked: "2026-11-12"
  },
  "嵐山 竹林の小径": {
    order: 7,
    rank: "京都市の調査で外国人の訪問先8位（嵐山・嵯峨野周辺）・口コミ15位",
    summary: "高い竹が両側に続く、嵐山の散歩道。渡月橋や天龍寺とあわせて回れます。",
    highlights: ["竹に囲まれた道", "渡月橋とのセット", "春の桜・秋の紅葉"],
    hours: "自由に歩ける（公式で未確認）",
    fee: "無料（公式で未確認）",
    sources: ["https://4travel.jp/domestic/area/kinki/kyoto/kankospot"],
    checked: "2026-11-12"
  },
  "渡月橋": {
    order: 8,
    rank: "口コミ7位",
    summary: "嵐山の桂川（大堰川）にかかる橋。山と川の景色が広がる嵐山の顔です。",
    highlights: ["橋からの山と川のながめ", "春の桜・秋の紅葉", "まわりの食べ歩き"],
    hours: "自由に歩ける（公式で未確認）",
    fee: "無料（公式で未確認）",
    sources: ["https://4travel.jp/domestic/area/kinki/kyoto/kankospot"],
    checked: "2026-11-12"
  },
  "京都御所": {
    order: 9,
    rank: "京都市の調査で外国人の訪問先11位",
    summary: "昔の天皇のすまい（内裏）の形を今に伝える建物群。申しこみなしで、無料で見学できます。",
    highlights: ["紫宸殿・清涼殿", "御常御殿などの建物", "職員のガイドツアー"],
    hours: "月曜休み（祝日なら翌日）",
    fee: "無料・申しこみ不要",
    official: "https://kyoto-gosho.kunaicho.go.jp/",
    sources: ["https://kyoto-gosho.kunaicho.go.jp/visit"],
    checked: "2026-11-12"
  },
  "銀閣寺（慈照寺）": {
    order: 10,
    rank: "京都市の調査で外国人の訪問先13位・口コミ13位",
    summary: "東山文化を代表する世界遺産のお寺。金閣寺とはちがう、落ち着いた観音殿（銀閣）と庭園が見どころです。",
    highlights: ["観音殿（銀閣）", "庭園", "哲学の道とのセット"],
    hours: "3/1〜11/30 8:30〜17:00、12〜2月 9:00〜16:30",
    fee: "1,000円（公式で未確認）",
    official: "https://www.shokoku-ji.jp/ginkakuji/",
    sources: ["https://www.shokoku-ji.jp/ginkakuji/faq/"],
    checked: "2026-11-12"
  },
  "南禅寺": {
    order: 11,
    rank: "京都市の調査で外国人の訪問先17位・口コミ5位",
    summary: "広い境内に大きな三門や、レンガの水路閣が建つ禅のお寺です。",
    highlights: ["三門と、上からのながめ", "レンガの水路閣", "方丈庭園"],
    hours: "3/1〜11/30 8:40〜17:00、12/1〜2/28 8:40〜16:30",
    fee: "方丈庭園600円／三門600円",
    official: "https://nanzenji.or.jp/",
    sources: ["https://nanzenji.or.jp/about_rinzaishu/visit"],
    checked: "2026-11-12"
  },
  "東寺": {
    order: 12,
    rank: "京都市の調査で外国人の訪問先18位・口コミ8位",
    summary: "京都駅から歩いて行ける、真言宗の世界遺産のお寺。高い五重塔が目じるしです。",
    highlights: ["五重塔", "金堂・講堂と仏像", "大師堂"],
    fee: "金堂・講堂などは有料（金額は公式で未確認）",
    official: "https://toji.or.jp/",
    sources: ["https://toji.or.jp/smp/admission/"],
    checked: "2026-11-12"
  },
  "天龍寺": {
    order: 13,
    rank: "口コミ10位",
    summary: "嵐山にある世界遺産の禅のお寺。曹源池の庭園で知られています。",
    highlights: ["曹源池の庭園", "百花苑", "龍の絵"],
    hours: "8:30〜17:00（受付16:50まで）",
    fee: "庭園500円",
    official: "https://www.tenryuji.com/",
    sources: ["https://www.tenryuji.com/visit/"],
    checked: "2026-11-12"
  },
  "三十三間堂": {
    order: 14,
    rank: "口コミ18位",
    summary: "南北120mの国宝の長い木造の本堂に、千手観音坐像などの仏像がまつられているお寺です。",
    highlights: ["とても長い木造の本堂", "千手観音坐像などの仏像", "柱の間が33ある堂内"],
    hours: "4/1〜11/15 8:30〜17:00（公式で未確認）",
    fee: "600円（公式で未確認）",
    official: "https://www.sanjusangendo.jp/",
    sources: ["https://www.sanjusangendo.jp/visit/"],
    checked: "2026-11-12"
  },
  "平安神宮": {
    order: 15,
    rank: "口コミ12位",
    summary: "岡崎にある、季節を問わず多くの人が訪れる神社。有料の庭園「神苑」があります。",
    highlights: ["社殿", "神苑（春の桜）", "10月22日の時代祭"],
    hours: "神苑は季節で変わる（公式で未確認）",
    fee: "神苑600円（公式で未確認）",
    official: "https://www.heianjingu.or.jp/",
    sources: ["https://www.heianjingu.or.jp/map/garden/"],
    checked: "2026-11-12"
  },
  "下鴨神社（賀茂御祖神社）": {
    order: 16,
    rank: "口コミ17位",
    summary: "古い森「糺の森」に囲まれた世界遺産の神社。縁結びでも知られています。",
    highlights: ["糺の森", "楼門の中の社殿", "河合社"],
    hours: "楼門の中 6:30〜17:00（公式で未確認）",
    official: "https://www.shimogamo-jinja.or.jp/",
    sources: ["https://www.shimogamo-jinja.or.jp/access"],
    checked: "2026-11-12"
  },
  "北野天満宮": {
    order: 17,
    rank: "口コミ20位",
    summary: "菅原道真をまつる神社。厄よけの神社として信仰され、秋はもみじ苑も見どころです。",
    highlights: ["本殿と三光門", "撫で牛", "もみじ苑"],
    hours: "7:00〜17:00（公式で未確認）",
    fee: "境内は無料（公式で未確認）",
    official: "https://kitanotenmangu.or.jp/",
    sources: ["https://kitanotenmangu.or.jp/access/"],
    checked: "2026-11-12"
  },
  "高台寺": {
    order: 18,
    rank: "京都市の調査で外国人の訪問先16位・口コミ19位",
    summary: "豊臣秀吉の妻・ねねにゆかりのあるお寺。お堂と庭園、夜のライトアップで知られています。",
    highlights: ["お堂と庭園", "夜のライトアップ", "となりの圓徳院"],
    fee: "800円（公式で未確認）",
    official: "https://www.kodaiji.com/",
    sources: ["https://www.kodaiji.com/haikan.html"],
    checked: "2026-11-12"
  },
  "東福寺": {
    order: 19,
    rank: "口コミ9位",
    summary: "約2,000本のもみじで知られる禅のお寺。通天橋からの紅葉が有名です。",
    highlights: ["通天橋からの紅葉", "方丈のまわりの庭園", "開山堂"],
    fee: "通天橋・開山堂600円／本坊庭園500円（秋は別料金・公式で未確認）",
    official: "https://tofukuji.jp/",
    sources: ["https://tofukuji.jp/guide/"],
    checked: "2026-11-12"
  },
  "龍安寺": {
    order: 20,
    rank: "京都市の調査で外国人の訪問先19位",
    summary: "室町時代に建てられた世界遺産の禅のお寺です。",
    highlights: ["世界遺産の境内", "春の桜"],
    hours: "3/1〜11/30 8:00〜17:00、12〜2月 8:30〜16:30（公式で未確認）",
    fee: "600円（公式で未確認）",
    official: "http://www.ryoanji.jp/",
    sources: ["http://www.ryoanji.jp/smph/"],
    checked: "2026-11-12"
  },
  "ニデック京都タワー": {
    order: 21,
    rank: "口コミ14位",
    summary: "京都駅の前に建つ高さ131mのタワー。地上100mの展望室から京都の街を見わたせます。",
    highlights: ["展望室からの360度のながめ", "夜景", "下の階のお店"],
    hours: "展望室 10:00〜21:00（最終入場20:30）",
    fee: "展望室1,000円",
    official: "https://www.kyoto-tower.jp/",
    sources: ["https://www.kyoto-tower.jp/fee/"],
    checked: "2026-11-12"
  },
  "産寧坂（清水寺の参道）": {
    order: 22,
    summary: "清水寺の門前に続く石だたみの坂。まわりの参道（清水坂・二寧坂）とあわせて、食べ歩きのお店が並びます。",
    highlights: ["みたらし団子・わらび餅", "とうふまんじゅう", "抹茶のスイーツ"],
    hours: "お店ごとにちがう（10時ごろ〜19時ごろのお店が多い・公式で未確認）",
    sources: ["https://ontrip.jal.co.jp/kansai-nanki/17578755"],
    checked: "2026-11-12"
  },
  "祇園": {
    order: 23,
    rank: "京都市の調査で外国人の訪問先3位（祇園周辺）",
    summary: "八坂神社の前に広がる、京都を代表する町並み。抹茶ソフトクリームやプリンなどのお店があります。",
    highlights: ["町並みの散歩", "抹茶ソフトクリーム", "八坂神社とのセット"],
    hours: "お店ごとにちがう",
    sources: ["https://www.jalan.net/news/article/299287/"],
    checked: "2026-11-12"
  },
  "伏見大手筋商店街": {
    order: 24,
    summary: "伏見桃山駅のそばのアーケード商店街。串かつやお好み焼きなどのお店があります。",
    highlights: ["串かつ", "お好み焼き", "駅からすぐ"],
    hours: "お店ごとにちがう",
    official: "http://otesuji.jp/",
    sources: ["http://otesuji.jp/map.html"],
    checked: "2026-11-12"
  }
};

// 京都の名物：選ぶと、プランのごはん休憩に入る。
// 元：Gemini の調べ（主に農林水産省「うちの郷土料理」）。中身は公式で確かめていない。
window.yorimichiFoods = [
  { id: "obanzai", name: "おばんざい", desc: "京都の家庭のおそうざい。万願寺とうがらしとじゃこの炊いたん、にしん茄子など。", area: "京都市内", source: "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/area_stories/kyoto.html" },
  { id: "yudofu", name: "湯豆腐", desc: "豆腐のよさを生かした京都の名物料理。参道では、とうふまんじゅうなどの軽食も。", area: "清水寺のまわり（産寧坂・二寧坂）など", source: "https://ontrip.jal.co.jp/kansai-nanki/17578755" },
  { id: "yuba", name: "湯葉", desc: "京都の伝統の食材。料理のほか、ゆばチーズなど食べ歩きの一品にも。", area: "祇園・東山、嵐山など", source: "https://www.travel.co.jp/guide/matome/3729/" },
  { id: "sabazushi", name: "鯖寿司", desc: "若狭湾などでとれたサバを使う、京都を代表するお寿司。", area: "京都市内", source: "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/area/kyoto.html" },
  { id: "hamo", name: "はも料理", desc: "京料理に欠かせない魚「はも」。市場ではハモ天ぷらとしても。", area: "京都市内・錦市場", source: "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/area/kyoto.html" },
  { id: "tsukemono", name: "京漬物", desc: "千枚漬け・すぐき漬け・しば漬けなど。", area: "錦市場・清水寺の参道など", source: "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/area/kyoto.html" },
  { id: "kamonasu", name: "賀茂なすの田楽", desc: "丸くて大きい京野菜「賀茂なす」を使った田楽。", area: "京都市内の京料理店", source: "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/area/kyoto.html" },
  { id: "taikabura", name: "鯛蕪（たいかぶら）", desc: "聖護院かぶと鯛を煮た、京都の郷土料理。", area: "京都市内", source: "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/taikabura_kyoto.html" },
  { id: "zoni", name: "白味噌の雑煮", desc: "白味噌で仕立てた京都のお雑煮。", area: "京都市内", source: "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/area/kyoto.html" },
  { id: "matcha", name: "宇治抹茶スイーツ", desc: "宇治茶を使った甘味。抹茶ソフトクリームや宇治金時など。", area: "祇園・清水寺のまわり・嵐山", source: "https://www.jalan.net/news/article/299287/" }
];
