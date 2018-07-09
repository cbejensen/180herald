import React from 'react'
import PropTypes from 'prop-types'

class BlogPost extends React.Component {
  render() {
    console.log(this.props.data)
    const { title, content } = this.props.data.contentfulBlog
    return (
      <div>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
        />
      </div>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
