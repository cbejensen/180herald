module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '6zjm1dr125fb',
        accessToken: 'b4389217eb1c2489cb8f5e191b59ed083a5291adf06b33796f664e1c1bcc474a'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet'
  ],
}
