module.exports = {
  options: {
    limit:4
  },
  // develop tools
  buildDev: [
    'copy',
    'concat',
    'imagemin',
    'watch'
  ],
  // production tools
  buildProd: [
    'uglify',
    'unzip'
  ],
  imgMin: [
    'imagemin'
  ],
  mathJax: [
    'unzip'
  ]
}
