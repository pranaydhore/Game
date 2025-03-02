let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click", function() {
    let item=document.createElement("li");
    item.innerText=inp.value;

    
    let del=document.createElement("button");
    del.innerText="Delete";
    del.style.marginLeft="20px";
    del.classList.add("delete");

    let date=document.createElement("input")
    date.style.date="00-00-0000";
    date.style.marginLeft="20px";
    del.classList.add("date");

    ul.appendChild(item);
    item.appendChild(del);
    inp.value="";

    
});

ul.addEventListener("click",function(event) {
    // console.dir(event.target);
    // console.dir(event.target);
    if(event.target.nodeName=="BUTTON") {
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("deleted the task")
        
    }
    console.log("button clicked");

});


// let delBtn=document.querySelectorAll(".delete");
// for(del of delBtn) {
//     del.addEventListener("click", function() {
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// };
