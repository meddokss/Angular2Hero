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
var hero_service_1 = require("./hero.service");
var HeroComponent = (function () {
    function HeroComponent(heroService) {
        this.heroService = heroService;
        this.name = 'Roma';
        this.armor = null;
        this.belt = null;
        this.boots = null;
        this.bracers = null;
        this.helmet = null;
        this.shield = null;
        this.sword = null;
        this.things = [
            'armor', 'belt', 'boots', 'bracers', 'helmet', 'shield', 'sword'
        ];
    }
    HeroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.eventAddThing.subscribe(function (selectThing) {
            if (selectThing.type) {
                _this[selectThing.type] = selectThing;
            }
            _this.heroService.eventUndressThing.emit(_this.getThingsStats());
        });
    };
    HeroComponent.prototype.getThingsStats = function () {
        var stat = {};
        for (var _i = 0, _a = this.things; _i < _a.length; _i++) {
            var thing = _a[_i];
            if (this[thing]) {
                for (var stats in this[thing].stats) {
                    if (stat[stats]) {
                        stat[stats] += this[thing].stats[stats];
                    }
                    else {
                        stat[stats] = this[thing].stats[stats];
                    }
                }
            }
        }
        return stat;
    };
    HeroComponent.prototype.undressHero = function (selectThing) {
        if (selectThing) {
            selectThing.wear = false;
            this[selectThing.type] = null;
            this.heroService.eventUndressThing.emit(this.getThingsStats());
        }
    };
    HeroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero',
            templateUrl: 'hero.component.html',
            styleUrls: ['hero.component.css'],
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map