import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import autoPrefixer from 'gulp-autoprefixer';

export const resetCSS = () => {
    return app.gulp.src(`${app.path.src.css}reset.css`)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "resetCSS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(autoPrefixer({
            grid: true,
            overrideBrowserlist: ["last 3 versions"],
            cascade: true
        }))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
    }