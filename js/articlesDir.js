// This is the directory of every article in Wikabedia, every article has an ID (the number it is down the list + 1)

// function getSheetData2(c1, c2) {
//   const spreadsheetId = '1LlL8mrSXTTV6qHOkUKd57oVb0uZATq037Wg4ltlDreg';
//   const range = 'Form Responses 2!' + c1; // Specify the sheet name and range

//   fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=AIzaSyBie4PasgrxYkF7LRl8zcCGUsnBnwZ8pWE`)
//     .then(response => response.json())
//     .then(data => {
//       let val = data.values;
      
//       return val;
//     });
// }
 
 // C = name
 // D = title
 // E = desc
 // F = image
 // G = articleTitle
 // H = mainText
 // I = appropriate or not

let data = [
  {
    title: "wrld histry", // 1
    desc: "te worlds histry",
    image: "img/wrld-histry.jpeg",
    link: "Articles/wrld-histry.html",
    place: "items",
    tags: "world history histry histoy 2023 2021 2020 19 18 16 15 14 earth erth eath eart keegan",
    text: "yeer is 2023. peeple did tings!"
  },
  {
    title: "how to read engis", // 2
    desc: "tells you how to read",
    image: "img/how-to-read.jpeg",
    link: "Articles/how-to-read.html",
    place: "items",
    tags: "how to read english read english red read raed rad engis englis englih language anguage keegan",
    text: "1. read /n 2. finisdhed leson todya!!11"
  },
  {
    title: "how to typ letrs", // 3
    desc: "tels you how to typ",
    image: "img/how-to-type.jpeg",
    link: "Articles/how-to-type.html",
    place: "items",
    tags: "how to type letters keyboard keys letters leter letter keybord kebord keboard type typing keegan"
  },
  {
    title: "how fish asigments erly", // 4
    desc: "help to finsh asignment erly",
    image: "img/how-to-fish-asigments-erly.jpeg",
    link: "Articles/how-to-fish-asignment.html",
    place: "items",
    tags: "how to finish assignments early finish finis finihs assignment asignment work classwork homework quiz quizes tests keegan"
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
    tags: "how to eat an eggplant how to eat eggplant food eggplant eat egplant eggplan egplan eating edible keegan"
  },
  {
    title: "how see", // 7
    desc: "how light work",
    image: "img/how-see.jpeg",
    link: "Articles/how-see.html",
    place: "items",
    tags: "how to see how light works physics science see lights bulb electricity keegan"
  },
  {
    title: "creating a piep bom", // 8
    desc: "step by sep tutorial",
    image: "img/creating-a-piep-bom.jpg",
    link: "Articles/Pipe-bomb.html",
    place: "items",
    tags: "how to create a pipe bomb weapon pipe bomb damage tnt explosive boom keegan"
  },
  {
    title: "hiding evidence", // 9
    desc: "tep by setp",
    image: "img/hiding-evidence.jpeg",
    link: "Articles/hide-evidence.html",
    place: "items",
    tags: "how to hide evidence hiding forest legal trouble keegan"
  },
  {
    title: "how to ge hot", // 10
    desc: "totoial set by ep",
    image: "img/how-to-get-hot.jpeg",
    link: "Articles/how-to-get-hot.html",
    place: "items",
    tags: "how to get hot tempurature lava heat keegan"
  },
  {
    title: "how to b humen", // 11
    desc: "reel tutoieal",
    image: "img/how-to-be-human.jpg",
    link: "Articles/how-to-be-human.html",
    place: "items",
    tags: "how to be human dog animal mammal pet person humanoid keegan"
  },
  {
    title: "how to do maht", // 12
    desc: "maht",
    image: "img/how-to-do-math.jpg",
    link: "Articles/how-to-math-do.html",
    place: "items",
    tags: "how to do math algebra sin cos tan calculator maht meth keegan"
  },
  // {
  //   title: "trens", // 13
  //   desc: "choo chooooo",
  //   image: "img/noah-trens.png",
  //   link: "Articles/article.html?article=2",
  //   place: "items",
  //   tags: "train whistle trains choo choo train noah"
  // },
  // {
  //   title: "da buterdog", // 14
  //   desc: "the ceo",
  //   image: "img/butterdog.jpg",
  //   link: "Articles/nolan-da-buterdog.html",
  //   place: "items",
  //   tags: "the ceo of butterdogco buterdog nolan"
  // },
  {
    title: "wat da dog", // 15
    desc: "wof oof",
    image: "img/wat-da-dog.jpg",
    link: "Articles/wat-da-dog.html",
    place: "items",
    tags: "whats a dog what's a dog woof bark doggy doggie keegan"
  },
  // {
  //   title: "Noe nane givn1!", // 16
  //   desc: "tha artical",
  //   image: "img/kai-I fogot.JPG",
  //   link: "Articles/article.html?article=4",
  //   place: "items",
  //   tags: "i don no idk i don't know dont confused random potato kai"
  // },
  // {
  //   title: "E", // 17
  //   desc: "'E'",
  //   image: "img/kai-e.jpg",
  //   link: "Articles/article.html?article=5",
  //   place: "items",
  //   tags: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE 'e' letter leter alphabet abc's abcs abcdefghijklmnopqrstuvwxyz kai"
  // },
  {
    title: "us histrey", // 18
    desc: "ameica",
    image: "img/us-history.jpg",
    link: "Articles/us-history.html",
    place: "items",
    tags: "us united states of america american fat burger cheese sodium fat man fat people truck f150 ford falcon history histrey histoy fat men pollution gun pew pew weapons pistol assualt rifle shotgun glock 19 glock 17 ar 15 ar15 non-free healthcare food drugs death killing school shootings bacon unhealthy racism black white supremacy joe biden donald trump donald dump fatass rootbeer root beer coke coca-cola coca cola polar destroyer icecap melter ice cap melter earth heater global warming guns military tanks abrams shit drivers culture assholes 'merica 'merican blackface start of racism creator racism inventor"
  },
  // {
  //   title: "how 2 maek mony", // 19
  //   desc: "b ritch",
  //   image: "img/nolan-b-ritch.jpg",
  //   link: "Articles/article.html?article=6",
  //   place: "items",
  //   tags: "money cash be rich bank of america nolan"
  // },
  //   {
  //   title: "top 5 positions", // 20
  //   desc: "like and sub",
  //   image: "img/nolan-top-5-positions.png",
  //   link: "Articles/article.html?article=7",
  //   place: "items",
  //   tags: "sit down sitting down seating chair positions nolan"
  // },
  // {
  //   title: "How 2 Invest", // 21
  //   desc: "Get ritch",
  //   image: "img/nolan-how-2-invest.jpg",
  //   link: "Articles/article.html?article=8",
  //   place: "items",
  //   tags: "invest money rich ritch investing money cash dollar $ nolan"
  // },
  // {
  //   title: "wrld histry 2: rematserd", // 22
  //   desc: "new version",
  //   image: "img/nolan-world-history-2.jpeg",
  //   link: "Articles/article.html?article=10",
  //   place: "items",
  //   tags: "world history earth lore world lore nolan"
  // },
  // {
  //   title: "Your answer", // 23
  //   desc: "Your answer",
  //   image: "img/nolan-your-answer.png",
  //   link: "Articles/article.html?article=11",
  //   place: "items",
  //   tags: "your answer useless article nolan"
  // },
  // {
  //   title: "How to draw good", // 24
  //   desc: "how 2 draw",
  //   image: "img/kai-how-to-draw.PNG",
  //   link: "Articles/article.html?article=12",
  //   place: "items",
  //   tags: "draw artist drawing tutorial kai"
  // },
  // {
  //   title: "idk", // 25
  //   desc: "imbouttobust",
  //   image: "img/alexis-idk.png",
  //   link: "Articles/article.html?article=13",
  //   place: "items",
  //   tags: "idk alexis"
  // },
  // {
  //   title: "corona virus", // 26
  //   desc: "aka covid-19",
  //   image: "img/nolan-covid.jpeg",
  //   link: "Articles/article.html?article=14",
  //   place: "items",
  //   tags: "corona virus covid-19 covid 19 pandemic world lockdown nolan"
  // },
  // {
  //   title: "Southridge High School", // 27
  //   desc: "beaverton OR",
  //   image: "img/nolan-the-ridge.jpeg",
  //   link: "Articles/article.html?article=15",
  //   place: "items",
  //   tags: "school southridge high school beaverton school district admin oregon united states of american high school public school nolan"
  // },
  // {
  //   title: "World Trade Center", // 28
  //   desc: "i forgot",
  //   image: "img/nolan-wtc.jpeg",
  //   link: "Articles/article.html?article=16",
  //   place: "items",
  //   tags: "american explosion wtc world trade center 9/11 united states of america osama bin laden nolan"
  // },
  // {
  //   title: "doors rblx", // 29
  //   desc: "funny",
  //   image: "img/nolan-doors.jpeg",
  //   link: "Articles/article.html?article=17",
  //   place: "items",
  //   tags: "doors roblox doors game gaming this looks like gaming area nolan"
  // },
  // {
  //   title: "seamen", // 30 eeeeeeeeeeeeeeeeeeeeeeeeeee
  //   desc: "aka sailors",
  //   image: "img/nolan-seamen.jpeg",
  //   link: "Articles/article.html?article=18",
  //   place: "items",
  //   tags: "seamen semen sea ocean water earth h2o h20 nolan"
  // },
  //   {
  //   title: "carrot", // 31
  //   desc: "carrot",
  //   image: "img/nolan-carrot.png",
  //   link: "Articles/article.html?article=19",
  //   place: "items",
  //   tags: "food carrot vegetable fruit nolan"
  // },
  // {
  //   title: "Ford F150", // 32
  //   desc: "best car",
  //   image: "img/nolan-f150.jpeg",
  //   link: "Articles/article.html?article=20",
  //   place: "items",
  //   tags: "henry ford america fat man car pickup truck racist polar destroyer nolan"
  // },
  // {
  //   title: "how to drive", // 33
  //   desc: "drive",
  //   image: "img/nolan-drive.jpeg",
  //   link: "Articles/article.html?article=21",
  //   place: "items",
  //   tags: "motor vehicle car driving test drive sedan coupe pickup truck hatchback suv nolan"
  // },
  // {
  //   title: "gambling", // 34
  //   desc: "zoom",
  //   image: "img/nolan-gambling.jpeg",
  //   link: "Articles/article.html?article=22",
  //   place: "items",
  //   tags: "doors roblox doors game gaming this looks like gaming area nolan"
  // },
  // {
  //   title: "how newclr futin", // 35
  //   desc: "REAL!?!?!?/1",
  //   image: "img/alex-nuclear.webp",
  //   link: "Articles/alex-nuclear.html",
  //   place: "items",
  //   tags: "nuclear fusion tutorial illegal boom alex"
  // },
  // {
  //   title: "ram", // 36
  //   desc: "built serve",
  //   image: "img/nolan-ram.jpg",
  //   link: "Articles/article.html?article=24",
  //   place: "items",
  //   tags: "ram 1500 american polar destroyer polluter cruiser nolan"
  // },
  // {
  //   title: "waze 2 get 2 skool", // 37 continue from here
  //   desc: "don go skool",
  //   image: "img/nolan-school.jpeg",
  //   link: "Articles/article.html?article=25",
  //   place: "items",
  //   tags: "school beaverton school disctrict transport how to get to school nolan"
  // },
  // {
  //   title: "how 2 evade taxes", // 38
  //   desc: "serious",
  //   image: "img/nolan-evade.jpeg",
  //   link: "Articles/article.html?article=26",
  //   place: "items",
  //   tags: "how to evade taxes nolan"
  // },
  // {
  //   title: "FORTNITE VICTORY R...", // 39
  //   desc: "n0t clikbait",
  //   image: "img/nolan-fortnite.jpeg",
  //   link: "Articles/article.html?article=27",
  //   place: "items",
  //   tags: "youtube fortnite battle royale video game #1 victory royale nolan"
  // },
  // {
  //   title: "how 2 get XTRA ritch", // 40
  //   desc: "$$$$$$$$$$$$",
  //   image: "img/nolan-ritch.jpeg",
  //   link: "Articles/article.html?article=28",
  //   place: "items",
  //   tags: "how to get rich how to get extra rich nolan"
  // },
  // {
  //   title: "earth lore", // 41
  //   desc: "histor",
  //   image: "img/nolan-earth-lore.webp",
  //   link: "Articles/article.html?article=29",
  //   place: "items",
  //   tags: "planet earth lore milky way galaxy human nolan"
  // },
  // {
  //   title: "scartch", // 42
  //   desc: "coding lang",
  //   image: "img/nolan-scratch.jpeg",
  //   link: "Articles/article.html?article=30",
  //   place: "items",
  //   tags: "scratch.mit.edu coding language man nolan"
  // },
  // {
  //   title: "ButterDog CFO", // 43
  //   desc: "(2023)",
  //   image: "img/nolan-butterdog-cfo.jpeg",
  //   link: "Articles/article.html?article=31",
  //   place: "items",
  //   tags: "butterdogco cfo chief financial officer nolan"
  // },
  // {
  //   title: "Drogco", // 44
  //   desc: "dogrog",
  //   image: "img/nolan-drogco.png",
  //   link: "Articles/article.html?article=32",
  //   place: "items",
  //   tags: "butterdogco drogco company bankruptcy poor nolan"
  // },
  // {
  //   title: "Mountainside High School", // 45
  //   desc: "Beaverton OR",
  //   image: "img/kai-mountainside.jpeg",
  //   link: "Articles/article.html?article=33",
  //   place: "items",
  //   tags: "beaverton school district mhs southridge high school kai"
  // },
  // {
  //   title: "How Baby's are Made", // 46
  //   desc: "KIDS NO READ",
  //   image: "img/nolan-stork.jpeg",
  //   link: "Articles/article.html?article=34",
  //   place: "items",
  //   tags: "stork child sex naked female naked women nude woman dick cock missionary doggystyle cum squirt ejaculate white stuff nolan"
  // },
  // {
  //   title: "How to commit crimes", // 47
  //   desc: "steal stuff",
  //   image: "img/nolan-crimes.jpg",
  //   link: "Articles/article.html?article=35",
  //   place: "items",
  //   tags: "gun death pew pew kids nolan"
  // },
  // {
  //   title: "how eficianly comit war crim", // 48
  //   desc: "eficin criem",
  //   image: "img/war-crimes.jpeg",
  //   link: "Articles/article.html?article=36",
  //   place: "items",
  //   tags: "how to commit war crimes criminal missile bomb explode death keegan offical article"
  // }
];

