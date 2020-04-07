const multer = require('multer');

//configurando as info do upload
const storage = multer.diskStorage(
    {
        destination:(req,file,cb) =>{
            cb(null, "public/img");
        },
        filename:(req,file,cb)=>{
            cb(null, file.originalname);
        }
    }
);


//exportar o objeto multer com suas configurações
module.exports = multer({storage});