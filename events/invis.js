const { Event } = require("klasa");

module.exports = class extends Event {

    constructor(...args) {
        super(...args, {
            name: "klasaReady",
            enabled: true
        });
    }

    async run() {
        this.client.user.setStatus("invisible");
    }

};
