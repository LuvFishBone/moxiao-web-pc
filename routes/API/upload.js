import express from 'express';
import response from '../../utils/response';
import path from 'path';
import fs from 'fs';
// import multer from 'multer';
const router = express.Router();

// let upload = multer({
//   storage: multer.diskStorage({
//       destination: function (req, file, cb) {
//           cb(null, './uploads/');
//       },
//       filename: function (req, file, cb) {
//           var changedName = (new Date().getTime())+'-'+file.originalname;
//           cb(null, changedName);
//       }
//   })
// });

// function mkdirsSync (dirname) {
//   if (fs.existsSync(dirname)) {
//       return true
//   }

//   if (mkdirsSync(path.dirname(dirname), 0o777)) {
//       fs.mkdirSync(dirname);
//       fs.chmodSync(path.join(dirname), 0o777)
//       return true
//   }
// }

router.post('/upload', function(req, res) {
  // console.log(req.files);
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.json(response.err('文件有问题吧 '));
  }
  let thumbFile = req.files.thumbFile;
  let filename = thumbFile.name;
  let buff = thumbFile.data;
  // let fullname = `../../public/images/backEnd/uploaded/${filename}`;
  //let fullname = `../../test`;
  //mkdirsSync(path.join(__dirname, fullname));
  // fs.writeFileSync(path.join(__dirname, fullname), buff);
  // Use the mv() method to place the file somewhere on your server
  thumbFile.mv(`../../images/backEnd/uploaded/${filename}`, function(err) {
    if (err){
      console.log(err);
      return res.json(response.err('上传出错了'));
    }
    // fs.writeFileSync(`../../images/backEnd/uploaded/${filename}`, buff);
    res.json(response.succ('上传成功'));
  });
});

// router.post('/upload', upload.single('singleFile'), (req, res) => {
//   console.log(req.file);
// });

export default router;