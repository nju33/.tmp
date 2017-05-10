const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  // entry: {
  //   bundle: `${__dirname}/a.js`,
  // },
  entry: [
    // 'webpack-hot-middleware/client?path=/',
    // 'webpack/hot/dev-server',
    // 'webpack-hot-middleware/client?reload=true',
    // 'webpack-hot-middleware/client',
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    `${__dirname}/a.js`,
  ],
  output: {
    publicPath: '/',
    path: __dirname,
    filename: 'bundle.js',
    // hotUpdateChunkFilename: 'hot/hot-update.js',
    // hotUpdateMainFilename: 'hot/hot-update.json'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new HtmlWebpackPlugin()
  ]
};

console.log(webpackConfig);
const compiler = webpack(webpackConfig);

let init = false;
module.exports = (req, res) => {
  console.log(req);
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })(req, res, () => {
    webpackHotMiddleware(compiler)(req, res, function () {
      console.log(arguments);
      // console.log(req);
      // console.log(res);
      // console.log(compiler);
      // console.log(compiler.outputFileSystem.readFileSync(`${__dirname}/bundle.js`));
      if (!init) {
        console.log(compiler);
        res.end(generateDom());
        init = true;
      } else {
        console.log(arguments);
        res.end();
      }
    });
  });
};

function generateDom() {
  return `<!DOCTYPE html>
<html><head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head><body>
  <div id="app"></div>
  <script src="/bundle.js"></script>
</body></html>`;
}
