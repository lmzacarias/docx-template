const createReport = require('docx-templates').default;
const fs = require('fs')

const template = fs.readFileSync(process.argv[2])
const photox = fs.readFileSync('idukay-logo-240.png');
const logo =fs.readFileSync('logo.jpg');

createReport({
  template,
  data: {
    school: 'Xavier High School',
    year: '2013-2014',
    day: 'Vespertina',
    photo: photox,
    name: 'CASSIDY BANSHEE SEAN',
    paralelo: 'SEGUNDO DE BÁSICA DE BÁSICA ELEMENTAL 2B-A',
    date: 'Quito, 3 de febrero de 2015',
    firma1: 'Jean Gray',
    firma2: 'Jean Gray',
    cargo1: 'Mutante Omega',
    cargo2: 'Profesor de motociclismo'


  },
  additionalJsContext: {
    title: async (size = 3) => {
      return { width: size, height: size, data: photox, extension: '.png' };
    },
    title2: async (size = 3) => {
      return { width: size, height: size, data: logo, extension: '.jpg' };
    }
  },
  cmdDelimiter: ['{', '}']
}).then(
  rendered => fs.writeFileSync(
    process.argv.length > 3 ? process.argv[3] : null,
    rendered
  ))
  .catch(console.log);
