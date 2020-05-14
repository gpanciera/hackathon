// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function() {

  
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
  chrome.tabs.create({'url': 'chrome://newtab'});
  
});