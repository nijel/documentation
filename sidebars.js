/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'About',
      link: {
        type: 'generated-index',
        title: 'About',
        description: 'What is mosparo? How does mosparo work? You\'ll find all the answers here.',
        slug: '/category/about',
        keywords: ['about'],
      },
      items: [
        {
          type: 'autogenerated',
          dirName: '1_about'
        }
      ],
    },
    'quickstart',
    {
      type: 'category',
      label: 'Installation',
      link: {
        type: 'generated-index',
        title: 'Installation',
        description: 'Learn how you can install mosparo on your server.',
        slug: '/category/installation',
        keywords: ['installation'],
      },
      items: [
        'installation/requirements',
        {
          type: 'category',
          label: 'Install',
          link: {
            type: 'generated-index',
            title: 'Install',
            description: 'Decide between the available installation methods to install mosparo.',
            slug: '/category/installation/install',
            keywords: ['install'],
          },
          items: [
            {
              type: 'autogenerated',
              dirName: '3_installation/2_install'
            }
          ]
        },
        'installation/cron_jobs',
        'installation/nginx'
      ],
    },
    {
      type: 'category',
      label: 'Usage',
      link: {
        type: 'generated-index',
        title: 'Usage',
        description: 'Read how you can use mosparo and which functionality mosparo offers.',
        slug: '/category/usage',
        keywords: ['usage'],
      },
      items: [
        {
          type: 'autogenerated',
          dirName: '4_usage'
        }
      ],
    },
    {
      type: 'category',
      label: 'Integration',
      link: {
        type: 'generated-index',
        title: 'Integration',
        description: 'When you start with mosparo, you want to integrate mosparo into your website. Learn all about it here.',
        slug: '/category/integration',
        keywords: ['integration'],
      },
      items: [
        {
          type: 'autogenerated',
          dirName: '5_integration'
        }
      ],
    },
    {
      type: 'category',
      label: 'Account',
      link: {
        type: 'generated-index',
        title: 'Account',
        description: 'Learn more about what you can do in your account.',
        slug: '/category/account',
        keywords: ['account'],
      },
      items: [
        {
          type: 'autogenerated',
          dirName: '6_account'
        }
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      link: {
        type: 'generated-index',
        title: 'Administration',
        description: 'Learn more about how you can configure your mosparo installation, how you can manage the users and how you can update mosparo.',
        slug: '/category/administration',
        keywords: ['administration'],
      },
      items: [
        {
          type: 'autogenerated',
          dirName: '7_administration'
        }
      ],
    },
    {
      type: 'category',
      label: 'API',
      link: {
        type: 'generated-index',
        title: 'API',
        description: 'Learn all about the different API\'s which mosparo offers.',
        slug: '/category/api',
        keywords: ['api'],
      },
      items: [
        {
          type: 'autogenerated',
          dirName: '8_api'
        }
      ],
    },
  ]
};

module.exports = sidebars;
