async function createDefaults() {
  try {
    while (!done) {
      await new Promise(resolve => setTimeout(resolve, 150)); // Wait for 100 milliseconds
    }
    
     // Shuffle the data array
    const shuffledData = data.slice();
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    
    // Get the first 5 items from the shuffled array
    const randomItems = shuffledData.slice(0, 5);
  
    // Call the load function for each of the random items
    randomItems.forEach(item => {
      if (item.desc === null) {
        item.desc = "No description";
      }
      load(item.title, item.desc, item.image, item.link, "recomend");
    });
  } catch (error) {
    alert(error)
  }
}

setTimeout(createDefaults, 100);