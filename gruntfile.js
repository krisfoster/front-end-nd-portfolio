module.exports = function(grunt) {
    grunt.initConfig({

        less: {
            development: {
                options: {
                    paths: ["./css"]
                },
                files: {"./css/main.css": "./less/main.less"}
            },
            production: {
                options: {
                    paths: ["./css"],
                    cleancss: true
                },
                files: {"./css/main.css": "./less/main.less"}
            }
        },
        watch: {
            less: {
                files: 'less/**/*.less',
                tasks: 'less'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};
