const changeColour = document.getElementById("colourChange");

chrome.storage.sync.get("colour", ({ colour }) => {
    changeColour.style.backgroundColour = colour;
});