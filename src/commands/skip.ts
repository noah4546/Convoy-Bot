import { ApplicationCommandOptionType, ApplicationCommandType, CommandInteraction } from 'discord.js';
import { Command } from './command';
import { MyClient } from 'src';


export const Skip: Command = {
    name: "skip",
    description: "Skip the Song",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "amount",
            description: "Amount of songs to skip",
            type: ApplicationCommandOptionType.Integer,
            required: false
        }
    ],
    run: async (client: MyClient, interaction: CommandInteraction) => {
        const amount = interaction.options.get("amount", false)?.value as Number ?? 1;

        if (amount == 0)
            return await interaction.reply("Skipped 0 Songs!");

        try {
            const queue = client.player.getQueue(interaction.guild!);

            if (!queue.tracks.length || queue.tracks.length == 0)
                return await interaction.reply("You Have No Current Queue!");

            let skips = amount;
            if (queue.tracks.length < skips) skips = queue.tracks.length;
        
            for (let i = 0; i < skips; i++)
                queue.skip();

            return await interaction.reply(`Skipped ${skips} Songs!`);
        
        } catch (err) {
            return await interaction.reply("You Have No Current Queue!");
        }

    }
}