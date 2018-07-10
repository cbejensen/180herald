import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { DiscussionEmbed, CommentCount } from 'disqus-react';

class BlogPost extends React.Component {
  render() {
    const { id, title, slug, content } = this.props.data.contentfulBlog
    const disqusShortname = '180herald'
    const disqusConfig = {
      title,
      url: `https://180herald.netlify.com/${slug}`,
      identifier: id,
    }
    return (
      <div>
        <article>
          <h1 style={{ marginBottom: 0 }}>{title}</h1>
          {/* comment count doesn't seem to work in dev */}
          <Link to="#disqus_thread">
            <CommentCount shortname={disqusShortname} config={disqusConfig} />
          </Link>
          <div
            style={{ marginTop: '30px' }}
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
        </article>
        <DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
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
