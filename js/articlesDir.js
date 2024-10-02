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
    title: "formatting",
    desc: "artical",
    image: "img/formatting.png",
    link: "Articles/formatting.html",
    place: "items",
    tags: "how to do creator formatting articles google forms help keegan"
  }
];

let done = false;

function getData() {
  const spreadsheetId = "1LlL8mrSXTTV6qHOkUKd57oVb0uZATq037Wg4ltlDreg";
  const sheetName = "doxxerpedia";
  const sheetId = "AIzaSyBie4PasgrxYkF7LRl8zcCGUsnBnwZ8pWE";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${sheetId}`;

  fetch(url)
    .then(response => response.json())
    .then(dat => {
      if (dat) {
        const responseData = formatData(dat);
        data.push(...responseData);
        done = true;
      }
    })
    .catch(error => console.error(error));
}

function formatData(dat) {
  const formattedData = [];
  var articleCount = 0;

  for (let i = 1; i < dat.values.length; i++) {
    const response = dat.values[i];
    const responseNumber = i;// + 1; // add 1 to ignore header
    var imageURL = "img/wikabedia%20icon.png";

    if (response) {
      var image = response[5] || imageURL;
      if (image.includes("https://")) {
        // is a web url
        if (image.includes("drive.google.com")) {
          // is google drive
          const imageId = response[5].toString().replace('https://drive.google.com/open?id=', '');
          const newImageUrl = `https://drive.google.com/thumbnail?id=${imageId}`;
          image = newImageUrl;
        } else {
          // is a regular web url
          image = image;
        }
      } else {
        // is a local url so remove ../
        image = image.replace(/\.\.\//i, "");
      }

      // increase the article count
      if (responseNumber > articleCount) {
        articleCount = responseNumber;
      }

      // log the image url for debugging
      try {
        createLog("log", image);
        image = image.replace("../", "");
      } catch (err) {
        createLog("error", image, "none", "image.replace - articlesDir.js");
        console.error(err);
      }

      const item = {
        title: response[3], // Column D
        desc: response[4], // Column E
        image: image, // Column F
        link: `Articles/article.html?article=${responseNumber}`,
        place: "items",
        tags: response[2] + " " + response[1], // Column B, & Column C
        approved: response[8]
      };

      formattedData.push(item);
    }
  }

  return formattedData;
}

getData();

// A = date made
// B = email
// C = name
// D = title
// E = desc
// F = image
// G = articleTitle
// H = mainText
// I = appropriate or not