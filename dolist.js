//input filed & btn
const textInput = document.querySelector('.text-box');
const addBtn = document.querySelector('.add');

//list normal and important
const listNormal = document.querySelector(".list-normal");
const listImportant = document.querySelector(".list-important");

//reset btn
const cleanAll = document.querySelector(".clean-all");

//to calculate how many list element created and to remove them all at onece
let num=0;



addBtn.addEventListener("click",(e)=>{
   //see witch radio btn check
    const radioBtn = document.querySelector('input[type="radio"]:checked')
    //getting value
    let pripertyVal = radioBtn.value;
    let inputValue = textInput.value
   

if(inputValue && pripertyVal ==="normal"){
    //craeting li elemet  
    const x= document.createElement('li')
    x.setAttribute('class','list')
    listNormal.appendChild(x);
    displyText(inputValue,listNormal,pripertyVal)
    
    num++

}else if(inputValue && pripertyVal === "important"){
    //craeting li elemet  
    const x= document.createElement('li')
    x.setAttribute('class','list')
    listImportant.appendChild(x);
    displyText(inputValue,listImportant,pripertyVal)

    num++
}
//counting how many element created


});
const displyText = (val,prioraty) =>{

    prioraty.lastElementChild.innerHTML=`
        <p>
            
            ${val}
        </p>
        <button class="list-delete">
            <span class="material-symbols-outlined">delete</span>
        </button>  ` 

        deletebtn();
            
}


//rmove items
 const deletebtn = ()=>{
         //remove first item
    if(num===1){
        const btndelete = document.querySelector(".list-delete")
        btndelete.addEventListener("click",()=>{
            document.querySelector(".list").remove()
        })
         //remove other item
    }else{
        const btndelete = document.querySelectorAll(".list-delete")
        btndelete.forEach((btn) => {
            btn.addEventListener("click",(e)=>{
            let x=  e.currentTarget.parentElement;
            x.remove()
        })
            })
    }
    //remove all at onece
    cleanAll.addEventListener("click",()=>{
        const list =document.getElementsByClassName("list");
        for(let i=0;i<list.length;i++){
            
                list[i].remove();
           
                
           
            
        }
    })
 };
