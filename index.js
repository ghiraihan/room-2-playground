const express = require("express");
const PORT = proces.env.PORT || 6789;
const server = express();
server.use(express.urlencoded());

// todo : Controller
const lihat_history = require("./controller/lihat-history");
const hitungLuas = require("./controller/hitung-luas");
const hitungKeliling =require("./controller/hitung-keliling");

// todo : Routing
server.get("/lihat-history", lihat_history);

server.post('/hitung-luas', hitungLuas)

server.post('/hitung-keliling', hitungKeliling)

server.listen(PORT, function(){
  console.log(`Server berjalan di localhost:${PORT}`);
});