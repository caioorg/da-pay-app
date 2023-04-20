module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        alias: {
          '@components': './src/common/components',
          '@contexts': './src/contexts',
          '@app': './src',
          "@assets": './src/assets'
        },
      }]
    ]
  };
};
