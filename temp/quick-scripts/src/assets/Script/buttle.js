"use strict";
cc._RF.push(module, '0e9edlnfgJMRqUatmxQ7COT', 'buttle');
// Script/buttle.ts

Object.defineProperty(exports, "__esModule", { value: true });
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var BaseButtle_1 = require("./BaseButtle");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Buttle = /** @class */ (function (_super) {
    __extends(Buttle, _super);
    function Buttle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    Buttle.prototype.onLoad = function () { };
    Buttle.prototype.start = function () { };
    Buttle.prototype.update = function (dt) {
        var targetPos = this.game.airPlane.getPosition();
        var bulletPos = this.node.getPosition();
        var normalizeVec = targetPos.subtract(bulletPos).normalize();
        this.node.x += normalizeVec.x * this.bulletSpeed * dt;
        this.node.y += normalizeVec.y * this.bulletSpeed * dt;
        // 角度变化以y轴正方向为起点，逆时针角度递增
        this.node.angle = (cc.v2(0, 1).signAngle(normalizeVec) * 180) / Math.PI;
        if (this.getPlayerDistance() < this.collied) {
            this.onPicked();
            return;
        }
    };
    Buttle = __decorate([
        ccclass
    ], Buttle);
    return Buttle;
}(BaseButtle_1.default));
exports.default = Buttle;

cc._RF.pop();