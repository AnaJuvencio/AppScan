(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title style=\"text-align: center;\">\r\n      QRScanner\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=\"medium\" class=\"ion-justify-content-center\">\r\n\r\n</ion-content>\r\n\r\n<div class=\"screen\">\r\n  <div class=\"scan\">\r\n    <img id=\"logo\" src=\"assets/icon.png\">\r\n  </div>\r\n</div>\r\n\r\n<ion-footer class=\"ion-no-border\" id=\"footer\">\r\n  <ion-item *ngIf=\"link\">\r\n    <ion-label>\r\n      <a [href]=\"leitura\" target=\"_blank\">{{leitura}}</a>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"leitura\">\r\n    <ion-label position=\"stacked\"></ion-label>\r\n    <ion-input [(ngModel)]=\"leitura\"></ion-input>\r\n  </ion-item>\r\n  \r\n  <ion-toolbar color=\"dark\">\r\n    <ion-button expand=\"block\" (click)=\"StartScanning()\">QRScanner</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ "./src/app/models/Historico.ts":
/*!*************************************!*\
  !*** ./src/app/models/Historico.ts ***!
  \*************************************/
/*! exports provided: Historico */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Historico", function() { return Historico; });
class Historico {
}


/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".amarelo {\n  background-color: #e0ac08;\n}\n\n.screen {\n  width: 99vw;\n  height: 99vh;\n  display: flex;\n  vertical-align: middle;\n  justify-content: center;\n  align-items: center;\n}\n\n.scan {\n  height: calc(99vw - 15%);\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 70%;\n  padding: 30px;\n  border: 4px dashed #ff0000;\n  border-radius: 10px;\n}\n\n.scan img {\n  height: 90%;\n  background-color: #fff;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcQXFyU2NhbkFcXEFwcFNjYW4vc3JjXFxhcHBcXHRhYjFcXHRhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUk7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbWFyZWxve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwYWMwODtcclxufSAgXHJcbi5zY3JlZW4ge1xyXG4gICAgd2lkdGg6IDk5dnc7XHJcbiAgICBoZWlnaHQ6IDk5dmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNjYW4ge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDk5dncgLSAxNSUpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyOiA0cHggZGFzaGVkICNmZjAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG59IiwiLmFtYXJlbG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBhYzA4O1xufVxuXG4uc2NyZWVuIHtcbiAgd2lkdGg6IDk5dnc7XG4gIGhlaWdodDogOTl2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zY2FuIHtcbiAgaGVpZ2h0OiBjYWxjKDk5dncgLSAxNSUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNzAlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXI6IDRweCBkYXNoZWQgI2ZmMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zY2FuIGltZyB7XG4gIGhlaWdodDogOTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _servicos_historico_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicos/historico.service */ "./src/app/servicos/historico.service.ts");
/* harmony import */ var _models_Historico__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/Historico */ "./src/app/models/Historico.ts");







let Tab1Page = class Tab1Page {
    constructor(qrScanner, alertController, platform, screenOrientation, cdRef, historicoService) {
        this.qrScanner = qrScanner;
        this.alertController = alertController;
        this.platform = platform;
        this.screenOrientation = screenOrientation;
        this.cdRef = cdRef;
        this.historicoService = historicoService;
        this.link = false;
        this.platform.backButton.subscribeWithPriority(0, () => {
            this.body.style.opacity = "1";
            this.img.style.opacity = "1";
            this.footer.style.opacity = "1";
            this.leitura = null;
            this.link = false;
            this.qrScanner.hide(); // hide camera preview
            this.scanner.unsubscribe(); // stop scanning
        });
    }
    StartScanning() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.qrScanner.prepare()
                .then((status) => {
                if (status.authorized) {
                    // camera permission was granted
                    this.body = document.getElementsByTagName('ion-content')[0];
                    this.img = document.getElementById('logo');
                    this.footer = document.getElementById('footer');
                    this.body.style.opacity = "0";
                    this.img.style.opacity = "0";
                    this.footer.style.opacity = "0";
                    // start scanning
                    this.qrScanner.show();
                    this.scanner = this.qrScanner.scan().subscribe((text) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.leitura = (text['result'] ? text['result'] : text);
                        this.body.style.opacity = "1";
                        this.img.style.opacity = "1";
                        this.footer.style.opacity = "1";
                        this.qrScanner.hide(); // hide camera preview
                        this.scanner.unsubscribe(); // stop scanning
                        //this.presentAlert(text);
                        this.verificaLink(this.leitura);
                        this.cdRef.detectChanges();
                        const historico = new _models_Historico__WEBPACK_IMPORTED_MODULE_6__["Historico"]();
                        historico.leitura = this.leitura;
                        historico.dataHora = new Date();
                        yield this.historicoService.create(historico).then(resposta => {
                            console.log(resposta);
                        }).catch(erro => {
                            this.presentAlert('ERRO!', 'Erro ao salvar no Firebase');
                            console.log('ERRO: ', erro);
                        });
                    }));
                }
                else if (status.denied) {
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                }
                else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                }
            })
                .catch((e) => console.log('Error is', e));
        });
    }
    presentAlert(title, text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Leitor de QRCode',
                subHeader: title,
                message: text,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    verificaLink(texto) {
        const inicio = texto.substring(0, 4);
        console.log(inicio);
        if (inicio == 'www.' || inicio == 'http') {
            this.link = true;
        }
        else {
            this.link = false;
        }
    }
    SetToLandSpaceOrientation() {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    ngOnInit() {
        this.SetToLandSpaceOrientation();
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["QRScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _servicos_historico_service__WEBPACK_IMPORTED_MODULE_5__["HistoricoService"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map