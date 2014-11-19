module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

        typescript: {
          base: {
            src: ['src/**/*.ts'],
            dest: 'build/',
            options: {
              module: 'commonjs',
              target: 'es5' //or es3
            }
          }
        },

          watch: {
            files: 'src/**/*.ts',
            tasks: ['typescript']
          }

    });

    grunt.registerTask('default', 'watch');
    grunt.registerTask('ts', 'typescript');
}
