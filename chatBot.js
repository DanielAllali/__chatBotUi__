
let chatBox = document.getElementById("chatBox");
let chatsNames = document.getElementById("chatsNames");
document.getElementById("addBtn").addEventListener("click", newChat)

let chatNumber = 1;
let chat = document.createElement("div");
window["chat" + chatNumber] = chat;


let chatsArr = [];
newChat();
function newChat() {
    if (chatNumber > 1) {
        window["chat" + (chatNumber - 1)].style.display = "none";
    }
    else {
        window["chat" + chatNumber].style.display = "none";
    }

    /* new chat */
    chat = document.createElement("div")
    chatBox.appendChild(chat);
    chat.style.width = '75vw';
    chat.style.height = '80vh';
    chat.style.overflowY = 'scroll';
    chat.style.padding = '25px';
    chat.style.marginBottom = '20px';
    chat.style.borderRadius = '10px';
    chat.style.display = 'flex';
    chat.style.flexDirection = 'column';
    chat.style.alignItems = 'start';
    chat.style.justifyContent = 'start';
    chat.style.order = "2";
    window["chat" + chatNumber] = chat;
    /* new chat */

    /* chat name div*/
    let chatName = document.createElement("div");
    chatName.style.padding = "5px";
    chatName.style.display = "flex";
    chatName.style.flexDirection = "column";
    chatName.style.alignItems = "start";
    chatName.style.borderRadius = "10px";
    chatName.style.cursor = "pointer";
    chatsNames.appendChild(chatName);
    window["chatName" + chatNumber] = chatName;
    window["chatName" + chatNumber].addEventListener("click",()=>{
        switchChat(chatNumber);
    })
    window["chatName" + chatNumber].addEventListener("mouseover",()=>{
        chatName.style.backgroundColor = "#a0a0a0";
    })
    window["chatName" + chatNumber].addEventListener("mouseout",()=>{
        chatName.style.backgroundColor = "#2d2d2d";
    })
    /* chat name div*/

    /* chat name */
    let chatNameName = document.createElement("h1");
    window["chatName" + chatNumber].appendChild(chatNameName)
    chatNameName.innerHTML = "Untitled" + chatNumber;
    chatNameName.style.color = "#ffbb00";
    chatNameName.style.fontWeight = "100";
    chatNameName.style.fontSize = "1.8rem";
    chatNameName.style.order = "2";
    chatNameName.style.marginLeft = "10px";
    window["chatNameName" + chatNumber] = chatNameName;
    /* chat name */

    /* chat name three dots */
    let chatNameSettings = document.createElement("button");
    window["chatName" + chatNumber].appendChild(chatNameSettings);
    chatNameSettings.innerHTML = "&#8942;";
    chatNameSettings.style.order = "1";
    chatNameSettings.style.transition = "background-color 0.2s";
    chatNameSettings.style.background = "none";
    chatNameSettings.style.border = "none";
    chatNameSettings.style.borderRadius = "10px";
    chatNameSettings.style.fontSize = "1.2rem";
    chatNameSettings.style.color = "white";
    chatNameSettings.style.cursor = "pointer";
    /* chatNameSettings events */
    chatNameSettings.addEventListener("mouseover", () => {
        chatNameSettings.style.backgroundColor = "#212121";
    })
    chatNameSettings.addEventListener("mouseout", () => {
        chatNameSettings.style.background = "none";
    })
    chatNameSettings.addEventListener("click", displaySettingsList)
    /* chatNameSettings events */
    window["chatNameSettings" + chatNumber] = chatNameSettings;
    /* chat name three dots */

    /* the name setting */
    let nameSettings = document.createElement("ul");
    window["chatNameSettings" + chatNumber].appendChild(nameSettings);
    nameSettings.style.height = "80px";
    nameSettings.style.overflow = "hidden";
    nameSettings.style.backgroundColor = "#212121";
    nameSettings.style.borderRadius = "10px";
    nameSettings.style.padding = "5px";
    nameSettings.style.color = "#000";
    nameSettings.style.display = "none";

    /* delete chat */
    let nameSettingsDelete = document.createElement("li");
    nameSettings.appendChild(nameSettingsDelete);
    nameSettingsDelete.innerHTML = "Delete";
    nameSettingsDelete.style.fontSize = "1rem";
    nameSettingsDelete.style.fontWeight = "100";
    /*delete events */
    nameSettingsDelete.addEventListener("mouseover", () => {
        nameSettingsDelete.style.color = "#ffbb00";
    })
    nameSettingsDelete.addEventListener("mouseout", () => {
        nameSettingsDelete.style.color = "#000";
    })
    nameSettingsDelete.addEventListener("click", () => {
        deleteChat();
    })
    window["nameSettingsDelete" + chatNumber];
    /*delete events */
    /* delete chat */

    /* Rename chat */
    let nameSettingsRename = document.createElement("li");
    nameSettings.appendChild(nameSettingsRename);
    nameSettingsRename.innerHTML = "Rename";
    nameSettingsRename.style.fontSize = "1rem";
    nameSettingsRename.style.fontWeight = "100";
    /*Rename events */
    nameSettingsRename.addEventListener("mouseover", () => {
        nameSettingsRename.style.color = "#ffbb00";
    })
    nameSettingsRename.addEventListener("mouseout", () => {
        nameSettingsRename.style.color = "#000";
    })
    let renamePopup = document.getElementById("renamePopup");
    let popupContent = document.getElementById("popupContent");
    nameSettingsRename.addEventListener("click", () => {
        renamePopup.style.display = "flex";
        setTimeout(() => {
            popupContent.style.opacity = "1";
        }, 10);
    })
    window["nameSettingsRename" + chatNumber];

    let renameInput = document.getElementById("renameInput");
    renameInput.value = "untitled";
    document.getElementById("renameBtn").addEventListener("click",renameBtnClick);

    function renameBtnClick(){
        chatNameName.innerHTML = renameInput.value;
        renamePopup.style.display = "none";
        popupContent.style.opacity = "0";
    }
    /*Rename events */
    /* Rename chat */

    /* Close chat */
    let nameSettingsClose = document.createElement("li");
    nameSettings.appendChild(nameSettingsClose);
    nameSettingsClose.innerHTML = "Close";
    nameSettingsClose.style.fontSize = "1rem";
    nameSettingsClose.style.fontWeight = "100";
    /*Close events */
    nameSettingsClose.addEventListener("mouseover", () => {
        nameSettingsClose.style.color = "#ffbb00";
    })
    nameSettingsClose.addEventListener("mouseout", () => {
        nameSettingsClose.style.color = "#000";
    })
    nameSettingsClose.addEventListener("click", closeSettingsList)
    window["nameSettingsClose" + chatNumber];
    /*Close events */
    /* Close chat */

    /* functionality of settings */
    function deleteChat() {
        chatName.style.display = "none";
    }
    function displaySettingsList() {
        nameSettings.style.display = "block";
        chatNameSettings.removeEventListener("click", displaySettingsList)

    }
    function closeSettingsList() {
        nameSettings.style.display = "none";
        setTimeout(() => {
            chatNameSettings.addEventListener("click", displaySettingsList)
        }, 200)
    }
    window["nameSettings" + chatNumber] = nameSettings;
    /* functionality of settings */

    /* switch chat */
    function switchChat(chatNum) {}
    /* switch chat */

    /* the name setting */


    chatNumber++;
}

document.getElementById("send").addEventListener("click", newMessage)
let message = document.getElementById("message")

function newMessage() {
    let messageH1 = document.createElement("h1");
    window["chat" + (chatNumber - 1)].appendChild(messageH1);
    messageH1.innerHTML = message.value;
    messageH1.style.color = "white";
}