let done = false;

function getResponseCount() {
  const spreadsheetId = "1LlL8mrSXTTV6qHOkUKd57oVb0uZATq037Wg4ltlDreg"; // Replace with your Google Sheets ID
  const sheetName = "Form Responses 2"; // Replace with your sheet name
  const apiKey = "AIzaSyBie4PasgrxYkF7LRl8zcCGUsnBnwZ8pWE"; // Replace with your API key

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const responseCount = data.values.length - 1; // Subtract 1 to exclude header row
      return responseCount;
    })
    .catch(error => console.error(error));
}

function getResponseData() {
  const spreadsheetId = "1LlL8mrSXTTV6qHOkUKd57oVb0uZATq037Wg4ltlDreg"; // Replace with your Google Sheets ID
  const sheetName = "Form Responses 2"; // Replace with your sheet name
  const apiKey = "AIzaSyBie4PasgrxYkF7LRl8zcCGUsnBnwZ8pWE"; // Replace with your API key

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(dat => {
      const responseData = formatResponseData(dat);
      data.push(...responseData);
      done = true;
    })
    .catch(error => alert(error));
}

function formatResponseData(dat) {
  const formattedData = [];

  // Assuming the responses start from the second row, skipping the header row
  for (let i = 1; i < dat.values.length; i++) {
    const response = dat.values[i];
    const responseNumber = i + 1; // Add 1 to align with 1-based index
    
    try { // Fix the image URL so it can be displayed
      const imageId = response[5].toString().replace('https://drive.google.com/open?id=', '');
      const newImageUrl = `https://drive.google.com/uc?export=view&id=${imageId}`;
      imageURL = newImageUrl;
    }
    catch (err) {
      console.error(err);
    }
    
    if (response[8] != "no") {
      const item = {
        title: response[3], // Column D
        desc: response[4], // Column E
        image: imageURL, // Column F
        link: `Articles/article.html?article=${responseNumber}`, // Use responseNumber in URL
        place: "items", // Fixed value as "items"
        tags: response[2] // Leave empty for now
      };
  
      formattedData.push(item);
    }
  }

  return formattedData;
}

getResponseData();

// alert(JSON.stringify(data);


// A = date made
// B = email
// C = name
// D = title
// E = desc
// F = image
// G = articleTitle
// H = mainText
// I = appropriate or not