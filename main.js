// 1. 地图初始化 (保持 Fresh 风格)
const map = new AMap.Map('map', {
  zoom: 12,
  center: [114.17, 22.30],
  mapStyle: 'amap://styles/fresh', 
  features: ['bg', 'road'] 
});

// 2. 数据源 (保持你的图片和介绍数据)
const songLocations = [
  { 
    Name: "黄金时代", 
    Singer: "陈奕迅", 
    Lyrics: "黃金廣場內分手", 
    Location: "黃金廣場", 
    lng: 114.189175, 
    lat: 22.277117,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/黄金广场.jpg",
    Description: "铜锣湾的黄金广场，曾是90年代潮流的集中地。在这个繁华的商业中心，无数年轻的情侣在此相聚又分离，见证了属于那个时代的速食爱情与都市变迁。"
  },
  { 
    Name: "黄金时代", 
    Singer: "陈奕迅", 
    Lyrics: "在時代門外再聚", 
    Location: "時代廣場", 
    lng: 114.187019, 
    lat: 22.27555,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/时代广场.jpg",
    Description: "铜锣湾的地标性建筑，不仅是购物胜地，更是港人倒数新年的热门地点。无论时代如何变迁，大钟下的空地永远是等人与重逢的最佳坐标。"
  },
  { 
    Name: "喜帖街", 
    Singer: "谢安琪", 
    Lyrics: "就似這一區\n曾經稱得上\n美滿甲天下", 
    Location: "利東街", 
    lng: 114.177243, 
    lat: 22.272843,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/利东街.jpg",
    Description: "昔日的利东街，俗称喜帖街，满街都是印制红色喜帖的小店，洋溢着传统的幸福感。随着城市重建，旧街风貌已逝，如今变成了欧式步行街，但那份老香港的人情味依然活在歌声里。"
  },
  { 
    Name: "弥敦道", 
    Singer: "洪卓立", 
    Lyrics: "街邊太多人與車\n繁華鬧市人醉夜", 
    Location: "彌敦道", 
    lng: 114.176013, 
    lat: 22.308005,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/弥敦道.jpg",
    Description: "贯穿九龙半岛的主要干道，霓虹招牌林立，车水马龙。夜雨中的景致中，还能记得多少往事甜在心头？"
  },
  { 
    Name: "弥敦道", 
    Singer: "洪卓立", 
    Lyrics: "一經信和暴雨泄", 
    Location: "信和廣場", 
    lng: 114.187385, 
    lat: 22.278546,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/信和中心.jpg",
    Description: "曾经是香港年轻人的潮流圣地，卖明星照片、二手CD、漫画和电子游戏的地方。这里承载了无数80、90后的青春回忆与流行文化启蒙。"
  },
  { 
    Name: "芬梨道上", 
    Singer: "杨千嬅", 
    Lyrics: "這山頂何其矜貴\n怎可給停留一世", 
    Location: "芬梨道", 
    lng: 114.155861, 
    lat: 22.268236,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/芬梨道.jpg",
    Description: "通往太平山顶的一条幽静道路。站在这里，可以将维多利亚港的璀璨景色尽收眼底，象征着一种高处不胜寒的矜贵与疏离。"
  },
  { 
    Name: "芬梨道上", 
    Singer: "杨千嬅", 
    Lyrics: "橫行直闖\n車閃過白加道旁", 
    Location: "白加道", 
    lng: 114.16193, 
    lat: 22.268582,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/白加道.jpg",
    Description: "半山著名的豪宅区，也是缆车经过的地方。这里不仅代表着财富与地位，更是俯瞰香港繁华的最佳视角之一，见证着流金岁月的变幻。"
  },
  { 
    Name: "芬梨道上", 
    Singer: "杨千嬅", 
    Lyrics: "回到現今\n灣仔竟無法俯瞰", 
    Location: "灣仔", 
    lng: 114.177904, 
    lat: 22.274386,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/湾仔.png",
    Description: "从山顶俯瞰的湾仔，褪去了地面的喧嚣与拥挤，只剩下灯火辉煌的轮廓。这里新旧交替，汇聚了传统的街市与现代的会展中心。"
  },
  { 
    Name: "芬梨道上", 
    Singer: "杨千嬅", 
    Lyrics: "施勳道上長流富貴浮雲", 
    Location: "施勳道", 
    lng: 114.163439, 
    lat: 22.264935,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/施勋道.jpg",
    Description: "曾被吉尼斯纪录列为全球最昂贵的街道之一。云雾缭绕间，这里的每一栋建筑都写满了关于财富的故事，正如歌词所言，富贵如浮云。"
  },
  { 
    Name: "芬梨道上", 
    Singer: "杨千嬅", 
    Lyrics: "淩霄閣不吸引 沿山腰觀景更狠", 
    Location: "淩霄閣", 
    lng: 114.154783, 
    lat: 22.268594,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/凌霄阁.jpg",
    Description: "太平山顶最标志性的碗状建筑，是游客必到的打卡点。但对于寻求内心平静的人来说，或许沿途的山腰风景比这座喧闹的观景台更具吸引力。"
  },
  { 
    Name: "下一站天后", 
    Singer: "Twins", 
    Lyrics: "在百德新街的愛侶\n面上有種顧盼自豪", 
    Location: "百德新街", 
    lng: 114.190501, 
    lat: 22.277891,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/百德新街.jpg",
    Description: "铜锣湾闹市中的一条街道，因Twins的歌而闻名。这里是年轻情侣拍拖的热门路线，象征着青春期那种单纯而自豪的恋爱心境。"
  },
  { 
    Name: "下一站天后", 
    Singer: "Twins", 
    Lyrics: "站在大丸前\n細心看看我的路", 
    Location: "Fashion Walk（原大丸百貨）", 
    lng: 114.190132, 
    lat: 22.278468,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/大丸.jpg",
    Description: "虽然大丸百货早已结业，但它作为一个时代的坐标，依然活在港人的记忆里。如今这里已变为Fashion Walk，继续引领着铜锣湾的潮流脉搏。"
  },
  { 
    Name: "下一站天后", 
    Singer: "Twins", 
    Lyrics: "下一站天后", 
    Location: "天後站", 
    lng: 114.196768, 
    lat: 22.279984,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/天后站.jpg",
    Description: "港铁港岛线的一个车站，因毗邻天后庙而得名。在歌曲中，它双关了乐坛天后的地位与现实中的车站，寓意着从平凡少女通往梦想的旅程。"
  },
  { 
    Name: "老派约会之必要", 
    Singer: "MC 张天赋", 
    Lyrics: "怎知道霎眼就談到赤柱了\n錯過了\n你我的家", 
    Location: "赤柱", 
    lng: 114.214601, 
    lat: 22.216211,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/赤柱.jpg",
    Description: "位于港岛南端的滨海小镇，拥有殖民地风格的建筑和悠闲的市集。这里远离市区喧嚣，是进行一场漫长、浪漫且“老派”约会的绝佳地点。"
  },
  { 
    Name: "山林道", 
    Singer: "谢安琪", 
    Lyrics: "花花世界 用半生灌溉\n我卻荒廢了 某樹海", 
    Location: "山林道", 
    lng: 114.178685, 
    lat: 22.299986,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/山林道.jpg",
    Description: "尖沙咀的一条静谧街道，曾聚集了大量的录音室，见证了无数香港流行金曲的诞生。歌词借此地比喻奋斗与初心的取舍。"
  },
  { 
    Name: "你说得对", 
    Singer: "容祖儿", 
    Lyrics: "愛無聊獨行尖沙咀", 
    Location: "尖沙咀", 
    lng: 114.17719, 
    lat: 22.294678,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/尖沙咀.jpg",
    Description: "游客如织的旅游旺区，拥有星光大道与海港城。在热闹非凡的街头独自漫步，这种强烈的反差往往更能放大内心的孤独感。"
  },
  { 
    Name: "随意门", 
    Singer: "陈奕迅", 
    Lyrics: "出尖沙咀令人太累", 
    Location: "尖沙咀", 
    lng: 114.17719, 
    lat: 22.294678,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/尖沙咀.jpg",
    Description: "九龙的核心地带，繁忙的交通和密集的人流，有时会让都市人感到疲惫，想要寻找一扇“随意门”逃离现实的压力。"
  },
  { 
    Name: "油尖旺金毛玲", 
    Singer: "树莉莉 Serrini", 
    Lyrics: "油尖旺金毛玲\n看盡世間事", 
    Location: "油尖旺", 
    lng: 114.173331, 
    lat: 22.311704,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/油尖旺.jpg",
    Description: "油麻地、尖沙咀、旺角的合称，是香港最接地气、也最光怪陆离的区域。这里有霓虹灯、夜总会和市井小民的故事，是“金毛玲”们生活的舞台。"
  },
  { 
    Name: "石径", 
    Singer: "张敬轩", 
    Lyrics: "舊日圍村小徑\n踏步往返每天必經", 
    Location: "新田围村", 
    lng: 114.191262, 
    lat: 22.367481,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/围村小径.jpg",
    Description: "沙田区的一条公共屋邨，保留着旧式围村的宁静与人情味。那条每天必经的石径，承载着关于成长、家园和旧时光的温情记忆。"
  },
  { 
    Name: "我是羊", 
    Singer: "杨千嬅", 
    Lyrics: "你住近波士頓 我住太古城", 
    Location: "太古城", 
    lng: 114.222251, 
    lat: 22.283885,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/太古.jpg",
    Description: "香港著名的中产阶级大型屋苑。歌词用波士顿与太古城的距离，隐喻了两人之间无法跨越的鸿沟，一个是遥远的彼岸，一个是现实的居所。"
  },
  { 
    Name: "狮子山下", 
    Singer: "罗文", 
    Lyrics: "我哋大家在獅子山下相遇上", 
    Location: "獅子山", 
    lng: 114.19193, 
    lat: 22.350209,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/狮子山.jpg",
    Description: "形状像一头俯卧狮子的山峰，是香港的精神象征。它代表了港人刻苦耐劳、同舟共济的拼搏精神，见证了这座城市从渔村到国际都会的传奇。"
  },
  { 
    Name: "南昌街王子", 
    Singer: "薛凯琪", 
    Lyrics: "你問南昌街有王子出沒嗎", 
    Location: "南昌街", 
    lng: 114.170927, 
    lat: 22.329464,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/南昌街.jpg",
    Description: "深水埗的一条老街，以售卖花边纽扣的店铺闻名。这里充满市井气息，与童话中的“王子”格格不入，却也是平民百姓编织梦想的地方。"
  },
  { 
    Name: "佳节", 
    Singer: "李克勤", 
    Lyrics: "颱風訪港的五月節仿如昨天\n在深水灣跳浪", 
    Location: "深水灣", 
    lng: 114.188041, 
    lat: 22.240498,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/深水湾.jpg",
    Description: "香港岛南区的豪华住宅区，也拥有迷人的海滩。这里是富豪的聚居地，也是市民假日消暑、在海浪中寻找片刻宁静的胜地。"
  },
  { 
    Name: "皇后大道东", 
    Singer: "罗大佑", 
    Lyrics: "皇后大道東上為何無皇宮", 
    Location: "皇后大道東", 
    lng: 114.184379, 
    lat: 22.271672,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/皇后大道东.jpg",
    Description: "湾仔区历史悠久的街道，见证了香港殖民地时期的变迁。这首歌以戏谑的口吻，通过这条街道探讨了时代的更替与身份的认同。"
  },
  { 
    Name: "皇后大道东", 
    Singer: "罗大佑", 
    Lyrics: "但是旺角可能要換換名字", 
    Location: "旺角", 
    lng: 114.17432, 
    lat: 22.316633,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/旺角.jpg",
    Description: "全球人口密度最高的地区之一，也是香港潮流文化的指标。这里永远人声鼎沸，充满活力，是观察香港街头文化最直接的窗口。"
  },
  { 
    Name: "诗歌舞街", 
    Singer: "my little airport", 
    Lyrics: "詩歌舞街地上有著光電閃閃", 
    Location: "詩歌舞街", 
    lng: 114.168793, 
    lat: 22.322487,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/诗歌舞街.jpg",
    Description: "位于大角咀，街名源自英文Sycamore（无花果树）的音译，却意外拥有了极其浪漫的中文名。这里是许多文青和独立音乐爱好者心中的隐秘地标。"
  },
  { 
    Name: "土瓜湾情歌", 
    Singer: "my little airport", 
    Lyrics: "我此刻仍留在土瓜灣\n想著未來怎麼辦", 
    Location: "土瓜灣", 
    lng: 114.190195, 
    lat: 22.311485,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/土瓜湾.jpg",
    Description: "一个充满旧式楼宇和车房的旧区，随着地铁开通正面临巨变。这里保留着老香港的缓慢节奏，空气中弥漫着一种关于离别与迷茫的淡淡忧伤。"
  },
  { 
    Name: "下亚厘毕道", 
    Singer: "my little airport", 
    Lyrics: "由歌賦街飲去到下亞厘畢道", 
    Location: "下亞厘畢道", 
    lng: 114.163208, 
    lat: 22.276686,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/下亚厘毕道.jpg",
    Description: "中环的一条道路，连接着兰桂坊的喧嚣与政府总部的肃穆。在夜色中，这里往往是狂欢后散步、醒酒，或是思考人生去向的路径。"
  },
  { 
    Name: "牛头角青年", 
    Singer: "my little airport", 
    Lyrics: "牛頭角的日出都看厭\n時間不站在你身邊", 
    Location: "牛頭角", 
    lng: 114.223841, 
    lat: 22.312658,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/牛头角.jpg",
    Description: "观塘区的一个工业与住宅混合区。这里代表着日复一日的打工生活，以及在枯燥的现实与遥不可及的理想之间挣扎的草根青年。"
  },
  { 
    Name: "今夜到干诺道中一起瞓", 
    Singer: "my little airport", 
    Lyrics: "今夜到幹諾道中一起瞓\n這是我最可負擔的租金", 
    Location: "幹諾道中", 
    lng: 114.16123, 
    lat: 22.28261,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/干诺道中.jpg",
    Description: "中环的主要干道，平日车流不息。歌词描绘了一种极端的浪漫与无奈——在寸土寸金的金融中心，唯有马路是免费的栖身之所。"
  },
  { 
    Name: "给金钟地铁站车厢内的人", 
    Singer: "my little airport", 
    Lyrics: "金鐘地鐵站車廂內的人\n為什麼你們不行入啲呢", 
    Location: "金鐘", 
    lng: 114.170298, 
    lat: 22.276502,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/金钟.jpg",
    Description: "香港最繁忙的交通枢纽之一，是打工族每天必经的战场。这里见证了都市人的匆忙、挤迫以及在巨大生活压力下面目模糊的群体像。"
  },
  { 
    Name: "北京北角", 
    Singer: "李克勤", 
    Lyrics: "北京北角金紫荊對開許過願\n以愛熱熔那界限線", 
    Location: "北角", 
    lng: 114.205467, 
    lat: 22.288219,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/北角.jpg",
    Description: "被称为“小福建”的老区，不仅有叮叮车的总站，还充满了传统戏院和地道小吃。这里是新旧文化交融的地方，也承载着不同地域人群的融合故事。"
  },
  { 
    Name: "油麻地莎士比亚", 
    Singer: "吕爵安", 
    Lyrics: "那份愛卻是厚過莎翁每首詩\n凡人讀不懂說是廢紙", 
    Location: "油麻地", 
    lng: 114.175658, 
    lat: 22.310264,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/油麻地.jpg",
    Description: "这里有百老汇电影中心，也有喧闹的果栏。在充满市井气息的油麻地谈论莎士比亚，本身就是一种极具香港特色的文艺与现实的碰撞。"
  },
  { 
    Name: "东涌日和", 
    Singer: "Shine", 
    Lyrics: "從旺角只到樂富\n轉眼沖出將軍澳", 
    Location: "樂富", 
    lng: 114.19218, 
    lat: 22.335052,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/乐富.jpg",
    Description: "黄大仙区的一个住宅区，靠近狮子山。对于习惯了市区生活的年轻人来说，这里往往代表着一种安稳但平淡的居住氛围。"
  },
  { 
    Name: "东涌日和", 
    Singer: "Shine", 
    Lyrics: "從旺角只到樂富\n轉眼沖出將軍澳", 
    Location: "將軍澳", 
    lng: 114.264721, 
    lat: 22.304583,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/将军澳.jpg",
    Description: "近年来发展迅速的新市镇，有着密集的住宅楼群。在歌词中，它象征着城市版图的扩张，以及为了生活不断奔波的距离感。"
  },
  { 
    Name: "东涌日和", 
    Singer: "Shine", 
    Lyrics: "腳在跳著舞\n青衣前望有去路", 
    Location: "青衣", 
    lng: 114.112563, 
    lat: 22.355763,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/青衣.jpg",
    Description: "连接机场与市区的交通枢纽岛屿。对于旅人来说，青衣往往是出发或归家的途经点，充满了关于旅程与过渡的意象。"
  },
  { 
    Name: "流泪行胜利道", 
    Singer: "许志安", 
    Lyrics: "流淚行勝利道\n別再做愛情奴", 
    Location: "勝利道", 
    lng: 114.17932, 
    lat: 22.31706,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/胜利道.jpg",
    Description: "何文田的一条短街，以宠物店和兽医诊所闻名。街名“胜利”与歌词中的“流泪”形成强烈反差，暗示了在感情战场上的挫败与觉醒。"
  },
  { 
    Name: "樱花树下", 
    Singer: "张敬轩", 
    Lyrics: "如有天置地門外 乘電車跨過大海", 
    Location: "置地廣場", 
    lng: 114.162665, 
    lat: 22.278469,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/置地广场.jpg",
    Description: "中环顶级奢华的购物商场。在这里，繁华的物质世界与逝去的青涩初恋形成对比，成为了怀念青春遗憾的一个华丽背景。"
  },
  { 
    Name: "欣澳别恋", 
    Singer: "吴雨霏", 
    Lyrics: "今天车厢远飞\n遗憾身边不是你", 
    Location: "欣澳", 
    lng: 114.033911, 
    lat: 22.329018,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/欣澳.jpg",
    Description: "大屿山的一个地铁站，风景优美，曾有著名的木塘。这里远离市区，宁静而空旷，常被视为恋人野餐的秘密基地，也承载着分别的感伤。"
  },
  { 
    Name: "眼红馆", 
    Singer: "关智斌", 
    Lyrics: "寂寞便在紅館中一起呼喊", 
    Location: "紅磡", 
    lng: 114.186698, 
    lat: 22.300117,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/红磡.jpg",
    Description: "红磡体育馆（红馆），香港歌手的梦想殿堂。这里承载了无数人的集体回忆，既有万人大合唱的热血，也有曲终人散后的落寞。"
  },
  { 
    Name: "永顺街39号", 
    Singer: "卢瀚霆", 
    Lyrics: "但最深爱是谁 已落空", 
    Location: "永順街", 
    lng: 114.11834, 
    lat: 22.361839,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/永顺街.png",
    Description: "荃湾区的一条街道，是一个具体的、充满私人记忆的坐标。对于歌者而言，这里不仅仅是一个地址，更是一段关于成长、初恋与遗憾的封印。"
  },
  { 
    Name: "情缘巴士站", 
    Singer: "谭咏麟", 
    Lyrics: "在這淺水灣的一個終站", 
    Location: "淺水灣", 
    lng: 114.201143, 
    lat: 22.23394,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/浅水湾.jpg",
    Description: "拥有绝美海景的弯月形海滩，充满异国情调。在旧电影和金曲中，这里总是邂逅浪漫、发生爱情故事的经典场景。"
  },
  { 
    Name: "毋忘", 
    Singer: "谢安琪", 
    Lyrics: "屯元天渡天曉到油尖旺通宵", 
    Location: "油尖旺", 
    lng: 114.173331, 
    lat: 22.311704,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/油尖旺.jpg",
    Description: "再次回到九龙的心脏。对于居住在屯门、元朗、天水围的人来说，去油尖旺通宵不仅仅是娱乐，更是一种跨越地域、寻找城市归属感的仪式。"
  },
  { 
    Name: "浪漫九龙城", 
    Singer: "林一峰", 
    Lyrics: "昨日坐巴士路過九龍城", 
    Location: "九龍", 
    lng: 114.166578, 
    lat: 22.302336,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/九龙.jpg",
    Description: "一个充满历史沉淀的区域，曾有著名的九龙城寨。这里街道纵横，美食遍地，蕴藏着最地道的香港人情味和岁月痕迹。"
  },
  { 
    Name: "浪漫九龙城", 
    Singer: "林一峰", 
    Lyrics: "現在啟德已變冷清", 
    Location: "啟德", 
    lng: 114.204299, 
    lat: 22.327686,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/启德.jpg",
    Description: "曾经是传奇的启德机场所在地，飞机在闹市楼顶低飞是世界奇观。如今机场搬迁，这里正经历着巨大的重建，留下的只有关于飞行的集体回忆。"
  },
  { 
    Name: "浪漫九龙城", 
    Singer: "林一峰", 
    Lyrics: "註定難跟赤鱲角比拼", 
    Location: "赤鱲角", 
    lng: 113.936353, 
    lat: 22.304839,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/赤腊角.jpg",
    Description: "香港现国际机场所在地，代表着现代化、效率与通往世界的窗口。它与老旧的九龙城形成鲜明对比，象征着城市的不断前行。"
  },
  { 
    Name: "伟业街", 
    Singer: "胡鸿钧", 
    Lyrics: "人浮蕩到今天可有站穩初衷", 
    Location: "偉業街", 
    lng: 114.222235, 
    lat: 22.311102,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/伟业街.png",
    Description: "观塘工业区的一条漫长街道，两旁林立着写字楼和工厂大厦。这里是无数打工仔每日拼搏的战场，见证了奋斗的汗水与迷茫的初衷。"
  },
  { 
    Name: "劲浪漫 超温馨", 
    Singer: "Gareth. T", 
    Lyrics: "銅鑼灣夠有五十只綠茶", 
    Location: "銅鑼灣", 
    lng: 114.189409, 
    lat: 22.278213,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/铜锣湾.jpg",
    Description: "在繁华的铜锣湾，即便不吃昂贵的大餐，只要和对的人在一起，吃便宜的回转寿司（五十只绿茶）也是一种极致的浪漫。"
  },
  { 
    Name: "凤凰木", 
    Singer: "薛凯琪", 
    Lyrics: "大埔的長街\n吹來只得眼淚吧", 
    Location: "大埔", 
    lng: 114.171743, 
    lat: 22.445653,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/大埔.jpg",
    Description: "新界东部的一个市镇，以绿化和单车径闻名。当凤凰木盛开时，红花满树，这种绚烂的景象往往能勾起人们心中关于青春、离别和逝去时光的感伤。"
  },
  { 
    Name: "他约我去迪士尼", 
    Singer: "陈慧琳/陈晓琪", 
    Lyrics: "畢生也願記起香港迪士尼\n煙火璀璨夜晚定會很美", 
    Location: "迪士尼", 
    lng: 114.047326, 
    lat: 22.309841,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/迪士尼.jpg",
    Description: "位于大屿山的梦幻乐园。对于很多香港人来说，这里不仅是游乐场，更是童话成真的地方，承载着纯真的爱情幻想和最美好的烟火记忆。"
  },
  { 
    Name: "奇洛李维斯回信", 
    Singer: "薛凯琪", 
    Lyrics: "相信最後收得到答復\n荷李活美不美", 
    Location: "荷李活道", 
    lng: 114.155667, 
    lat: 22.281339,
    ImageUrl: "https://13433261150ljj-art.github.io/hklyricsmap/荷里活道.jpg",
    Description: "连接中环与上环的著名街道，中西文化在此交汇。古董店、文武庙与现代画廊并存，正如歌中对远方偶像的幻想，这里充满了现实与理想的交错感。"
  }
];

