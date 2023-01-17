import { EmbedBuilder } from 'discord.js';
import { Track } from 'discord-player';
import { MyClient } from 'src';

export function titleFormat(track: Track): string | null {
    if (track)
        return `${track.title} (${track.duration})`;

    return null;
}

export function defaultEmbed(client: MyClient) {
    return new EmbedBuilder()
        .setAuthor({
            name: client.config.app.name
        });
}

export function embedTrackMessage(client: MyClient, track: Track): EmbedBuilder {
    return defaultEmbed(client)
        .setTitle(titleFormat(track))
        .setImage(track.thumbnail)
}