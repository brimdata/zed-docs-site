// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zed",
  tagline: "Data has never been easier.",
  url: "https://zed.brimdata.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  stylesheets: ["https://use.typekit.net/nll6rzm.css"],
  organizationName: "brimdata",
  projectName: "zed",
  trailingSlash: false,
  scripts: [
    {
      src: 'https://plausible.io/js/script.js',
      defer: true,
      "data-domain": "zed.brimdata.io",
    },
  ],

  plugins: [
    // This plugin allows, e.g, docs/ to be a symlink to ../zed/docs/.
    function(context, options) {
      return {
        name: "allow-symlinks-plugin",
        configureWebpack(config, isServer, utils) {
          return { resolve: { symlinks: false } };
        },
      };
    },
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          includeCurrentVersion: false,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({docPath}) =>
            `https://github.com/brimdata/zed/edit/main/docs/${docPath}`,
          exclude: ["**/ztests/**"],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'superdb_announce',
        content:
          'Zed is currently evolving into <a href="https://superdb.org/">SuperDB</a>. While still under construction, early <a href="https://superdb.org/docs/">SuperDB docs</a> are available.',
        backgroundColor: '#F9DA46',
        textColor: '#000',
        isCloseable: false,
      },
      image: "img/zed-social-image.jpg",
      metadata: [
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@brimdata" },
        { name: "twitter:image:alt", content: "Zed Documentation Image" },
      ],
      navbar: {
        title: "Zed",
        logo: {
          alt: "Zed Logo",
          src: "img/zed-logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "README",
            position: "left",
            label: "Docs",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            href: "https://zui.brimdata.io/docs",
            label: "Zui Docs",
            position: "right",
          },
          {
            href: "https://github.com/brimdata",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                href: "https://www.brimdata.io/join-slack/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/brimdata",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Brim Data, Inc.",
                href: "https://www.brimdata.io/",
              },
              {
                label: "GitHub",
                href: "https://github.com/brimdata",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Brim Data, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "WZNIEWJ5O6",
        apiKey: "5b2387711eca356fb0d654336ae3f740",
        indexName: "zed-brimdata",
        externalUrlRegex: "zui\\.brimdata\\.io",
      }
    }),
};

module.exports = config;
