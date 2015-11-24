module.exports = {
  main: {
    files: [
      {expand: true,src: 'css/*',dest: 'build/',filter: 'isFile'},
      {expand: true,cwd: 'lib/materialize/fonts/',src: ['**'], dest: 'build/css/fonts/',},
      {expand: true,cwd: 'lib/font-awesome/fonts/',src: ['**'], dest: 'build/css/fonts/',},
    ]
  }
}
