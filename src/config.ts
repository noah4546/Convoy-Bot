export const Config = {
    app: {
        token: "MTAyMDg2NDgyNDM0OTAzNjYxNQ.GHIb0J.uL3uMfNpkXag1h9c-kGI7bx4QvaRuIMjKeJeQM",
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