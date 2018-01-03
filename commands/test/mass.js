const { Command } = require("klasa");
const channels = ["397148736352157697", "372422193658724396"];

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: "queue",
            enabled: true,
            runIn: ["text"],
            usage: "<message:str>",
            permLevel: 10
        });
    }

    async run(msg, [message]) {
        const output = [];

        for (let i = 0; i < Math.min(channels.length, 10); i++) {
            output[i] = [
                this.client.channels.get(channels[i]).send(message)
            ];
        }
    }

};
