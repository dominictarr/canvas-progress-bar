
var progress = require('./')()

progress.progress(0.5)
progress.pngStream().pipe(process.stdout)
