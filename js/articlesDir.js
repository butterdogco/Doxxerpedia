// This is the directory of every article in Wikabedia, every article has an ID (the number it is down the list + 1)

const data = [
  {
    title: "wrld histry", // 1
    desc: "te worlds histry",
    image: "img/wrld-histry.jpeg",
    link: "Articles/wrld-histry.html",
    place: "items",
    tags: "world wrld wold history histry histoy 2023 2021 2020 19 18 16 15 14 earth erth eath eart keegan",
    text: "yeer is 2023. peeple did tings!"
  },
  {
    title: "how to read engis", // 2
    desc: "tells you how to read",
    image: "img/how-to-read.jpeg",
    link: "Articles/how-to-read.html",
    place: "items",
    tags: "read english red read raed rad engis englis englih language anguage keegan",
    text: "1. read /n 2. finisdhed leson todya!!11"
  },
  {
    title: "how to typ letrs", // 3
    desc: "tels you how to typ",
    image: "img/how-to-type.jpeg",
    link: "Articles/how-to-type.html",
    place: "items",
    tags: "keyboard keys letters leter letter keybord kebord keboard type typing keegan"
  },
  {
    title: "how fish asigments erly", // 4
    desc: "help to finsh asignment erly",
    image: "img/how-to-fish-asigments-erly.jpeg",
    link: "Articles/how-to-fish-asignment.html",
    place: "items",
    tags: "finish finis finihs assignment asignment work classwork homework quiz quizes tests keegan"
  },
  {
    title: "whats the date", // 5
    desc: "the date",
    image: "img/whats-the-date.jpeg",
    link: "Articles/whats-the-date.html",
    place: "items",
    tags: "date time daet tiem calender calendar what's ical what's the date what's the daet keegan"
  },
  {
    title: "how eat eggplant", // 6
    desc: "lern to eat superfast",
    image: "img/how-eat-eggplant.jpeg",
    link: "Articles/how-to-eat-eggplant.html",
    place: "items",
    tags: "food eggplant eat egplant eggplan egplan eating edible keegan"
  },
  {
    title: "how see", // 7
    desc: "how light work",
    image: "img/how-see.jpeg",
    link: "Articles/how-see.html",
    place: "items",
    tags: "light physics science see lights bulb electricity keegan"
  },
  {
    title: "creating a piep bom", // 8
    desc: "step by sep tutorial",
    image: "img/creating-a-piep-bom.jpg",
    link: "Articles/Pipe-bomb.html",
    place: "items",
    tags: "weapon pipe bomb damage tnt explosive boom keegan"
  },
  {
    title: "hiding evidence", // 9
    desc: "tep by setp",
    image: "img/hiding-evidence.jpeg",
    link: "Articles/hide-evidence.html",
    place: "items",
    tags: "evidence hiding forest legal trouble keegan"
  },
  {
    title: "how to ge hot", // 10
    desc: "totoial set by ep",
    image: "img/how-to-get-hot.jpeg",
    link: "Articles/how-to-get-hot.html",
    place: "items",
    tags: "hot tempurature lava heat keegan"
  },
  {
    title: "how to b humen", // 11
    desc: "reel tutoieal",
    image: "img/how-to-be-human.jpg",
    link: "Articles/how-to-be-human.html",
    place: "items",
    tags: "human dog animal mammal pet person humanoid keegan"
  },
  {
    title: "how to do maht", // 12
    desc: "maht",
    image: "img/how-to-do-math.jpg",
    link: "Articles/how-to-math-do.html",
    place: "items",
    tags: "math algebra sin cos tan calculator maht meth keegan"
  },
  {
    title: "trens", // 13
    desc: "choo chooooo",
    image: "img/noah-trens.png",
    link: "Articles/noah-trens.html",
    place: "items",
    tags: "train whistle choo choo train noah"
  },
  {
    title: "da buterdog", // 14
    desc: "the ceo",
    image: "img/butterdog.jpg",
    link: "Articles/nolan-da-buterdog.html",
    place: "items",
    tags: "ceo butterdog buterdog nolan"
  },
  {
    title: "wat da dog", // 15
    desc: "wof oof",
    image: "img/wat-da-dog.jpg",
    link: "Articles/wat-da-dog.html",
    place: "items",
    tags: "dog woof bark doggy doggie keegan"
  },
  {
    title: "Noe nane givn1!", // 16
    desc: "tha artical",
    image: "img/kai-I fogot.JPG",
    link: "Articles/kai-I fogot.html",
    place: "items",
    tags: "i don no idk i don't know dont confused random potato kai"
  },
  {
    title: "E", // 17
    desc: "'E'",
    image: "img/kai-e.jpg",
    link: "Articles/kai-e.html",
    place: "items",
    tags: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE 'e' letter leter alphabet abc's abcs abcdefghijklmnopqrstuvwxyz kai"
  },
  {
    title: "us histrey", // 18
    desc: "ameica",
    image: "img/us-history.jpg",
    link: "Articles/us-histrey.html",
    place: "items",
    tags: "us united states of america american fat burger cheese sodium fat man fat people truck f150 ford falcon history histrey histoy fat men pollution gun pew pew weapons pistol assualt rifle shotgun glock 19 glock 17 ar 15 ar15 non-free healthcare food drugs death killing school shootings bacon unhealthy racism black white supremacy joe biden donald trump donald dump fatass rootbeer root beer coke coca-cola coca cola polar destroyer icecap melter ice cap melter earth heater global warming guns military tanks abrams shit drivers culture assholes 'merica 'merican blackface start of racism creator racism inventor"
  },
  {
    title: "how 2 maek mony", // 19
    desc: "b ritch",
    image: "img/nolan-b-ritch.jpg",
    link: "Articles/nolan-b-ritch.html",
    place: "items",
    tags: "money cash how to be rich bank of america nolan"
  },
    {
    title: "top 5 positions", // 20
    desc: "like and sub",
    image: "img/nolan-top-5-positions.png",
    link: "Articles/nolan-top-5-positions.html",
    place: "items",
    tags: "sit down sitting down seating chair positions nolan"
  },
  {
    title: "How 2 Invest", // 21
    desc: "Get ritch",
    image: "img/nolan-how-2-invest.jpg",
    link: "Articles/nolan-how-2-invest.html",
    place: "items",
    tags: "invest money rich ritch investing money cash dollar $ nolan"
  },
  {
    title: "wrld histry 2: rematserd", // 22
    desc: "new version",
    image: "img/nolan-world-history-2.jpeg",
    link: "Articles/nolan-world-history-2.html",
    place: "items",
    tags: "world history earth lore world lore nolan"
  },
  {
    title: "Your answer", // 23
    desc: "Your answer",
    image: "img/nolan-your-answer.png",
    link: "Articles/nolan-your-answer.html",
    place: "items",
    tags: "your answer useless article nolan"
  },
  {
    title: "How to draw good", // 24
    desc: "how 2 draw",
    image: "img/kai-how-to-draw.PNG",
    link: "Articles/kai-how-to-draw.html",
    place: "items",
    tags: "draw artist drawing tutorial kai"
  },
  {
    title: "idk", // 25
    desc: "imbouttobust",
    image: "img/alexis-idk.png",
    link: "Articles/alexis-idk.html",
    place: "items",
    tags: "idk alexis"
  },
];

// function sheetData(c1,c2) {
//   const spreadsheetId = '1LlL8mrSXTTV6qHOkUKd57oVb0uZATq037Wg4ltlDreg';
//   const range = 'wikabedia!' + c1/* + ":" + c2*/; // Specify the sheet name and range

//   fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=AIzaSyBie4PasgrxYkF7LRl8zcCGUsnBnwZ8pWE`)
//     .then(response => response.json())
//     .then(data => {
//       // Process the data
//       // alert(data.values);
//       // document.getElementById("logoText").innerHTML = JSON.stringify(data);
//       return data.values;
//     });
// }