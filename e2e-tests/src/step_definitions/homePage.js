"use strict";

const protractor = require('protractor');
const chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var utils = require('./../Utils/utils.js');
const pageObject = require('./pageObject');
const ecTimeout = 15000;

const log4js = require('log4js');
log4js.configure({
    appenders: {
        out: { type: 'stdout' }
    },
    categories: {
        default: { appenders: ['out'], level: browser.params.level ? browser.params.level : 'INFO' }
    }
});

var logger = log4js.getLogger();

module.exports = {
    /**
     * Function to open the main page of the UI.
     * @param product
     * @param callback
     */
    angularPage: function (callback) {

        browser.get(pageObject.homePage.url).then(function () {
            logger.info('Navegamos a: https://angular.io/ ' );
            callback(); // To tell the cucumber that we are done with thi
        });
    },
    urlOpened: function(callback) {
        browser.wait(protractor.ExpectedConditions.urlContains(pageObject.homePage.url), ecTimeout).then(function() {
            logger.info('Web de .' + pageObject.homePage.url + 'abierta');
            callback();
        });
    },
    clickFeature: function(callback) {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(pageObject.homePage.boton.features), ecTimeout).then(function () {
            pageObject.homePage.boton.features.click().then(function () {
               logger.info('La seccion de FEATURES ha sido pulsada');
                callback();
            });
        });
    },
    urlFeatures: function(callback) {
        browser.wait(protractor.ExpectedConditions.urlContains('features'), ecTimeout).then(function() {
            logger.info('Seccion de FEATURES abierta');
            callback();
        });
    },
    clickResources: function(callback) {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(pageObject.homePage.boton.resources), ecTimeout).then(function () {
            pageObject.homePage.boton.resources.click().then(function () {
                logger.info('La seccion de RESOURCES ha sido pulsada');
                callback();
            });
        });
    },
    urlResources: function(callback) {
        browser.wait(protractor.ExpectedConditions.urlContains("resources"), ecTimeout).then(function() {
            logger.info('Seccion de RESOURCES abierta');
            callback();
        });
    },
    clickEvents: function(callback) {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(pageObject.homePage.boton.events), ecTimeout).then(function () {
            pageObject.homePage.boton.events.click().then(function () {
                logger.info('La seccion de EVENTS ha sido pulsada');
                callback();
            });
        });
    },
    urlEvents: function(callback) {
        browser.wait(protractor.ExpectedConditions.urlContains("events"), ecTimeout).then(function() {
            logger.info('Seccion de EVENTS abierta');
            callback();
        });
    },
    abrirSeccion: function (seccion, callback) {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(pageObject.homePage.boton[seccion]), ecTimeout).then(function () {
            pageObject.homePage.boton[seccion].click().then(function () {
                logger.info('Queremos abrir la seccion ' + seccion);
                callback();
            });
        });
    },
    urlSeccion: function (seccion, callback) {
        browser.wait(protractor.ExpectedConditions.urlContains(seccion), ecTimeout).then(function () {
            logger.info('La seccion ' + seccion + ' se ha abierto');
            callback();
        });
    },
    buscaPalabra: function (palabra, callback) {
        browser.wait(protractor.ExpectedConditions.visibilityOf(pageObject.homePage.search), ecTimeout).then(function () {
            pageObject.homePage.search.sendKeys(palabra).then(function () {
               logger.info("Palabra " + palabra + " insertada en el buscador");
                callback();
            });
        });
    }
};