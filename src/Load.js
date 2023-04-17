import chaoImg from './assets/img/chao.png'
import forestImg from './assets/img/forest.jpg'
import platformImg from './assets/img/platform.png'
import redSlimeSpritesheetImg from './assets/img/amoeba.png'
import starImg from './assets/img/coin-transformed.png'
import bombImg from './assets/img/bomb.png'



export default class Load extends Phaser.Scene
{
    constructor ()
    {
        super({key: 'LoadingScene'})
    }

    preload ()
    {
        const canvasWidth = this.sys.canvas.width
        const canvasHeight = this.sys.canvas.height
        const barWidth = 0.6 *canvasWidth
        const barHeight = canvasHeight/12
        const progress = this.add.graphics()//loading

        this.load.on('complete', ()=>{
            this.scene.start('GameScene')
        })

        this.load.on('progress',(percent)=>{
            progress.clear()
            progress.lineStyle(4,0xffffaa,1)
            progress.fillStyle(0xffffff)
            progress.fillRect(
                (canvasWidth-barWidth)/2,//pos x
                (canvasHeight/2) -barHeight/2,//pos y
                barWidth*percent,//size x
                barHeight//size y
            )
            progress.lineStyle(4, 0xffff00, 1);
            progress.strokeRect(
                (canvasWidth-barWidth)/2,
                (canvasHeight/2) -barHeight/2,
                barWidth,
                barHeight
             )
        })

        this.load.image('forest', forestImg)
        this.load.image('bomb', bombImg)
        this.load.image('chao', chaoImg)
        this.load.image('platform', platformImg)

        this.load.spritesheet('slime', redSlimeSpritesheetImg, {
            frameWidth: 22,
            frameHeight: 18,
            spacing: 1,
            margin:1

        })
        this.load.spritesheet('star', starImg, {frameWidth:16,frameHeight:25})
        //this.load.image('lg1', lgImg1)
        //this.add.sound()
        //this.add.music()
        //this.add.sprite()

    }
}