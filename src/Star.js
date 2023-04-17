export default class Star{
    constructor(scene) {
        this.scene = scene
        this.group = scene.physics.add.group({
            key: 'star',
            repeat: 4,
            setXY: { x: 12, y: 80, stepX: 90 }
        })
        scene.anims.create({
            key:'starBright',
            frames:scene.anims.generateFrameNumbers('star',{start:0, end:1}),
            frameRate:10,
            repeat:-1
        })

        this.group.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
            child.anims.play('starBright',true)
        })
        this.score = 0
        this.scoreText = scene.add.text(16, 16, 'Score: 0', { fontSize: '16px', fill: '#000' })
    }
    collectStar (player, star)
    {
        //star.destroy()
        star.disableBody(true, true)
        this.score += 1
        this.scoreText.setText('Score: ' + this.score)
        player.setScale(player.scale+=0.05).refreshBody()

        if (this.group.countActive(true)===0)
        {
            this.group.children.iterate(function (child) {
                child.enableBody(true, child.x, 80, true, true)
            })
            //let x = (this.scene.player.x < 100) ? Phaser.Math.Between(100, 200) : Phaser.Math.Between(20, 339)
            let bomb = this.scene.bombs.initBomb()
        }
    }
}