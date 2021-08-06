import axios from "axios"
import { topics } from "../mocks/data"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

 
  const topicsDiv = document.createElement("div")
  topicsDiv.classList.add("topics")

  const tab1 = document.createElement("div")
  tab1.classList.add("tab")
  tab1.textContent = topics[0];

  const tab2 = document.createElement("div")
  tab2.classList.add("tab")
  tab2.textContent = topics[1];
  

  const tab3 = document.createElement("div")
  tab3.classList.add("tab")
  tab3.textContent = topics[2];

  const tab4 = document.createElement("div")
  tab4.classList.add("tab")
  tab4.textContent = topics[3];


  const tab5 = document.createElement("div")
  tab5.classList.add("tab")
  tab5.textContent = topics[4];
  
  

  topicsDiv.appendChild(tab1)
  topicsDiv.appendChild(tab2)
  topicsDiv.appendChild(tab3)
  topicsDiv.appendChild(tab4)
  topicsDiv.appendChild(tab5)

return topicsDiv



 



}



const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  
  // console.log(selector) === ".tabs-container"
  // topics === topics: 5 ["javascript", "bootstrap", "technology"....]
  // Tabs() === "div.topics"
   //const tabSelector = document.querySelector(selector)

   const tabSelector = document.querySelector(selector)
 

   axios.get("http://localhost:5000/api/topics")
   .then (res =>{
    const topics = Tabs(res.data.topics)
    tabSelector.appendChild(topics)

   })
   .catch( err => {
    console.error(err)
   })


   
  
   
 
}


export { Tabs, tabsAppender }
