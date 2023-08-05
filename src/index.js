const http = require('http');
const mongoose = require('mongoose');
const { CarModel } = require('./models/car');

const PORT = 3005;

(() => {
    connect();
})();

http
  .createServer(async function (req, res, next) {
    if (req.method === 'POST' && req.url === '/cars') {
      try {
        let carBody;
        req.on('data', function (data) {
          carBody = JSON.parse(data.toString());
        });

        req.on('end', async function () {
          const car = await CarModel.create(carBody);
          return res.end(JSON.stringify(car));
        });
      } catch (error) {
        res.end(JSON.stringify(error));
      }
    }

    if (req.method === 'GET' && req.url === '/cars') {
      const cars = await CarModel.find({});
      return res.end(JSON.stringify(cars));
    }

  })
  .listen(PORT);

function connect() {
  const urlConnection = `mongodb://mongo:27017/db_study`;
    mongoose.connect(urlConnection)
    .then((res) => console.log(`CONECTADO ########################`))
    .catch((err) => {
        console.log('#########################################################');
        console.log(err);
    });
}
