const allKeyWords = [
    "Online shopping",
    "Product catalog",
    "Shopping cart",
    "Customer reviews" ,
    "Payment options" ,
    "Product recommendations" ,
    "E-commerce platform" ,
    "Product listings" ,
    "Shipping and delivery" ,
    "Product variations"
]

let resultBox = document.querySelector(".result-box");
let inputBox = document.querySelector("#inputBox");

function filterSearch(){
    let result;
    let input = inputBox.value;

    if(input.length){
        result = allKeyWords.filter(function(keyword){
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        // console.log(result);
    }

    
    displayFilterSearch(result);
}

function displayFilterSearch(result){
    console.log(result)
    let li = result.map(function(list){
        return "<li class ='list-group-item' onclick ='seeItem(this)'>" + list + "</li>";
    });
    resultBox.innerHTML = "<ul class ='list-group'>" + li.join(" ") + "</ul>"
}

function seeItem(seelistItems){
    inputBox.value = seelistItems.textContent;
    resultBox.innerHTML = " ";
}