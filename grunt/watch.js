module.exports = {
  options: {
    spawn: false,
    livereload: true
  },
  scripts: {
    files: [
      'js/*.js',
      'libs/jquery/jquery.min.js',
      'libs/materialize/materialize.min.js'
    ],
    tasks: [
      'copy',
      'concat',
      'uglify'
    ]
  },
  styles: {
    files: [
      'css/*.css',
      'libs/font-awesome/*.css',
      'libs/materialize/*.css'
    ],
    tasks: [
      'copy',
      'uglify'
    ]
  },
};
