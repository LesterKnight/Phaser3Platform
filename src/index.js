import Phaser from 'phaser'
import Game from './Game'
import Load from './Load'


const config = {
    type: Phaser.AUTO,
    parent: 'platform',
    width: 400,
    height: 240,
    scene: [Load,Game],
    physics: {
        default: 'arcade',
        arcade:{
            gravity:{
                y: 100
            },
            debug: false
        }
    },
}

const game = new Phaser.Game(config)
