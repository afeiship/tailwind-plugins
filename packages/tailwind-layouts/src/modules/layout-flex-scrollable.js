module.exports = function (pluginApi) {
  const { addComponents } = pluginApi
  return addComponents({
    '.layout-flex-scrollable': {
      display: 'flex',
      '&.is-x': {
        flexDirection: 'row',
      },
      '&.is-y': {
        flexDirection: 'column',
      },
      '.is-flex-scrollable-y': {
        flex: 1,
        overflow: 'hidden scroll',
        overscrollBehavior: 'contain',
      },
      '.is-flex-scrollable-x': {
        flex: 1,
        overflow: 'hidden scroll',
        overscrollBehavior: 'contain',
      },
    },
  })
}