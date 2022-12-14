const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("choice")
    .setDescription("Allows you to choose an option")
    .addStringOption((option) =>
      option
        .setName("animals")
        .setDescription("Choose your favourite animal!")
        .setRequired(true)
        .addChoices(
          {
            name: "Dog",
            value:
              "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
          },
          {
            name: "Cat",
            value:
              "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
          },
          {
            name: "Horse",
            value:
              "https://zwierzaki.pl/wp-content/uploads/2022/05/quarter-horse-x-840x400.jpg",
          }
        )
    ),
  async execute(interaction) {
    const animals = interaction.options.getString("animals");
    await interaction.reply({ content: animals });
    // category must be one of 'gif_funny', 'gif_meme', or 'gif_movie'
  },
};
