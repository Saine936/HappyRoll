// Central site content for Happy Rolls.
// PLACEHOLDERS (replace before publishing):
export const INSTAGRAM_URL = "https://instagram.com/happyrollsdessertbar";
export const INSTAGRAM_HANDLE = "@happyrollsdessertbar";
export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps"; // PLACEHOLDER: Google reviews link
export const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Happy+Rolls+1195+Wellington+St+W+Ottawa"; // PLACEHOLDER: exact Google Maps URL
export const CONTACT_FORM_ENDPOINT = ""; // PLACEHOLDER: contact form destination

export const PHONE = "(613) 324-7701";
export const PHONE_TEL = "+16133247701";
export const ADDRESS_LINE1 = "1195 Wellington St. W";
export const ADDRESS_LINE2 = "Hamilton Ave N side";
export const ADDRESS_CITY = "Ottawa, ON K1Y 2Z6";
export const RATING = "4.9";
export const REVIEW_COUNT = "440+";
export const MAP_EMBED =
  "https://www.google.com/maps?q=1195%20Wellington%20St%20W%2C%20Ottawa%2C%20ON%20K1Y%202Z6&output=embed";

export const IMG = {
  hero: "https://images.hostinger.com/c6d648be-ae90-4bfe-aa0e-f1a62fd82671.png",
  rolling: "https://images.hostinger.com/1502ba81-0be2-40cd-8bc2-3d2e3df64162.png",
  bananaPudding: "https://images.hostinger.com/d5d34c18-37d2-4f8e-9c86-7f17d30a19bc.png",
  rolledIce: "https://images.hostinger.com/4e7efb8a-8538-4676-9c0c-073b5e844585.png",
  waffle: "https://images.hostinger.com/11f60b13-086c-47cc-86f8-8aaafa1ab0d0.png",
  chocStraw: "https://images.hostinger.com/04e34277-a71d-4bab-bf98-879596c716f3.png",
  ferrero: "https://images.hostinger.com/df850156-37b9-4106-9164-feaf96a658f2.png",
  pistachio: "https://images.hostinger.com/18fe655f-8fc6-4c1c-baf6-95cccfe9ae88.png",
  prepping: "https://images.hostinger.com/f7890c63-0b79-492b-adde-dab0864a80cf.png",
  hotChoc: "https://images.hostinger.com/f906b3c4-21b3-479c-929e-d432980471f5.png",
  interior: "https://images.hostinger.com/5e670e30-df93-4a55-861a-01e350ef591e.png",
  customers: "https://images.hostinger.com/e253fb3d-bae1-49af-bfa5-7f7b841c4c2a.png",
  strawBanana: "https://images.hostinger.com/4381b214-de02-4859-a924-fcca886fa562.png",
  oreoRoll: "https://images.hostinger.com/043c6c84-3d34-4c8e-b57e-484745dccc7d.png",
  storefront: "https://images.hostinger.com/f7c2074d-ce3f-4b1e-81c1-1df45cb887eb.png",
};

export const HOURS = [
  { day: "Monday", time: "2:00 p.m. – 9:00 p.m." },
  { day: "Tuesday", time: "2:00 p.m. – 9:00 p.m." },
  { day: "Wednesday", time: "2:00 p.m. – 9:00 p.m." },
  { day: "Thursday", time: "2:00 p.m. – 9:00 p.m." },
  { day: "Friday", time: "2:00 p.m. – 10:00 p.m." },
  { day: "Saturday", time: "2:00 p.m. – 10:00 p.m." },
  { day: "Sunday", time: "2:00 p.m. – 9:00 p.m." },
];

export function todayHours() {
  return HOURS[(new Date().getDay() + 6) % 7];
}

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/reviews" },
  { label: "Visit Us", to: "/visit" },
  { label: "Contact", to: "/contact" },
];

export const FAVOURITES = [
  { name: "Banana Pudding", img: IMG.bananaPudding, price: "from $9",
    desc: "Creamy, layered and available in classic, banana cookie butter and strawberry flavours." },
  { name: "Rolled Ice Cream", img: IMG.rolledIce, price: "from $10",
    desc: "Freshly prepared in front of you with flavours such as Oreo, brownie batter, Ferrero Rocher and Dubai chocolate." },
  { name: "Liège Waffles", img: IMG.waffle, price: "from $9",
    desc: "Warm brioche-style waffles with a caramelized pearl-sugar crust and indulgent toppings." },
  { name: "Chocolate Strawberry Cups", img: IMG.chocStraw, price: "from $10",
    desc: "Fresh strawberries covered with rich chocolate, with regular and pistachio kunafa options." },
  { name: "Ferrero Rocher Creations", img: IMG.ferrero, price: "from $12",
    desc: "Rich hazelnut and chocolate flavours available in select rolled ice cream and specialty desserts." },
  { name: "Pistachio Kunafa Desserts", img: IMG.pistachio, price: "from $15",
    desc: "Chocolate, pistachio and crispy kunafa-inspired flavours combined into a premium dessert experience." },
];

