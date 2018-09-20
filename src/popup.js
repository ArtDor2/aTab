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

document.getElementById("clickMe").onclick = doFunction;