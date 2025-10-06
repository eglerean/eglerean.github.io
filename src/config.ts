export const SITE = {
  website: "https://eglerean.github.io/", // replace this with your deployed domain
  author: "Enrico Glerean",
  profile: "https://eglerean.github.io/",
  desc: "Enrico Glerean",
  title: "Enrico Glerean, DSc.",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 400,
  postPerPage: 400,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/eglerean/eglerean.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Helsinki", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
