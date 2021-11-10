input.onPinPressed(TouchPin.P0, function () {
    if (Dice3R2 > 0) {
        Dice3R2 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Dice3R2 = Dice3
    }
})
input.onButtonPressed(Button.A, function () {
    if (Dice1R2 > 0) {
        Dice1R2 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Dice1R2 = Dice1
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (Dice5R2 > 0) {
        Dice5R2 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Dice5R2 = Dice5
    }
})
input.onButtonPressed(Button.B, function () {
    if (Dice2R2 > 0) {
        Dice2R2 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Dice2R2 = Dice2
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (Dice4R2 > 0) {
        Dice4R2 = 0
    } else {
        basic.showIcon(IconNames.Yes)
        Dice4R2 = Dice4
    }
})
input.onGesture(Gesture.Shake, function () {
    ShakeCounter = ShakeCounter + 1
    Dice1 = randint(1, 6)
    Dice1 = Dice1R2
    basic.showNumber(Dice1)
    basic.pause(500)
    Dice2 = randint(1, 6)
    basic.showNumber(Dice2)
    basic.pause(500)
    Dice3 = randint(1, 6)
    basic.showNumber(Dice3)
    basic.pause(500)
    Dice4 = randint(1, 6)
    basic.showNumber(Dice4)
    basic.pause(500)
    Dice5 = randint(1, 6)
    basic.showNumber(Dice5)
    basic.pause(500)
})
let ShakeCounter = 0
let Dice4 = 0
let Dice2 = 0
let Dice5 = 0
let Dice1 = 0
let Dice3 = 0
let Dice5R2 = 0
let Dice4R2 = 0
let Dice3R2 = 0
let Dice2R2 = 0
let Dice1R2 = 0
Dice1R2 = randint(1, 6)
Dice2R2 = randint(1, 6)
Dice3R2 = randint(1, 6)
Dice4R2 = randint(1, 6)
Dice5R2 = randint(1, 6)
basic.forever(function () {
    if (ShakeCounter > 2) {
        ShakeCounter = 0
        basic.showString("shake")
    } else {
        if (input.buttonIsPressed(Button.AB)) {
            if (Dice1R2 > 0) {
                basic.showNumber(Dice1R2)
            } else {
                basic.showIcon(IconNames.No)
            }
            if (Dice2R2 > 0) {
                basic.showNumber(Dice2R2)
            } else {
                basic.showIcon(IconNames.No)
            }
            if (Dice3R2 > 0) {
                basic.showNumber(Dice3R2)
            } else {
                basic.showIcon(IconNames.No)
            }
            if (Dice4R2 > 0) {
                basic.showNumber(Dice4R2)
            } else {
                basic.showIcon(IconNames.No)
            }
            if (Dice5R2 > 0) {
                basic.showNumber(Dice5R2)
            } else {
                basic.showIcon(IconNames.No)
            }
            if (Dice1 == 0) {
                basic.showString("shake")
            } else {
                if (Dice1R2 > 0) {
                    basic.showNumber(Dice1R2)
                } else {
                    basic.showNumber(Dice1)
                }
                if (Dice2 == 0) {
                    basic.showString("shake")
                } else {
                    if (Dice2R2 > 0) {
                        basic.showNumber(Dice2R2)
                    } else {
                        basic.showNumber(Dice2)
                    }
                    if (Dice3 == 0) {
                        basic.showString("shake")
                    } else {
                        if (Dice3R2 > 0) {
                            basic.showNumber(Dice3R2)
                        } else {
                            basic.showNumber(Dice3)
                        }
                        if (Dice4 == 0) {
                            basic.showString("shake")
                        } else {
                            if (Dice4R2 > 0) {
                                basic.showNumber(Dice4R2)
                            } else {
                                basic.showNumber(Dice4)
                            }
                            if (Dice5 == 0) {
                                basic.showString("shake")
                            } else {
                                if (Dice5R2 > 0) {
                                    basic.showNumber(Dice5R2)
                                } else {
                                    basic.showNumber(Dice5)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
