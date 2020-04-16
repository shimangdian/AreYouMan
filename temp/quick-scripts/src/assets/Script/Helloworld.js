"use strict";
cc._RF.push(module, '1e02emzxypLCojZ6987L/C4', 'Helloworld');
// Script/Helloworld.ts

Object.defineProperty(exports, "__esModule", { value: true });
var buttle_1 = require("./buttle");
var buttle2_1 = require("./buttle2");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.airPlane = null;
        _this.bulletPrefab = null;
        _this.bulletPrefab2 = null;
        _this.gameStatusLabel = null;
        _this.gameStatusLabel2 = null;
        _this.gameStatusLabel3 = null;
        _this.gameStartLabel = null;
        _this.playNode = null;
        _this.bulltRoot = null;
        _this.size = null;
        _this.gameStatus = false; // false 游戏进行中  true 游戏失败
        _this.timer = null;
        _this.aliveSec = 0;
        return _this;
    }
    Helloworld.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.catchMouseMove, this);
        this.size = cc.view.getFrameSize();
        this.playNode.on(cc.Node.EventType.TOUCH_END, this.play, this);
        this.gameStartLabel.node.active = false;
    };
    Helloworld.prototype.start = function () { };
    Helloworld.prototype.update = function (dt) { };
    Helloworld.prototype.catchMouseMove = function (event) {
        this.airPlane.x += event.getDeltaX();
        this.airPlane.y += event.getDeltaY();
    };
    Helloworld.prototype.putStart = function () {
        if (this.gameStatus)
            return;
        var bullet = cc.instantiate(this.bulletPrefab);
        this.bulltRoot.addChild(bullet);
        bullet.setPosition(this.getNewBulletPosition());
        bullet.getComponent(buttle_1.default).init(this);
    };
    Helloworld.prototype.putBullet2 = function () {
        if (this.gameStatus)
            return;
        var bullet2 = cc.instantiate(this.bulletPrefab2);
        this.bulltRoot.addChild(bullet2);
        bullet2.setPosition(this.getNewBulletPosition());
        bullet2.getComponent(buttle2_1.default).init(this);
    };
    Helloworld.prototype.getNewBulletPosition = function () {
        var randY = (Math.random() - 0.5) * this.node.height;
        var randX = (Math.random() - 0.5) * this.node.width;
        return cc.v2(randX, randY);
    };
    Helloworld.prototype.gameOver = function () {
        this.gameStatus = true;
        this.gameStatusLabel.string = "Game Over";
        this.gameStatusLabel2.string = "you Alive: " + this.aliveSec + "s";
        this.gameStatusLabel.node.active = true;
        this.gameStatusLabel2.node.active = true;
        this.playNode.active = true;
        this.bulltRoot.removeAllChildren();
        console.log("game over");
        // this.bulletPrefab
        clearInterval(this.timer);
    };
    Helloworld.prototype.play = function () {
        var _this = this;
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
        this.timer = setInterval(function () {
            _this.aliveSec++;
            _this.putStart();
            _this.putBullet2();
        }, 1000);
    };
    __decorate([
        property(cc.Node)
    ], Helloworld.prototype, "airPlane", void 0);
    __decorate([
        property(cc.Prefab)
    ], Helloworld.prototype, "bulletPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Helloworld.prototype, "bulletPrefab2", void 0);
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "gameStatusLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "gameStatusLabel2", void 0);
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "gameStatusLabel3", void 0);
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "gameStartLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Helloworld.prototype, "playNode", void 0);
    __decorate([
        property(cc.Node)
    ], Helloworld.prototype, "bulltRoot", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

cc._RF.pop();