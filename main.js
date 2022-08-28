const main = require("./Our");
(async ()=>{
const name = await main.getUN();
await console.log(name);
})();
