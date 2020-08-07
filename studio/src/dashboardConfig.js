export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2d165cd3629e61810d3f0e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ajkqqj7i',
                  apiId: '8b7e31f9-a8f9-4b69-aeab-738d9026cd03'
                },
                {
                  buildHookId: '5f2d165c6a655e5662d5abf8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bny8ja3v',
                  apiId: '44ff5bf7-7663-4023-b9d7-e577316e78ba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AUTHORIAL/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bny8ja3v.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
