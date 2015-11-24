module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: 'build/js',
      src: '**/*.js',
      dest: 'build/js',
      ext: '.js'
    }]
  }
}
