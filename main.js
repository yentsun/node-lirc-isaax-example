const lirc = require('lirc_node');
const {RecurrenceRule, scheduleJob} = require('node-schedule');


lirc.init();
const rule = new RecurrenceRule();
rule.hour = 13;
rule.minute = 20;

scheduleJob(rule, () => {
    lirc.irsend.send_once("tv", "key_power", () => {
        console.log("tv power command sent");
    });
});
