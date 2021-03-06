(function () {
    var customerPaymentModule = angular.module("customerPaymentModule", ['ui.bootstrap', 'ui-notification']);
    customerPaymentModule.config(function (NotificationProvider) {
        NotificationProvider.setOptions({
            startTop: 54
        });
    });


    var customerPaymentController = function ($scope, Notification) {
        $scope.mode = "IDEAL";//IDEAL, NEW, EDIT
        $scope.customerPayment ={};
        
        //actions
        $scope.doNew = function () {
            $scope.doClear();

            $scope.customerPayment.indexNo = $scope.getNextCustomerPaymentNumber();
            $scope.customerPayment.date = new Date();

            $scope.setMode('NEW');
        };

        $scope.doEdit = function () {
            $scope.setMode('EDIT');
        };

        $scope.doDelete = function () {

        };

        $scope.doPrint = function () {

        };

        $scope.doSave = function () {
            Notification.success('Success');
        };

        $scope.doDiscard = function () {
            $scope.setMode('IDEAL');

            $scope.doClear();
        };

        $scope.doClear = function () {
            $scope.customerPayment = {};
        };
        
        $scope.doSelectPayment = function(payment){
            $scope.customerPayment.amount=payment;
        };

        //other functions
        $scope.setMode = function (mode) {
            $scope.mode = mode;
        };

        $scope.getNextCustomerPaymentNumber = function () {
            return "1";
        };
    };
    customerPaymentModule.controller("customerPaymentController", customerPaymentController);

}());
    