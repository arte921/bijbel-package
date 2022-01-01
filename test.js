const {
    getBijbel,
    tekst
} = require('./index');

(async () => {
    const kjv = await getBijbel();
    console.log(kjv.split("\n")[0]);
    console.log(await tekst("kjv"));
    console.log(await tekst("kjv", "Job 1 "));
})();