module.exports = {
  all: {
    files : [{
      expand: true,
      cwd: 'img/',
      src: ['**/*.{png,jpg,gif}'],
      dest: 'build/img/'
    }]
  }
}
