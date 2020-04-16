
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