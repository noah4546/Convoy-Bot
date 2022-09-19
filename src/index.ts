
import interactionCreate from "./listeners/interactionCreate";
import ready from "./listeners/ready";
import { MyClient } from "./myClient";
import { Config } from './config';
import { Player } from 'discord-player';
import { GatewayIntentBits } from "discord.js";

console.log("Bot is starting...");

const client = new MyClient({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ]
});

client.config = Config;

ready(client);
interactionCreate(client);

client.player = new Player(client, client.config.opt.discordPlayer);

client.login(client.config.app.token);