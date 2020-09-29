module.exports = function(context) {
  const plugins = [
    require('postcss-import')({
      path: ['./src/css/imports', 'node_modules'],
      plugins: [
        require('stylelint')({

        }),
      ]
    }),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-mixins'),
    require('postcss-preset-env')({
      'browsers': 'last 2 versions'
    }),
    // require('autoprefixer'),
    require('postcss-reporter')({
      clearReportedMessages: true
    }),
  ];

  return {
    plugins,
  };
};
