// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import BaseButtle from "./BaseButtle";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Buttle2 extends BaseButtle {
  normalizeVec: cc.Vec2 = null;

  init(game) {
    this.game = game;
    let targetPos: cc.Vec2 = this.game.airPlane.getPosition();
    let bulletPos: cc.Vec2 = this.node.getPosition();
    this.normalizeVec = targetPos.subtract(bulletPos).normalize();
    // 角度变化以y轴正方向为起点，逆时针角度递增
    this.node.angle =
      (cc.v2(0, 1).signAngle(this.normalizeVec) * 180) / Math.PI;
  }

  update(dt) {
    this.node.x += this.normalizeVec.x * this.bulletSpeed * dt;
    this.node.y += this.normalizeVec.y * this.bulletSpeed * dt;
    this.check();

    if (this.getPlayerDistance() < this.collied) {
      this.onPicked();
      return;
    }
  }

  check() {
    if (
      this.node.x < -this.game.size.width ||
      this.node.y < -this.game.size.height ||
      this.node.x > this.game.size.width ||
      this.node.y > this.game.size.height
    ) {
      this.node.destroy();
      this.game.putBullet2();
    }
  }
}
