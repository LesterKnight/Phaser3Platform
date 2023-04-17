export default class Bomb{
    constructor(scene) {
        this.scene = scene
        this.group = scene.physics.add.group()

    }
    initBomb(){
        let bomb = this.group.create(1, 16, 'bomb').setScale(Phaser.Math.FloatBetween(1, 2)).setAlpha(0.3)
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20)
    }
    hitBomb(player, bomb) {
        //const deltaX = Math.abs(player.x - bomb.x) / ((player.width + bomb.width) / 2) * 100
        //const deltaY = Math.abs(player.y - bomb.y) / ((player.height + bomb.height) / 2) * 100
        //if (deltaX >= 20 && deltaY >= 20) {
            this.physics.pause()
            this.player.sprite.setTint(0xff0000)
            this.player.sprite.anims.stop()
            this.gameOver = true
          //}
      }
}