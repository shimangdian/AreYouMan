
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