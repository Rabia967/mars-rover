let lights_on = false
input.onButtonPressed(Button.A, function () {
    let sprite: game.LedSprite = null
    motobit.enable(MotorPower.On)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
    sprite.turn(Direction.Right, 180)
})
input.onSound(DetectedSound.Loud, function () {
    lights_on = !(lights_on)
    if (lights_on) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
