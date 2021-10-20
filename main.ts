input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    music.playMelody("E - E - E - E - ", 120)
    basic.pause(2000)
    for (let index = 0; index < 2; index++) {
        basic.showString("This is a important message I am sending to you.")
        basic.showLeds(`
            . # . # .
            # . . . #
            . . # . .
            # . . . #
            . # . # .
            `)
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
    basic.showLeds(`
        # . . . #
        . # # # .
        . # . # .
        . # # # .
        # . . . #
        `)
    music.playMelody("E - E - E - E - ", 120)
    basic.clearScreen()
})
