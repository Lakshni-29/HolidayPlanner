// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");
const del = document.querySelector(".foot");

del.classList.add("active");
// onkeyup event
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; //getting user entered value
  if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  }else{
    addBtn.classList.remove("active"); //unactive the add button
  }
}

showTasks(); //calling showTask function

addBtn.onclick = ()=>{ //when user click on plus icon button
  let userEnteredValue = inputBox.value; //getting input field value
  let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
  if(getLocalStorageData == null){ //if localstorage has no data
    listArray = []; //create a blank array
  }else{
    listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
  }
  listArray.push(userEnteredValue); //pushing or adding new value in array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
  showTasks(); //calling showTask function
  addBtn.classList.remove("active"); //unactive the add button once the task added
}

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; //passing the array length in pendingtask
  if(listArray.length > 0){ //if array length is greater than 0
    deleteAllBtn.classList.add("active"); //active the delete button
  }else{
    deleteAllBtn.classList.remove("active"); //unactive the delete button
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = ""; //once task added leave the input field blank
}

// delete task function
function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //delete or remove the li
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); //call the showTasks function
}

// delete all tasks function
deleteAllBtn.onclick = ()=>{
  let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
  if(getLocalStorageData == null){ //if localstorage has no data
    listArray = []; //create a blank array
  }else{
    listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
    listArray = []; //create a blank array
  }
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //set the item in localstorage
  showTasks(); //call the showTasks function
}// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title></title>
//     <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
// </head>
// <body>
//   <div class="abc">
//     <header>Bucket List</header>
//     <div class="wrapper">
//     <form action="mail.php" method="POST">
//     <label class="container" style="font-family: cursive; font-size: 25px;">Explore Seoul on Foot
//       <input type="checkbox" name="checkbox1">
//       <span class="checkmark"></span>
//     </label>
//     <label class="container" style="margin-top: 40px; font-family: cursive; font-size: 25px;">visit Changdeokgung and gyeongbokgung palaces
//       <input type="checkbox" name="checkbox2">
//       <span class="checkmark"></span>
//     </label>
//     <label class="container" style="margin-top: 80px; font-family: cursive; font-size: 25px;">Visit Hanok village
//       <input type="checkbox" name="checkbox3">
//       <span class="checkmark"></span>
//     </label>
//     <label class="container" style="margin-top: 120px; font-family: cursive; font-size: 25px;">Check out free museums 
//       <input type="checkbox" name="checkbox4">
//       <span class="checkmark"></span>
//     </label>
//     <label class="container" style="margin-top: 280px; font-family: cursive; font-size: 25px;">Glide down the ski slopes from the 2018 olympics
//       <input type="checkbox" name="checkbox5">
//       <span class="checkmark"></span>
//     </label>
//     <label class="container" style="margin-top: 160px; font-family: cursive; font-size: 25px;">visit the temples
//       <input type="checkbox" name="checkbox6">
//       <span class="checkmark"></span>
//     </label>
//     <label class="container" style="margin-top: 200px; font-family: cursive; font-size: 25px;">Trip to Busan
//       <input type="checkbox" name="checkbox7">
//       <span class="checkmark"></span>
//     </label>
//     <label class="container" style="margin-top: 240px; font-family: cursive; font-size: 25px;">Visit the third "Tunnel of Aggression"
//       <input type="checkbox" name="checkbox8">
//       <span class="checkmark"></span>
//     </label>
//     <label class="container" style="margin-top: 320px; font-family: cursive; font-size: 25px;">A jaunt to the Jeju island 
//       <input type="checkbox" name="checkbox9">
//       <span class="checkmark"></span>
//     </label>
//     <label class="container" style="margin-top: 360px; font-family: cursive; font-size: 25px;">visit Lotte World Amusement Park 
//       <input type="checkbox" name="checkbox10">
//       <span class="checkmark"></span>
//     </label>
//     <input class="foot" type="submit" id="123" value="Submit"></input>
//   </form>
//     <div class="inputField">
//       <input type="text" placeholder="Add To Your Bucket List">
//       <button><i class="fas fa-plus"></i></button>
//     </div>
//     <ul class="todoList">
//       <!-- data are comes from local storage -->
//     </ul>
//     <div class="footer">
//       <span class="pendingTasks" style="opacity: 0;"></span>
//       <button>Clear All</button>
//     </div>
//   </div>
//   </div>
//   <script src="script.js"></script>

// </body>
// </html>
