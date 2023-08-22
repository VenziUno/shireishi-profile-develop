/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.URL,
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
