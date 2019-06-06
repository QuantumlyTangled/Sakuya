const { Client } = require("klasa");

class client extends Client {

    constructor() {
        super({
            regexPrefix: /^((?:Hey |Ok )?Sakuya(?:,|!))/,
            cmdEditing: true,
            prefix: "s!",
            owner: "126321762483830785",
            provider: { engine: "json" },
            cmdLogging: true,
            console: {
                useColor: true,
                timestamp: "MM-DD-YYYY hh:mm:ss"
            }
        });
    }

}

new client().login("");
