const { Client, IntentsBitField, Partials } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.DirectMessageReactions
  ],
  partials: [
    Partials.Channel,
    Partials.Message
  ]
});

eventHandler(client);

client.login(process.env.TOKEN);
