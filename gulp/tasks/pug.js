module.exports = function() {
    $.gulp.task('pug', ()=>  {
        return $.gulp.src('./dev/pug/pages/*.pug')
            .pipe($.gp.pug({
                locals : {
                    nav: JSON.parse($.fs.readFileSync('./data/navigation.json', 'utf8')),
                    content: JSON.parse($.fs.readFileSync('./data/content.json', 'utf8')),
                    contentCatalog: JSON.parse($.fs.readFileSync('./data/contentCatalog.json', 'utf8')),
                    contentPackagin: JSON.parse($.fs.readFileSync('./data/contentPackagin.json', 'utf8')),
                    contentNewYear: JSON.parse($.fs.readFileSync('./data/contentNewYear.json', 'utf8')),
                    contentRoom: JSON.parse($.fs.readFileSync('./data/contentRoom.json', 'utf8')),
                    contentDelivery: JSON.parse($.fs.readFileSync('./data/contentDelivery.json', 'utf8')),
                    contentBlog: JSON.parse($.fs.readFileSync('./data/contentBlog.json', 'utf8')),
                },
                pretty: true
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            }))
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};
