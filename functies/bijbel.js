const fs = require('fs/promises');
const path = require('path');
const leesMap = require("../functies/leesMap.js");

const laadBijbels = async () => {
    const bijbels = {};
    const bijbelpaden = (await leesMap(path.join(__dirname, "..", "bijbels"))).paden;
    
    for (const pad of bijbelpaden) {
        const naam = pad.match(/(?<=\/)[a-zA-Z0-9 ]+(?=.txt$)/)[0];
        bijbels[naam] = (await fs.readFile(pad)).toString();
    }

    return bijbels;
};

const bijbelsPromise = laadBijbels();

const getBijbel = async (vertaling = "statenvertaling", filter = ".*") => {
    const filterRegex = new RegExp(filter, "i");
    const bijbels = await bijbelsPromise;
    return bijbels[vertaling]
        .split("\n")
        .filter((tekst) => tekst.match(filterRegex))
        .join("\n");
};

module.exports = {
    getBijbel,
    bijbelsPromise
};