// 1. Questions Data (12 questions total, 3 for each dimension: E/I, S/N, T/F, J/P)
const questions = [
  // E vs I
  {
    id: 1,
    dimension: 'EI',
    questionText: 'เมื่อคุณมีเวลาว่างในวันหยุดยาว คุณอยากทำกิจกรรมใดมากที่สุด?',
    optionA: { text: 'ออกไปท่องเที่ยว คาเฟ่ หรือปาร์ตี้สนุกสนานกับก๊วนเพื่อน', weight: 'E' },
    optionB: { text: 'นอนดูหนัง อ่านหนังสือ หรือขดตัวเงียบๆ ใต้ผ้าห่มในห้องส่วนตัว', weight: 'I' }
  },
  {
    id: 2,
    dimension: 'EI',
    questionText: 'ในงานเลี้ยงที่มีผู้คนแปลกหน้าจำนวนมาก บทบาทตามธรรมชาติของคุณคือ...',
    optionA: { text: 'เดินทักทาย ทำความรู้จัก แลกเปลี่ยนช่องทางติดต่อกับผู้คนใหม่ๆ อย่างเป็นกันเอง', weight: 'E' },
    optionB: { text: 'ยืนคุยเฉพาะกับคนที่รู้จักคุ้นเคย หรือหามุมสงบๆ พักผ่อนและสังเกตการณ์', weight: 'I' }
  },
  {
    id: 3,
    dimension: 'EI',
    questionText: 'หลังจากสัปดาห์ที่เหน็ดเหนื่อยและวุ่นวายสุดๆ คุณชาร์จพลังชีวิตกลับมาด้วยวิธีใด?',
    optionA: { text: 'นัดเพื่อนออกไปเม้าท์มอย ทานอาหารอร่อยๆ หรือแฮงเอาท์นอกบ้าน', weight: 'E' },
    optionB: { text: 'ปิดมือถือ พักผ่อนคนเดียวเงียบๆ ไม่ต้องคุยกับใครให้เสียพลังงาน', weight: 'I' }
  },
  // S vs N
  {
    id: 4,
    dimension: 'SN',
    questionText: 'เมื่อต้องเรียนรู้ทักษะใหม่ๆ หรือแก้ปัญหาเฉพาะหน้า คุณพึ่งพาสิ่งใดมากที่สุด?',
    optionA: { text: 'ข้อเท็จจริง ประสบการณ์จริงในอดีต และวิธีการที่เคยใช้ได้ผลชัวร์ๆ', weight: 'S' },
    optionB: { text: 'สัญชาตญาณ จินตนาการไอเดียแปลกใหม่ และภาพอนาคตที่เป็นไปได้', weight: 'N' }
  },
  {
    id: 5,
    dimension: 'SN',
    questionText: 'เวลาฟังเพื่อนเล่าเรื่องราวตื่นเต้น เรื่องแบบไหนที่คุณจะโฟกัสและสนใจ?',
    optionA: { text: 'รายละเอียดลำดับเหตุการณ์ ใคร ทำอะไร ที่ไหน เมื่อไหร่ และผลลัพธ์เป็นอย่างไร', weight: 'S' },
    optionB: { text: 'ความรู้สึกเบื้องลึก ความคิดเห็นแฝง และไอเดียสร้างสรรค์ที่เกิดจากเหตุการณ์นั้น', weight: 'N' }
  },
  {
    id: 6,
    dimension: 'SN',
    questionText: 'ถ้ามีคนชวนคุณคุยเรื่อง "มนุษย์ต่างดาว" หรือ "โลกในอีก 200 ปีข้างหน้า" คุณจะ...',
    optionA: { text: 'ฟังเพลินๆ แต่คิดว่าเป็นเรื่องไกลตัวเกินไป เอาเรื่องตรงหน้าวันนี้ก่อนดีกว่า', weight: 'S' },
    optionB: { text: 'ตื่นเต้น สนุกกับการจินตนาการ สมมติทฤษฎีล้ำๆ และถกเถียงประเด็นเหล่านั้น', weight: 'N' }
  },
  // T vs F
  {
    id: 7,
    dimension: 'TF',
    questionText: 'เมื่อเพื่อนรักเดินมาบ่นว่าสอบตกหรือทำงานผิดพลาด สิ่งแรกที่คุณทำคือ...',
    optionA: { text: 'วิเคราะห์ว่าทำไมถึงตก ช่วยมองหาข้อผิดพลาดและวางแผนแก้ไขปัญหาให้', weight: 'T' },
    optionB: { text: 'ตบบ่ากอดปลอบใจ ถามไถ่ความรู้สึก และอยู่เคียงข้างคอยสนับสนุนอารมณ์', weight: 'F' }
  },
  {
    id: 8,
    dimension: 'TF',
    questionText: 'เวลาต้องตัดสินใจทำอะไรสักอย่างที่สำคัญและส่งผลกระทบสูง คุณจะเลือกยึด...',
    optionA: { text: 'ตรรกะ เหตุผล ความถูกต้อง และความเป็นจริงอย่างตรงไปตรงมา', weight: 'T' },
    optionB: { text: 'หัวใจ ความรู้สึก และผลกระทบต่อจิตใจของคนรอบข้างเป็นหลัก', weight: 'F' }
  },
  {
    id: 9,
    dimension: 'TF',
    questionText: 'คำชมเชยแบบไหนที่ทำให้คุณรู้สึกภูมิใจและมีความสุขที่สุด?',
    optionA: { text: '“คุณเก่งและฉลาดมาก ผลงานชิ้นนี้มีประสิทธิภาพและสมบูรณ์แบบมากเลย”', weight: 'T' },
    optionB: { text: '“คุณช่างใส่ใจ อบอุ่น และคอยดูแลความรู้สึกของคนอื่นเสมอ ขอบคุณมากๆ นะ”', weight: 'F' }
  },
  // J vs P
  {
    id: 10,
    dimension: 'JP',
    questionText: 'เมื่อมีแผนเดินทางไปท่องเที่ยวในวันหยุดยาว คุณมักจะจัดทริปอย่างไร?',
    optionA: { text: 'ทำตารางการเดินทางละเอียดระบุเวลา ร้านอาหาร และสถานที่เที่ยวแต่ละวันไว้อย่างดี', weight: 'J' },
    optionB: { text: 'จองเพียงที่พักและตั๋วเดินทาง ส่วนแผนเที่ยวที่เหลือค่อยไปลุยตัดสินใจเอาหน้างานตามอารมณ์', weight: 'P' }
  },
  {
    id: 11,
    dimension: 'JP',
    questionText: 'ถ้าได้รับมอบหมายโครงการที่มีกำหนดส่งในอีกหนึ่งสัปดาห์ คุณจะเริ่มทำอย่างไร?',
    optionA: { text: 'วางแผนแบ่งงานเป็นส่วนๆ ค่อยๆ ลงมือทำทุกวันเพื่อเสร็จก่อนเดดไลน์สบายๆ', weight: 'J' },
    optionB: { text: 'รอจนกว่าจะมีอารมณ์หรือไฟลนก้นใกล้ๆ กำหนดส่ง แล้วค่อยระเบิดพลังทำรวดเดียวให้เสร็จ', weight: 'P' }
  },
  {
    id: 12,
    dimension: 'JP',
    questionText: 'สภาพโต๊ะทำงานหรือห้องนอนของคุณในปัจจุบัน บ่งบอกความเป็นคุณแบบใด?',
    optionA: { text: 'จัดวางอย่างเป็นระเบียบเรียบร้อย ของทุกอย่างอยู่ในที่ที่มันควรอยู่เพื่อง่ายต่อการใช้งาน', weight: 'J' },
    optionB: { text: 'กองๆ รวมกันไว้อย่างอิสระ อาจดูรกสำหรับคนอื่น แต่คุณรู้ดีว่าอะไรอยู่ตรงไหน', weight: 'P' }
  },
  // E vs I (Additional)
  {
    id: 13,
    dimension: 'EI',
    questionText: 'เวลาต้องการปรึกษาเรื่องสำคัญ คุณชอบคุยผ่านช่องทางใดมากกว่ากัน?',
    optionA: { text: 'โทรศัพท์หรือนัดเจอคุยต่อหน้า ได้อารมณ์และเคลียร์กันได้ทันใจกว่า', weight: 'E' },
    optionB: { text: 'พิมพ์แชทคุยกัน เพราะมีเวลาคิดทบทวนคำตอบและเรียบเรียงคำพูดก่อนส่ง', weight: 'I' }
  },
  {
    id: 14,
    dimension: 'EI',
    questionText: 'ในขณะประชุมหรือทำงานกลุ่มเสนอไอเดียต่างๆ คุณมักจะมีท่าทีอย่างไร?',
    optionA: { text: 'แชร์ความคิดของตนเองออกมาทันที มักพูดไปคิดไปอย่างรวดเร็วและลื่นไหล', weight: 'E' },
    optionB: { text: 'นั่งฟังคนอื่นพูดวิเคราะห์ในใจเงียบๆ ก่อน แล้วค่อยพูดเมื่อคิดตกผลึกเสร็จแล้ว', weight: 'I' }
  },
  // S vs N (Additional)
  {
    id: 15,
    dimension: 'SN',
    questionText: 'เวลาประกอบเฟอร์นิเจอร์ หรือต้องทำอาหารตามสูตรใหม่ๆ คุณมักจะ...',
    optionA: { text: 'เปิดคู่มือหรือสูตรทำตามคู่มือแบบทีละขั้นตอนอย่างละเอียดเพื่อความชัวร์', weight: 'S' },
    optionB: { text: 'กะๆ เอาและลองประกอบ/ปรุงตามสัญชาตญาณ ค่อยๆ ปรับเปลี่ยนตามที่คิดว่าดี', weight: 'N' }
  },
  {
    id: 16,
    dimension: 'SN',
    questionText: 'รูปแบบหนังสือ นิยาย หรือภาพยนตร์ที่คุณชื่นชอบและหยิบมาอ่าน/ดูบ่อยที่สุดคือ...',
    optionA: { text: 'เรื่องราวอ้างอิงประวัติศาสตร์ สารคดีชีวิตจริง หรือแนวสืบสวนที่มีหลักฐานชัดเจน', weight: 'S' },
    optionB: { text: 'แนวไซไฟ แฟนตาซี หรือผจญภัยในโลกจินตนาการเหนือธรรมชาติที่ตื่นตาตื่นใจ', weight: 'N' }
  },
  // T vs F (Additional)
  {
    id: 17,
    dimension: 'TF',
    questionText: 'ในการทำโปรเจกต์กลุ่ม หากมีเพื่อนร่วมทีมคนหนึ่งทำงานผิดพลาดและล่าช้า คุณจะ...',
    optionA: { text: 'ชี้แจงจุดผิดและตักเตือนตรงๆ เพื่อความถูกต้องและคุณภาพงานเป็นสำคัญ', weight: 'T' },
    optionB: { text: 'พูดคุยประนีประนอม รักษาน้ำใจ และเสนอตัวช่วยแชร์งานเพื่อประคองความรู้สึก', weight: 'F' }
  },
  {
    id: 18,
    dimension: 'TF',
    questionText: 'เมื่อมีเพื่อนมาเสนอไอเดียธุรกิจใหม่ๆ หรือความฝันล้ำๆ สิ่งแรกที่คุณจะตอบสนองคือ...',
    optionA: { text: 'วิเคราะห์ความจริง จุดเสี่ยง และความเป็นไปได้ในทางปฏิบัติของแผนนั้น', weight: 'T' },
    optionB: { text: 'ตื่นเต้นไปกับไอเดีย ชื่นชมในความกล้าคิด และคอยให้กำลังใจสนับสนุนเต็มที่', weight: 'F' }
  },
  // J vs P (Additional)
  {
    id: 19,
    dimension: 'JP',
    questionText: 'คุณจัดการกับตารางชีวิตประจำวันและการทำงานในแต่ละวันอย่างไร?',
    optionA: { text: 'จดลิสต์รายการสิ่งที่ต้องทำ (To-Do List) และกำหนดเวลากิจกรรมต่างๆ ชัดเจน', weight: 'J' },
    optionB: { text: 'ปล่อยไปตามสเต็ปธรรมชาติ ยืดหยุ่นได้ตลอดเวลา มีอะไรเข้ามาค่อยแก้สถานการณ์', weight: 'P' }
  },
  {
    id: 20,
    dimension: 'JP',
    questionText: 'หากเพื่อนสนิททักมาบอกกะทันหันว่า "อีก 30 นาทีเจอกัน ไปกินชาบูร้านโปรดกัน!" คุณจะ...',
    optionA: { text: 'รู้สึกชะงักและอึดอัดใจเล็กน้อย เพราะไม่ได้วางแผนเดินทางหรือเตรียมตัวไว้ก่อน', weight: 'J' },
    optionB: { text: 'ตื่นเต้นและดีใจ รีบแต่งตัวออกจากบ้านทันทีพร้อมลุยของอร่อย', weight: 'P' }
  }
];

