const createReport = require('docx-templates').default;
const fs = require('fs');
const data_temp = require('./data_doc');
const template = fs.readFileSync(process.argv[2]);
const photox = fs.readFileSync('idukay-logo-240.png');
const logo = fs.readFileSync('logo.jpg');

const main = () => {
  const data = data_temp;
  const doc = await createReport({
    template,
    data,
    additionalJsContext: {
      title: async (size = 3) => {
        return { width: size, height: size, data: photox, extension: '.png' };
      },
      title2: async (size = 3) => {
        return { width: size, height: size, data: logo, extension: '.jpg' };
      },
    },
    cmdDelimiter: ['{', '}'],
  });
  fs.writeFileSync(process.argv.length > 1 ? process.argv[3] : null, doc);
}

main();
