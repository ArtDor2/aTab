// var db = new Dexie("tabs-list");
// db.version(1).stores({
//   // tabs: 'id,group,dateVisited,name,url,comment'
//   tabs: 'name,number'
// });
// // db.version(1).stores({
// //   groups: 'id,date,name,options'
// // });


// // db.tabs.put({name: "Nicolas", comment: 8}).then (function() {
// // db.tabs.put({id:1,group:1,dateVisited:1,name:'n',url:'u',comment:1}).then (function() {
// db.tabs.put({name:"nick",number:10}).then (function() {
//   //
//   // Then when data is stored, read from it
//   //
//   return db.tabs.get('nick');
// }).then(function (tabF) {
//   //
//   // Display the result
//   //
//   alert ("Nicolas has shoe size " + tabF.number);
//   console.log("Nicolas has shoe size " + tabF.number);
// }).catch(function(error) {
//  //
//  // Finally don't forget to catch any error
//  // that could have happened anywhere in the
//  // code blocks above.
//  //
//  alert ("Ooops: " + error);
// });


// working but cant rename
var db = new Dexie("friend_database");
  db.version(1).stores({
      friends: 'id,name,number'
  });

  // Put some data into it
  db.friends.put({id: 1, name: "tab1", number: 8}).then (function(){
      // Then when data is stored, read from it
      return db.friends.get('tab1');
  }).then(function (tabs_function) {
      // Display the result
      alert ("number " + tabs_function.number);
      // alert ("id " + friend.id);
  }).catch(function(error) {
      console.log("Ooops: " + error);
  });

// var db = new Dexie(YOUR_DB_NAME);
// db.version(1).stores({
//     tasks: "id,name,lastUpdated,taskListId,status", 
//     taskLists: "id,name,lastUpdated"
// });
// db.open();

// this.getTasksForList = function(taskListId) {
//   var tasks = db.tasks.where('taskListId').equals(taskListId).sortBy('position');
//   return tasks;
// };
// console.log(getTasksForList);

// this.pushTaskList = function(taskList) {
//   return db.taskLists.put(taskList);
// };
// // console.log(getTasksForList);


// var bkg = chrome.extension.getBackgroundPage();  //?

chrome.runtime.onInstalled.addListener(function() {
  var contexts = ["page","link","image","video","audio"];

  chrome.contextMenus.create({"title": "selected", "contexts":contexts, "id": "selected"});
  chrome.contextMenus.create({"title": "right", "contexts":contexts, "id": "right"});
  chrome.contextMenus.create({"title": "all", "contexts":contexts, "id": "all"});
  chrome.contextMenus.create({"title": "left", "contexts":contexts, "id": "left"});
  chrome.contextMenus.create({"title": "open", "contexts":contexts, "id": "open"});
});

// functions for context menu
chrome.contextMenus.onClicked.addListener(function(clickFunction){
  if (clickFunction.menuItemId == "selected") {store_selected()}
  else if (clickFunction.menuItemId == "right") {store_right()}
  else if (clickFunction.menuItemId == "all") {store_all()}
  else if (clickFunction.menuItemId == "left") {store_left()}
  else if (clickFunction.menuItemId == "open") {open_list()}
});

// chrome keybindings to call tab functions
chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
});

function store_selected() {
  var tab1 = chrome.browser.tabs.query({highlighted: true, currentWindow: true})
  console.log(tab1)
}
function store_right() {
  var tab1 = chrome.browser.tabs.query({highlighted: true, currentWindow: true})
  console.log(tab1)
}
function store_all() {
  var tab1 = chrome.browser.tabs.query({highlighted: true, currentWindow: true})
  console.log(tab1)
}
function store_left() {
  var tab1 = chrome.browser.tabs.query({highlighted: true, currentWindow: true})
  console.log(tab1)
}
function open_list() {
  var tab1 = chrome.browser.tabs.query({highlighted: true, currentWindow: true})
  console.log(tab1)
}

// db.friends.put({name: "Nicolas2", shoeSize: 9}).then (function() {
    //   return db.friends.get('Nicolas2');
    // }).then(function (friend) {
    //   alert ("Nicolas has shoe size " + friend.shoeSize);
    //   console.log("Nicolas has shoe size " + friend.shoeSize);
    // })

    // chrome.tabs.create({url: "https://www.google.com/"});