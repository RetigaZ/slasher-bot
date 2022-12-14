const { Client, GatewayIntentBits, Collection } = require("discord.js");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
  ],
});
client.commands = new Collection();
const functions = fs
  .readdirSync("./src/functions")
  .filter((file) => file.endsWith("js"));
const eventFiles = fs
  .readdirSync("./src/events")
  .filter((file) => file.endsWith("js"));
const commandFolders = fs.readdirSync("./src/commands");

(async () => {
  for (file of functions) {
    require(`./functions/${file}`)(client);
  }
  client.handleEvents(eventFiles, "./src/events");
  client.handleCommands(commandFolders, "./src/commands");
  client.login(process.env.token);
})();
