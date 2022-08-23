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
        postLink4
        postLink5
        postLink6
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
const postLink4=document.createElement("a");
const postLink5=document.createElement("a");
const postLink6=document.createElement("a");

postLink1.className="postLink"
postLink2.className="postLink"
postLink3.className="postLink"
postLink4.className="postLink"
postLink5.className="postLink"
postLink6.className="postLink"

const postTitle1=document.createElement("h3");
const postTitle2=document.createElement("h3");
const postTitle3=document.createElement("h3");
const postTitle4=document.createElement("h3");
const postTitle5=document.createElement("h3");
const postTitle6=document.createElement("h3");

postTitle1.className="postTitle1"
postTitle2.className="postTitle2"
postTitle3.className="postTitle3"
postTitle4.className="postTitle4"
postTitle5.className="postTitle5"
postTitle6.className="postTitle6"

title.innerHTML=posts.homeCollection.items[0].devBlog

postTitle1.innerText=posts.blogPostCollection.items[0].title
postTitle2.innerText=posts.blogPostCollection.items[1].title
postTitle3.innerText=posts.blogPostCollection.items[2].title
postTitle4.innerText=posts.blogPostCollection.items[3].title
postTitle5.innerText=posts.blogPostCollection.items[4].title
postTitle6.innerText=posts.blogPostCollection.items[5].title


postLink1.href=posts.homeCollection.items[0].postLink
postLink2.href=posts.homeCollection.items[0].postLink2
postLink3.href=posts.homeCollection.items[0].postLink3
postLink4.href=posts.homeCollection.items[0].postLink4
postLink5.href=posts.homeCollection.items[0].postLink5
postLink6.href=posts.homeCollection.items[0].postLink6

postLink1.append(postTitle1);
postLink2.append(postTitle2);
postLink3.append(postTitle3);
postLink4.append(postTitle4);
postLink5.append(postTitle5);
postLink6.append(postTitle6);

document.body.append(title, postLink1, postLink2, postLink3, postLink4, postLink5, postLink6);
}

fetch(fetchOptions.endpoint, fetchOptions)
.then(response => response.json())
.then(data => homePage(data.data));