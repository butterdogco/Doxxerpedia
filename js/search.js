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
  if (mode === "load") {
    var searchQuery = url.searchParams.get("search");
  } else {
    if (mode === "page") {
      searchQuery = document.getElementById('searchBox').value;
      window.location.href = "?search=" + searchQuery;
    } else {
      if (mode === "page2") {
        searchQuery = document.getElementById('searchBox2').value;
        window.location.href = "?search=" + searchQuery;
      }
    }
  }

  // Perform the search operation if a search query exists
  if (searchQuery) {
    document.getElementById('queryText').innerHTML = ''.concat("serched 4 '", searchQuery, "'");
    
    var found = false;

    // Use the search query to perform a search or any other operations
    // For example, search through a list of items
    data.forEach(item => {
      if (item.title.includes(searchQuery) || item.desc.includes(searchQuery) || item.tags.includes(searchQuery)) {
        found = true;
        load(item.title, item.desc, item.image, item.link, "searchItems");
      }
      
      // if (document.getElementById('searchItems').hasChildNodes() === false && found === false) {
      //   const e = document.createElement('h4');
      //   e.innerHTML = "sory can no find da '" + searchQuery + "'";
      //   e.setAttribute("id","notFound");
      //   document.getElementById('searchItems').appendChild(e);
      // } else {
      //   document.getElementById('notFound').remove();
      // }
    });
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