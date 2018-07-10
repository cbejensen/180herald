import React, { Component } from 'react'
import { DiscussionEmbed, CommentCount } from 'disqus-react';

export default class BlogPostComments extends Component {
  render() {
    const { id, title, slug } = this.props;
    const disqusShortname = '180herald'
    const disqusConfig = {
      title,
      url: `https://180herald.netlify.com/${slug}`,
      identifier: id,
    }
    console.log(disqusConfig);

    return (
      <div>
        <CommentCount shortname={disqusShortname} config={disqusConfig}>Comments?</CommentCount>
        <DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}
