import { APIEmbedField, ApplicationCommandType, CommandInteraction, Embed, EmbedBuilder } from 'discord.js';
import { Command } from './command';
import { MyClient } from '../index';

export const Queue: Command = {
    name: "queue",
    description: "List the songs in the queue.",
    type: ApplicationCommandType.ChatInput,
    run: async (client: MyClient, interaction: CommandInteraction) => {
        
        const queue = client.player.getQueue(interaction.guild!);  
        console.log(queue);
        
        try {

            const tracks = queue.tracks;
            const fields: APIEmbedField[] = [];

            for (let i = 0; i < tracks.length; i++) {
                const track = tracks[i];
    
                fields.push({
                    name: `${i+1}. ${track.title} (${track.duration})`,
                    value: `Author: ${track.author}. Url: ${track.url}`
                });
            }
    
            const queueEmbed = new EmbedBuilder()
                .setAuthor({
                    name: client.config.app.name
                })
                .setTitle("Queue")
                .setDescription("Queue of Songs that will be playing!")
                .setFields(fields);
    
            
            return await interaction.reply({ embeds: [queueEmbed] });
        
        } catch (err) {
            console.log(err);
            return await interaction.reply("Queue Empty!");
        }
    }
}