// 3. InfoWindow 管理
let infoWindow = null;
let currentMarker = null;

// 初始化 InfoWindow
// 关键修改：offset 改回 (0, -20)，因为没有引线了
infoWindow = new AMap.InfoWindow({
    isCustom: true, 
    autoMove: true,
    offset: new AMap.Pixel(0, -20) 
});

// 4. 生成弹窗内容 HTML (去掉了 wrapper 和 line)
function createContent(item) {
    const lyricText = item.Lyrics ? item.Lyrics : "（纯音乐/暂无歌词）";
    const descText = item.Description ? item.Description : "此处暂无详细地点介绍，但每一处街角都有属于它的故事。";
    const imgUrl = item.ImageUrl ? item.ImageUrl : "https://images.unsplash.com/photo-1599228511674-3257771765c7?q=80&w=600&auto=format&fit=crop";

    return `
      <!-- 直接就是信纸容器 -->
      <div id="hk-window-box" class="hk-lyric-window">
        
        <!-- 头部 -->
        <div class="hk-header-group">
            <span class="hk-artist">${item.Singer}</span>
            <span class="hk-song">《${item.Name}》</span>
        </div>

        <!-- 图片 -->
        <div class="hk-img-box">
            <img src="${imgUrl}" class="hk-location-img" alt="${item.Location}">
        </div>
        
        <!-- 歌词 -->
        <div class="hk-lyric-quote">
            “${lyricText}”
        </div>

        <!-- 介绍 -->
        <div class="hk-desc-text">
            ${descText}
        </div>

        <!-- 落款 -->
        <div class="hk-footer-mark">
            <span class="hk-loc-text">📍 ${item.Location}</span>
        </div>

      </div>
    `;
}

// 5. 交互逻辑 (打开/关闭)
function openInfoWin(map, marker, item) {
    if (currentMarker === marker) return;

    infoWindow.setContent(createContent(item));
    infoWindow.open(map, marker.getPosition());
    currentMarker = marker;

    setTimeout(() => {
        const el = document.getElementById('hk-window-box');
        if (el) el.classList.add('show');
    }, 10);
}

function closeInfoWin() {
    if (!infoWindow.getIsOpen()) return;

    const el = document.getElementById('hk-window-box');
    if (el) {
        el.classList.remove('show');
        el.classList.add('hide');
        setTimeout(() => {
            infoWindow.close();
            currentMarker = null;
        }, 300);
    } else {
        infoWindow.close();
    }
}

// 6. 创建 Marker
songLocations.forEach(item => {
    const markerContent = `<div class="hk-marker"></div>`;

    const marker = new AMap.Marker({
        position: [item.lng, item.lat],
        content: markerContent,
        offset: new AMap.Pixel(-8, -8),
        extData: item
    });

    marker.setMap(map);

    marker.on('click', () => {
        openInfoWin(map, marker, item);
    });
});

map.on('click', () => {
    closeInfoWin();
});