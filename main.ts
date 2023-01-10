let Leude = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Leude = Leude + 1
    basic.showNumber(Leude)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Leude = 0
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Leude = Leude - 1
    basic.showNumber(Leude)
})
basic.forever(function () {
    if (Leude >= 10) {
        music.playMelody("G F G F G F G F ", 120)
        basic.setLedColor(0xff0000)
    }
    if (Leude < 10) {
        basic.setLedColor(0x00ff00)
    }
})
