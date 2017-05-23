"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_service_1 = require("../../hero/hero.service");
var HeroGoodsStatsComponent = (function () {
    function HeroGoodsStatsComponent(heroService) {
        this.heroService = heroService;
        this.prevPower = 0;
        this.prevAgility = 0;
        this.prevIntuition = 0;
        this.prevHealth = 0;
        this.prevIntellect = 0;
        this.power = 0;
        this.agility = 0;
        this.intuition = 0;
        this.health = 0;
        this.intellect = 0;
        this.stat = [
            'power', 'agility', 'intuition', 'health', 'intellect'
        ];
    }
    HeroGoodsStatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.eventUndressThing.subscribe(function (data) {
            for (var _i = 0, _a = _this.stat; _i < _a.length; _i++) {
                var stat = _a[_i];
                if (Object.keys(data).length == 0) {
                    _this[stat] = 0;
                }
                else {
                    _this[stat] = data[stat];
                }
            }
        });
    };
    HeroGoodsStatsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'goods-stats',
            templateUrl: 'hero-goods-stats.component.html',
            styleUrls: ['hero-goods-stats.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroGoodsStatsComponent);
    return HeroGoodsStatsComponent;
}());
exports.HeroGoodsStatsComponent = HeroGoodsStatsComponent;
//# sourceMappingURL=hero-goods-stats.component.js.map