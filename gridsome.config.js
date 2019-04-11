// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/posts/**/*.md',
        typeName: 'BlogPost',
        // route: '/blog/:year/:month/:day/:slug'
        route: '/posts/:slug'
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'BlogPost',
        feedOptions: {
          title: 'My Awesome Blog',
          feed_url: 'https://superblog.com/rss.xml',
          site_url: 'https://superblog.com'
        },
        feedItemOptions: node => {
          // console.log(node)
          return ({
            title: node.title,
            description: node.description,
            url: 'https://superblog.com/posts/' + node.slug,
            author: node.fields.author
          })
        },
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      // anchorClassName: 'icon icon-link',
      // plugins: [
      //   // ...global plugins
      // ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
  }
}
