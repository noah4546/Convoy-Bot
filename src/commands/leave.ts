import { ApplicationCommandType, CommandInteraction } from 'discord.js';
import { Command } from './command';
import { MyClient } from 'src';

export const Leave: Command = {
    name: "leave",
    description: "Leave the voice call",
    type: ApplicationCommandType.ChatInput,
    run: async (client: MyClient, interaction: CommandInteraction) => {
        const queue = client.player.getQueue(interaction.guildId!);

        if (!queue || !queue.playing) return interaction.reply({ content:`No music currently playing ${interaction.member}... try again ? ❌`, ephemeral: true });

        queue.destroy(true);
        interaction.reply("Left the voice call.");
    }
}