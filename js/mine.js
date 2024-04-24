
// var pNameInput = document.getElementById("NameId") ; 
// var pUrlInput = document.getElementById("URLId") ; 
// var cartoona=[] ;

// var currentIndex ; 

// if(  localStorage.getItem("localProducts") == null )
// {
//     cartoona = [] ;
// }
// else
// {
//       cartoona =  JSON.parse(localStorage.getItem("localProducts")) ;

//       displayInfo()
// }

// var nameRegex = /^\w{3,}(\s+\w+)*$/;

// var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

// JSON.parse(localStorage.getItem("localProducts"))
// function addInfo()
// {
//     if( cartoona.indexOf(pNameInput.value===-1) && nameRegex.test(pNameInput.value)&& urlRegex.test(pUrlInput.value) )
//     {
//         var oneProduct = {

//             pName : pNameInput.value ,
//             pUrl : pUrlInput.value ,
//         }

//             cartoona.push(oneProduct);
         
//             localStorage.setItem("localProducts" ,  JSON.stringify(cartoona) )
        
//             displayInfo()
        
//             clearInputs()
           
        
        
    
       
    
//     }
//     else
//     {
//         swal(  "Site Name or Url is not valid, Please follow the rules below :", `Site name must contain at least 3 characters
//         Site URL must be a valid one
//         `);
//     }



   
// }

// function clearInputs()
// {
//     pNameInput.value = null;
//     pUrlInput.value = null;
// }


// function displayInfo()
// {

//     var hasalah = ``;

//     for(var  i =1 ; i < cartoona.length ; i++)
//     {
//       hasalah +=  ` <tr>
//             <td>${i}</td>
//             <td>${cartoona[i].pName}</td>
//             <td>
//             <a class="btn btn-outline-warning" href="${cartoona[i].pUrl}" target="_blank"> Visit</a>            </td>
//             <td>
//              <button onclick="deleteInfo(${i})" class="btn btn-outline-danger">Delete</button>
//             </td>
        
//       </tr>`
//     }

//     document.getElementById("tBody").innerHTML = hasalah;
    
// }


// function deleteInfo(pIndex)
// {
//     cartoona.splice( pIndex , 1 ) 

//     localStorage.setItem("localProducts" , JSON.stringify(  cartoona ))
//     displayInfo() 
// }






//     //  document.getElementById("addBtn").style.display = "block";
//     //  document.getElementById("updateBtn").style.display = "none";



// document.addEventListener("mousemove" , function(eInfo){

//     document.querySelector("img").style.top = eInfo.clientY +"px"
//     document.querySelector("img").style.left = eInfo.clientX +"px"



// // })

// var allImgs = Array.from(document.querySelectorAll("img"))


// for (let i = 0; i < allImgs.length; i++) {
   

//     allImgs[i].addEventListener("click" , function(eInfo){

//         var imgSrc = eInfo.target.src;

//         document.querySelector(".mainDiv").style.backgroundImage=`url(${imgSrc})`

//     })

    
// }


var allImgs = Array.from(document.querySelectorAll("img"))

var layerParent = document.querySelector(".layerParent")
for (var i = 0; i < allImgs.length; i++) {



    allImgs[i].addEventListener("click" , function(eInfo){

        layerParent.classList.replace("d-none" , "d-flex")
        
    
        })      
}