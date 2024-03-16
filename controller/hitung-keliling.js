const history = require("../model/history");

function hitungKeliling(req, res) {
  const data = req.body
  const alas = data.alas
  const tinggi = data.tinggi
  //! error rumus
  const keliling = alas*3;
  res.status(200).send("Keliling:" + keliling);

  history.push({
    alas: alas,
    tinggi : tinggi,
    Keliling: keliling,
    status : "sukses"
  });
}

module.exports = hitungKeliling;