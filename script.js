// var req1 = document.getElementById("reqleft-1" + "reqmid-1" + "reqright-1")
var conReqs = document.getElementById("conreqs")
var totalCon = document.getElementById("totalCon")
function remReq1(){
    document.getElementById("reqleft-1").remove();
    document.getElementById("reqmid-1").remove();
    document.getElementById("reqright-1").remove();
    conReqs.innerText = (Number(conReqs.innerText) - 1);

}

function remReq1plus(){
    document.getElementById("reqleft-1").remove();
    document.getElementById("reqmid-1").remove();
    document.getElementById("reqright-1").remove();
    conReqs.innerText = (Number(conReqs.innerText) - 1);
    totalCon.innerText = (Number(totalCon.innerText) + 1)
}

function remReq2(){
    document.getElementById("reqleft-2").remove();
    document.getElementById("reqmid-2").remove();
    document.getElementById("reqright-2").remove();
    conReqs.innerText = (Number(conReqs.innerText) - 1)
}

function remReq2plus(){
    document.getElementById("reqleft-2").remove();
    document.getElementById("reqmid-2").remove();
    document.getElementById("reqright-2").remove();
    conReqs.innerText = (Number(conReqs.innerText) - 1)
    totalCon.innerText = (Number(totalCon.innerText) + 1)
}

function changeName(){
    var userName = document.getElementById("userName")
    userName.innerText = "Josh Remulla"

}