
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIZWxsb3dvcmxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFDOUIscUNBQWdDO0FBRTFCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUFzSEM7UUFuSEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxxQkFBZSxHQUFhLElBQUksQ0FBQztRQUdqQyxzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFHbEMsc0JBQWdCLEdBQWEsSUFBSSxDQUFDO1FBR2xDLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixVQUFJLEdBQUcsSUFBSSxDQUFDO1FBRVosZ0JBQVUsR0FBWSxLQUFLLENBQUMsQ0FBQyx5QkFBeUI7UUFFdEQsV0FBSyxHQUFXLElBQUksQ0FBQztRQUNyQixjQUFRLEdBQVcsQ0FBQyxDQUFDOztJQW9GdkIsQ0FBQztJQWxGQywyQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxjQUFjLENBQUMs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REMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1E7SUExQlAsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXFIOUI7SUFBRCxpQkFBQztDQXJIRCxBQXFIQyxDQXJIdUMsRUFBRSxDQUFDLFNBQVMsR0FxSG5EO2tCQXJIb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdWxsZXQgZnJvbSBcIi4vYnV0dGxlXCI7XHJcbmltcG9ydCBCdWxsZXQyIGZyb20gXCIuL2J1dHRsZTJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxsb3dvcmxkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICBhaXJQbGFuZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgYnVsbGV0UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gIGJ1bGxldFByZWZhYjI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICBnYW1lU3RhdHVzTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIGdhbWVTdGF0dXNMYWJlbDI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIGdhbWVTdGF0dXNMYWJlbDM6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gIGdhbWVTdGFydExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gIHBsYXlOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgYnVsbHRSb290OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgc2l6ZSA9IG51bGw7XHJcblxyXG4gIGdhbWVTdGF0dXM6IEJvb2xlYW4gPSBmYWxzZTsgLy8gZmFsc2Ug5ri45oiP6L+b6KGM5LitICB0cnVlIOa4uOaIj+Wksei0pVxyXG5cclxuICB0aW1lcjogbnVtYmVyID0gbnVsbDtcclxuICBhbGl2ZVNlYzogbnVtYmVyID0gMDtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuY2F0Y2hNb3VzZU1vdmUsIHRoaXMpO1xyXG4gICAgdGhpcy5zaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgIHRoaXMucGxheU5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnBsYXksIHRoaXMpO1xyXG4gICAgdGhpcy5nYW1lU3RhcnRMYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuICBzdGFydCgpIHt9XHJcblxyXG4gIHVwZGF0ZShkdCkge31cclxuXHJcbiAgY2F0Y2hNb3VzZU1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgIHRoaXMuYWlyUGxhbmUueCArPSBldmVudC5nZXREZWx0YVgoKTtcclxuICAgIHRoaXMuYWlyUGxhbmUueSArPSBldmVudC5nZXREZWx0YVkoKTtcclxuICB9XHJcblxyXG4gIHB1dFN0YXJ0KCkge1xyXG4gICAgaWYgKHRoaXMuZ2FtZVN0YXR1cykgcmV0dXJuO1xyXG4gICAgdmFyIGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlZmFiKTtcclxuICAgIHRoaXMuYnVsbHRSb290LmFkZENoaWxkKGJ1bGxldCk7XHJcbiAgICBidWxsZXQuc2V0UG9zaXRpb24odGhpcy5nZXROZXdCdWxsZXRQb3NpdGlvbigpKTtcclxuICAgIGJ1bGxldC5nZXRDb21wb25lbnQoQnVsbGV0KS5pbml0KHRoaXMpO1xyXG4gIH1cclxuICBwdXRCdWxsZXQyKCkge1xyXG4gICAgaWYgKHRoaXMuZ2FtZVN0YXR1cykgcmV0dXJuO1xyXG4gICAgdmFyIGJ1bGxldDIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYjIpO1xyXG4gICAgdGhpcy5idWxsdFJvb3QuYWRkQ2hpbGQoYnVsbGV0Mik7XHJcbiAgICBidWxsZXQyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3QnVsbGV0UG9zaXRpb24oKSk7XHJcbiAgICBidWxsZXQyLmdldENvbXBvbmVudChCdWxsZXQyKS5pbml0KHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV3QnVsbGV0UG9zaXRpb24oKSB7XHJcbiAgICB2YXIgcmFuZFkgPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgdmFyIHJhbmRYID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XHJcbiAgfVxyXG5cclxuICBnYW1lT3ZlcigpIHtcclxuICAgIHRoaXMuZ2FtZVN0YXR1cyA9IHRydWU7XHJcbiAgICB0aGlzLmdhbWVTdGF0dXNMYWJlbC5zdHJpbmcgPSBcIkdhbWUgT3ZlclwiO1xyXG4gICAgdGhpcy5nYW1lU3RhdHVzTGFiZWwyLnN0cmluZyA9IGB5b3UgQWxpdmU6ICR7dGhpcy5hbGl2ZVNlY31zYDtcclxuICAgIHRoaXMuZ2FtZVN0YXR1c0xhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuZ2FtZVN0YXR1c0xhYmVsMi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLnBsYXlOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmJ1bGx0Um9vdC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBvdmVyXCIpO1xyXG4gICAgLy8gdGhpcy5idWxsZXRQcmVmYWJcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgfVxyXG4gIHBsYXkoKSB7XHJcbiAgICB0aGlzLmdhbWVTdGF0dXNMYWJlbDMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2FtZVN0YXR1cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5nYW1lU3RhdHVzTGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2FtZVN0YXR1c0xhYmVsMi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5wbGF5Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIHRoaXMuYWxpdmVTZWMgPSAwO1xyXG5cclxuICAgIC8vIHRoaXMuZ2FtZVN0YXJ0TGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICB0aGlzLmdhbWVTdGFydExhYmVsLnN0cmluZyA9IFwiM1wiO1xyXG4gICAgLy8gfSwgMTAwMCk7XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgdGhpcy5nYW1lU3RhcnRMYWJlbC5zdHJpbmcgPSBcIjJcIjtcclxuICAgIC8vIH0sIDIwMDApO1xyXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgIHRoaXMuZ2FtZVN0YXJ0TGFiZWwuc3RyaW5nID0gXCIxXCI7XHJcbiAgICAvLyB9LCAzMDAwKTtcclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICB0aGlzLmdhbWVTdGFydExhYmVsLnN0cmluZyA9IFwiU3RhcnQuLi5cIjtcclxuICAgIC8vIH0sIDQwMDApO1xyXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgIHRoaXMuZ2FtZVN0YXJ0TGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIC8vICAgdGhpcy5nYW1lU3RhcnRMYWJlbC5zdHJpbmcgPSBcIjNcIjtcclxuICAgIC8vIH0sIDUwMDApO1xyXG5cclxuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYWxpdmVTZWMrKztcclxuICAgICAgdGhpcy5wdXRTdGFydCgpO1xyXG4gICAgICB0aGlzLnB1dEJ1bGxldDIoKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxufVxyXG4iXX0=