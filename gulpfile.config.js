'use strict';

var GulpConfig = (function () {
    
    function GulpConfig() {

        this.source        = './';
        this.scriptsPath   = this.source + 'js/';
        this.tsPath        = this.source + 'ts/*.ts';
        this.typings       = this.source + 'tools/typings/';
        this.libts         = this.typings + '**/*.ts';
        this.tsRefs        = this.typings + 'typescriptApp.d.ts';

    }

    return GulpConfig;
})();

module.exports = GulpConfig;