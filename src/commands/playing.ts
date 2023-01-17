import { ApplicationCommandType, CommandInteraction } from 'discord.js';
import { Command } from './command';
import { MyClient } from 'src';
import { embedTrackMessage } from '../Helpers/FormattingHelper';

export const Playing: Command = {
    name: "playing",
    description: "Check what song is currently playing",
    type: ApplicationCommandType.ChatInput,
    run: async (client: MyClient, interaction: CommandInteraction) => {
        try {
            const queue = client.player.getQueue(interaction.guild!);
            const track = queue.previousTracks[queue.previousTracks.length - 1];

            return await interaction.reply({ embeds: [embedTrackMessage(client, track)] });
        } catch (err) {
            console.error(err);
            return await interaction.reply("Failed to get Current Song!");
        }

    }
}