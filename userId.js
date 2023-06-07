(function () {
    // create dialog elements
    const dialog = document.createElement("ui5-dialog");
    const content = document.createElement("div");
    const footer = document.createElement("footer");
    const footerBtn = document.createElement("ui5-button");
    // set attributes
    dialog.setAttribute("header-text", "Third Party JavaScript");
    footer.setAttribute("slot", "footer");
    // content
    const custUserId = pageHeaderJsonData.userInfo.id;
    var wfNumber
    var myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", "*");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch("https://myapp-responsive-wombat-md.cfapps.us10-001.hana.ondemand.com/getuserworkflow/10", requestOptions)
    .then(response => response.text())
    .then(result => wfNumber = result)
    .catch(error => console.log('error', error));
    content.innerHTML = "Number of Pending workflow: "+ wfNumber;
    content.style.padding = "1rem";
    // footer btn
    footerBtn.onclick = () => dialog.close();
    footerBtn.innerHTML = "Close";
    // append elements
    dialog.appendChild(content);
    dialog.appendChild(footer);
    footer.appendChild(footerBtn);
    document.body.appendChild(dialog);
    // open dialog
    dialog.show();
})();
