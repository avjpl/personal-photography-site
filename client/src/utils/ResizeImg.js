const sharp = require('sharp');
const ExifImage = require('exif').ExifImage;

const outFolder = '../../web/images';
const filename = '_DSC0635';
let image = sharp(`${outFolder}/_DSC0635.jpg`);

const resizeImage = async () => {
  const sizes = [700];

  return Promise.all(sizes.map(async width => {
    image = await image.clone();
    const metadata = await image.metadata();
    const imgPath = `${outFolder}/${filename}x${width}.jpg`;
    const info = await image
      .resize({ width })
      .withMetadata()
      .toFile(imgPath);

    const exifData = await exif(imgPath);

    return {
      info: {
        ...info,
        ...{ imgPath },
        exif: exifData,
      },
      metadata,
    }
  }));
};

resizeImage()
  .then(info => console.log(info[0].info));

// sharp(input)
//   .resize({ width: 100 })
//   .toBuffer()
//   .then(data => {
//     // 100 pixels wide, auto-scaled height
//   });


// const data = await sharp(input)
//   .jpeg({
//     quality: 100,
//     chromaSubsampling: '4:4:4'
//   })
//   .toBuffer();

const exif = (image) => {
  return new Promise((reolve, reject) => {
    try {
      new ExifImage({ image }, (e, exifData) => {
        if (e) {
          reject(e.message);
        } else {
          reolve(exifData)
        }
      });
    } catch (e) {
      reject(e.message);
    }
  });
}