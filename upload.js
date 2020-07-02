const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: 'public/images/',
    filename: function (req, file, cb) {
        cb(null, file.field_name + '_' + Date.now() + path.extname(file.orginalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {filesize: 5000000},
}).single('image');

module.exports = upload;