const sharp = require('sharp');
const fs = require('fs').promises;

const path = require('path')
const { AVATARS, PUBLIC_DIR } = require('../helpers/consts')

const uploadImage = async (id, file) => {
  const avatarUrl = path.join(AVATARS, `${id}${file.originalname}`);

  try {
    await sharp(file.path)
      .resize({ width: 250 })
      .toFile(path.join(PUBLIC_DIR, avatarUrl));
    return avatarUrl
  } catch (err) {
    console.log(err);
    throw (err)
  }
  finally {
    await fs.unlink(file.path)
  }

}

module.exports = {
  uploadImage
}