
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