import { ApplicationCommandType, CommandInteraction } from 'discord.js';
import { Command } from './command';
import { MyClient } from '../myClient';

export const Stop: Command = {
    name: "cvstop",
    description: "STOP THIS NONSENSE!",
    type: ApplicationCommandType.ChatInput,
    run: async (client: MyClient, interaction: CommandInteraction) => {
        const queue = client.player.getQueue(interaction.guildId!);

        if (!queue || !queue.playing) return interaction.reply({ content:`No music currently playing ${interaction.member}... try again ? ❌`, ephemeral: true });

        queue.destroy();

        interaction.reply({ content: `Sad to see you were fed up by CONVOY :sob:`});
    }
}