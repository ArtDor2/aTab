var db = new Dexie('db_tabs');
db.version(1).stores({
    tabs: '++id, group, dateSaved, name, url'
});
db.open().then(function (db) {
  console.log("Database opened successfully", db)
}).catch (function (err) {
    console.log("Error occurred", err)
});

db.tabs.put({id: 1, group: 1, dateSaved: 2018, name: "test", url: "www.tabtest.com"}).then (function(){
        // return db.tabs.get('1');
        console.log(db.tabs.get('test'));
    })
    // .then(function (tab) {
    //   console.log("number " + tab.name);
    // }).catch(function(error) {
    //     console.log("Ooops: " + error);
    // });

db.transaction('r', db.users, function () {

  // db.users.add({
  //     name: "Zlatan",
  //     username: "ibra",
  //     email: [
  //         "zlatan@ibrahimovic.se",
  //         "zlatan.ibrahimovic@gmail.com"
  //     ],
  //     address: {
  //         city: "Malmö",
  //         country: "Sweden"
  //     }
  // });

  db.users.where("group").startsWith("1")
      // .or("address.city").anyOf (["Malmö", "Stockholm", "Barcelona"])
      .each(function (tab) {
          console.log("Found user: " + tab.name);
      });

}).catch (function (e) {
  console.error(e.stack);
});


//? var bkg = chrome.extension.getBackgroundPage();  // what is this

chrome.runtime.onInstalled.addListener(function() {
  var contexts = ["page","link","image","video","audio"];

  chrome.contextMenus.create({"title": "👁 selected", "contexts":contexts, "id": "selected"});
  chrome.contextMenus.create({"title": "👉 right", "contexts":contexts, "id": "right"});
  chrome.contextMenus.create({"title": "❤ all", "contexts":contexts, "id": "all"});
  chrome.contextMenus.create({"title": "👈 left", "contexts":contexts, "id": "left"});
  chrome.contextMenus.create({"title": "🎁 open", "contexts":contexts, "id": "open"});
  
  // option for checkbox whether to save new tabs in new group or join into an existing one:
  // chrome.contextMenus.create({"title": "make new group", "contexts":contexts, "id": "open"});
});

// recieve functions from context menu
chrome.contextMenus.onClicked.addListener(function(clickFunction){
  if (clickFunction.menuItemId == "selected") {store_selected()}
  else if (clickFunction.menuItemId == "right") {store_right()}
  else if (clickFunction.menuItemId == "all") {store_all()}
  else if (clickFunction.menuItemId == "left") {store_left()}
  else if (clickFunction.menuItemId == "open") {open_list()}
});

//? recieve functions from popup
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse){
      if(request.msg == "store_selected") store_selected();
  }
);

// chrome keybindings to call tab functions
chrome.commands.onCommand.addListener(function(command) {
  if (command === "store-selected"){
    store_selected()
  } else if (command === "store-right"){
    store_right()
  } else if (command === "store-all"){
    store_all()
  } else if (command === "store-left"){
    store_left()
  } else if (command === "open-list"){
    open_list()
  }
});

// function definitions
function store_selected() {
  //? right clicking for context menu cancels selection of tabs

  // chrome.tabs.create({url: "https://www.google.com/"});


  // db.friends.put({name: "Nicolas2", shoeSize: 9}).then (function() {
    //   return db.friends.get('Nicolas2');
    // }).then(function (friend) {
    //   alert ("Nicolas has shoe size " + friend.shoeSize);
    //   console.log("Nicolas has shoe size " + friend.shoeSize);
    // })
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
      console.log(tab[0].url, tab[0].title);
  });
  // then close tabs
  // chrome.tabs.remove(({active: true, currentWindow: true}));
}
function store_right() {
  //? get index and save if after
  chrome.tabs.query({currentWindow: true}, function(tabs) {
    tabs.forEach(function(tab) {
        console.log(tab.index, tab.title);
    });
});
}
function store_all() {
  chrome.tabs.query({currentWindow: true}, function(tabs) {
    tabs.forEach(function(tab) {
        console.log(tab.index, tab.title);
    });
});
}
function store_left() {
    //? get index and save if before
    chrome.tabs.query({currentWindow: true}, function(tabs) {
      tabs.forEach(function(tab) {
          console.log(tab.index, tab.title);
      });
  });
}
function open_list() {
  // chrome.tabs.create({ url: "page/options.html" });
  chrome.tabs.create({ 'url': 'chrome://extensions/?options=' + chrome.runtime.id });
}
function store_all_windows() {
  chrome.windows.getAll({populate:true},function(windows){
    windows.forEach(function(window){
      window.tabs.forEach(function(tab){
        console.log(tab.url);
      });
    });
  });
}

//? add other missing functions from commands