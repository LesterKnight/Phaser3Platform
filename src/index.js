import Phaser from 'phaser'
import CoinGame from './CoinGame'
import Load from './Load'


const config = {
    type: Phaser.AUTO,
    parent: 'platform',
    width: 400,
    height: 240,
    scene: [Load, CoinGame],
    physics: {
        default: 'arcade',
        arcade:{
            gravity:{
                y: 100
            },
            debug: false
        }
    },
    render: {
        antialias: false
      }
}

const game = new Phaser.Game(config)
