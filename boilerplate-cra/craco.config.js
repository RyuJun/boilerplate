/* eslint-disable @typescript-eslint/no-unused-vars */
const CracoAlias = require('craco-alias');

class GenerateRouterPlugin {
  // Define `apply` as its prototype method which is supplied with compiler as its argument
  apply(compiler) {
    // Specify the event hook to attach to
    compiler.hooks.beforeRun.tap(
      'GenerateRouterPlugin',
      (compilation, callback) => {
        require(`${__dirname}/generateRouter.js`);
      }
    );
  }
}

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
  webpack: {
    plugins: [
      new GenerateRouterPlugin(),
    ],
  },
};
