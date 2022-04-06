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
  organizationName: "brimdata", // Usually your GitHub org/user name.
  projectName: "zed", // Usually your repo name.
  trailingSlash: true,

  plugins: [
    // This plugin allows, e.g, docs/ to be a symlink to ../zed/docs/.
    function (context, options) {
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
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/brimdata/zed/tree/main",
          exclude: ['**/ztests/**'],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-CV1VB9VF13",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
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
                label: "Blog",
                to: "/blog",
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
    }),
};

module.exports = config;
