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
  {
    title: "formatting", // 12
    desc: "artical",
    image: "img/formatting.png",
    link: "Articles/formatting.html",
    place: "items",
    tags: "how to do creator formatting articles google forms help keegan"
  }
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
      if (data) {
        const responseCount = data.values.length - 1; // Subtract 1 to exclude header row
        return responseCount;
      }
    })
    .catch(error => console.error(error));
}

function getResponseData() {
  const spreadsheetId = "1LlL8mrSXTTV6qHOkUKd57oVb0uZATq037Wg4ltlDreg";
  const sheetName = "Form Responses 2";
  const sheetId = "AIzaSyBie4PasgrxYkF7LRl8zcCGUsnBnwZ8pWE";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${sheetId}`;

  fetch(url)
    .then(response => response.json())
    .then(dat => {
      if (dat) {
        const responseData = formatResponseData(dat);
        data.push(...responseData);
        done = true;
      }
    })
    .catch(error => console.error(error));
}

function formatResponseData(dat) {
  const formattedData = [];

  // Assuming the responses start from the second row, skipping the header row
  for (let i = 1; i < dat.values.length; i++) {
    const response = dat.values[i];
    const responseNumber = i + 1; // Add 1 to align with 1-based index
    var imageURL = "../img/wikabedia%20icon.png";

    if (response[5]) {
      try { // Fix the image URL so it can be displayed
        if (response[5].toString().includes('../') === true) {
          imageURL = response[5].replace("../", "");
        } else if(response[5].toString().includes('https://drive.google.com')) {
          const imageId = response[5].toString().replace('https://drive.google.com/open?id=', '');
          const newImageUrl = `https://drive.google.com/thumbnail?id=${imageId}`;
          imageURL = newImageUrl;
        } else {
          imageURL = response[5].toString();
        }
      }
      catch (err) {
        console.error(err);
      }
    }

    if (response[1] && response[2] && response[3] && response[4] && response[8] && response[8] != "no") {
      console.log(response[3] + "\n" + response[4] + "\n" + response[5]);
      try {
        createLog(response[5], "none", "none");
      } catch (err) {

      }

      const item = {
        title: response[3], // Column D
        desc: response[4], // Column E
        image: imageURL, // Column F
        link: `Articles/article.html?article=${responseNumber}`,
        place: "items",
        tags: response[2] + " " + response[1] // Column B, & Column C
      };

      formattedData.push(item);
    }
  }

  return formattedData;
}

getResponseData();

// A = date made
// B = email
// C = name
// D = title
// E = desc
// F = image
// G = articleTitle
// H = mainText
// I = appropriate or not
