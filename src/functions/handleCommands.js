const { REST, Routes } = require("discord.js");
const fs = require("node:fs");
const colors = require("colors");

const clientId = "1051169944533999646";
const guildId = "956949373906993253";

module.exports = (client) => {
  client.handleCommands = async (commandFolders, path) => {
    client.commandArray = [];
    for (folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`${path}/${folder}`)
        .filter((file) => file.endsWith(".js"));

      for (const file of commandFiles) {
        const command = require(`../commands/${folder}/${file}`);
        client.commands.set(command.data.name, command);
        client.commandArray.push(command.data.toJSON());
      }
    }

    const rest = new REST({ version: "10" }).setToken(process.env.token);

    (async () => {
      try {
        console.log(
          colors.cyan(`Started refreshing application (/) commands.`)
        );

        await rest.put(Routes.applicationCommands(clientId), {
          body: client.commandArray,
        });

        console.log(
          colors.cyan(
            `Successfully reloaded ${data.length} application (/) commands.`
          )
        );
      } catch (error) {
        console.error(error);
      }
    })();
  };
};
