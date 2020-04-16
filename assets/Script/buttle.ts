// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import BaseButtle from "./BaseButtle";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Buttle extends BaseButtle {
  // LIFE-CYCLE CALLBACKS:
  onLoad() {}

  start() {}

  update(dt) {
    let targetPos: cc.Vec2 = this.game.airPlane.getPosition();
    let bulletPos: cc.Vec2 = this.node.getPosition();
    let normalizeVec: cc.Vec2 = targetPos.subtract(bulletPos).normalize();
    this.node.x += normalizeVec.x * this.bulletSpeed * dt;
    this.node.y += normalizeVec.y * this.bulletSpeed * dt;
    // 角度变化以y轴正方向为起点，逆时针角度递增
    this.node.angle = (cc.v2(0, 1).signAngle(normalizeVec) * 180) / Math.PI;

    if (this.getPlayerDistance() < this.collied) {
      this.onPicked();
      return;
    }
  }
}
