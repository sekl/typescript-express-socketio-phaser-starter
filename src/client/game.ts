import 'phaser'

const config: GameConfig = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  parent: 'game',
  scene: {
    preload: {},
    create: {},
  }
}

export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config)
  }
}

const game = new Game(config)
