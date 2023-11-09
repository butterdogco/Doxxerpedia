function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function load(head,text,image,url,e) {
  web = "site('" + url + "')"
  const div = document.createElement('div');
  const img = document.createElement('img');
  const hding = document.createElement('h3');
  const p = document.createElement('p');
  div.setAttribute('class','item');
  div.setAttribute('onclick',web)
  img.setAttribute('src',image)
  hding.innerHTML = head;
  p.innerHTML = text;
  
  if (e === null) {
    e = "items";
  }
  
  if (url === null) {
    url == "#";
  }
  
  document.getElementById(e).appendChild(div)
  div.appendChild(img);
  div.appendChild(hding);
  div.appendChild(p);
}

function site(url) {
  document.body.style.opacity = 0;
  setTimeout(function() {
  window.location.href = url
  },250);
}

function search(mode) {
  var searchItemsElement = document.getElementById("searchItems");
  searchItemsElement.innerHTML = "";

  // Get the URL of the current page
  var url = new URL(window.location);

  // Get the search query parameter from the URL
  var searchQuery;
  if (mode === "load") {
    searchQuery = url.searchParams.get("search");
  } else if (mode === "page") {
    searchQuery = document.getElementById('searchBox').value;
    window.location.href = "?search=" + searchQuery;
  } else if (mode === "page2") {
    searchQuery = document.getElementById('searchBox2').value;
    window.location.href = "?search=" + searchQuery;
  }
  
  if (searchQuery === undefined) {
    searchQuery = ' ';
  }

  // Perform the search operation if a search query exists
  if (searchQuery) {
    document.getElementById('queryText').innerHTML = ''.concat("searched 4 '", searchQuery, "'");

    var found = false;

    // Use the search query to perform a search or any other operations
    // For example, search through a list of items
    data.forEach(item => {
      var words = searchQuery.split(' ');
      var match = words.some(word => item.title.includes(word) || item.desc.includes(word) || item.tags.includes(word));
      if (match) {
        found = true;
        load(item.title, item.desc, item.image, item.link, "searchItems");
      }
    });

    if (document.getElementById('searchItems').hasChildNodes() === false && found === false) {
      const e = document.createElement('h4');
      e.innerHTML = "sory, no find anyting like dis: '" + searchQuery + "'";
      e.setAttribute("id","notFound");
      document.getElementById('searchItems').appendChild(e);
    } else {
      if (document.getElementById('notFound')) {
        document.getElementById('notFound').remove();
      }
    }
  }
}

function search2(key) {
  if (event.key === "Enter") {
    search("page2");
  }
}

window.addEventListener("load", (event) => {
  search("load");
});