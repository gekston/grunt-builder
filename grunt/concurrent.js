module.exports = {
  options: {
    limit:3
  },
  // develop tools
  buildDev: [
    'copy',
    'concat'
  ],
  // production tools
  buildProd: [
    'uglify'
  ],
  imgMin: [
    'imagemin'
  ],
  mathJax: [
    'unzip'
  ]
}
