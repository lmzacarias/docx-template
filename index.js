const createReport = require('docx-templates').default;
const fs = require('fs');
const data_temp = require('./data_doc');
const template = fs.readFileSync(process.argv[2]);
const photox = fs.readFileSync('idukay-logo-240.png');
const logo = fs.readFileSync('logo.jpg');

async function main() {
  const data = data_temp;
  console.log("✅ - data", data)
  const doc = await createReport({
    template,
    data: {
      report: [
        {
          school: 'Xavier High School-1',
          year: '2013-2014-1',
          day: 'Vespertina-1',
          name: 'CASSIDY BANSHEE SEAN-1',
          paralelo: 'SEGUNDO DE BÁSICA DE BÁSICA ELEMENTAL 2B-A-1',
          date: 'Quito, 3 de febrero de 2015-1',
          firma1: 'Jean Gray-1',
          firma2: 'Jean Gray-1',
          cargo1: 'Mutante Omega-1',
          cargo2: 'Profesor de motociclismo-1',
        },
        {
          school: 'Xavier High School-2',
          year: '2013-2014-2',
          day: 'Vespertina-2',
          name: 'CASSIDY BANSHEE SEAN-2',
          paralelo: 'SEGUNDO DE BÁSICA DE BÁSICA ELEMENTAL 2B-A-2',
          date: 'Quito, 3 de febrero de 2015-2',
          firma1: 'Jean Gray-2',
          firma2: 'Jean Gray-2',
          cargo1: 'Mutante Omega-2',
          cargo2: 'Profesor de motociclismo-2',
        },
        {
          school: 'Xavier High School-2',
          year: '2013-2014-2',
          day: 'Vespertina-2',
          name: 'CASSIDY BANSHEE SEAN-2',
          paralelo: 'SEGUNDO DE BÁSICA DE BÁSICA ELEMENTAL 2B-A-2',
          date: 'Quito, 3 de febrero de 2015-2',
          firma1: 'Jean Gray-2',
          firma2: 'Jean Gray-2',
          cargo1: 'Mutante Omega-2',
          cargo2: 'Profesor de motociclismo-2',
        },
        {
          school: 'Xavier High School-2',
          year: '2013-2014-2',
          day: 'Vespertina-2',
          name: 'CASSIDY BANSHEE SEAN-2',
          paralelo: 'SEGUNDO DE BÁSICA DE BÁSICA ELEMENTAL 2B-A-2',
          date: 'Quito, 3 de febrero de 2015-2',
          firma1: 'Jean Gray-2',
          firma2: 'Jean Gray-2',
          cargo1: 'Mutante Omega-2',
          cargo2: 'Profesor de motociclismo-2',
        },
        {
          school: 'Xavier High School-2',
          year: '2013-2014-2',
          day: 'Vespertina-2',
          name: 'CASSIDY BANSHEE SEAN-2',
          paralelo: 'SEGUNDO DE BÁSICA DE BÁSICA ELEMENTAL 2B-A-2',
          date: 'Quito, 3 de febrero de 2015-2',
          firma1: 'Jean Gray-2',
          firma2: 'Jean Gray-2',
          cargo1: 'Mutante Omega-2',
          cargo2: 'Profesor de motociclismo-2',
        },
        {
          school: 'Xavier High School-2',
          year: '2013-2014-2',
          day: 'Vespertina-2',
          name: 'CASSIDY BANSHEE SEAN-2',
          paralelo: 'SEGUNDO DE BÁSICA DE BÁSICA ELEMENTAL 2B-A-2',
          date: 'Quito, 3 de febrero de 2015-2',
          firma1: 'Jean Gray-2',
          firma2: 'Jean Gray-2',
          cargo1: 'Mutante Omega-2',
          cargo2: 'Profesor de motociclismo-2',
        },
        {
          school: 'Xavier High School-2',
          year: '2013-2014-2',
          day: 'Vespertina-2',
          name: 'CASSIDY BANSHEE SEAN-2',
          paralelo: 'SEGUNDO DE BÁSICA DE BÁSICA ELEMENTAL 2B-A-2',
          date: 'Quito, 3 de febrero de 2015-2',
          firma1: 'Jean Gray-2',
          firma2: 'Jean Gray-2',
          cargo1: 'Mutante Omega-2',
          cargo2: 'Profesor de motociclismo-2',
        },
        {
          school: 'Xavier High School-2',
          year: '2013-2014-2',
          day: 'Vespertina-2',
          name: 'CASSIDY BANSHEE SEAN-2',
          paralelo: 'SEGUNDO DE BÁSICA DE BÁSICA ELEMENTAL 2B-A-2',
          date: 'Quito, 3 de febrero de 2015-2',
          firma1: 'Jean Gray-2',
          firma2: 'Jean Gray-2',
          cargo1: 'Mutante Omega-2',
          cargo2: 'Profesor de motociclismo-2',
        },
        {
          school: 'Xavier High School-2',
          year: '2013-2014-2',
          day: 'Vespertina-2',
          name: 'CASSIDY BANSHEE SEAN-2',
          paralelo: 'SEGUNDO DE BÁSICA DE BÁSICA ELEMENTAL 2B-A-2',
          date: 'Quito, 3 de febrero de 2015-2',
          firma1: 'Jean Gray-2',
          firma2: 'Jean Gray-2',
          cargo1: 'Mutante Omega-2',
          cargo2: 'Profesor de motociclismo-2',
        },
        {
          school: 'Xavier High School-2',
          year: '2013-2014-2',
          day: 'Vespertina-2',
          name: 'CASSIDY BANSHEE SEAN-2',
          paralelo: 'SEGUNDO DE BÁSICA DE BÁSICA ELEMENTAL 2B-A-2',
          date: 'Quito, 3 de febrero de 2015-2',
          firma1: 'Jean Gray-2',
          firma2: 'Jean Gray-2',
          cargo1: 'Mutante Omega-2',
          cargo2: 'Profesor de motociclismo-2',
        },
        {
          school: 'Xavier High School-2',
          year: '2013-2014-2',
          day: 'Vespertina-2',
          name: 'CASSIDY BANSHEE SEAN-2',
          paralelo: 'SEGUNDO DE BÁSICA DE BÁSICA ELEMENTAL 2B-A-2',
          date: 'Quito, 3 de febrero de 2015-2',
          firma1: 'Jean Gray-2',
          firma2: 'Jean Gray-2',
          cargo1: 'Mutante Omega-2',
          cargo2: 'Profesor de motociclismo-2',
        },
      ],
      items: [
        {
          product: {
            name: 'Monitor',
            price: 99,
          },
          quantity: 10,
          cost: 990,
        },
        {
          product: {
            name: 'Monitor',
            price: 99,
          },
          quantity: 10,
          cost: 990,
        },
        {
          product: {
            name: 'Monitor',
            price: 99,
          },
          quantity: 10,
          cost: 990,
        },
        {
          product: {
            name: 'Monitor',
            price: 99,
          },
          quantity: 10,
          cost: 990,
        },
        {
          product: {
            name: 'Monitor',
            price: 99,
          },
          quantity: 10,
          cost: 990,
        },
      ],
    },
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
  fs.writeFileSync(process.argv.length > 3 ? process.argv[3] : null, doc);
}

main();
