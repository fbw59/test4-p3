let SONAR = 0
cuteBot.forward()
basic.forever(function () {
    SONAR = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (SONAR > 2 && SONAR < 15) {
        cuteBot.motors(0, 0)
        basic.pause(500)
        cuteBot.motors(randint(-50, -100), 0)
    } else {
        basic.pause(2000)
        cuteBot.forward()
    }
})
