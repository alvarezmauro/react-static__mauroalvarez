import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ post }) => (
  <div>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{post.fields.title}</h3>
    <h4>{post.fields.subtitle}</h4>
    <p>{post.fields.body}</p>
  </div>
))
