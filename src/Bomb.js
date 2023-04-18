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
        if(checkCollision(player,bomb)){
            this.physics.pause()
            this.player.sprite.setTint(0xff0000)
            this.player.sprite.anims.stop()
            this.gameOver = true
        }
      }
}

function checkCollision(player, projectile) {
    const overlapThreshold = 0.3; // Limite mínimo de sobreposição (30%)
    const overlapRect = Phaser.Geom.Intersects.GetRectangleIntersection(player.getBounds(), projectile.getBounds())
    const overlapArea = overlapRect.width * overlapRect.height
    const playerArea = player.width * player.height
    if (overlapArea >= playerArea * overlapThreshold) {
        return true
    }
    return false
}