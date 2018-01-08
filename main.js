const lirc = require('lirc_node');
const {scheduleJob} = require('node-schedule');
const {HOUR=12, MINUTE=0} = process.env;


lirc.init();

const job = scheduleJob({hour: HOUR, minute: MINUTE}, () => {
    lirc.irsend.send_once("tv", "key_power", () => {
        console.log("tv power command sent");
    });
});
console.log(`job scheduled: ${JSON.stringify(job)}`);
