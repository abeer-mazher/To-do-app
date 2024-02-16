let firstInp = document.getElementById("firstInp");
let containerList = document.getElementById("containerList");
let limitCount = 0;

function AddTodo(){
    if (limitCount >= 6){
        alert("you have reached your limit");
        return;
    }

    if(firstInp.value === ""){
        alert("Enter your task fire");
    }else{
        let listMain = document.createElement("DIV");
        listMain.setAttribute("class","list-main")
        let para = document.createElement("P");
        listMain.prepend(para);
        para.innerHTML = firstInp.value;
        containerList.appendChild(listMain);
        firstInp.value = "";

        let listBtnDiv = document.createElement("DIV");
        listBtnDiv.setAttribute("class","list-btn");

        let editBtn = document.createElement("BUTTON");
        let editBtnText = document.createTextNode("Edit");
        editBtn.setAttribute("onclick","editValue(this)");
        editBtn.setAttribute("class","edit-btn")

        editBtn.appendChild(editBtnText);
        listBtnDiv.appendChild(editBtn);


        let clearBtn = document.createElement("BUTTON");
        let clearBtnText = document.createTextNode("Clear");
        clearBtn.setAttribute("onclick","clearValue(this)");
        clearBtn.appendChild(clearBtnText);
        listBtnDiv.appendChild(clearBtn);

        listMain.appendChild(listBtnDiv);
        
        limitCount++;
    }
}

function clearValue(clerElem){
    let delValue = clerElem.parentNode.parentNode;
    delValue.remove();
    
    limitCount--;

}

function editValue(elem){
    let para = elem.parentNode
    let paraValue = para.parentNode;
    let secInp = document.createElement("INPUT");
    secInp.setAttribute("type","text");
    secInp.setAttribute("maxlength","40");
    paraValue.firstChild.appendChild(secInp);
    console.log(paraValue.firstChild)
    secInp.value = paraValue.firstChild.firstChild.nodeValue;
    paraValue.firstChild.firstChild.textContent = "";

    let saveBtn = document.createElement("BUTTON");
    let saveBtnText = document.createTextNode("Save");
    saveBtn.setAttribute("onclick","saveNewVal(this)");
    saveBtn.appendChild(saveBtnText);
    para.firstChild.style.display = "none";
    para.prepend(saveBtn);
}

function saveNewVal(saveElem){
    newValue = saveElem.parentNode;
    saveNewValue = newValue.parentNode;

    if(saveNewValue.firstChild.firstChild.nextSibling.value === ""){
        alert("add Something");
    }else{
        saveNewValue.firstChild.innerHTML = saveNewValue.firstChild.firstChild.nextSibling.value;
        newValue.childNodes[1].style.display = "inline-block";
        newValue.firstChild.remove();
    }
}


function deleteAll(){
    containerList.innerHTML = "";
    firstInp.value = "";
    limitCount = 0; 
}