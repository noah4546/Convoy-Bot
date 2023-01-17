export const Config = {
    app: {
        name: "Convoy Bot",
        token: "MTAyMDg2NDgyNDM0OTAzNjYxNQ.Gd3li4.gssJ72JXSPwflj6OsMFeS0GKKCF960o0HSzdFw",
        playing: '!!!CONVOY!!!',
        global: true,
        guild: 'XXX'
    },
    opt: {
        DJ: {
            enabled: false,
            roleName: "",
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: "highestaudio",
                highWaterMark: 1 << 25
            }
        }
    }
}