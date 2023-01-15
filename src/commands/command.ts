import { ChatInputApplicationCommandData, CommandInteraction } from 'discord.js';
import { MyClient } from 'src';

export interface Command extends ChatInputApplicationCommandData {
    run: (client: MyClient, interaction: CommandInteraction) => void;
}