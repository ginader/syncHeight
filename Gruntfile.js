/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/* <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;\n' +
      '* Dual licensed under the MIT and GPL licenses:\n' +
      '* http://www.opensource.org/licenses/mit-license.php\n' +
      '* http://www.gnu.org/licenses/gpl.html */\n',
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: 'jquery.syncHeight.js',
        dest: 'jquery.syncHeight.min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      syncHeight: [
        'jquery.syncHeight.js'
      ]
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      }
    },
    removelogging: {
      dist: {
        src: 'jquery.syncHeight.min.js',
        dest: 'jquery.syncHeight.min.js'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-remove-logging");

  // Default task.
  grunt.registerTask('default', ['jshint', 'uglify', 'removelogging']);

};
