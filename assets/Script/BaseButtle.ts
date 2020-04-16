// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class BaseButtle extends cc.Component {
  @property(cc.Node)
  buttle: cc.Node = null;

  collied: number = 10;

  bulletSpeed: number = 300;

  game = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.bulletSpeed = (Math.random() - 0.5) * 300 + 100;
  }

  start() {}

  init(game) {
    this.game = game;
  }

  getPlayerDistance() {
    // 根据 player 节点位置判断距离
    var playerPos = this.game.airPlane.getPosition();
    // 根据两点位置计算两点之间距离
    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  }

  onPicked() {
    // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的星星
    // this.game.spawnNewStar();
    // 然后销毁当前星星节点
    // this.node.destroy();
    this.game.gameOver();
  }
}
