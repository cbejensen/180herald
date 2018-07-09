import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({ node }) => {
  return (
    <li>
      <Link to={node.slug}>{node.title}</Link>
      <Excerpt text={node.content.childMarkdownRemark.excerpt} />
    </li>
  )
}

const Excerpt = ({ text }) => <p>{text}</p>

export default BlogPost
