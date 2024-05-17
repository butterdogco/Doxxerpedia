if (document.getElementById('pageName')) {
  const articleName = document.getElementById('pageName').innerHTML; // get the article name
  const pageName = articleName + " - wikabedia"; // create a page name
  document.title = pageName; // change the page name
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function load(head,text,image,url,e) {
  web = "site('../" + url + "')";
  if (!image.toString().includes("../")) {
    if (!image.toString().includes("https://drive.google.com")) {
      image = "../" + image;
    }
  }
  const div = document.createElement('div');
  const img = document.createElement('img');
  const hding = document.createElement('h3');
  const p = document.createElement('p');
  div.setAttribute('class','item');
  div.setAttribute('onclick',web);
  img.setAttribute('src',image);
  hding.innerHTML = head;
  p.innerHTML = text;
  
  if (e === null) {
    e = "items";
  }
  
  if (url === null) {
    url == "#";
  }
  
  document.getElementById(e).appendChild(div);
  div.appendChild(img);
  div.appendChild(hding);
  div.appendChild(p);
}

function site(url) {
  document.body.style.opacity = 0;
  setTimeout(function() {
  window.location.href = url;
  },250);
}

function createSearch() {
  const d = document.createElement('div');
  d.setAttribute('class','search');
  d.id = 'searchDiv';
  document.body.appendChild(d);
  
  const i = document.createElement('img');
  i.setAttribute('src','../img/search.png');
  i.setAttribute('onclick','search("page2");');
  d.appendChild(i)
  
  const t = document.createElement('input');
  t.setAttribute('type','text');
  t.setAttribute('placeholder','search for something');
  t.id = 'searchBox';
  t.onkeypress = function(event) {
    if (event.key === 'Enter') {
      search("page2");
    }
  };
  d.appendChild(t);
  
  // const s = document.createElement('script');
  // // s.setAttribute('src','../js/search.js');
  // s.src = '../js/searchCorner.js';
  // document.body.appendChild(s);
}

createSearch();

function search() {
  url = "../search.html?search=" + document.getElementById('searchBox').value;
  if (url !== undefined) {
    document.body.style.opacity = 0;
    setTimeout(function() {
      window.location.href = url;
    }, 250);
  }
}

function search2(key) {
  if (event.key === "Enter") {
    search("page2");
  }
}

async function adjustSize() {
  if (document.getElementById("articleTitle") && document.getElementById("articleText")) {
    const height = document.getElementById("articleTitle").offsetHeight;
    const element = document.getElementById("articleText");
    element.style.marginTop = `calc(-70vh + ${height}px)`;
  } else if (document.getElementsByClassName("articleTitle")[0] && document.getElementsByClassName("articleText")[0]) {
    const height = document.getElementsByClassName("articleTitle")[0].offsetHeight;
    const element = document.getElementsByClassName("articleText")[0];
    element.style.marginTop = `calc(-70vh + ${height}px)`;
  }
}

window.onresize = adjustSize;
adjustSize();