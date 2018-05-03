import axios from 'axios';

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://cdn.contentful.com/spaces/ktzy763tkqls/entries?access_token=20abc773a8c638e9ea5ff2729e5000b5c829f6399c710ffb6e169bd890eb5998&content_type=blogPost&select=fields')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => {
          return ({
            posts,
          })
        },
        children: posts.items.map(post => ({
          path: `/post/${post.fields.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
