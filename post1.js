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

const post1 = (posts) => {
    console.log(posts)
}

fetch(fetchOptions.endpoint, fetchOptions)
.then(response => response.json())
.then(data => post1(data.data.blogPostCollection));