// 2. 16 MBTI Results to Cat Breeds Mapping
const results = {
  ISTJ: {
    breedId: 'persian',
    breed: 'แมวเปอร์เซีย (Persian Cat) 👑',
    emoji: '🐈',
    mbti: 'ISTJ (นักคำนวณ)',
    tags: ['#สุขุมนุ่มลึก', '#รักความเงียบสงบ', '#เจ้าระเบียบ'],
    traits: [
      'คุณเป็นคนสุขุม เรียบร้อย และรักบ้านเป็นที่สุด เหมือนแมวเปอร์เซียขนฟูที่ชอบนั่งบนเบาะนุ่มๆ สังเกตการณ์อย่างสงบ',
      'ชื่นชอบกิจวัตรประจำวันที่คาดเดาได้ ไม่ชอบความขัดแย้ง ความวุ่นวาย หรือการถูกรบกวนเวลาส่วนตัว',
      'มีความรับผิดชอบสูง มักทำงานเงียบๆ จนเสร็จอย่างสมบูรณ์แบบ ได้รับความไว้วางใจจากทุกคนรอบข้างเสมอ',
      'ดูเย่อหยิ่งในตอนแรก แต่ถ้าสนิทแล้วจะกลายเป็นเหมียวผู้นิ่งเงียบแต่พร้อมกอดอบอุ่นและซื่อสัตย์ที่สุด'
    ],
    bestMatch: 'ESFJ',
    worstMatch: 'ENFP'
  },
  ISFJ: {
    breedId: 'british',
    breed: 'แมวบริติช ช็อตแฮร์ (British Shorthair) 🐨',
    emoji: '🐱',
    mbti: 'ISFJ (ผู้พิทักษ์)',
    tags: ['#อบอุ่นหัวใจ', '#ซื่อสัตย์เงียบๆ', '#พี่เลี้ยงที่น่ารัก'],
    traits: [
      'คุณเป็นคนอบอุ่น อดทน และคอยดูแลคนรอบข้างอยู่ห่างๆ เหมือนบริติชช็อตแฮร์แก้มป่องที่คอยเดินตามเงียบๆ',
      'ไม่ชอบทำตัวโดดเด่น แต่พร้อมยื่นอุ้งเท้าเข้าช่วยเหลือทุกคนเมื่อเกิดปัญหา มีความเห็นอกเห็นใจสูง',
      'รักนวลสงวนตัว มีสัมมาคารวะ ชอบสภาพแวดล้อมที่มั่นคงปลอดภัย และใส่ใจในรายละเอียดเล็กๆ น้อยๆ เสมอ',
      'เป็นแมวผู้รับฟังที่ดีที่สุด รักครอบครัวและคนที่สนิทด้วยสุดหัวใจ'
    ],
    bestMatch: 'ESTP',
    worstMatch: 'ENTP'
  },
  INFJ: {
    breedId: 'khaomanee',
    breed: 'แมวขาวมณี (Khao Manee) 💎',
    emoji: '😸',
    mbti: 'INFJ (ผู้แนะนำ)',
    tags: ['#ลึกลับน่าค้นหา', '#มีสัมผัสพิเศษ', '#ผู้มีความเห็นอกเห็นใจ'],
    traits: [
      'คุณมีความซับซ้อน ลึกซึ้ง และมีสัมผัสที่ไวต่อความรู้สึกผู้อื่น เหมือนขาวมณีตาสองสีในตำนานที่เป็นมงคล',
      'มีความฝันและอุดมการณ์อันยิ่งใหญ่คอยผลักดันจิตใจอยู่เสมอ แต่มักเก็บงำไว้ในใจไม่บอกใคร',
      'รักการช่วยเหลือและเชื่อมโยงความรู้สึกกับคนอื่นอย่างมีความหมายลึกซึ้ง ไม่ชอบความตื้นเขิน',
      'เป็นเพื่อนผู้ซื่อสัตย์ที่จะอยู่เคียงข้างคุณในยามทุกข์ยาก พร้อมความเข้าใจที่ไม่มีใครเลียนแบบได้'
    ],
    bestMatch: 'ENFJ',
    worstMatch: 'ESTJ'
  },
  INTJ: {
    breedId: 'russianblue',
    breed: 'แมวรัสเซียนบลู (Russian Blue) 🌌',
    emoji: '🐈‍⬛',
    mbti: 'INTJ (นักออกแบบ)',
    tags: ['#ฉลาดหลักแหลม', '#โลกส่วนตัวสูงลิบ', '#นักวางกลยุทธ์'],
    traits: [
      'คุณเป็นคนเงียบขรึม ฉลาด และมีวิสัยทัศน์ที่แหลมคมดั่งดวงตาสีมรกตของแมวรัสเซียนบลู',
      'มีโลกส่วนตัวสูงมาก ชอบความสันโดษและการได้คิดวิเคราะห์ ค้นคว้าเรื่องราวที่ยากๆ ลึกซึ้ง',
      'ไม่ชอบพิธีรีตองหรือการเจ๊าะแจ๊ะเรื่องไร้สาระ ชื่นชอบประสิทธิภาพและแผนการที่สมบูรณ์แบบ',
      'เป็นผู้แก้ปัญหาที่ยอดเยี่ยม แม้ภายนอกจะดูเย็นชา แต่ข้างในอบอุ่นและทุ่มเทให้เฉพาะผู้ที่ผ่านเกณฑ์คัดเลือกเข้ามาเท่านั้น'
    ],
    bestMatch: 'ENFP',
    worstMatch: 'ESFP'
  },
  ISTP: {
    breedId: 'americanshorthair',
    breed: 'แมวอเมริกัน ช็อตแฮร์ (American Shorthair) 🛹',
    emoji: '🐱',
    mbti: 'ISTP (ผู้สร้าง)',
    tags: ['#นักลุยเดี่ยว', '#ปรับตัวเก่งเป็นเลิศ', '#ช่างสังเกต'],
    traits: [
      'คุณรักอิสระ ลุยๆ ปรับตัวเก่ง และชอบแก้ปัญหาเฉพาะหน้าได้ดีเยี่ยม เหมือนอเมริกันช็อตแฮร์ที่ล่าหนูเก่ง',
      'ชอบลงมือทำจริงมากกว่าทฤษฎี สนใจในกลไก การสร้าง หรือกิจกรรมที่ได้ใช้ทักษะทางร่างกายและสมองร่วมกัน',
      'ดูชิลๆ นิ่งเงียบ แต่สายตาจ้องมองประเมินสถานการณ์รอบตัวตลอดเวลา ลึกลับและขี้เล่นในคราวเดียวกัน',
      'ไม่ชอบข้อผูกมัดหรือกฎเกณฑ์ที่เข้มงวดเกินไป รักชีวิตอิสระเหมือนแมวที่พร้อมปีนป่ายไปทุกที่'
    ],
    bestMatch: 'ESTJ',
    worstMatch: 'ENFJ'
  },
  ISFP: {
    breedId: 'orangetabby',
    breed: 'แมวส้ม (Orange Tabby) 🍊',
    emoji: '🐈',
    mbti: 'ISFP (นักผจญภัย)',
    tags: ['#รักอิสระสุดๆ', '#อารมณ์ศิลปิน', '#ชิลเก่งนัมเบอร์วัน'],
    traits: [
      'คุณมีความเป็นมิตร นุ่มนวล ชื่นชมความงดงามและศิลปะรอบตัว รักความอิสระเสรี เหมือนแมวส้มจอมป่วนแต่แสนรักชิล',
      'ใช้ชีวิตอยู่กับปัจจุบัน ชอบการผจญภัยเงียบๆ และหามุมโปรดในบ้านนอนกลิ้งเล่นแบบไม่ต้องคิดอะไรมาก',
      'หลีกเลี่ยงความขัดแย้งทุกวิถีทาง มักประนีประนอมและมีความเห็นอกเห็นใจผู้อื่นอย่างลึกซึ้ง',
      'เป็นเหมียวขี้อ้อนเมื่อต้องการความรัก แต่ก็ต้องการพื้นที่ส่วนตัวไว้ชาร์จพลังโดยไม่มีใครรบกวน'
    ],
    bestMatch: 'ESFJ',
    worstMatch: 'ENTJ'
  },
  INFP: {
    breedId: 'scottishfold',
    breed: 'แมวสก็อตติช โฟลด์ (Scottish Fold) 🍦',
    emoji: '😸',
    mbti: 'INFP (ผู้ไกล่เกลี่ย)',
    tags: ['#ช่างฝันแสนหวาน', '#อ่อนโยนขี้อ้อน', '#รักสันติภาพ'],
    traits: [
      'คุณเป็นคนอ่อนไหวง่าย จิตใจดี และชอบจินตนาการเรื่องราวแสนหวาน เหมือนสก็อตติชโฟลด์หูพับที่น่าทะนุถนอม',
      'แสวงหาความกลมเกลียว ความจริงใจ และความเข้าใจลึกซึ้งจากคนรอบตัว เกลียดการปะทะและการแข่งขันรุนแรง',
      'มีคุณธรรมสูง มักซื่อสัตย์ต่อความเชื่อและความคิดสร้างสรรค์ของตนเองอย่างเงียบเชียบ',
      'เป็นเพื่อนแท้ที่จะปลอบใจคุณด้วยดวงตากลมโตและหัวใจที่เปิดกว้างอย่างไม่มีเงื่อนไข'
    ],
    bestMatch: 'ENFJ',
    worstMatch: 'ESTP'
  },
  INTP: {
    breedId: 'norwegianforest',
    breed: 'แมวนอร์เวเจียนฟอเรสต์ (Norwegian Forest) 🌲',
    emoji: '🦁',
    mbti: 'INTP (นักคิด)',
    tags: ['#นักวิเคราะห์ตรรกะ', '#รักความจริงใจ', '#มีจินตนาการสูง'],
    traits: [
      'คุณเป็นนักคิดวิเคราะห์ผู้รักความถูกต้อง มีสติปัญญาเฉียบคม ชอบไขความลับของจักรวาล เหมือนแมวป่ายักษ์ผู้นิ่งขรึม',
      'ชื่นชอบการแลกเปลี่ยนไอเดียเชิงลึกและทฤษฎีแปลกใหม่ แต่บางครั้งก็หลุดลอยอยู่ในความคิดตัวเองจนดูเหมือนเมินเฉยต่อคนอื่น',
      'พึ่งพาตัวเองสูง ไม่ชอบทำตามกระแสสังคมหรือกฎเกณฑ์ที่ไม่มีเหตุผลรองรับ',
      'รักสันโดษและมีความเป็นส่วนตัวสูง แต่หากเปิดใจให้ใครแล้ว จะเป็นเพื่อนที่ซื่อสัตย์และพึ่งพาทางปัญญาได้มากที่สุด'
    ],
    bestMatch: 'ENTJ',
    worstMatch: 'ESFJ'
  },
  ESTP: {
    breedId: 'bengal',
    breed: 'แมวเบงกอล (Bengal Cat) 🐆',
    emoji: '🐅',
    mbti: 'ESTP (ผู้ประกอบการ)',
    tags: ['#พลังงานร้อยเปอร์เซ็นต์', '#รักการผจญภัย', '#นักลงมือทำ'],
    traits: [
      'คุณกระฉับกระเฉง พลังงานล้นเหลือ กล้าหาญ และไม่เคยกลัวการทดลองสิ่งท้าทายใหม่ๆ เหมือนแมวลายเสือเบงกอลสุดปราดเปรียว',
      'รักความสนุกสนาน ชอบเป็นจุดสนใจในงานปาร์ตี้ และเกลียดความน่าเบื่อหน่ายหรือทฤษฎีซ้ำซาก',
      'ตัดสินใจเร็ว ตอบสนองต่อโลกรอบตัวอย่างว่องไวและเฉียบคม มักแก้ปัญหาได้มีสีสันเสมอ',
      'ชอบออกไปข้างนอก หาความตื่นเต้นท้าทาย และสร้างเสียงหัวเราะให้กับก๊วนเพื่อนได้ตลอดเวลา'
    ],
    bestMatch: 'ISFJ',
    worstMatch: 'INFP'
  },
  ESFP: {
    breedId: 'calico',
    breed: 'แมวสามสี (Calico Cat) 🎨',
    emoji: '🐱',
    mbti: 'ESFP (ผู้มอบความบันเทิง)',
    tags: ['#ดาวเด่นปาร์ตี้', '#แฟชั่นนิสต้า', '#ความสุขอยู่รอบตัว'],
    traits: [
      'คุณรักชีวิตชีวา สนุกสนาน มีเสน่ห์เหลือล้น และชอบสร้างความบันเทิงให้ทุกคน เหมือนแมวสามสีผู้โดดเด่นน่ามอง',
      'มีเซนส์เรื่องความสวยงามและแฟชั่นเป็นเลิศ ชอบความสะดวกสบาย อาหารอร่อย และบรรยากาศที่คึกคัก',
      'เข้ากับคนง่ายสุดๆ มีทักษะการสมาคมดีเยี่ยม มักชวนเพื่อนทำกิจกรรมสนุกสนานได้ตลอดวัน',
      'ใช้ชีวิตคุ้มค่าในทุกวินาที มองโลกในแง่ดีและพกพาความร่าเริงไปแจกจ่ายทุกคนที่พบเจอ'
    ],
    bestMatch: 'ISTJ',
    worstMatch: 'INTJ'
  },
  ENFP: {
    breedId: 'ragdoll',
    breed: 'แมวแร็กดอลล์ (Ragdoll) 🧸',
    emoji: '😻',
    mbti: 'ENFP (นักรณรงค์)',
    tags: ['#ขี้อ้อนตัวยง', '#พลังงานบวกล้นหลาม', '#ทุกคนคือเพื่อน'],
    traits: [
      'คุณร่าเริง มีความคิดสร้างสรรค์ล้นหลาม และมองโลกในแง่ดีอย่างมหัศจรรย์ เหมือนแมวแร็กดอลล์ตัวนุ่มนิ่มที่ชอบให้กอดอุ้ม',
      'หลงใหลในความรู้สึก ความฝัน และผู้คนรอบตัว เป็นมิตรกับมนุษย์และเพื่อนสัตว์ทุกชนิดอย่างไม่มีการแบ่งแยก',
      'เกลียดความจำเจและกิจวัตรซ้ำๆ มักมองหาแรงบันดาลใจและทิศทางใหม่ๆ เสมอ',
      'เป็นกาวใจและแหล่งพลังงานบวกชั้นดีที่คอยเติมรอยยิ้มและความสนุกสนานให้ทุกคนรอบตัว'
    ],
    bestMatch: 'INTJ',
    worstMatch: 'ISTJ'
  },
  ENTP: {
    breedId: 'sphynx',
    breed: 'แมวสฟิงซ์ (Sphynx Cat) 👽',
    emoji: '😼',
    mbti: 'ENTP (นักโต้วาที)',
    tags: ['#ขี้สงสัยสุดขีด', '#ไอเดียแหวกแนว', '#นักแก้ปริศนา'],
    traits: [
      'คุณเป็นคนกระตือรือร้น ขี้สงสัยมาก ฉลาดปราดเปรื่อง และชอบท้าทายกฎเกณฑ์เดิมๆ เหมือนแมวสฟิงซ์ไร้ขนสุดเฉี่ยวและเป็นมิตร',
      'สนุกสนานกับการถกเถียงเชิงปัญญาและการหาเหตุผลมาลับฝีปากกับคนรอบข้าง ไม่ชอบเรื่องน่าเบื่อจำเจ',
      'มีวิสัยทัศน์กว้างไกลและคิดค้นไอเดียแปลกใหม่นอกกรอบได้ชั่วพริบตา มักเป็นผู้บุกเบิกสิ่งใหม่ๆ',
      'ขี้เล่น ขี้แกล้ง อัธยาศัยดีเป็นเลิศ และสร้างความประทับใจที่ไม่เหมือนใครให้ทุกคนเสมอ'
    ],
    bestMatch: 'ISFJ',
    worstMatch: 'INFJ'
  },
  ESTJ: {
    breedId: 'korat',
    breed: 'แมวโคราช (Korat Cat) 🩶',
    emoji: '🐈',
    mbti: 'ESTJ (ผู้บริหาร)',
    tags: ['#หัวหน้าใหญ่', '#มีระเบียบวินัยสูง', '#ผู้พิทักษ์บ้าน'],
    traits: [
      'คุณเป็นคนจริงจัง มีความรับผิดชอบสูง มั่นคง และมีความเป็นผู้นำสูงมาก เหมือนแมวโคราชสีสวาดที่ดูน่าเกรงขาม',
      'ชื่นชอบระเบียบวินัย กฎเกณฑ์ที่ชัดเจน และการจัดการที่เรียบร้อยเป็นระบบในทุกเรื่อง',
      'ปกป้องพวกพ้องและอาณาเขตของตนเองอย่างกล้าหาญ ทำงานหนักและมุ่งหวังผลลัพธ์ที่เป็นรูปธรรม',
      'เป็นเสาหลักที่พึ่งพาได้ที่สุดในยามคับขัน ตรงไปตรงมา ซื่อตรง และมั่นคงในคำสัญญาเสมอ'
    ],
    bestMatch: 'ISTP',
    worstMatch: 'INFJ'
  },
  ESFJ: {
    breedId: 'mainecoon',
    breed: 'แมวเมนคูน (Maine Coon) 🦁',
    emoji: '🐈',
    mbti: 'ESFJ (ผู้ให้คำปรึกษา)',
    tags: ['#พี่ใหญ่ใจดี', '#ชอบเทคแคร์', '#เข้าสังคมเก่งมาก'],
    traits: [
      'คุณใจดี อบอุ่น เป็นมิตร และชอบดูแลบริการทุกคนรอบตัว เหมือนแมวยักษ์เมนคูนผู้อ่อนโยนและเป็นที่รักของทุกคน',
      'มีความสุขที่สุดเวลาเห็นคนรอบข้างยิ้มแย้มและสามัคคีกัน มักเป็นคนคอยจัดการเรื่องอาหารการกินและดูแลความเรียบร้อย',
      'รักครอบครัวและประเพณี อ่อนโยน เข้าอกเข้าใจผู้อื่นอย่างลึกซึ้ง และขยันขันแข็งทำเพื่อส่วนรวม',
      'พร้อมอ้าแขนต้อนรับเพื่อนใหม่และคอยส่งพลังความรักความห่วงใยให้ทุกคนอยู่เสมอ'
    ],
    bestMatch: 'ISFP',
    worstMatch: 'INTP'
  },
  ENFJ: {
    breedId: 'siamese',
    breed: 'แมววิเชียรมาศ (Siamese Cat) 🔔',
    emoji: '🐱',
    mbti: 'ENFJ (ผู้ให้)',
    tags: ['#มีเสน่ห์ดึงดูด', '#ช่างพูดช่างเจรจา', '#สร้างแรงบันดาลใจ'],
    traits: [
      'คุณเป็นคนมีสเน่ห์ ช่างพูด โน้มน้าวใจเก่ง และมีความเป็นผู้นำที่เต็มไปด้วยความอบอุ่น เหมือนแมววิเชียรมาศที่ส่งเสียงเจื้อยแจ้ว',
      'ใส่ใจอนาคตของคนรอบข้างและคอยผลักดันให้ทุกคนดึงศักยภาพสูงสุดของตัวเองออกมา',
      'เข้าอกเข้าใจคนอื่นได้ทันที ชอบทำงานเป็นทีมและสร้างความสามัคคีให้เกิดขึ้นในทุกหนแห่ง',
      'กระตือรือร้น จริงใจ และทุ่มเทชีวิตเพื่อสร้างอิมแพคเชิงบวกให้แก่สังคมและคนที่คุณรัก'
    ],
    bestMatch: 'INFP',
    worstMatch: 'ISTP'
  },
  ENTJ: {
    breedId: 'bombay',
    breed: 'แมวดำบอมเบย์ (Bombay Cat) 🐈‍⬛',
    emoji: '🖤',
    mbti: 'ENTJ (ผู้บัญชาการ)',
    tags: ['#ทะเยอทะยานสูง', '#ผู้นำเด็ดเดี่ยว', '#นักแก้ปัญหาเชิงกลยุทธ์'],
    traits: [
      'คุณมั่นใจในตนเองสูง เด็ดขาด ชาญฉลาด และมุ่งมั่นสู่ความสำเร็จในทุกเป้าหมาย เหมือนเสือดำย่อส่วนบอมเบย์สุดเท่',
      'มีวิสัยทัศน์กว้างไกล วางแผนเชิงกลยุทธ์ระยะยาวได้ยอดเยี่ยม ชอบความท้าทายและไม่เคยถอยหนีอุปสรรค',
      'พูดจาตรงไปตรงมา เน้นผลลัพธ์ที่เป็นรูปธรรมและประสิทธิภาพที่รวดเร็วเป็นหลัก',
      'มีความเป็นผู้นำอย่างธรรมชาติ ดึงดูดผู้คนด้วยอำนาจบารมี และพร้อมพาทีมคว้าชัยชนะในทุกสมรภูมิ'
    ],
    bestMatch: 'INTP',
    worstMatch: 'ISFP'
  }
};

