"use strict";
var goods_1 = require("./goods");
var GoodsService = (function () {
    function GoodsService() {
        this.goods = goods_1.goods;
    }
    GoodsService.prototype.getStats = function () {
        return this.goods;
    };
    return GoodsService;
}());
exports.GoodsService = GoodsService;
//# sourceMappingURL=goods.service.js.map