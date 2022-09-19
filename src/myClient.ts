import { Player } from 'discord-player';
import { Client } from 'discord.js';

export class MyClient extends Client {
    public config: any;
    public player!: Player;
}