// Helper function to shuffle array (Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 3. Application State Variables
let currentQuestionIndex = 0;
let selectedAnswers = [];
let tempSelection = null;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let loadingInterval = null;
let isTransitioning = false;

// 4. Navigation & State Controllers
function startQuiz() {
  shuffleArray(questions);
  currentQuestionIndex = 0;
  selectedAnswers = new Array(questions.length).fill(null);
  tempSelection = null;
  scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  
  const landingView = document.getElementById('view-landing');
  const quizView = document.getElementById('view-quiz');
  
  landingView.classList.add('hidden');
  quizView.classList.remove('hidden');
  
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  
  // Reset transitioning state
  isTransitioning = false;

  // Update progress elements
  const progressPercent = Math.round((currentQuestionIndex / questions.length) * 100);
  document.getElementById('quiz-question-number').innerText = `คำถามที่ ${currentQuestionIndex + 1} จาก ${questions.length}`;
  document.getElementById('quiz-progress-text').innerText = `${progressPercent}%`;
  document.getElementById('quiz-progress-bar').style.width = `${progressPercent || 5}%`;
  
  // Set question and option texts
  document.getElementById('quiz-question-text').innerText = currentQuestion.questionText;
  document.getElementById('quiz-option-a-text').innerText = currentQuestion.optionA.text;
  document.getElementById('quiz-option-b-text').innerText = currentQuestion.optionB.text;
  
  // Toggle Back button visibility
  const backBtn = document.getElementById('quiz-btn-back');
  if (currentQuestionIndex > 0) {
    backBtn.classList.remove('invisible');
    backBtn.classList.add('visible');
  } else {
    backBtn.classList.remove('visible');
    backBtn.classList.add('invisible');
  }
  
  // Reset style of option buttons
  resetOptionButtonStyles();
  
  // Restore saved answer if it exists
  const savedAnswer = selectedAnswers[currentQuestionIndex];
  if (savedAnswer) {
    tempSelection = savedAnswer;
    highlightOption(savedAnswer);
  } else {
    tempSelection = null;
  }
}

