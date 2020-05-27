export const changeProgressBar = (e) =>  {
    const target = e.target
    const targetPosition = target.getBoundingClientRect()
    const OneProcent = target.offsetWidth / 100
    const containerClickPosition = Math.floor( (e.clientX - targetPosition.x) / OneProcent )

    return containerClickPosition
}