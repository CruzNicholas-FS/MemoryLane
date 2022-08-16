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
            url
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
  console.log(posts.blogPostCollection.items);

  const firstPost = posts.blogPostCollection.items[0]

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

  const postImage = document.createElement("img");
  postImage.className="postImage";
  postImage.src=firstPost.image.url;
  postImage.alt="Splitgate Data Portal Homepage";
  postImage.width="400";
  postImage.height="200";
  
  document.body.append(blogTitle, postTitle, postBody, postImage)
}

fetch(fetchOptions.endpoint, fetchOptions)
.then(response => response.json())
.then(data => post1(data.data));