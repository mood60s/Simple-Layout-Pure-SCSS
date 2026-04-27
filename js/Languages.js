// Select Elements,
let h1Header = document.querySelector(".header .logo h1");
let paragraphHeader = document.querySelector(".header .logo p");
let linksHeader = document.querySelectorAll(".header .navbar li a");
let ourservice = document.querySelector(".our-service");
let quote = document.querySelector(".quote");
let servicetitle = document.querySelectorAll(".services .service-title");
let serviceDesc = document.querySelectorAll(".services .service-desc");
let servicelink = document.querySelectorAll(".services .service-link");
let contentService = document.querySelector(".service-content");
let titleOurPlayer = document.querySelector(".title-sec-ourplayer");
let playersNames = document.querySelectorAll(".our-players .player-title");
let playersDesc = document.querySelectorAll(".our-players .player-desc");
let titleSecLorem = document.querySelector(".title-sec-lorem-ipsum");
let HeadingFooter = document.querySelectorAll("footer .section-title");
let titlesGallery = document.querySelectorAll(".title-gallery");
let descGallery = document.querySelectorAll(".desc-gallery");
let titleAndDesc = Array.from([...titlesGallery, ...descGallery]);
let companyInformation = document.querySelectorAll(".info-company .deatil");
let workingHoursCompany = document.querySelector(".info-company .working");
let descCompany = document.querySelector(".info-company .desc-company");
let allInputsContactUs = document.querySelectorAll(".my-input");
let submitFormButton = document.querySelector(".submit-button");
let copyright = document.querySelector("footer .copyright .text");
let author = document.querySelector("footer .copyright .author");
// Lanagaues Content
const En = {
  h1Logo: "Pure SASS Layout",
  paragraphHeader: "a Simple Layout",
  links: ["home page", "demo sass", "width", "link", "pure sass"],
  ourservice: "our service",
  quote: "if you do it right it will be last forever",
  servicetitle: "test title",
  servicesDesc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              suscipit voluptates tempora quaerat error mollitia necessitatibus
              ut. Obcaecati, totam neque! Fugiat quae cum est accusantium
              officiis`,
  servicelink: "read more...",
  boxshadow: "-1px 2px 3px #ccc",
  ourplayer: "our player",
  NameOfPlayers: ["sayed", "peter", "jack", "mary"],
  playerDesc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore suscipit voluptates tempora quaerat error mollitia necessitatibus ut. Obcaecati, totam neque! Fugiat quae cum est accusantium officiis",
  secloremTitle: "lorem-ipsum",
  titlesGallery: ["latest blog", "company details", "contact us"],
  contentTitleAndDescGallery: [
    "lorem testing title",
    "lorem testing title",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Obcaecati totam tenetur laudantium cumque excepturi. Possimus",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Obcaecati totam tenetur laudantium cumque excepturi. Possimus",
  ],
  infoCompany: [
    "company name",
    "street name & number town ",
    "postal code",
    "tel: 123-456-789",
    "fax: 012-012-013",
    "email: me@nn.com",
  ],
  workingHours: "Working Hours",
  descCompany: "Monday - Friday 08:00 - 17:00",
  placeholdersInputs: ["name", "email", "subject"],
  submit: "submit",
  copyright: "all right reserved © 2026",
  author: "Designed By Os Template coded mood60s",
};
const Ar = {
  h1Logo: "تخطيط ساس النقي",
  paragraphHeader: "تخطيط بسيط",
  links: ["الصفحة الرئيسية", "عرض ساس", "العرض", "رابط", "تخطيط ساس النقي"],
  ourservice: "خدما تنا",
  quote: "إذا قمت به بالشكل الصحيح، فسيستمر للأبد",
  servicetitle: "عنوان تجريبي",
  servicesDesc: `لوريم إيبسوم هو نص شكلي يُستخدم في تصميم المواقع لعرض الشكل العام للنص. يمكن استبداله بمحتوى حقيقي لاحقًا.`,
  servicelink: "اقرأ المزيد...",
  boxshadow: "1px 2px 3px #ccc",
  ourplayer: "لاعبنا",
  NameOfPlayers: ["سيد", "بيتر", "جاك", "ماري"],
  playerDesc:
    "الألم نفسه هو حب، لكنه يتبع نظامًا معينًا. مع مرور الوقت، تنشأ بعض المتع المؤقتة نتيجة خطأ أو احتياج معين. ولكن، أحيانًا ما يتم تجاهل بعض الأمور أو نسيانها. وقد يحدث أن يسعى الشخص لتحقيق شيء ما، لكنه يواجه اتهامات أو تحديات في طريقه.",
  secloremTitle: "نص تجريبي يُستخدم في التصميم،",
  titlesGallery: ["الأحدث من المدونة", "تفاصيل الشركة", "اتصل بنا"],
  contentTitleAndDescGallery: [
    "نص تجريبي للتصميم",
    "نص تجريبي للتصميم",
    "الألم نفسه، كما هو، محبوب، لكنه يتبع نمطًا معينًا. يتم تجاهل الأمور تمامًا، ويُمدح الثبات أحيانًا مع بعض الاستثناءات. وقد يكون ذلك ممكنًا.",
    "الألم نفسه، كما هو، محبوب، لكنه يتبع نمطًا معينًا. يتم تجاهل الأمور تمامًا، ويُمدح الثبات أحيانًا مع بعض الاستثناءات. وقد يكون ذلك ممكنًا.",
  ],
  infoCompany: [
    "اسم الشركة",
    "اسم الشارع ورقمه، المدينة",
    "رمز بريدي",
    "الهاتف",
    "فاكس",
    "بريد إلكتروني",
  ],
  workingHours: "ساعات العمل",
  descCompany:
    "من الإثنين إلى الجمعة، من الساعة 8:00 صباحاً إلى الساعة 5:00 مساءً",
  placeholdersInputs: ["اسمك", "بريد إلكتروني", "موضوع"],
  submit: "يُقدِّم",
  copyright: "جميع الحقوق محفوظة © 2026",
  author: "تم التصميم بواسطة Os Template تمت البرمجة بواسطة mood60s",
};
function switchLanguage() {
  const lang = document.documentElement.lang;
  const data = lang == "en" ? En : Ar;
  h1Header.textContent = data.h1Logo;
  paragraphHeader.textContent = data.paragraphHeader;
  quote.textContent = data.quote;
  ourservice.textContent = data.ourservice;
  linksHeader.forEach((a, i) => (a.textContent = data.links[i]));
  servicetitle.forEach((service) => (service.textContent = data.servicetitle));
  serviceDesc.forEach((desc) => (desc.textContent = data.servicesDesc));
  servicelink.forEach((link) => (link.textContent = data.servicelink));
  contentService.style.boxShadow = data.boxshadow;
  titleOurPlayer.textContent = data.ourplayer;
  playersNames.forEach(
    (player, i) => (player.textContent = data.NameOfPlayers[i]),
  );
  playersDesc.forEach((player) => (player.textContent = data.playerDesc));
  titleSecLorem.textContent = data.secloremTitle;
  HeadingFooter.forEach(
    (head, i) => (head.textContent = data.titlesGallery[i]),
  );
  titleAndDesc.forEach(
    (titleAndDesc, i) =>
      (titleAndDesc.textContent = data.contentTitleAndDescGallery[i]),
  );
  companyInformation.forEach(
    (infocomp, i) => (infocomp.textContent = data.infoCompany[i]),
  );
  workingHoursCompany.textContent = data.workingHours;
  descCompany.textContent = data.descCompany;
  allInputsContactUs.forEach((input, i) =>
    input.setAttribute("placeholder", data.placeholdersInputs[i]),
  );
  submitFormButton.textContent = data.submit;
  copyright.textContent = data.copyright;
  author.textContent = data.author;
}
function setLang(mylang, dir) {
  document.documentElement.lang = mylang;
  document.body.setAttribute("dir", dir);
  document.querySelector(".track").style.transform = "translateX(0)";
  switchLanguage();
  dir == "ltr"
    ? (document.querySelector(".the-toggler").style.cssText =
        "left: unset; right: 15px;")
    : (document.querySelector(".the-toggler").style.cssText =
        "left: 15px; right: unset;");
}
window.onload = () => {
  switchLanguage();
};
