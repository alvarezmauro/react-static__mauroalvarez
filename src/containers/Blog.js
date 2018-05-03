
import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ posts }) => (
  <div>
    {console.log(posts.items)}
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul>
      {posts.items.map(post => (
        <li key={post.fields.id}>
          <Link to={`/blog/post/${post.fields.id}/`}>{post.fields.title}</Link>
        </li>
      ))}
    </ul>
  </div>
))
