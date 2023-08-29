controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(44, 90)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setPosition(80, 90)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setPosition(80, 90)
})
function doThin () {
    ChooseThin = randint(1, 2)
    if (ChooseFat == 1) {
        mySprite3 = sprites.create(assets.image`myImage10`, SpriteKind.Enemy)
    } else {
        mySprite3 = sprites.create(assets.image`myImage9`, SpriteKind.Enemy)
    }
    ChooseLocation = randint(1, 3)
    if (ChooseLocation == 1) {
        mySprite3.setPosition(80, 8)
    } else if (ChooseLocation == 2) {
        mySprite3.setPosition(116, 8)
    } else {
        mySprite3.setPosition(44, 8)
    }
    mySprite3.setVelocity(0, 50)
}
function doAny () {
    ChooseFOT = randint(0, 1)
    if (ChooseFOT == 0) {
        doWide()
    } else {
        doThin()
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(116, 90)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    scaling.scaleByPixels(mySprite, 2, ScaleDirection.Horizontally, ScaleAnchor.Middle)
    sprites.destroy(mySprite2)
})
function doWide () {
    ChooseFat = randint(1, 3)
    if (ChooseFat == 1) {
        mySprite2 = sprites.create(assets.image`myImage6`, SpriteKind.Food)
    } else if (ChooseFat == 2) {
        mySprite2 = sprites.create(assets.image`myImage7`, SpriteKind.Food)
    } else {
        mySprite2 = sprites.create(assets.image`myImage8`, SpriteKind.Food)
    }
    ChooseLocation = randint(1, 3)
    if (ChooseLocation == 1) {
        mySprite2.setPosition(80, 8)
    } else if (ChooseLocation == 2) {
        mySprite2.setPosition(116, 8)
    } else {
        mySprite2.setPosition(44, 8)
    }
    mySprite2.setVelocity(0, 50)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    scaling.scaleByPixels(mySprite, -2, ScaleDirection.Horizontally, ScaleAnchor.Middle)
    sprites.destroy(mySprite3)
})
let mySprite2: Sprite = null
let ChooseFOT = 0
let ChooseLocation = 0
let mySprite3: Sprite = null
let ChooseFat = 0
let ChooseThin = 0
let mySprite: Sprite = null
info.setScore(0)
mySprite = sprites.create(assets.image`boot`, SpriteKind.Player)
mySprite.setPosition(80, 90)
scene.setBackgroundImage(assets.image`myImage5`)
pause(200)
for (let index = 0; index < 7.777777777777777e+108; index++) {
    for (let index = 0; index < 4; index++) {
        scene.setBackgroundImage(assets.image`myImage`)
        mySprite.setImage(assets.image`myImage2`)
        pause(100)
        scene.setBackgroundImage(assets.image`myImage0`)
        mySprite.setImage(assets.image`myImage4`)
        pause(100)
        scene.setBackgroundImage(assets.image`myImage1`)
        mySprite.setImage(assets.image`myImage3`)
        pause(100)
    }
    pause(200)
    doAny()
}
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
	
})
