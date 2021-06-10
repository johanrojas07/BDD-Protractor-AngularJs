"use strict";
let { Given, When, Then } = require('cucumber');
let homePage = require('./homePage.js');
let utils = require('./../Utils/utils.js');
const properties = require('./pageObject');


When(/^el usuario abre la web de angular$/, function (callback) {
    homePage.angularPage(callback);
});

Then(/^la web abierta es la correcta$/, function (callback) {
    homePage.urlOpened(callback);
});
When(/^hacemos click en la seccion FEATURES$/, function (callback) {
    homePage.clickFeature(callback);
});
Then(/^se aabre la seccion de FEATURES$/, function (callback) {
    homePage.urlFeatures(callback);
});
When(/^hacemos click en la seccion RESOURCES$/, function (callback) {
    homePage.clickResources(callback);
});
Then(/^se aabre la seccion de RESOURCES$/, function (callback) {
    homePage.urlResources(callback);
});
When(/^hacemos click en la seccion EVENTS$/, function (callback) {
    homePage.clickEvents(callback);
});
Then(/^se aabre la seccion de EVENTS$/, function (callback) {
    homePage.urlEvents(callback);
});
When(/^abrir la seccion (.*)$/, function (seccion, callback) {
    homePage.abrirSeccion(seccion, callback);
});
Then(/^se abre la seccion (.*)$/, function (url, callback) {
    homePage.urlSeccion(url, callback);
});
When(/^buscamos la palabra (.*)$/, function (palabra, callback) {
    homePage.buscaPalabra(palabra, callback);
});