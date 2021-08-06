



const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //



  const headerDiv = document.createElement("div")
  headerDiv.classList.add("header")

  const headerDate = document.createElement("span")
  headerDate.textContent = date;
  headerDate.classList.add("date")
  

  const headerTitle = document.createElement("h1")
  headerTitle.textContent = title;

  const headerTemp = document.createElement("span")
  headerTemp.textContent = temp;
  headerTemp.classList.add("temp")


headerDiv.appendChild(headerDate)
headerDiv.appendChild(headerTitle)
headerDiv.appendChild(headerTemp)


return headerDiv

}



const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const select = document.querySelector(selector) // const select = document.querySelector(".header")

      
select.appendChild(Header("Lambda Times", "January 6, 2021", "26"))


 


}

export { Header, headerAppender }
