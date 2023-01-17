import { Command } from "./command";
import { Play } from './play';
import { Stop } from './stop';
import { Loop } from './loop';
import { Queue } from './queue';
import { Skip } from './skip';
import { Playing } from './playing';
import { Leave } from './leave';

export const Commands: Command[] = [
    Play, 
    Stop, 
    Loop,
    Queue,
    Skip,
    Playing,
    Leave
];