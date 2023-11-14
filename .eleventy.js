const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter('postDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter('timestamp', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-MM-dd');
  });

  return {
    dir: {
      input: 'src',
      output: 'src',
    },
  };
};
