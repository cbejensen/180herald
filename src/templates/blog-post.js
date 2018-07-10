import React from 'react'
import PropTypes from 'prop-types'
import BlogPostComments from '../components/BlogPostComments'

class BlogPost extends React.Component {
  render() {
    const { id, title, slug, content } = this.props.data.contentfulBlog
    return (
      <div>
        <article>
          <h1>{title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
        </article>
        <BlogPostComments id={id} title={title} slug={slug} />
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
      id
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
