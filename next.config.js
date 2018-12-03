const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === "development"
    ? {}
    : require("next-server/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {};
  }

  const nextConfig = {
    webpack: config => {
      return config;
    }
  };

  // ✅ Put the require call here.
  const sass = require("@zeit/next-sass");
  const images = require("next-images");
  const withPlugins = require("next-compose-plugins");

  return withPlugins([[sass], [images]], nextConfig);
};
