module.exports = {
  extends: [
    '../airbnb-base',
    '../airbnb-base/rules/strict',
    './rules/react',
  ].map(require.resolve),
  rules: {}
};
