module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("uploads");
  eleventyConfig.addPassthroughCopy("admin/config.yml");

    return {
      pathPrefix: "/forestry-example/"
    }
  };