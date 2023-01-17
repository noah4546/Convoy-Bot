import { CommandInteraction, GuildMember, UserResolvable, ApplicationCommandType, ApplicationCommandOptionType, EmbedBuilder } from 'discord.js';

import { Command } from "./command";
import { MyClient } from 'src';
import { QueryType } from 'discord-player';
import { embedTrackMessage } from '../Helpers/FormattingHelper';

export const Play: Command = {
    name: "play",
    description: "Play a song",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "song",
            description: "the song you would like to play",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (client: MyClient, interaction: CommandInteraction) => {
        const songReq = interaction.options.get('song')?.value?.toString() ?? "C.W. McCall - Convoy";

        const res = await client.player.search(songReq, {
            requestedBy: interaction.member as UserResolvable,
            searchEngine: QueryType.AUTO
        });

        const queue = client.player.createQueue(interaction.guild!, {
            metadata: interaction.channel,
            spotifyBridge: client.config.opt.spotifyBridge,
            initialVolume: client.config.opt.defaultVolume,
            leaveOnEnd: client.config.opt.leaveOnEnd
        });

        try {
            if (!queue.connection) await queue.connect((interaction.member! as GuildMember).voice.channel!);
        } catch {
            client.player.deleteQueue(interaction.guildId!);
            return interaction.reply({ content: `I can't join the voice channel ${interaction.member}... try again ? ❌`, ephemeral: true});
        }

        

        //await interaction.reply({ content:`Loading your selection: ${songReq}!`});
        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);
        if (!queue.playing) await queue.play();

        const track = res.tracks[0];
        return await interaction.reply({ embeds: [embedTrackMessage(client, track)] });
    }
};