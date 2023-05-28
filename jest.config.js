/** @type {import('jest').Config} */
const config = {
    verbose: true,
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleDirectories: ["node_modules", "src", "test'"],
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    }
  };

export default config;
// module.exports = config;
