import Bullet from "./buttle";
import Bullet2 from "./buttle2";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
  @property(cc.Node)
  airPlane: cc.Node = null;

  @property(cc.Prefab)
  bulletPrefab: cc.Prefab = null;

  @property(cc.Prefab)
  bulletPrefab2: cc.Prefab = null;

  @property(cc.Label)
  gameStatusLabel: cc.Label = null;

  @property(cc.Label)
  gameStatusLabel2: cc.Label = null;

  @property(cc.Label)
  gameStatusLabel3: cc.Label = null;

  @property(cc.Label)
  gameStartLabel: cc.Label = null;

  @property(cc.Node)
  playNode: cc.Node = null;

  @property(cc.Node)
  bulltRoot: cc.Node = null;

  size = null;

  gameStatus: Boolean = false; // false 游戏进行中  true 游戏失败

  timer: number = null;
  aliveSec: number = 0;

  onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.catchMouseMove, this);
    this.size = cc.view.getFrameSize();
    this.playNode.on(cc.Node.EventType.TOUCH_END, this.play, this);
    this.gameStartLabel.node.active = false;
  }
  start() {}

  update(dt) {}

  catchMouseMove(event: cc.Event.EventTouch) {
    this.airPlane.x += event.getDeltaX();
    this.airPlane.y += event.getDeltaY();
  }

  putStart() {
    if (this.gameStatus) return;
    var bullet = cc.instantiate(this.bulletPrefab);
    this.bulltRoot.addChild(bullet);
    bullet.setPosition(this.getNewBulletPosition());
    bullet.getComponent(Bullet).init(this);
  }
  putBullet2() {
    if (this.gameStatus) return;
    var bullet2 = cc.instantiate(this.bulletPrefab2);
    this.bulltRoot.addChild(bullet2);
    bullet2.setPosition(this.getNewBulletPosition());
    bullet2.getComponent(Bullet2).init(this);
  }

  getNewBulletPosition() {
    var randY = (Math.random() - 0.5) * this.node.height;
    var randX = (Math.random() - 0.5) * this.node.width;
    return cc.v2(randX, randY);
  }

  gameOver() {
    this.gameStatus = true;
    this.gameStatusLabel.string = "Game Over";
    this.gameStatusLabel2.string = `you Alive: ${this.aliveSec}s`;
    this.gameStatusLabel.node.active = true;
    this.gameStatusLabel2.node.active = true;
    this.playNode.active = true;
    this.bulltRoot.removeAllChildren();

    console.log("game over");
    // this.bulletPrefab
    clearInterval(this.timer);
  }
  play() {
    this.gameStatusLabel3.node.active = false;
    this.gameStatus = false;
    this.gameStatusLabel.node.active = false;
    this.gameStatusLabel2.node.active = false;
    this.playNode.active = false;
    this.aliveSec = 0;

    // this.gameStartLabel.node.active = true;

    // setTimeout(() => {
    //   this.gameStartLabel.string = "3";
    // }, 1000);
    // setTimeout(() => {
    //   this.gameStartLabel.string = "2";
    // }, 2000);
    // setTimeout(() => {
    //   this.gameStartLabel.string = "1";
    // }, 3000);
    // setTimeout(() => {
    //   this.gameStartLabel.string = "Start...";
    // }, 4000);
    // setTimeout(() => {
    //   this.gameStartLabel.node.active = false;
    //   this.gameStartLabel.string = "3";
    // }, 5000);

    this.timer = setInterval(() => {
      this.aliveSec++;
      this.putStart();
      this.putBullet2();
    }, 1000);
  }
}
