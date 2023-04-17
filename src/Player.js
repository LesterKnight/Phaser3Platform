export default class Player{
    constructor(scene) {
        this.sprite = scene.physics.add.sprite(170,50,'slime')
        this.sprite.setBounce(0.2)
        this.sprite.setCollideWorldBounds(true)//avoid leave screen
        
        scene.anims.create({
            key:'right',
            frames:scene.anims.generateFrameNumbers('slime',{start:3, end:5}),
            frameRate:10,
            repeat:-1
        })
        scene.anims.create({
            key:'left',
            frames:scene.anims.generateFrameNumbers('slime',{start:3, end:5}),
            frameRate:10,
            repeat:-1
        })

        scene.anims.create({
            key:'jump',
            frames:scene.anims.generateFrameNumbers('slime',{start:0, end:2}),
            frameRate:10,
            repeat:-1
        })
        scene.anims.create({
            key:'st',
            frames:scene.anims.generateFrameNumbers('slime',{start:6, end:8}),
            frameRate:10,
            repeat:-1
        })

    }
}