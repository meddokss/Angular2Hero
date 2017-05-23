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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var goods_service_1 = require('./shared/goods.service');
var hero_goods_stats_component_1 = require("./hero-bagage-goods/hero-goods-stats/hero-goods-stats.component");
var hero_component_1 = require("./hero/hero.component");
var thing_component_1 = require("./hero-bagage-goods/thing.component/thing.component");
var hero_service_1 = require("./hero/hero.service");
var hero_bagage_component_1 = require("./hero-bagage-goods/hero-bagage.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [
                app_component_1.AppComponent,
                hero_goods_stats_component_1.HeroGoodsStatsComponent,
                hero_component_1.HeroComponent,
                thing_component_1.ThingComponent,
                hero_bagage_component_1.HeroBagageComponent
            ],
            providers: [hero_service_1.HeroService, goods_service_1.GoodsService, thing_component_1.ThingComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map