module.exports = {
  main: {
    files: [
      {expand: true,src: 'css/*',dest: 'build/',filter: 'isFile'},
      {expand: true,cwd: 'libs/materialize/fonts/',src: ['**'], dest: 'build/css/fonts/',},
      {expand: true,cwd: 'libs/font-awesome/fonts/',src: ['**'], dest: 'build/css/fonts/',},
    ]
  }
}
