chrome.runtime.onInstalled.addListener(function() {
  var contexts = ["page","link"];
  // var contexts = ["page","selection","link","editable","image","video","audio"];

  chrome.contextMenus.create({"title": "Test 2", "contexts":contexts, "id": "test2"});
  chrome.contextMenus.create({"title": "Test 3", "contexts":contexts, "id": "test3"});

  // // Create a parent item and two children.
  // chrome.contextMenus.create({"title": "Test parent item", "id": "parent"});
  // chrome.contextMenus.create({"title": "Child 1", "parentId": "parent", "id": "child1"});
  // chrome.contextMenus.create({"title": "Child 2", "parentId": "parent", "id": "child2"});

});

chrome.contextMenus.onClicked.addListener(function(clickFunction){
  if (clickFunction.menuItemId == "test2"){
    chrome.tabs.create({url: "https://www.google.com/"});
  }
  else if (clickFunction.menuItemId == "test3"){
    // chrome.tabs.create({url: "https://www.bing.com/"});
    var tab1 = browser.tabs.query({highlighted: true, currentWindow: true})
    console.log(tab1)
  }
});