export const REVIEWS = [
  { text: "Best banana pudding I've ever tried. The cookie butter was my favourite, and the customer service was excellent.", theme: "Banana pudding" },
  { text: "The hot chocolate was a 10/10. Rich, flavourful and unlike typical hot chocolate mix.", theme: "Hot chocolate" },
  { text: "The rolled ice cream was creamy, fresh and so much fun to watch being made.", theme: "Rolled ice cream" },
  { text: "We came all the way from Kingston for the hot chocolate and banana pudding. Both were amazing.", theme: "Worth the trip" },
  { text: "The Dubai chocolate pistachio kunafa rolled ice cream was so good. I will definitely be back.", theme: "Unique flavours" },
  { text: "The brownie batter rolled ice cream was delicious, and the person serving us was incredibly nice.", theme: "Friendly service" },
];

export const MENU = [
  {
    id: "waffles",
    title: "Liège Waffles",
    intro: "Warm brioche-style waffles with a caramelized pearl-sugar crust.",
    img: IMG.waffle,
    items: [
      { name: "Classic Liège", price: "$9", desc: "A warm and rich brioche-dough waffle with a caramelized pearl-sugar crust." },
      { name: "Chocolate Strawberry", price: "$14", desc: "Fresh-cut strawberries with Belgian chocolate and whipped cream." },
      { name: "Banana Nutella", price: "$12", desc: "Nutella drizzle with freshly sliced bananas and whipped cream." },
      { name: "Raspberry Mascarpone", price: "$16", desc: "Raspberry compote topped with mascarpone whipped cream." },
      { name: "Brown Butterscotch Pecan", price: "$14", desc: "House-made brown-butter butterscotch sauce topped with roasted pecans." },
      { name: "Oreo Chocolate", price: "$14", desc: "Belgian chocolate drizzle topped with crushed Oreos." },
      { name: "Chocolate Pistachio Kunafa", price: "$16", desc: "Belgian chocolate drizzle, pistachio kunafa paste and additional chocolate drizzle." },
    ],
  },
  {
    id: "pudding",
    title: "Banana Pudding",
    intro: "Creamy, layered and one of Ottawa's most talked-about banana puddings.",
    img: IMG.bananaPudding,
    items: [
      { name: "Classic", price: "$9", desc: "Classic creamy banana pudding layered with banana flavour and comforting sweetness." },
      { name: "Banana Cookie Butter", price: "$10", desc: "Creamy banana pudding combined with rich cookie butter flavour." },
      { name: "Strawberry", price: "$10", desc: "Creamy banana pudding finished with sweet strawberry flavour." },
    ],
  },
  {
    id: "rolled",
    title: "Rolled Ice Cream",
    intro: "Freshly prepared on a cold plate and rolled right in front of you.",
    img: IMG.rolledIce,
    items: [
      { name: "Regular Rolled Ice Cream", price: "$10", desc: "Choose from our regular rolled ice cream flavours, prepared fresh in front of you.", flavours: ["Oreo", "Cookie Butter", "Banana Nutella", "Skor", "Mango", "Strawberry Banana", "Brownie Batter"] },
      { name: "Special Rolled Ice Cream", price: "$12", desc: "Signature rolled ice cream creations featuring premium flavours, sauces and toppings.", flavours: ["Strawberry Cheesecake", "Banana Pudding", "Oreo Cheesecake", "Ferrero Rocher"] },
      { name: "Premium Rolled Ice Cream", price: "$15", desc: "A premium rolled ice cream creation inspired by Dubai chocolate flavours.", flavours: ["Dubai Chocolate"] },
    ],
  },
  {
    id: "cups",
    title: "Chocolate Strawberry Cups",
    intro: "Fresh strawberries and rich chocolate served in a dessert cup.",
    img: IMG.chocStraw,
    items: [
      { name: "Regular", price: "$10", desc: "Fresh strawberries covered with rich chocolate and served in a dessert cup." },
      { name: "Pistachio Kunafa", price: "$15", desc: "Fresh strawberries combined with chocolate, pistachio and crispy kunafa-inspired flavours." },
    ],
  },
];

export const WAFFLE_TOPPINGS = [
  "Maple Syrup", "Nutella", "Biscoff", "Caramel",
  "Belgian Chocolate", "Brown-Butter Butterscotch Sauce", "Mascarpone Cream",
];
