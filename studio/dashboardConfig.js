export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5fcebb4b8bf525332bb7ea1f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-23uafrm3',
                  apiId: '9fe9044b-5d06-4f79-8df6-722b7daa2175'
                },
                {
                  buildHookId: '5fcebb4b1124ad3c7ba0570a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kk9cfnh7',
                  apiId: '346dc2e1-2ce1-47d1-a845-6bf9a2ab870d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pkeyser10/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kk9cfnh7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
