// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'https://leewarrick.com',
  pathPrefix: '/gridsome-test',
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
          title: 'Tech Jr',
          description: 'description',
          feed_url: 'https://leewarrick.com/gridsome-test/rss.xml',
          site_url: 'https://leewarrick.com/gridsome-test',
          image_url: 'http://example.com/icon.png',
          docs: 'http://example.com/rss/docs.html',
          managingEditor: 'leewarrick@gmail.com (Lee Warrick)',
          webMaster: 'leewarrick@gmail.com (Lee Warrick)',
          copyright: '2019 Lee Warrick',
          language: 'en',
          categories: ['Category 1', 'Category 2', 'Category 3'],
          pubDate: 'May 20, 2012 04:00:00 GMT',
          ttl: '60',
          custom_namespaces: {
            'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
          },
          custom_elements: [
            { 'itunes:subtitle': 'A show about everything' },
            { 'itunes:explicit': 'clean' },
            { 'itunes:author': 'Lee Warrick' },
            { 'itunes:summary': 'All About Everything is a show about everything. Each week we dive into any subject known to man and talk about it as much as we can. Look for our podcast in the Podcasts app or in the iTunes Store' },
            {
              'itunes:owner': [
                { 'itunes:name': 'Lee Warrick' },
                { 'itunes:email': 'leewarrick@gmail.com' }
              ]
            },
            {
              'itunes:image': {
                _attr: {
                  href: 'http://example.com/podcasts/everything/AllAboutEverything.jpg'
                }
              }
            },
            {
              'itunes:category': [
                {
                  _attr: {
                    text: 'Technology'
                  }
                },
                {
                  'itunes:category': {
                    _attr: {
                      text: 'Gadgets'
                    }
                  }
                }
              ]
            }
          ]
        },
        feedItemOptions: node => {
          // console.log(node)
          return ({
            title: node.title,
            description: node.excerpt,
            date: node.fields.date,
            url: 'https://leewarrick.com/gridsome-test/posts/' + node.slug,
            author: node.fields.author,
            categories: node.fields.categories,
            enclosure: { url: 'https://s3.amazonaws.com/techjr/episodes/' + node.fields.fileUrl, size: node.fields.fileSize, type: 'audio/mpeg' }, // optional enclosure
            custom_elements: [
              { 'itunes:author': 'Lee Warrick' },
              { 'itunes:subtitle': 'A short primer on table spices' },
              {
                'itunes:image': {
                  _attr: {
                    href: 'http://example.com/podcasts/everything/AllAboutEverything/Episode1.jpg'
                  }
                }
              },
              { 'itunes:duration': node.fields.showLength },
              { 'itunes:explicit': 'clean' }
            ]
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
