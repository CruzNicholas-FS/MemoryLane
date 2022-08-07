const query = `
{
    blogPostCollection {
        items {
          sys {
            firstPublishedAt
          }
          title
          body{
            json
          }
        }
      }
    homeCollection{
      items {
        devBlog
        postLink
        postLink2
        postLink3
      }
    }
  }
`
const fetchOptions = {
  spaceID: "axq116fvwwfs",
  accessToken: "wTUU18aBxQtJol5mtM5fWPFlBg7KIOn1Yj6yJ6zTVno",
  endpoint: "https://graphql.contentful.com/content/v1/spaces/axq116fvwwfs",
  method: "POST",
  headers: {
    Authorization: "Bearer wTUU18aBxQtJol5mtM5fWPFlBg7KIOn1Yj6yJ6zTVno",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query })
}

const homePage = (posts) => {
console.log(posts);

const title = document.createElement("h1");
title.className="pageTitle"

const postLink1=document.createElement("a");
const postLink2=document.createElement("a");
const postLink3=document.createElement("a");

postLink1.className="postLink1"
postLink2.className="postLink2"
postLink3.className="postLink3"

const postTitle1=document.createElement("h3");
const postTitle2=document.createElement("h3");
const postTitle3=document.createElement("h3");

postTitle1.className="postTitle1"
postTitle2.className="postTitle2"
postTitle3.className="postTitle3"

title.innerHTML=posts.homeCollection.items[0].devBlog

postTitle1.innerText=posts.blogPostCollection.items[0].title
postTitle2.innerText=posts.blogPostCollection.items[1].title
postTitle3.innerText=posts.blogPostCollection.items[2].title

postLink1.href=posts.homeCollection.items[0].postLink
postLink2.href=posts.homeCollection.items[0].postLink2
postLink3.href=posts.homeCollection.items[0].postLink3

postLink1.append(postTitle1);
postLink2.append(postTitle2);
postLink3.append(postTitle3);

document.body.append(title, postLink1, postLink2, postLink3);
}

fetch(fetchOptions.endpoint, fetchOptions)
.then(response => response.json())
.then(data => homePage(data.data));