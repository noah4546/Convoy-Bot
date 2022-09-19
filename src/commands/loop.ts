import { QueryType } from 'discord-player';
import { ApplicationCommandOptionType, ApplicationCommandType, CommandInteraction, GuildMember, UserResolvable } from 'discord.js';
import { MyClient } from 'src/myClient';
import { Command } from './command';

export const Loop: Command = {
    name: "cvloop",
    description: "Play a song multiple times",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "song",
            description: "the song you would like to play",
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "times",
            description: "number of times you want the song to loop",
            type: ApplicationCommandOptionType.Number,
            required: true
        }
    ],
    run: async (client: MyClient, interaction: CommandInteraction) => {
        const songReq = interaction.options.get('song')?.value?.toString();
        const timesReq = interaction.options.get('times')?.value?.toString();

        let times: number = parseInt(timesReq!);

        const res = await client.player.search("C.W. McCall - Convoy", {
            requestedBy: interaction.member as UserResolvable,
            searchEngine: QueryType.AUTO
        });

        const queue = await client.player.createQueue(interaction.guild!, {
            metadata: interaction.channel,
            spotifyBridge: client.config.opt.spotifyBridge,
            initialVolume: client.config.opt.defaultVolume,
            leaveOnEnd: client.config.opt.leaveOnEnd
        });

        try {
            if (!queue.connection) await queue.connect((interaction.member! as GuildMember).voice.channel!);
        } catch {
            await client.player.deleteQueue(interaction.guildId!);
            return interaction.reply({ content: `I can't join the voice channel ${interaction.member}... try again ? ❌`, ephemeral: true});
        }

        await interaction.reply({ content:`Loading your selection: ${songReq} to play ${times} times!`});

        for (let i = 0; i < times; i++)
            res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    }
}