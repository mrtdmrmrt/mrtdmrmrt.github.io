const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Hi! I'm Mert Demir",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description:
    "Professionally, I work as a Frontend Developer. My Frontend experiences span over three years. I develop my projects using Javascript, Vue.js, Nuxt.js, React.js, Next.js as frontend technology.",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  theme: "default-prefers-color-scheme",

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    overrideTheme: "light",
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    navbar: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Config",
        link: "/config/",
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["", "using-vue"],
        },
      ],
    },
    skills: [
      {
        name: "JavaScript",
        url: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
      },
      {
        name: "Vue.js",
        url: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png",
      },
      {
        name: "Nuxt.js",
        url: "https://raw.githubusercontent.com/github/explore/e94815998e4e0713912fed477a1f346ec04c3da2/topics/nuxt/nuxt.png",
      },
      {
        name: "React.js",
        url: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
      },
      {
        name: "Css",
        url: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
      },
      {
        name: "Sass",
        url: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png",
      },
      {
        name: "Tailwind",
        url: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png",
      },
      {
        name: "Html",
        url: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
      },
    ],
    social: [
      {
        name: "Github",
        icon: ["fab", "github"],
        url: "https://github.com/mrtdmrmrt",
      },
      {
        name: "Stack Overflow",
        icon: ["fab", "stack-overflow"],
        url: "https://stackoverflow.com/users/12253533/mert-js",
      },
      {
        name: "LinkedIn",
        icon: ["fab", "linkedin"],
        url: "https://www.linkedin.com/in/mert-demir-6784b4168/",
      },
      {
        name: "Medium",
        icon: ["fab", "medium"],
        url: "https://medium.com/@mert.demir96",
      },
      {
        name: "Twitter",
        icon: ["fab", "twitter"],
        url: "https://twitter.com/mertdemirdev",
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
