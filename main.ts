input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    enemy = game.createSprite(0, 0)
    for (let index = 0; index < 100; index++) {
        enemy.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    for (let index = 0; index < 100; index++) {
    	
    }
})
let enemy: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
