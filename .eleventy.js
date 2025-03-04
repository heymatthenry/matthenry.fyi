import { DateTime } from "luxon";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("timestamp", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/css/");

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: {
      name: "post",
      limit: 10,
    },
    metadata: {
      language: "en",
      title: "Mischief & Craft (a Matt Henry blog)",
      subtitle:
        "A blog about front-end dev and literally whatever else I feel like",
      base: "https://matthenry.fyi/",
      author: {
        name: "Matt Henry",
        email: "hey@matthenry.fyi",
      },
    },
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
}
