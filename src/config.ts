export const Config = {
    app: {
        token: "MTAyMDg2NDgyNDM0OTAzNjYxNQ.GYPBQi.EGD5UxPOIzRMZBqe9Z8wva836S28-4MB-xLXcA",
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