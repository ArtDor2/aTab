var db = new Dexie("friend_database");
db.version(1).stores({
  friends: 'name,shoeSize'
});

db.friends.put({name: "Nicolas", shoeSize: 8}).then (function() {
  //
  // Then when data is stored, read from it
  //
  return db.friends.get('Nicolas');
}).then(function (friend) {
  //
  // Display the result
  //
  alert ("Nicolas has shoe size " + friend.shoeSize);
  console.log("Nicolas has shoe size " + friend.shoeSize);
}).catch(function(error) {
 //
 // Finally don't forget to catch any error
 // that could have happened anywhere in the
 // code blocks above.
 //
 alert ("Ooops: " + error);
});


var bkg = chrome.extension.getBackgroundPage();

chrome.runtime.onInstalled.addListener(function() {
  var contexts = ["page","link","image","video","audio"];

  chrome.contextMenus.create({"title": "Test 2", "contexts":contexts, "id": "test2"});
  chrome.contextMenus.create({"title": "Test 3", "contexts":contexts, "id": "test3"});

  // // Create a parent item and two children.
  // chrome.contextMenus.create({"title": "Test parent item", "id": "parent"});
  // chrome.contextMenus.create({"title": "Child 1", "parentId": "parent", "id": "child1"});
  // chrome.contextMenus.create({"title": "Child 2", "parentId": "parent", "id": "child2"});

});

chrome.contextMenus.onClicked.addListener(function(clickFunction){
  if (clickFunction.menuItemId == "test2"){

    db.friends.put({name: "Nicolas2", shoeSize: 9}).then (function() {
      // Then when data is stored, read from it
      return db.friends.get('Nicolas2');
    }).then(function (friend) {
      // Display the result
      alert ("Nicolas has shoe size " + friend.shoeSize);
      console.log("Nicolas has shoe size " + friend.shoeSize);
    })

    // chrome.tabs.create({url: "https://www.google.com/"});
  }
  else if (clickFunction.menuItemId == "test3"){
    // chrome.tabs.create({url: "https://www.bing.com/"});

bkg.console.log('foo');

    var tab1 = chrome.browser.tabs.query({highlighted: true, currentWindow: true})
    console.log(tab1)
  }

});