function resetOptionButtonStyles() {
  const optA = document.getElementById('quiz-option-a');
  const optB = document.getElementById('quiz-option-b');
  const badgeA = document.getElementById('quiz-option-a-badge');
  const badgeB = document.getElementById('quiz-option-b-badge');
  
  optA.className = "w-full text-left p-5 md:p-6 bg-white border-2 border-slate-200/70 rounded-2xl shadow-sm transition-all duration-300 cursor-pointer flex items-center gap-4 group";
  optB.className = "w-full text-left p-5 md:p-6 bg-white border-2 border-slate-200/70 rounded-2xl shadow-sm transition-all duration-300 cursor-pointer flex items-center gap-4 group";
  
  badgeA.className = "w-10 h-10 min-w-[40px] rounded-full bg-slate-100 group-hover:bg-rose-500 group-hover:text-white flex items-center justify-center text-lg font-bold font-['Mitr'] text-slate-600 transition-colors duration-300";
  badgeB.className = "w-10 h-10 min-w-[40px] rounded-full bg-slate-100 group-hover:bg-rose-500 group-hover:text-white flex items-center justify-center text-lg font-bold font-['Mitr'] text-slate-600 transition-colors duration-300";
}

function highlightOption(option) {
  const optA = document.getElementById('quiz-option-a');
  const optB = document.getElementById('quiz-option-b');
  const badgeA = document.getElementById('quiz-option-a-badge');
  const badgeB = document.getElementById('quiz-option-b-badge');
  
  // Clear styles first
  resetOptionButtonStyles();
  
  // Highlight chosen option
  if (option === 'A') {
    optA.className = "w-full text-left p-5 md:p-6 bg-rose-50/50 border-2 border-rose-400 rounded-2xl shadow-sm transition-all duration-300 cursor-pointer flex items-center gap-4 group";
    badgeA.className = "w-10 h-10 min-w-[40px] rounded-full bg-rose-500 text-white flex items-center justify-center text-lg font-bold font-['Mitr'] transition-colors duration-300";
  } else if (option === 'B') {
    optB.className = "w-full text-left p-5 md:p-6 bg-rose-50/50 border-2 border-rose-400 rounded-2xl shadow-sm transition-all duration-300 cursor-pointer flex items-center gap-4 group";
    badgeB.className = "w-10 h-10 min-w-[40px] rounded-full bg-rose-500 text-white flex items-center justify-center text-lg font-bold font-['Mitr'] transition-colors duration-300";
  }
}

