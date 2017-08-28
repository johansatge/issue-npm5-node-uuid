module.exports = (grunt) => {
  grunt.loadNpmTasks('grunt-transifex-resjson')
  grunt.registerTask('default', () => {
    console.log('It works!')
  })
}
