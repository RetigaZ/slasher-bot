const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("secret")
    .setDescription("Only you can see this"),
  async execute(interaction) {
    await interaction.reply({ content: "Secret pong!", ephemeral: true });
  },
};
