const errorDiv = document.createElement("div");
errorDiv.style.display = "none";
errorDiv.style.background = "white";
errorDiv.style.position = "fixed";
errorDiv.style.top = "50%";
errorDiv.style.left = "50%";
errorDiv.style.transform = "translate(-50%, -50%)";
errorDiv.style.border = "2px solid gray";

const notice = document.createElement("p")
notice.innerText = "Debug Console | CTRL + Y to toggle";
notice.style.paddingBottom = "5px";
notice.style.paddingTop = "5px";
notice.style.textAlign = "center";
notice.style.borderBottom = "2px solid gray";

errorDiv.appendChild(notice);
document.body.appendChild(errorDiv);

function createLog(msg, url, linenumber) {
    const e = document.createElement("p");
    e.innerHTML = `Error: ${msg}<br>URL: ${url}<br>Line: ${linenumber}`;
    e.style.border = "2px solid gray";
    e.style.background = "white";
    e.style.width = "100%";
    e.style.padding = "3px";
    e.style.color = "rgb(230,20,20)";
    e.style.fontFamily = "monospace";
    errorDiv.appendChild(e);
}

window.onerror = function(msg, url, linenumber) {
    createLog(msg, url, linenumber);
    return true;
}

document.body.addEventListener("onkeydown", (event) => {
    if (event.keyCode === 89 && event.ctrlKey) {
        if (errorDiv.style.display === "block") {
            errorDiv.style.display = "none";
        } else {
            errorDiv.style.display = "block";
        }
    }
});