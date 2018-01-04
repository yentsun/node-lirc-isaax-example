const lirc = require('lirc_node');


lirc.init();
console.log(lirc.remotes);
lirc.irsend.send_once("tv", "key_power", () => {
    console.log("tv power command sent");
});
