let N2 = 0
let N1 = 0
input.onButtonPressed(Button.A, function () {
    N2 = 2
    basic.showNumber(N2)
    basic.showIcon(IconNames.No)
    N1 = randint(0, 10)
    basic.showNumber(N1)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(N2 * N1)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    N2 = 4
    basic.showNumber(4)
    basic.showIcon(IconNames.No)
    N1 = randint(0, 10)
    basic.showNumber(N1)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(N2 * N1)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    N2 = 3
    basic.showNumber(3)
    basic.showIcon(IconNames.No)
    N1 = randint(0, 10)
    basic.showNumber(N1)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(N2 * N1)
    basic.showIcon(IconNames.Happy)
})
