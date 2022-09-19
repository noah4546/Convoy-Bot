export const Config = {
    app: {
        token: "MTAyMDg2NDgyNDM0OTAzNjYxNQ.GU8Ziz.NyAHRmpHwrG-6Leqz4yzUYLocIxJunwhbEyftg",
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