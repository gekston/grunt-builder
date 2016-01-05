module.exports = {
  all: {
    src: ['build/**'],
    dest: 'buildArchive/<%= grunt.template.today("yyyy-mm-dd") %>/<%= grunt.template.today("hh-MM-ss") %>.zip'
  }
}
