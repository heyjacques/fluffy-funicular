module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        autoprefixer: {         
            dist: {
               files: {
                     'deploy/css/main.css': 'source/sass/main.css',
               },
            },
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