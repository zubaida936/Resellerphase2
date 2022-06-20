"use strict";
(self["webpackChunkreseller_management_app"] = self["webpackChunkreseller_management_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _sections_section_dashboard_section_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/section-dashboard/section-dashboard.component */ 637);
/* harmony import */ var _sections_section_partners_section_partners_section_partners_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/section-partners/section-partners/section-partners.component */ 3977);
/* harmony import */ var _sections_section_products_section_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/section-products/section-products.component */ 4304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: 'dashboard', component: _sections_section_dashboard_section_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.SectionDashboardComponent },
    { path: 'products', component: _sections_section_products_section_products_component__WEBPACK_IMPORTED_MODULE_2__.SectionProductsComponent },
    { path: 'partners', component: _sections_section_partners_section_partners_section_partners_component__WEBPACK_IMPORTED_MODULE_1__.SectionPartnersComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar/navbar.component */ 8333);
/* harmony import */ var _sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar/sidebar/sidebar.component */ 7857);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




class AppComponent {
    constructor() {
        this.title = 'reseller-management-app';
        this.subtitle = 'Isolutions Dashboard';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "navbar", "navbar-custom"], [1, "container-fluid"], ["id", "mainContent", 1, "row"], [1, "sidebar"], ["id", "dashboard", 1, "col-sm-9", "ml-sm-auto", "col-md-10", "pt-3"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-sidebar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["#sideBar[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n    padding-top: 80px;\r\n    position: fixed;\r\n    background-color: #191F26;\r\n}\r\n\r\n#dashboard[_ngcontent-%COMP%]{\r\n    margin-top: 60px;\r\n}\r\n\r\n#navbar[_ngcontent-%COMP%]{\r\n    background-color: #161A1E!important;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.2), 0 3px 6px rgba(0,0,0,0.25);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGlFQUFpRTtBQUNyRSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlQmFye1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MUYyNjtcclxufVxyXG5cclxuI2Rhc2hib2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuXHJcbiNuYXZiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxQTFFIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjUpO1xyXG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar/navbar.component */ 8333);
/* harmony import */ var _sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar/sidebar.component */ 7857);
/* harmony import */ var _sections_section_partners_section_partners_section_partners_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/section-partners/section-partners/section-partners.component */ 3977);
/* harmony import */ var _sections_section_products_section_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/section-products/section-products.component */ 4304);
/* harmony import */ var _sections_section_dashboard_section_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/section-dashboard/section-dashboard.component */ 637);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagination/pagination.component */ 3304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient,
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent,
        _sidebar_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent,
        _sections_section_dashboard_section_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.SectionDashboardComponent,
        _sections_section_partners_section_partners_section_partners_component__WEBPACK_IMPORTED_MODULE_4__.SectionPartnersComponent,
        _sections_section_products_section_products_component__WEBPACK_IMPORTED_MODULE_5__.SectionProductsComponent,
        _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__.PaginationComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 8333:
/*!***************************************************!*\
  !*** ./src/app/navbar/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 5, vars: 0, consts: [["href", "#", 1, "navbar-brand"], [1, "logo", "logo-left"], [1, "logo", "logo-right"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "reseller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logo[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    font-weight: bold;\r\n    font-size: 1.4em;\r\n}\r\n\r\n.logo-left[_ngcontent-%COMP%]{\r\n    background-color: #ff6b6b;\r\n    padding: 3px 5px 3px 8px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.logo-right[_ngcontent-%COMP%]{\r\n    padding: 3px 8px 3px 3px;\r\n    margin-left: -5px;\r\n    border-radius: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxufVxyXG5cclxuLmxvZ28tbGVmdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZiNmI7XHJcbiAgICBwYWRkaW5nOiAzcHggNXB4IDNweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5sb2dvLXJpZ2h0e1xyXG4gICAgcGFkZGluZzogM3B4IDhweCAzcHggM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3304:
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class PaginationComponent {
    constructor() {
        this.goPrev = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.goNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.goPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    onPrev() {
        this.goPrev.emit(true);
    }
    onNext() {
        this.goNext.emit(true);
    }
    onPage(n) {
        this.goPage.emit(n);
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { page: "page", count: "count", perPage: "perPage", pagesToShow: "pagesToShow", loading: "loading" }, outputs: { goPrev: "goPrev", goNext: "goNext", goPage: "goPage" }, decls: 0, vars: 0, template: function PaginationComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 637:
/*!***************************************************************************!*\
  !*** ./src/app/sections/section-dashboard/section-dashboard.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionDashboardComponent": () => (/* binding */ SectionDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