function selectOption(option) {
  if (isTransitioning) return;
  isTransitioning = true;
  
  tempSelection = option;
  highlightOption(option);
  
  // Record choice for current question
  selectedAnswers[currentQuestionIndex] = option;
  
  // Small delay for visual feedback before automatically going to the next question
  setTimeout(() => {
    currentQuestionIndex++;
    isTransitioning = false;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showLoadingScreen();
    }
  }, 200);
}

function goToPreviousQuestion() {
  if (isTransitioning) return;
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

function showLoadingScreen() {
  const quizView = document.getElementById('view-quiz');
  const loadingView = document.getElementById('view-loading');
  
  quizView.classList.add('hidden');
  loadingView.classList.remove('hidden');
  
  const loadingMessages = [
    'กำลังวิเคราะห์คำตอบ... 🐾',
    'กำลังคำนวณระดับความขี้อ้อน... 💖',
    'กำลังเปิดตำราสายพันธุ์แมวสไตล์จิบลิ... 🎨',
    'กำลังเช็กนิสัยความแสบซน... ⚡',
    'กำลังแมตช์เคมีของเหมียวที่เป็นคุณ... ✨',
    'ประมวลผลใกล้เสร็จแล้ว เรียบร้อย! 🎉'
  ];
  
  let msgIndex = 0;
  const loadingTextElem = document.getElementById('loading-text');
  
  loadingInterval = setInterval(() => {
    msgIndex = (msgIndex + 1) % loadingMessages.length;
    loadingTextElem.style.opacity = 0;
    setTimeout(() => {
      loadingTextElem.innerText = loadingMessages[msgIndex];
      loadingTextElem.style.opacity = 1;
    }, 150);
  }, 600);
  
  // Wait 3.2 seconds, then show results
  setTimeout(() => {
    clearInterval(loadingInterval);
    calculateAndShowResult();
  }, 3200);
}

function calculateAndShowResult() {
  // Clear scores and recalculate
  scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  questions.forEach((q, idx) => {
    const answer = selectedAnswers[idx];
    const weight = answer === 'A' ? q.optionA.weight : q.optionB.weight;
    scores[weight]++;
  });
  
  const mbtiResult = [
    scores.E >= scores.I ? 'E' : 'I',
    scores.S >= scores.N ? 'S' : 'N',
    scores.T >= scores.F ? 'T' : 'F',
    scores.J >= scores.P ? 'J' : 'P'
  ].join('');
  
  const profile = results[mbtiResult];
  
  // Inject result values
  // document.getElementById('result-mbti').innerText = profile.mbti;
  document.getElementById('result-breed-title').innerText = profile.breed;
  
  // Try loading local image, fallback to emoji on failure
  const catImg = document.getElementById('result-cat-image');
  const catEmoji = document.getElementById('result-cat-emoji');
  
  catImg.classList.add('hidden');
  if (catEmoji) catEmoji.classList.remove('hidden');
  
  if (profile.breedId) {
    const base64Src = typeof CAT_IMAGES !== 'undefined' ? CAT_IMAGES[`cat_${profile.breedId}`] : null;
    catImg.src = base64Src || `images/cat_${profile.breedId}.png?v=${Date.now()}`;
    catImg.onload = () => {
      catImg.classList.remove('hidden');
      if (catEmoji) catEmoji.classList.add('hidden');
    };
    catImg.onerror = () => {
      catImg.classList.add('hidden');
      if (catEmoji) catEmoji.classList.remove('hidden');
    };
  }
  
  // Generate personality tag chips
  const tagsContainer = document.getElementById('result-tags');
  tagsContainer.innerHTML = '';
  profile.tags.forEach(tag => {
    const chip = document.createElement('span');
    chip.className = 'px-3 py-1 bg-rose-50 text-rose-700 border border-rose-100 rounded-full text-sm font-semibold';
    chip.innerText = tag;
    tagsContainer.appendChild(chip);
  });
  
  // Populate description bullet points
  const descContainer = document.getElementById('result-desc-list');
  descContainer.innerHTML = '';
  profile.traits.forEach(trait => {
    const bullet = document.createElement('li');
    bullet.className = 'flex items-start gap-2.5';
    bullet.innerHTML = `<span class="text-rose-400 mt-0.5">🐾</span> <span class="text-slate-600">${trait}</span>`;
    descContainer.appendChild(bullet);
  });
  
  // Lookup Best Match and Worst Match profile details
  const bestProfile = results[profile.bestMatch];
  const worstProfile = results[profile.worstMatch];
  
  // Best Match Inject
  document.getElementById('result-best-name').innerText = bestProfile.breed.split(' (')[0];
  // document.getElementById('result-best-mbti').innerText = bestProfile.mbti.split(' (')[0];
  document.getElementById('result-best-emoji').innerText = bestProfile.emoji;
  
  const bestImg = document.getElementById('result-best-image');
  const bestEmoji = document.getElementById('result-best-emoji');
  bestImg.classList.add('hidden');
  bestEmoji.classList.remove('hidden');
  
  if (bestProfile.breedId) {
    const base64Src = typeof CAT_IMAGES !== 'undefined' ? CAT_IMAGES[`cat_${bestProfile.breedId}`] : null;
    bestImg.src = base64Src || `images/cat_${bestProfile.breedId}.png?v=${Date.now()}`;
    bestImg.onload = () => {
      bestImg.classList.remove('hidden');
      bestEmoji.classList.add('hidden');
    };
    bestImg.onerror = () => {
      bestImg.classList.add('hidden');
      bestEmoji.classList.remove('hidden');
    };
  }
  
  const bestBtn = document.getElementById('btn-best-match');
  bestBtn.onclick = () => showCompanionDetail(profile.bestMatch);
  
  // Worst Match Inject
  document.getElementById('result-worst-name').innerText = worstProfile.breed.split(' (')[0];
  // document.getElementById('result-worst-mbti').innerText = worstProfile.mbti.split(' (')[0];
  document.getElementById('result-worst-emoji').innerText = worstProfile.emoji;
  
  const worstImg = document.getElementById('result-worst-image');
  const worstEmoji = document.getElementById('result-worst-emoji');
  worstImg.classList.add('hidden');
  worstEmoji.classList.remove('hidden');
  
  if (worstProfile.breedId) {
    const base64Src = typeof CAT_IMAGES !== 'undefined' ? CAT_IMAGES[`cat_${worstProfile.breedId}`] : null;
    worstImg.src = base64Src || `images/cat_${worstProfile.breedId}.png?v=${Date.now()}`;
    worstImg.onload = () => {
      worstImg.classList.remove('hidden');
      worstEmoji.classList.add('hidden');
    };
    worstImg.onerror = () => {
      worstImg.classList.add('hidden');
      worstEmoji.classList.remove('hidden');
    };
  }
  
  const worstBtn = document.getElementById('btn-worst-match');
  worstBtn.onclick = () => showCompanionDetail(profile.worstMatch);

  // Transition to Result Screen
  const loadingView = document.getElementById('view-loading');
  const resultView = document.getElementById('view-result');
  
  loadingView.classList.add('hidden');
  resultView.classList.remove('hidden');
}

function resetQuiz() {
  currentQuestionIndex = 0;
  selectedAnswers.fill(null);
  tempSelection = null;
  scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  if (loadingInterval) clearInterval(loadingInterval);
  isTransitioning = false;
  
  document.getElementById('view-quiz').classList.add('hidden');
  document.getElementById('view-loading').classList.add('hidden');
  document.getElementById('view-result').classList.add('hidden');
  document.getElementById('view-landing').classList.remove('hidden');
}

function showCompanionDetail(mbtiCode) {
  const comp = results[mbtiCode];
  if (!comp) return;
  
  const detailText = `🐾 ${comp.breed}\n\nนิสัยเด่น:\n- ${comp.traits[0]}\n- ${comp.traits[1]}`;
  showToast(comp.emoji + ' ' + comp.breed.split(' (')[0] + ': ' + comp.tags.join(' '));
  
  alert(detailText);
}

function shareResult() {
  const breedTitle = document.getElementById('result-breed-title').innerText;
  const mbtiLabel = document.getElementById('result-mbti').innerText;
  const shareText = `🐾 ฉันได้ทดสอบแล้ว! ฉันคือ "${breedTitle}" (${mbtiLabel})\nมาลองเล่นควิซทายนิสัยสายพันธุ์แมวได้ที่นี่เลย: ${window.location.href}`;
  
  navigator.clipboard.writeText(shareText).then(() => {
    showToast('คัดลอกลิงก์ผลลัพธ์สำเร็จแล้ว! 🐾');
  }).catch(() => {
    const textArea = document.createElement('textarea');
    textArea.value = shareText;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('คัดลอกลิงก์ผลลัพธ์สำเร็จแล้ว! 🐾');
    } catch (err) {
      showToast('ไม่สามารถคัดลอกลิงก์ได้ กรุณาลองใหม่อีกครั้ง');
    }
    document.body.removeChild(textArea);
  });
}

