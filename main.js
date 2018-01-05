const lirc = require('lirc_node');
const {RecurrenceRule, scheduleJob} = require('node-schedule');
const {HOUR=12, MINUTE=0} = process.env;


lirc.init();
const rule = new RecurrenceRule();
rule.hour = HOUR;
rule.minute = MINUTE;

scheduleJob(rule, () => {
    lirc.irsend.send_once("tv", "key_power", () => {
        console.log("tv power command sent")
    });
});
