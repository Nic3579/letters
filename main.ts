input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    for (let index = 0; index < 2; index++) {
        basic.showString("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }
    basic.showLeds(`
        # . . . #
        . # # # .
        . # . # .
        . # # # .
        # . . . #
        `)
})
