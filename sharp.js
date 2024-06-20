// eslint-disable-next-line import/no-extraneous-dependencies
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'src/public/images');

if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
}

fs.readdirSync(target)
    .forEach((image) => {
        sharp(`${target}/${image}`)
          .resize(1280)
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-xtra-large.jpg`,
            ),
          // eslint-disable-next-line function-paren-newline
          );
      sharp(`${target}/${image}`)
          .resize(843)
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
            ),
          // eslint-disable-next-line function-paren-newline
          );
      sharp(`${target}/${image}`)
          .resize(393)
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
            ),
          // eslint-disable-next-line function-paren-newline
          );
    });
