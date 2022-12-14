const { Events } = require("discord.js");
const colors = require("colors");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(
      colors.green("Ready!"),
      `Logged in as`,
      colors.red(`${client.user.tag}`)
    );
  },
};