function downloadResultImage() {
  const captureArea = document.getElementById('result-capture-area');
  if (!captureArea) return;
  
  showToast('กำลังเตรียมดาวน์โหลดรูปภาพ... 📸');
  
  // Create wrapper container
  const wrapper = document.createElement('div');
  wrapper.style.position = 'fixed';
  wrapper.style.left = '-9999px';
  wrapper.style.top = '0';
  wrapper.style.width = '500px';
  wrapper.style.padding = '24px';
  wrapper.style.background = 'linear-gradient(135deg, #FFEBEB 0%, #FFF3E3 50%, #F0F3FF 100%)';
  wrapper.style.boxSizing = 'border-box';
  
  // Clone the result area
  const card = captureArea.cloneNode(true);
  card.style.backgroundColor = '#FFFFFF';
  card.style.padding = '28px';
  card.style.borderRadius = '24px';
  card.style.boxShadow = '0 10px 30px rgba(244,63,94,0.06)';
  card.style.border = '1px solid rgba(244,63,94,0.08)';
  card.style.boxSizing = 'border-box';
  
  // Add a nice watermark at the bottom of the white card
  const watermark = document.createElement('div');
  watermark.className = "text-center text-xs text-slate-400 font-semibold pt-5 mt-4 border-t border-slate-100 font-['Mitr'] flex items-center justify-center gap-1";
  watermark.innerHTML = '<span>🐾</span> CatIdentity Quiz • mbti.catidentity.com';
  card.appendChild(watermark);
  
  wrapper.appendChild(card);
  document.body.appendChild(wrapper);
  
  // Give it a brief moment to render styles
  setTimeout(() => {
    html2canvas(wrapper, {
      useCORS: false, // Set to false to avoid local stylesheet CORS blocks on file:// protocol
      scale: 2, // High resolution (retina support)
      logging: true, // Enable logging for debugging
      allowTaint: false // Set to false to prevent canvas taint issues
    }).then(canvas => {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      
      const breedTitle = document.getElementById('result-breed-title').innerText.trim();
      // Strip emojis and spaces for clean filename
      const cleanBreedName = breedTitle.replace(/[^\w\u0E00-\u0E7F\s-]/g, '').trim().replace(/\s+/g, '_');
      const filename = `CatIdentity_${cleanBreedName}.png`;
      
      link.download = filename;
      link.href = dataUrl;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      document.body.removeChild(wrapper);
      showToast('ดาวน์โหลดรูปภาพสำเร็จแล้ว! 🐾');
    }).catch(err => {
      console.error('Error generating image:', err);
      if (document.body.contains(wrapper)) {
        document.body.removeChild(wrapper);
      }
      alert('เกิดข้อผิดพลาดในการบันทึกรูปภาพ:\n' + (err.stack || err));
      showToast(`เกิดข้อผิดพลาด: ${err.message || 'ไม่สามารถแปลงรูปภาพได้'} 😿`);
    });
  }, 150);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  
  toastMsg.innerText = message;
  
  toast.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
  toast.classList.add('opacity-100', 'scale-100');
  
  setTimeout(() => {
    toast.classList.remove('opacity-100', 'scale-100');
    toast.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
  }, 3000);
}

// Global Image Error handler for HTML fallback
window.onCatImageError = function(img) {
  img.classList.add('hidden');
  const emoji = document.getElementById('result-cat-emoji');
  if (emoji) {
    emoji.classList.remove('hidden');
  }
};

window.onCompanionImageError = function(img, emojiId) {
  img.classList.add('hidden');
  const emoji = document.getElementById(emojiId);
  if (emoji) {
    emoji.classList.remove('hidden');
  }
};
