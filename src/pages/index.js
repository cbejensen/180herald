import React from 'react'
import BlogPost from '../components/BlogPost'

const IndexPage = ({ data }) => (
  <ul>
    {data.allContentfulBlog.edges.map(edge => (
      <BlogPost node={edge.node} key={edge.node.slug} />
    ))}
  </ul>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog {
      edges {
        node {
          title
          slug
          content {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`
