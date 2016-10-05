module.exports = {
  extends: [
    '../airbnb-base',
    '../airbnb-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
