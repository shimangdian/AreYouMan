
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/BaseButtle');
require('./assets/Script/Helloworld');
require('./assets/Script/airPlane');
require('./assets/Script/buttle');
require('./assets/Script/buttle2');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helloworld.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIZWxsb3dvcmxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFDOUIscUNBQWdDO0FBRTFCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUFzSEM7UUFuSEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxxQkFBZSxHQUFhLElBQUksQ0FBQztRQUdqQyxzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFHbEMsc0JBQWdCLEdBQWEsSUFBSSxDQUFDO1FBR2xDLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQUcsSUFBSSxDQUFDO1FBRVosZ0JBQVUsR0FBWSxLQUFLLENBQUMsQ0FBQyx5QkFBeUI7UUFFdEQsV0FBSyxHQUFXLElBQUksQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQW9GdkIsQ0FBQztJQWxGQywyQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDMUMsQ0FBQztJQUNELDBCQUFLLEdBQUwsY0FBUyxDQUFDO0lBRVYsMkJBQU0sR0FBTixVQUFPLEVBQUUsSUFBRyxDQUFDO0lBRWIsbUNBQWMsR0FBZCxVQUFlLEtBQTBCO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUM1QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCwrQkFBVSxHQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU87UUFDNUIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxZQUFZLENBQUMsaUJBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQseUNBQW9CLEdBQXBCO1FBQ0UsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEQsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNkJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLGdCQUFjLElBQUksQ0FBQyxRQUFRLE1BQUcsQ0FBQztRQUM5RCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRW5DLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsb0JBQW9CO1FBQ3BCLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELHlCQUFJLEdBQUo7UUFBQSxpQkFnQ0M7UUEvQkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUVsQiwwQ0FBMEM7UUFFMUMscUJBQXFCO1FBQ3JCLHNDQUFzQztRQUN0QyxZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLHNDQUFzQztRQUN0QyxZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLHNDQUFzQztRQUN0QyxZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLDZDQUE2QztRQUM3QyxZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLDZDQUE2QztRQUM3QyxzQ0FBc0M7UUFDdEMsWUFBWTtRQUVaLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFsSEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29EQUNXO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ1k7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDYztJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNlO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0RBQ2U7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDYTtJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1E7SUExQlAsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXFIOUI7SUFBRCxpQkFBQztDQXJIRCxBQXFIQyxDQXJIdUMsRUFBRSxDQUFDLFNBQVMsR0FxSG5EO2tCQXJIb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdWxsZXQgZnJvbSBcIi4vYnV0dGxlXCI7XHJcbmltcG9ydCBCdWxsZXQyIGZyb20gXCIuL2J1dHRsZTJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxsb3dvcmxkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBhaXJQbGFuZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgYnVsbGV0UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIGJ1bGxldFByZWZhYjI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICBnYW1lU3RhdHVzTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIGdhbWVTdGF0dXNMYWJlbDI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIGdhbWVTdGF0dXNMYWJlbDM6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIGdhbWVTdGFydExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHBsYXlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgYnVsbHRSb290OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgc2l6ZSA9IG51bGw7XHJcblxyXG4gIGdhbWVTdGF0dXM6IEJvb2xlYW4gPSBmYWxzZTsgLy8gZmFsc2Ug5ri45oiP6L+b6KGM5LitICB0cnVlIOa4uOaIj+Wksei0pVxyXG5cclxuICB0aW1lcjogbnVtYmVyID0gbnVsbDtcclxuICBhbGl2ZVNlYzogbnVtYmVyID0gMDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuY2F0Y2hNb3VzZU1vdmUsIHRoaXMpO1xyXG4gICAgdGhpcy5zaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgIHRoaXMucGxheU5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnBsYXksIHRoaXMpO1xyXG4gICAgdGhpcy5nYW1lU3RhcnRMYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuICBzdGFydCgpIHt9XHJcblxyXG4gIHVwZGF0ZShkdCkge31cclxuXHJcbiAgY2F0Y2hNb3VzZU1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgIHRoaXMuYWlyUGxhbmUueCArPSBldmVudC5nZXREZWx0YVgoKTtcclxuICAgIHRoaXMuYWlyUGxhbmUueSArPSBldmVudC5nZXREZWx0YVkoKTtcclxuICB9XHJcblxyXG4gIHB1dFN0YXJ0KCkge1xyXG4gICAgaWYgKHRoaXMuZ2FtZVN0YXR1cykgcmV0dXJuO1xyXG4gICAgdmFyIGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlZmFiKTtcclxuICAgIHRoaXMuYnVsbHRSb290LmFkZENoaWxkKGJ1bGxldCk7XHJcbiAgICBidWxsZXQuc2V0UG9zaXRpb24odGhpcy5nZXROZXdCdWxsZXRQb3NpdGlvbigpKTtcclxuICAgIGJ1bGxldC5nZXRDb21wb25lbnQoQnVsbGV0KS5pbml0KHRoaXMpO1xyXG4gIH1cclxuICBwdXRCdWxsZXQyKCkge1xyXG4gICAgaWYgKHRoaXMuZ2FtZVN0YXR1cykgcmV0dXJuO1xyXG4gICAgdmFyIGJ1bGxldDIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYjIpO1xyXG4gICAgdGhpcy5idWxsdFJvb3QuYWRkQ2hpbGQoYnVsbGV0Mik7XHJcbiAgICBidWxsZXQyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3QnVsbGV0UG9zaXRpb24oKSk7XHJcbiAgICBidWxsZXQyLmdldENvbXBvbmVudChCdWxsZXQyKS5pbml0KHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV3QnVsbGV0UG9zaXRpb24oKSB7XHJcbiAgICB2YXIgcmFuZFkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgdmFyIHJhbmRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XHJcbiAgfVxyXG5cclxuICBnYW1lT3ZlcigpIHtcclxuICAgIHRoaXMuZ2FtZVN0YXR1cyA9IHRydWU7XHJcbiAgICB0aGlzLmdhbWVTdGF0dXNMYWJlbC5zdHJpbmcgPSBcIkdhbWUgT3ZlclwiO1xyXG4gICAgdGhpcy5nYW1lU3RhdHVzTGFiZWwyLnN0cmluZyA9IGB5b3UgQWxpdmU6ICR7dGhpcy5hbGl2ZVNlY31zYDtcclxuICAgIHRoaXMuZ2FtZVN0YXR1c0xhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuZ2FtZVN0YXR1c0xhYmVsMi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnBsYXlOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmJ1bGx0Um9vdC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBvdmVyXCIpO1xyXG4gICAgLy8gdGhpcy5idWxsZXRQcmVmYWJcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgfVxyXG4gIHBsYXkoKSB7XHJcbiAgICB0aGlzLmdhbWVTdGF0dXNMYWJlbDMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2FtZVN0YXR1cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5nYW1lU3RhdHVzTGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2FtZVN0YXR1c0xhYmVsMi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5wbGF5Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuYWxpdmVTZWMgPSAwO1xyXG5cclxuICAgIC8vIHRoaXMuZ2FtZVN0YXJ0TGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICB0aGlzLmdhbWVTdGFydExhYmVsLnN0cmluZyA9IFwiM1wiO1xyXG4gICAgLy8gfSwgMTAwMCk7XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgdGhpcy5nYW1lU3RhcnRMYWJlbC5zdHJpbmcgPSBcIjJcIjtcclxuICAgIC8vIH0sIDIwMDApO1xyXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgIHRoaXMuZ2FtZVN0YXJ0TGFiZWwuc3RyaW5nID0gXCIxXCI7XHJcbiAgICAvLyB9LCAzMDAwKTtcclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICB0aGlzLmdhbWVTdGFydExhYmVsLnN0cmluZyA9IFwiU3RhcnQuLi5cIjtcclxuICAgIC8vIH0sIDQwMDApO1xyXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgIHRoaXMuZ2FtZVN0YXJ0TGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgdGhpcy5nYW1lU3RhcnRMYWJlbC5zdHJpbmcgPSBcIjNcIjtcclxuICAgIC8vIH0sIDUwMDApO1xyXG5cclxuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYWxpdmVTZWMrKztcclxuICAgICAgdGhpcy5wdXRTdGFydCgpO1xyXG4gICAgICB0aGlzLnB1dEJ1bGxldDIoKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/airPlane.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'airPlane');
// Script/airPlane.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    Helloworld.prototype.start = function () {
        // init logic
        this.label.string = this.text;
    };
    __decorate([
        property(cc.Label)
    ], Helloworld.prototype, "label", void 0);
    __decorate([
        property
    ], Helloworld.prototype, "text", void 0);
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxhaXJQbGFuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQURwRDtRQUFBLHFFQWFDO1FBVEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztJQU0zQixDQUFDO0lBSkcsMEJBQUssR0FBTDtRQUNJLGFBQWE7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFSRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNJO0lBR3ZCO1FBREMsUUFBUTs0Q0FDYztJQU5OLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FZOUI7SUFBRCxpQkFBQztDQVpELEFBWUMsQ0FadUMsRUFBRSxDQUFDLFNBQVMsR0FZbkQ7a0JBWm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbGxvd29ybGQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBpbml0IGxvZ2ljXHJcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLnRleHQ7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/NewScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db96ag5ajBK/ph48o0o6Fq8', 'NewScript');
// Script/NewScript.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOZXdTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBRTVFLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUFrQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBVXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/buttle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxidXR0bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGO0FBQ2xGLDJDQUFzQztBQUNoQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFVO0lBQTlDOztJQW9CQSxDQUFDO0lBbkJDLHdCQUF3QjtJQUN4Qix1QkFBTSxHQUFOLGNBQVUsQ0FBQztJQUVYLHNCQUFLLEdBQUwsY0FBUyxDQUFDO0lBRVYsdUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDUCxJQUFJLFNBQVMsR0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxRCxJQUFJLFNBQVMsR0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pELElBQUksWUFBWSxHQUFZLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RELHdCQUF3QjtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRXhFLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMzQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsT0FBTztTQUNSO0lBQ0gsQ0FBQztJQW5Ca0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQW9CMUI7SUFBRCxhQUFDO0NBcEJELEFBb0JDLENBcEJtQyxvQkFBVSxHQW9CN0M7a0JBcEJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5pbXBvcnQgQmFzZUJ1dHRsZSBmcm9tIFwiLi9CYXNlQnV0dGxlXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0bGUgZXh0ZW5kcyBCYXNlQnV0dGxlIHtcclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICBvbkxvYWQoKSB7fVxyXG5cclxuICBzdGFydCgpIHt9XHJcblxyXG4gIHVwZGF0ZShkdCkge1xyXG4gICAgbGV0IHRhcmdldFBvczogY2MuVmVjMiA9IHRoaXMuZ2FtZS5haXJQbGFuZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgbGV0IGJ1bGxldFBvczogY2MuVmVjMiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgbGV0IG5vcm1hbGl6ZVZlYzogY2MuVmVjMiA9IHRhcmdldFBvcy5zdWJ0cmFjdChidWxsZXRQb3MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgdGhpcy5ub2RlLnggKz0gbm9ybWFsaXplVmVjLnggKiB0aGlzLmJ1bGxldFNwZWVkICogZHQ7XHJcbiAgICB0aGlzLm5vZGUueSArPSBub3JtYWxpemVWZWMueSAqIHRoaXMuYnVsbGV0U3BlZWQgKiBkdDtcclxuICAgIC8vIOinkuW6puWPmOWMluS7pXnovbTmraPmlrnlkJHkuLrotbfngrnvvIzpgIbml7bpkojop5LluqbpgJLlop5cclxuICAgIHRoaXMubm9kZS5hbmdsZSA9IChjYy52MigwLCAxKS5zaWduQW5nbGUobm9ybWFsaXplVmVjKSAqIDE4MCkgLyBNYXRoLlBJO1xyXG5cclxuICAgIGlmICh0aGlzLmdldFBsYXllckRpc3RhbmNlKCkgPCB0aGlzLmNvbGxpZWQpIHtcclxuICAgICAgdGhpcy5vblBpY2tlZCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/buttle2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxidXR0bGUyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjtBQUNsRiwyQ0FBc0M7QUFDaEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFxQywyQkFBVTtJQUQvQztRQUFBLHFFQW9DQztRQWxDQyxrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUFrQy9CLENBQUM7SUFoQ0Msc0JBQUksR0FBSixVQUFLLElBQUk7UUFDUCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLFNBQVMsR0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxRCxJQUFJLFNBQVMsR0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5RCx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDM0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzNDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixPQUFPO1NBQ1I7SUFDSCxDQUFDO0lBRUQsdUJBQUssR0FBTDtRQUNFLElBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFDbkM7WUFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBbENrQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBbUMzQjtJQUFELGNBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ29DLG9CQUFVLEdBbUM5QztrQkFuQ29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbmltcG9ydCBCYXNlQnV0dGxlIGZyb20gXCIuL0Jhc2VCdXR0bGVcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRsZTIgZXh0ZW5kcyBCYXNlQnV0dGxlIHtcclxuICBub3JtYWxpemVWZWM6IGNjLlZlYzIgPSBudWxsO1xyXG5cclxuICBpbml0KGdhbWUpIHtcclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICBsZXQgdGFyZ2V0UG9zOiBjYy5WZWMyID0gdGhpcy5nYW1lLmFpclBsYW5lLmdldFBvc2l0aW9uKCk7XHJcbiAgICBsZXQgYnVsbGV0UG9zOiBjYy5WZWMyID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLm5vcm1hbGl6ZVZlYyA9IHRhcmdldFBvcy5zdWJ0cmFjdChidWxsZXRQb3MpLm5vcm1hbGl6ZSgpO1xyXG4gICAgLy8g6KeS5bqm5Y+Y5YyW5Luleei9tOato+aWueWQkeS4uui1t+eCue+8jOmAhuaXtumSiOinkuW6pumAkuWinlxyXG4gICAgdGhpcy5ub2RlLmFuZ2xlID1cclxuICAgICAgKGNjLnYyKDAsIDEpLnNpZ25BbmdsZSh0aGlzLm5vcm1hbGl6ZVZlYykgKiAxODApIC8gTWF0aC5QSTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkdCkge1xyXG4gICAgdGhpcy5ub2RlLnggKz0gdGhpcy5ub3JtYWxpemVWZWMueCAqIHRoaXMuYnVsbGV0U3BlZWQgKiBkdDtcclxuICAgIHRoaXMubm9kZS55ICs9IHRoaXMubm9ybWFsaXplVmVjLnkgKiB0aGlzLmJ1bGxldFNwZWVkICogZHQ7XHJcbiAgICB0aGlzLmNoZWNrKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2UoKSA8IHRoaXMuY29sbGllZCkge1xyXG4gICAgICB0aGlzLm9uUGlja2VkKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLm5vZGUueCA8IC10aGlzLmdhbWUuc2l6ZS53aWR0aCB8fFxyXG4gICAgICB0aGlzLm5vZGUueSA8IC10aGlzLmdhbWUuc2l6ZS5oZWlnaHQgfHxcclxuICAgICAgdGhpcy5ub2RlLnggPiB0aGlzLmdhbWUuc2l6ZS53aWR0aCB8fFxyXG4gICAgICB0aGlzLm5vZGUueSA+IHRoaXMuZ2FtZS5zaXplLmhlaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuZ2FtZS5wdXRCdWxsZXQyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseButtle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlQnV0dGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOztBQUU1RSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBRHBEO1FBQUEscUVBc0NDO1FBbkNDLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsYUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUUxQixVQUFJLEdBQUcsSUFBSSxDQUFDOztJQTZCZCxDQUFDO0lBM0JDLHdCQUF3QjtJQUV4QiwyQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3ZELENBQUM7SUFFRCwwQkFBSyxHQUFMLGNBQVMsQ0FBQztJQUVWLHlCQUFJLEdBQUosVUFBSyxJQUFJO1FBQ1AsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELHNDQUFpQixHQUFqQjtRQUNFLHFCQUFxQjtRQUNyQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqRCxpQkFBaUI7UUFDakIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ25ELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDRSxrQ0FBa0M7UUFDbEMsNEJBQTRCO1FBQzVCLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBbENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ0s7SUFGSixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBcUM5QjtJQUFELGlCQUFDO0NBckNELEFBcUNDLENBckN1QyxFQUFFLENBQUMsU0FBUyxHQXFDbkQ7a0JBckNvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VCdXR0bGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIGJ1dHRsZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIGNvbGxpZWQ6IG51bWJlciA9IDEwO1xyXG5cclxuICBidWxsZXRTcGVlZDogbnVtYmVyID0gMzAwO1xyXG5cclxuICBnYW1lID0gbnVsbDtcclxuXHJcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHRoaXMuYnVsbGV0U3BlZWQgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAzMDAgKyAxMDA7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHt9XHJcblxyXG4gIGluaXQoZ2FtZSkge1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICB9XHJcblxyXG4gIGdldFBsYXllckRpc3RhbmNlKCkge1xyXG4gICAgLy8g5qC55o2uIHBsYXllciDoioLngrnkvY3nva7liKTmlq3ot53nprtcclxuICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLmdhbWUuYWlyUGxhbmUuZ2V0UG9zaXRpb24oKTtcclxuICAgIC8vIOagueaNruS4pOeCueS9jee9ruiuoeeul+S4pOeCueS5i+mXtOi3neemu1xyXG4gICAgdmFyIGRpc3QgPSB0aGlzLm5vZGUucG9zaXRpb24uc3ViKHBsYXllclBvcykubWFnKCk7XHJcbiAgICByZXR1cm4gZGlzdDtcclxuICB9XHJcblxyXG4gIG9uUGlja2VkKCkge1xyXG4gICAgLy8g5b2T5pif5pif6KKr5pS26ZuG5pe277yM6LCD55SoIEdhbWUg6ISa5pys5Lit55qE5o6l5Y+j77yM55Sf5oiQ5LiA5Liq5paw55qE5pif5pifXHJcbiAgICAvLyB0aGlzLmdhbWUuc3Bhd25OZXdTdGFyKCk7XHJcbiAgICAvLyDnhLblkI7plIDmr4HlvZPliY3mmJ/mmJ/oioLngrlcclxuICAgIC8vIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmdhbWUuZ2FtZU92ZXIoKTtcclxuICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
