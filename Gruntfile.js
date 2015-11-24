module.exports = function(grunt) {
    require('time-grunt')(grunt);
    //var path = require('path');

    require('load-grunt-config')(grunt, {
        jitGrunt: true
    });
grunt.loadNpmTasks('grunt-zip');
};