/*
import { UserRoleDataModel } from './../../../models/user.role.data';
import { UserViewModel } from 'src/models/vw.user';
import { Router } from '@angular/router';
import { OrderViewModel } from './../../../models/vw_order';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LocalStorageService } from 'src/servcies/localstorage-service';
import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Endpoint, Unicode, OrderStatus, Group } from 'src/shared/Endpoint';
import { DatePipe } from '@angular/common';
import { Utilities } from 'src/shared/utilities';
import { HttpRequestService } from 'src/servcies/http-request-service';

*/
class SectionDashboardComponent {
    constructor() {
        //chartOptions: ChartOptions;
        //statuschartOptions: ChartOptions;
        //customersChartOptions: ChartOptions;
        this.lineChartLegend = true;
        //chartLabels: Label[] = ['Created Orders'];
        //chartData: ChartDataSets[];
        //orderLineChartType: ChartType = 'bar';
        // statuschartLabels: Label[] = [OrderStatus.Executed, OrderStatus.Pending, OrderStatus.Rejected];
        // customerschartLabels: Label[] = [];
        this.statuschartData = [];
        this.customerschartData = [];
        //  statusLineChartType: ChartType = 'pie';
        this.pieChartColors = [
            {
                backgroundColor: ['rgba(40,191,239,1)', 'rgba(0,81,125,1)', 'rgba(178,41,31,1)'],
            }
        ];
        this.chartColors = [];
        this.customerchartColors = [];
        this.totalCustomers = 0;
        this.totalOrders = 0;
        this.totalUsers = 0;
        this.totalPending = 0;
        //totalExecuted: number;
        this.totalRejected = 0;
        // fromSelectedDate: NgbDateStruct;
        //toSelectedDate: NgbDateStruct;
        ////currentUser: UserViewModel;
        //currentUserRoleData: UserRoleDataModel;
        this.totalOrdersChart2 = "";
        this.onlyExecutedOrders = false;
        this.pageToken = '';
        this.totalLicenses = 0;
    }
    ngOnInit() {
    }
}
SectionDashboardComponent.ɵfac = function SectionDashboardComponent_Factory(t) { return new (t || SectionDashboardComponent)(); };
SectionDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionDashboardComponent, selectors: [["app-section-dashboard"]], decls: 32, vars: 1, consts: [[1, "container-fluid"], [1, "dash_header", "row"], [1, "", 2, "padding", "0 7px 0 0"], [1, "dash_card"], ["src", "../../../assets/orders-big-icon(dashboard-page).png", "width", "23", "id", "ordr_total"], [1, "dash_header_title"], ["src", "../../../assets/customers-big-icon(dashboard-page).png", "width", "23"], [1, "p-0"], ["src", "../../../assets/users-big-icon(dashboard-page).png", "width", "23"], [1, "row", "m-t-15"], [1, "col-lg-6", "col-md-12", "col-12", "p-0"], [1, "div_chart", "h-100"], [1, "cust_title", "f-productSans"], [1, "row", "col-12", "m-t-40", "justify-content-center"], ["id", "status_pie", 1, "chart-wrapper", "col-12", "row"], [1, "col-lg-6", "col-md-12", "col-12", "device_chart"], [1, "col-12", "device_lines"]], template: function SectionDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0\u00A0Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Orders Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0", ctx.totalUsers, " Users");
    } }, styles: ["#pieChart2Custs[_ngcontent-%COMP%], #pieChartOrder[_ngcontent-%COMP%] {\r\n    width: 500px !important;\r\n    height: 550px !important\r\n}\r\n\r\n.dash_header_title[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    font-weight: 400\r\n}\r\n\r\n.dash_header[_ngcontent-%COMP%]   .dash_card[_ngcontent-%COMP%] {\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    border: 1px solid #cdcece;\r\n    text-align: center;\r\n    padding: 12px 10px;\r\n    border-radius: 15px;\r\n    width: 145px\r\n}\r\n\r\n.div_chart[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    border-radius: 15px;\r\n    border: 1px solid #cdcece\r\n}\r\n\r\n.dash_date_p[_ngcontent-%COMP%] {\r\n    border: 1px solid #cdcece;\r\n    margin: 20px 10px 20px 0 !important;\r\n    border-radius: 3px\r\n}\r\n\r\n.dash_date_p[_ngcontent-%COMP%]   .my-dp[_ngcontent-%COMP%] {\r\n    border: none !important\r\n}\r\n\r\n.dash_date_p[_ngcontent-%COMP%]   .dash_date_p_span[_ngcontent-%COMP%] {\r\n    padding: 0 10px !important\r\n}\r\n\r\n.dash_date_p[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\r\n    outline: 0 !important\r\n}\r\n\r\ninput.my-dp[_ngcontent-%COMP%] {\r\n    height: 36px !important\r\n}\r\n\r\n#ordr_total[_ngcontent-%COMP%] {\r\n    margin-bottom: 6px !important;\r\n    margin-top: 5px !important\r\n}\r\n\r\n.sp_total[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    border: 1px solid;\r\n    margin: 10px;\r\n    padding: 5px;\r\n    width: auto;\r\n    background: #00517D;\r\n    color: #fff\r\n}\r\n\r\n@media (max-width:1000px) {\r\n\r\n    .device_chart[_ngcontent-%COMP%], .device_lines[_ngcontent-%COMP%] {\r\n        padding: 0 !important\r\n    }\r\n\r\n    .device_chart[_ngcontent-%COMP%] {\r\n        margin-top: 10px !important\r\n    }\r\n}\r\n\r\n@media (max-width:700px) {\r\n    #pieChartOrders[_ngcontent-%COMP%] {\r\n        width: 500px !important;\r\n        height: 600px !important\r\n    }\r\n\r\n    #pieChart2Custs[_ngcontent-%COMP%] {\r\n        width: 500px !important;\r\n        height: 1000px !important\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksdUJBQXVCO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUNBQW1DO0lBQ25DO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBOztJQUVJOztRQUVJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtRQUN2QjtJQUNKOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCO0lBQ0o7QUFDSiIsImZpbGUiOiJzZWN0aW9uLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BpZUNoYXJ0MkN1c3RzLFxyXG4jcGllQ2hhcnRPcmRlciB7XHJcbiAgICB3aWR0aDogNTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTUwcHggIWltcG9ydGFudFxyXG59XHJcblxyXG4uZGFzaF9oZWFkZXJfdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMFxyXG59XHJcblxyXG4uZGFzaF9oZWFkZXIgLmRhc2hfY2FyZCB7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NkY2VjZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEycHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB3aWR0aDogMTQ1cHhcclxufVxyXG5cclxuLmRpdl9jaGFydCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZGNlY2VcclxufVxyXG5cclxuLmRhc2hfZGF0ZV9wIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZGNlY2U7XHJcbiAgICBtYXJnaW46IDIwcHggMTBweCAyMHB4IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweFxyXG59XHJcblxyXG4uZGFzaF9kYXRlX3AgLm15LWRwIHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5kYXNoX2RhdGVfcCAuZGFzaF9kYXRlX3Bfc3BhbiB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudFxyXG59XHJcblxyXG4uZGFzaF9kYXRlX3AgaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnRcclxufVxyXG5cclxuaW5wdXQubXktZHAge1xyXG4gICAgaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnRcclxufVxyXG5cclxuI29yZHJfdG90YWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudFxyXG59XHJcblxyXG4uc3BfdG90YWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICMwMDUxN0Q7XHJcbiAgICBjb2xvcjogI2ZmZlxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDoxMDAwcHgpIHtcclxuXHJcbiAgICAuZGV2aWNlX2NoYXJ0LFxyXG4gICAgLmRldmljZV9saW5lcyB7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50XHJcbiAgICB9XHJcblxyXG4gICAgLmRldmljZV9jaGFydCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KSB7XHJcbiAgICAjcGllQ2hhcnRPcmRlcnMge1xyXG4gICAgICAgIHdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogNjAwcHggIWltcG9ydGFudFxyXG4gICAgfVxyXG5cclxuICAgICNwaWVDaGFydDJDdXN0cyB7XHJcbiAgICAgICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAwcHggIWltcG9ydGFudFxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 3977:
/*!******************************************************************************************!*\
  !*** ./src/app/sections/section-partners/section-partners/section-partners.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionPartnersComponent": () => (/* binding */ SectionPartnersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SectionPartnersComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SectionPartnersComponent.ɵfac = function SectionPartnersComponent_Factory(t) { return new (t || SectionPartnersComponent)(); };
SectionPartnersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionPartnersComponent, selectors: [["app-section-partners"]], decls: 40, vars: 0, consts: [[1, "content"]], template: function SectionPartnersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Partners: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Created date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ismena.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "KSA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "admin@ismena.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "18/6/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "jazira.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Jordan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "admin@jazeera.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "18/7/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["table[_ngcontent-%COMP%]{\r\n    border-collapse: collapse;\r\n      width: 100%;}\r\n  th[_ngcontent-%COMP%]{\r\n    height:35px;\r\n      text-align:left;\r\n      vertical-align: top;\r\n      background-color: #F9D1D5;\r\n      color:black;\r\n  }\r\n  th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\n    padding:10px;\r\n    border-bottom: 1px solid #ddd;\r\n    color:black;\r\n  }\r\n  tr[_ngcontent-%COMP%]:nth-child(even){\r\n    background-color: #f2f2f2;\r\n  \r\n  }\r\n  tr[_ngcontent-%COMP%]:hover{\r\n    background-color:  #E3F2FD;\r\n  }\r\n  h3[_ngcontent-%COMP%] {\r\n    color:#194569;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tcGFydG5lcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtNQUN2QixXQUFXLENBQUM7RUFDaEI7SUFDRSxXQUFXO01BQ1QsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIsV0FBVztFQUNmO0VBRUE7SUFDRSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFdBQVc7RUFDYjtFQUNBO0lBQ0UseUJBQXlCOztFQUUzQjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBRUE7SUFDRSxhQUFhO0VBQ2YiLCJmaWxlIjoic2VjdGlvbi1wYXJ0bmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICB3aWR0aDogMTAwJTt9XHJcbiAgdGh7XHJcbiAgICBoZWlnaHQ6MzVweDtcclxuICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlEMUQ1O1xyXG4gICAgICBjb2xvcjpibGFjaztcclxuICB9XHJcbiAgXHJcbiAgdGgsdGR7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gIH1cclxuICB0cjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gIFxyXG4gIH1cclxuICB0cjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjRTNGMkZEO1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgY29sb3I6IzE5NDU2OTtcclxuICB9Il19 */"] });


/***/ }),

/***/ 4304:
/*!*************************************************************************!*\
  !*** ./src/app/sections/section-products/section-products.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionProductsComponent": () => (/* binding */ SectionProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SectionProductsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SectionProductsComponent.ɵfac = function SectionProductsComponent_Factory(t) { return new (t || SectionProductsComponent)(); };
SectionProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionProductsComponent, selectors: [["app-section-products"]], decls: 23, vars: 0, consts: [[1, "content"], [1, "row-fluid", "cards"], [1, "card-deck"], [1, "card", "mb-3", "shadow", "card-theme"], [1, "card-header", "card-header-theme"], [1, "card-body"], [1, "card-header", "card-header", "theme"]], template: function SectionProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Product 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Product 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Product 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWN0aW9uLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 7857:
/*!******************************************************!*\
  !*** ./src/app/sidebar/sidebar/sidebar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 10, vars: 0, consts: [[1, "nav", "nav-pills", "flex-column"], [1, "nav-item"], ["routerLink", "/dashboard", 1, "nav-link"], ["routerLink", "/partners", 1, "nav-link"], ["routerLink", "/products", 1, "nav-link"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Partners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map