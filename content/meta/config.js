const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Oregon Knowledge Bank - a local public safety resource", // <title>
  shortSiteTitle: "Oregon Knowledge Bank", // <title> ending for posts and pages
  siteDescription: "A local public safety resource.",
  siteUrl: "https://www.oregonkb.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "OKB",
  authorTwitterAccount: "@orknowledgebank",
  // info
  infoTitle: "Oregon Knowledge Bank",
  infoTitleNote: "A local public safety resource",
  // manifest.json
  manifestName: "Oregon Knowledge Bank - a local public safety resource",
  manifestShortName: "OKB", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "okb@oregon.gov",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/alexpichel" },
    { name: "twitter", url: "https://twitter.com/orknowledgebank" },
    { name: "facebook", url: "http://facebook.com/oregonknowledgebank" }
  ]
};
