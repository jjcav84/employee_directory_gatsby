// babel configuration for testing with jest
const babelOptions = {
  presets: [`babel-preset-gatsby`],
}

module.exports = require(`babel-jest`).createTransformer(babelOptions)
