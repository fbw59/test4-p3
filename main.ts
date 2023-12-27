let SONAR = 0
cuteBot.motors(50, 50)
basic.forever(function () {
    basic.showIcon(IconNames.Ghost)
    basic.showIcon(IconNames.Skull)
})
basic.forever(function () {
    SONAR = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (SONAR > 2 && SONAR < 15) {
        cuteBot.motors(0, 0)
        basic.pause(500)
        cuteBot.motors(randint(-50, -75), 0)
        basic.pause(1000)
    } else {
        cuteBot.motors(50, 50)
    }
})
