export const transformTime = (duration) => {
    const Time = Math.floor(duration)
    const second =  Time % 60
    const minutes = (Time - second) / 60
    return {minutes, seconds: Math.floor(second)}
}