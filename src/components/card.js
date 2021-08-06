import axios from "axios"
import { articles } from "../mocks/data"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card"> √
  //   <div class="headline">{ headline }</div>√
  //   <div class="author">√
  //     <div class="img-container">√
  //       <img src={ authorPhoto }>√
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
    const cardDiv = document.createElement("div")
    cardDiv.classList.add("card")
  
    cardDiv.addEventListener("click", event =>{
      console.log(headline.textContent)
    })


    const headline = document.createElement("div")
    headline.classList.add("headline")
    headline.textContent = `${article.headline}`


    const author = document.createElement("div")
    author.classList.add("author")

    const img = document.createElement("img")
    img.src = `${article.authorPhoto}`

   
    
    const cardImg = document.createElement("div")
    cardImg.classList.add("img-container")
    
  
  const authorName = document.createElement("span")
  authorName.textContent = `By ${article.authorName}`



  // Hierarchy
  cardDiv.appendChild(headline)
  cardDiv.appendChild(author)
  author.appendChild(cardImg)
  cardImg.appendChild(img)
  author.appendChild(authorName)

  
  return cardDiv



 
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  // console.log(selector) === .cards-container
  
  const cardContainer = document.querySelector(".cards-container")


  axios.get("http://localhost:5000/api/articles")
  .then( res =>{
   
  const article = (res.data.articles.javascript)

  let items = article.map( item => {
   return cardContainer.appendChild(Card(item))
  })
  console.log(items)
  console.log(cardContainer)
  
  
 
    
  })
  .catch(err =>{
    console.error(err)
  })


}

export { Card, cardAppender }
