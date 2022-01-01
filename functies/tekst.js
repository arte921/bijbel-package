const { getBijbel } = require("./bijbel");
const random = require("./random");

const tekst = async (vertaling, filter) => random((await getBijbel(vertaling, filter)).split("\n"));

module.exports = tekst;