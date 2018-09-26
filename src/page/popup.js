// document.addEventListener('popupButton', function() {
//     var checkPageButton = document.getElementById('selected');
//     checkPageButton.addEventListener('click', function() {
//       // chrome.tabs.getSelected(null, function(tab) {
//         alert("get selected");
//       // });
//       store_selected()
//     }, false);
//   }, false);

//   chrome.browserAction.onClicked.addListener(function(){
//     alert("stuff");
//   });

function store_selected_popup() {
  alert("sent message")
  chrome.extension.sendMessage({msg: "store_selected"});
}