(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nmury\OneDrive\Bureau\projets perso\LaurentSewerCV\laurent-sewer\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _competence_competence_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./competence/competence.component */ "yy7k");



class AppComponent {
    constructor() {
        this.title = 'laurent-sewer';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 35, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["name", "JavaScript", "percentage", "80", "color", "#000000", "bkcolor", "#F7DF1E", "fgcolor", "#000000", "image", "javascript", "description", "J'ai appris le JavaScript \u00E0"], ["name", "HTML 5", "percentage", "90", "color", "#e44d26", "fgcolor", "#ebebeb", "bkcolor", "#F16529", "image", "html"], ["name", "CSS 3", "percentage", "90", "color", "#2062af", "fgcolor", "#ebebeb", "bkcolor", "#3c9cd7", "image", "css", "description", "J'ai appris le CSS 3 \u00E0"], ["name", "Python", "percentage", "75", "bkcolor", "#ffde4f", "fgcolor", "#366c99", "color", "#366c99", "image", "python", "description", "J'ai appris le Python \u00E0"], ["name", "C#", "percentage", "70", "fgcolor", "#ffffff", "bkcolor", "#a178db", "color", "#3B009B", "image", "csharp", "description", "Le C# est le premier language que j'ai appris, je l'avais appris \u00E0 l'Orif d'aigle pour m'auto former et pour pr\u00E9parer mon future apprentissage, car il y avais du C# au programme dans cette formation."], ["name", "Java", "percentage", "60", "color", "#0074bd", "bkcolor", "#EA2D2E", "image", "java", "description", "J'ai appris le Java en premi\u00E8re ann\u00E9e de mon apprentissage, avec les cours que j'ai eu dessus je connais les bases et saurais avancer avec."], ["name", "Jquery", "percentage", "90", "color", "#0868AC", "bkcolor", "#fafafa", "fgcolor", "#333333", "image", "jquery", "description", "J'ai appris le Jquery \u00E0 l'Orif de pomy, d'abbord par simple envie de d\u00E9couvrir puis par int\u00E9ret j'ai appris \u00E0 l'utiliser pour tout mes projets.\n      J'ai ensuite pus continuer a l'utiliser \u00E0 Involi dans le cadre du travail car on travaillais avec jquery pour toute la partie front end.\n      Je m\u00E9trise compl\u00E8tement Jquery."], ["name", "Angular", "percentage", "70", "color", "#E23237", "bkcolor", "#E23237", "fgcolor", "#ffffff", "image", "angular", "description", "J'ai appris le Angular \u00E0"], ["name", "Sass", "percentage", "85", "color", "#CD6799", "bkcolor", "#f8f9fa", "fgcolor", "#CD6799", "image", "sass", "description", "J'ai appris le Sass \u00E0"], ["name", "Bootstrap", "percentage", "65", "color", "#7952b3", "bkcolor", "#563d7c", "fgcolor", "#ffffff", "image", "bootstrap"], ["name", "Node Js", "percentage", "40", "color", "#689F63", "bkcolor", "#333333", "fgcolor", "#ffffff", "image", "nodejs"], [1, "table"], [2, "color", "#3C99D4"], [2, "color", "#FFD02F"], [2, "color", "#F05133"], [2, "color", "#0ACF83"], [2, "color", "#E01E5A"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Laurent Sewer Comp\u00E9tences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Languages de programmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "competence", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "competence", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "competence", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "competence", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "competence", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "competence", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Frameworks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "competence", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "competence", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "competence", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "competence", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "competence", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Logiciels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Visual Studio Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Miro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Figma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Slack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_competence_competence_component__WEBPACK_IMPORTED_MODULE_1__["CompetenceComponent"]], styles: ["[_nghost-%COMP%] {\n  padding: 20px;\n  margin: 0;\n  font-family: Noto Sans, sans-serif;\n  background-color: #104060;\n  color: #f0fff0;\n  width: calc(100% - 40px);\n  position: absolute;\n  min-height: calc(100vh - 40px);\n}\n\nb[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  display: block;\n  margin-top: 20px;\n}\n\n.table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.table[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 6px;\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFJRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOjA7XHJcbiAgZm9udC1mYW1pbHk6IE5vdG8gU2Fucywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA0MDYwO1xyXG4gIGNvbG9yOiAjZjBmZmYwO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDQwcHgpO1xyXG59XHJcbmJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnRhYmxle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4udGFibGUgYntcclxuICBwYWRkaW5nOjVweDtcclxuICBtYXJnaW46IDZweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuIl19 */", ""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _competence_competence_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./competence/competence.component */ "yy7k");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _competence_competence_component__WEBPACK_IMPORTED_MODULE_3__["CompetenceComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _competence_competence_component__WEBPACK_IMPORTED_MODULE_3__["CompetenceComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yy7k":
/*!****************************************************!*\
  !*** ./src/app/competence/competence.component.ts ***!
  \****************************************************/
/*! exports provided: CompetenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenceComponent", function() { return CompetenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CompetenceComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened", ctx_r0.toggleViewDescritpion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.description);
} }
class CompetenceComponent {
    constructor() {
        this.bkcolor = '#ffffff';
        this.toggleViewDescritpion = false;
        if (this.fgcolor === undefined) {
            this.fgcolor = this.color;
        }
    }
    ngOnInit() {
    }
    click() {
        this.toggleViewDescritpion = !this.toggleViewDescritpion;
    }
}
CompetenceComponent.ɵfac = function CompetenceComponent_Factory(t) { return new (t || CompetenceComponent)(); };
CompetenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompetenceComponent, selectors: [["competence"]], inputs: { name: "name", image: "image", percentage: "percentage", color: "color", bkcolor: "bkcolor", fgcolor: "fgcolor", description: "description" }, decls: 11, vars: 16, consts: [[1, "container", 3, "click"], ["alt", "", 1, "logo", 3, "src"], [1, "name"], [1, "percentage"], [1, "bar"], [1, "text"], ["width", "20", "height", "10", "viewBox", "0 0 6 3", "xmlns", "http://www.w3.org/2000/svg", 1, "arrow"], ["d", "M6 0L3 2.5L0 0H6Z"], ["class", "description", 3, "opened", 4, "ngIf"], [1, "description"]], template: function CompetenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompetenceComponent_Template_div_click_0_listener() { return ctx.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CompetenceComponent_div_10_Template, 2, 3, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opened", ctx.toggleViewDescritpion)("have_description", ctx.description !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../assets/svg/", ctx.image, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.bkcolor)("color", ctx.fgcolor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color)("width", ctx.percentage + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.percentage, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.description !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 5px 0;\n  gap: 10px;\n  transition: 100ms;\n}\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  flex-grow: 0;\n}\n.container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  width: 100px;\n  padding: 8px;\n  font-size: 16px;\n  text-align: center;\n  overflow-x: visible;\n  white-space: nowrap;\n  font-weight: bold;\n  flex-grow: 0;\n  font-variant: small-caps;\n}\n.container[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%] {\n  background-color: #00000044;\n  flex-grow: 1;\n}\n.container[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  height: 35px;\n  border-radius: 0px;\n  margin-bottom: -35px;\n}\n.container[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding: 8px;\n  font-size: 16px;\n  display: block;\n  width: calc(100% - 16px);\n  text-align: right;\n}\n.container[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  left: calc(50% - 10px);\n  position: absolute;\n  fill: transparent;\n  transition: 500ms;\n}\n.container[_ngcontent-%COMP%]:hover:not(.opened) {\n  transform: scale(102%);\n}\n.container[_ngcontent-%COMP%]:hover:not(.opened).have_description {\n  padding-bottom: 10px;\n}\n.container[_ngcontent-%COMP%]:hover:not(.opened).have_description   .arrow[_ngcontent-%COMP%] {\n  fill: #ffffff;\n}\n.container.opened[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n.container.opened[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  fill: transparent;\n}\n.description[_ngcontent-%COMP%] {\n  max-height: 0px;\n  background-color: #00000044;\n  overflow-y: hidden;\n  padding: 0px 8px;\n  margin: 5px 0;\n  text-align: justify;\n}\n.description.opened[_ngcontent-%COMP%] {\n  transition: 2000ms max-height;\n  max-height: 1000px;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGV0ZW5jZS9jb21wZXRlbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUF1Q0EsaUJBQUE7QUFyQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQUFKO0FBR0U7RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUFESjtBQUdJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFETjtBQUdJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQUROO0FBTUU7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSko7QUFNRTtFQUNFLHNCQUFBO0FBSko7QUFLSTtFQUVFLG9CQUFBO0FBSk47QUFLTTtFQUNFLGFBQUE7QUFIUjtBQVFFO0VBQ0UsbUJBQUE7QUFOSjtBQU9JO0VBQ0UsaUJBQUE7QUFMTjtBQVNBO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQU5GO0FBT0U7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUxKIiwiZmlsZSI6InNyYy9hcHAvY29tcGV0ZW5jZS9jb21wZXRlbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbjogNXB4IDA7XHJcbiAgZ2FwOiAxMHB4O1xyXG5cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmbGV4LWdyb3c6IDA7XHJcbiAgfVxyXG5cclxuICAubmFtZSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdy14OiB2aXNpYmxlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZmxleC1ncm93OiAwO1xyXG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gIH1cclxuXHJcbiAgLnBlcmNlbnRhZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNDQ7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgLmJhcntcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IC0zNXB4O1xyXG4gICAgfVxyXG4gICAgLnRleHR7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYW5zaXRpb246IDEwMG1zO1xyXG4gIC5hcnJvd3tcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiA1MDBtcztcclxuICB9XHJcbiAgJjpob3Zlcjpub3QoLm9wZW5lZCl7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMiUpO1xyXG4gICAgJi5oYXZlX2Rlc2NyaXB0aW9uXHJcbiAgICB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAuYXJyb3d7XHJcbiAgICAgICAgZmlsbDogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5vcGVuZWR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgLmFycm93e1xyXG4gICAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmRlc2NyaXB0aW9ue1xyXG4gIG1heC1oZWlnaHQ6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNDQ7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDBweCA4cHg7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICYub3BlbmVke1xyXG4gICAgdHJhbnNpdGlvbjogMjAwMG1zIG1heC1oZWlnaHQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompetenceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'competence',
                templateUrl: './competence.component.html',
                styleUrls: ['./competence.component.scss'],
            }]
    }], function () { return []; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], percentage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bkcolor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fgcolor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map