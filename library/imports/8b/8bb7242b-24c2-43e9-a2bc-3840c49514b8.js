"use strict";
cc._RF.push(module, '8bb72QrJMJD6aK8OEDElRS4', 'buttle2');
// Script/buttle2.ts

Object.defineProperty(exports, "__esModule", { value: true });
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var BaseButtle_1 = require("./BaseButtle");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Buttle2 = /** @class */ (function (_super) {
    __extends(Buttle2, _super);
    function Buttle2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.normalizeVec = null;
        return _this;
    }
    Buttle2.prototype.init = function (game) {
        this.game = game;
        var targetPos = this.game.airPlane.getPosition();
        var bulletPos = this.node.getPosition();
        this.normalizeVec = targetPos.subtract(bulletPos).normalize();
        // 角度变化以y轴正方向为起点，逆时针角度递增
        this.node.angle =
            (cc.v2(0, 1).signAngle(this.normalizeVec) * 180) / Math.PI;
    };
    Buttle2.prototype.update = function (dt) {
        this.node.x += this.normalizeVec.x * this.bulletSpeed * dt;
        this.node.y += this.normalizeVec.y * this.bulletSpeed * dt;
        this.check();
        if (this.getPlayerDistance() < this.collied) {
            this.onPicked();
            return;
        }
    };
    Buttle2.prototype.check = function () {
        if (this.node.x < -this.game.size.width ||
            this.node.y < -this.game.size.height ||
            this.node.x > this.game.size.width ||
            this.node.y > this.game.size.height) {
            this.node.destroy();
            this.game.putBullet2();
        }
    };
    Buttle2 = __decorate([
        ccclass
    ], Buttle2);
    return Buttle2;
}(BaseButtle_1.default));
exports.default = Buttle2;

cc._RF.pop();