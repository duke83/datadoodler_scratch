"use strict";

angular.module('app').factory('dataService',
    ['$timeout',
        function ($timeout) {




            var getArnoldSchwarzeneggerMovies_Glossary = function () {
                return $timeout(function () {
                    return ArnoldSchwarzeneggerMovies_Glossary;
                }, 500);
            };
            var getArnoldSchwarzeneggerMovies_Data= function () {
                return $timeout(function () {
                    return ArnoldSchwarzeneggerMovies_Data;
                }, 500);
            };


            var getJamieLeeCurtisMovies_Glossary = function () {
                return $timeout(function () {
                    return JamieLeeCurtisMovies_Glossary;
                }, 500);
            };
            var getJamieLeeCurtisMovies_Data = function () {
                return $timeout(function () {
                    return JamieLeeCurtisMovies_Data;
                }, 500);
            };

            var getLocations = function () {
                return $timeout(function () {
                    return locations;
                }, 500);
            };

            var getLocation = function (id) {
                var timeout = $timeout(function () {
                    //$timeout.cancel(timeout);
                    //return undefined;
                    for (var i = 0; i < locations.length; i++)
                        if (locations[i].id == id)
                            return locations[i];
                    return undefined;
                }, 300);

                return timeout;
            };

            var getEmployees = function () {
                return $timeout(function () {
                    return employees;
                }, 500);
            };

            var getEmployee = function (id) {
                return $timeout(function () {
                    for (var i = 0; i < employees.length; i++)
                        if (employees[i].id == id)
                            return employees[i];
                    return undefined;
                }, 300);
            };


            return {
                getLocations: getLocations,
                getLocation: getLocation,
                getEmployees: getEmployees,
                getEmployee: getEmployee
            };
        }]);
