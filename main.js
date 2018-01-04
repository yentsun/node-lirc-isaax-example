const lirc = require('lirc_node');


lirc.init();
console.log(lirc.remotes);
lirc.irsend.send_once("tv", "power", () => {
    console.log("tv power command sent");
});
