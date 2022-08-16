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
        image{
          fileName
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

const post1 = (posts) => {
  console.log(posts.blogPostCollection.items[4]);

  const firstPost = posts.blogPostCollection.items[4]

  const metaTitle = document.querySelector("title");
  metaTitle.innerText=`${posts.homeCollection.items[0].devBlog} - ${firstPost.title}`

  const blogTitle = document.createElement("h1");
  blogTitle.innerText=posts.homeCollection.items[0].devBlog

  blogTitle.className="pageTitle";

  const postTitle = document.createElement("h3");
  postTitle.innerText=firstPost.title
  postTitle.className="postTitle";

  const postBody = document.createElement("p");
  postBody.innerText=firstPost.body.json.content[0].content[0].value;
  postBody.className="postBody";
  
  document.body.append(blogTitle, postTitle, postBody)
}

fetch(fetchOptions.endpoint, fetchOptions)
.then(response => response.json())
.then(data => post1(data.data));