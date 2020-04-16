"use strict";
cc._RF.push(module, 'db96ag5ajBK/ph48o0o6Fq8', 'BaseButtle');
// Script/BaseButtle.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseButtle = /** @class */ (function (_super) {
    __extends(BaseButtle, _super);
    function BaseButtle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttle = null;
        _this.collied = 10;
        _this.bulletSpeed = 300;
        _this.game = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    BaseButtle.prototype.onLoad = function () {
        this.bulletSpeed = (Math.random() - 0.5) * 300 + 100;
    };
    BaseButtle.prototype.start = function () { };
    BaseButtle.prototype.init = function (game) {
        this.game = game;
    };
    BaseButtle.prototype.getPlayerDistance = function () {
        // 根据 player 节点位置判断距离
        var playerPos = this.game.airPlane.getPosition();
        // 根据两点位置计算两点之间距离
        var dist = this.node.position.sub(playerPos).mag();
        return dist;
    };
    BaseButtle.prototype.onPicked = function () {
        // 当星星被收集时，调用 Game 脚本中的接口，生成一个新的星星
        // this.game.spawnNewStar();
        // 然后销毁当前星星节点
        // this.node.destroy();
        this.game.gameOver();
    };
    __decorate([
        property(cc.Node)
    ], BaseButtle.prototype, "buttle", void 0);
    BaseButtle = __decorate([
        ccclass
    ], BaseButtle);
    return BaseButtle;
}(cc.Component));
exports.default = BaseButtle;

cc._RF.pop();