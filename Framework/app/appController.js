"use strict";

angular.module('app').controller('appController',
    ['$scope',
        function ($scope) {
            $scope.state = 'unauthorized';
            $scope.signIn = function () {
                $scope.state = 'authorized';
            };
            $scope.doodleDef = [
   {
       name: "FDIC Statistical Dataset",
       description: "Bank data comes from FDIC on a quarterly basis",
       attributes: [
          {
              key: "periodicity",
              value: "quarterly",
              description: "Periodicity"
          },
          {
              key: "lastPublicationDate",
              value: "2014-12-31",
              description: "Last publication date"
          },
          {
              key: "variableCount",
              value: "455",
              description: "Variables"
          },
          {
              key: "recordCount",
              value: "3362",
              description: "Records"
          }
       ],
       glossary: [
          {
              varName: "var1_nepsp_sd",
              shortDesc: "shortDesc asdkfl ;sd flkjs d;lfkj lkjsldjf klj ;lksdjf;lk j;lkjb ;alf djlkj  d;lfkj lkjsldjf klj ;lksdjf;lk j;lkjb ;alf djlkj ;lkj ;kljsflk;j   lj ;lksd d;lfkj lkjsldjf klj ;lksdjf;lk j;lkjb ;alf djlkj ;lkj ;kljsflk;j   lj ;lksd d;lfkj lkjsldjf klj ;lksdjf;lk j;lkjb ;alf djlkj ;lkj ;kljsflk;j   lj ;lksd;lkj ;kljsflk;j   lj ;lksdjf;lk j;lkjb ;alf djlkj ;lkj ;kljsflk;j   sdlj ;lksdjf;lk j;lkjb ;alf djlkj ;lkj ;kljsflk;j   sdsdlfk kl; js;f1 kjksdf ",
              longDesc: 'LongDesc'
          },
          {
              varName: "var2",
              shortDesc: "shortDesc",
              longDesc: 'LongDesc'
          },
          {
              varName: "var3",
              shortDesc: "shortDesc",
              longDesc: 'LongDesc'
          }
       ]
   },
   {
       name: "Custom Upload 1"
   }
            ];











        }
    ]);