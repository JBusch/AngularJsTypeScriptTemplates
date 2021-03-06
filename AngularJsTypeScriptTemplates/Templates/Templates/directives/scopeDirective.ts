﻿module App.Directives {

    interface IDirectiveNameScope extends ng.IScope {
        sqDragData: string;
    }

    /*
     * Beschreibung 
     * 
     * Optionale Attribute: 
     * 
     * Verwendung: 
     *  TODO 
     */
    export class DirectiveName implements ng.IDirective {
        public restrict = "A";
        public require = "ngModel";
        //public template = "<span>Test Direktive draggable <span ng-bind='name'></span> </span>";
        public scope = {
            sqDragData: "=", //Die Daten die verschoben werden sollen
        
        }

       //constructor(private xyzDataService: IxyzDataService, private abcConfig: IabcServiceProvider) {
        //}

        constructor() {
        }

        public link = ($scope: IDirectiveNameScope, element: JQuery, attr: ng.IAttributes, ngModel) => {
            //var value = ngModel.$viewValue;

            //$scope.$watch(() => ngModel.$viewValue, (old, newValue) => {

            //    var name = "test";

            //});

        }

        public controller = ['$scope', ($scope: IDirectiveNameScope) => {

        }];

        //#region Angular Module Definition
        private static _module: ng.IModule;
        /**
        * Stellt die Angular Module für DirectiveName bereit.
        */
        public static get module(): ng.IModule {
            if (this._module) {
                return this._module;
            }

            //Hier die abhängigen Module für unsere Direktive definieren.
            this._module = angular.module('directiveName', []);
            //this._module.directive('DirectiveName', [(xyzDataService: IxyzDataService, abcConfig: IabcServiceProvider) => { return new DirectiveName(xyzDataService, abcConfig); }]);
            this._module.directive('directiveName', [() => { return new DirectiveName(); }]);
            return this._module;
        }
        //#endregion
    }
}