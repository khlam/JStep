const { getVideoDurationInSeconds } = require('get-video-duration')

export function getVideoFrames(path, fps) {
    return new Promise((resolve) => {    
        getVideoDurationInSeconds(path).then((duration) => {
            const frames = duration * fps
            return resolve(frames)
        })
    })
}