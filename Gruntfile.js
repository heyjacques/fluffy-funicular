module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        autoprefixer: {
    
        },
    
        copy: {
    
       },
    
        clean: {
    
        },
    
        cssmin: {
    
        },
    
        uglify: {
    
        },
    
    });

    
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean'); 
}