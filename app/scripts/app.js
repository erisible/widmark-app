/*jslint indent:2*/
/*global angular, window*/

(function () {

  'use strict';
    
  angular.module('widmarkApp', ['ngCookies', 'pascalprecht.translate'])
    .config(['$translateProvider', function ($translateProvider) {
      var language = (window.navigator.userLanguage || window.navigator.language).substr(0, 2),
        translationsFR = {
          TITLE: 'Widmark app',
          INTRO: 'C\'est l\'heure du déjeuner et vous avez envie d\'un verre. Mais vous avez une réunion dans quelques heures. Combien de verres pouvez-vous boire et être sobre à temps.',
          GENDER_Q: 'Sélectionnez votre sexe',
          MALE: 'homme',
          FEMALE: 'femme',
          MASS_Q: 'Indiquez votre masse',
          MASS_Q_DETAIL: '(en kilogramme)',
          MASS_UNIT: 'kg',
          HOUR_Q: 'Indiquez l\'heure à laquelle vous souhaitez être sobre',
          RESULT: 'Vous pouvez consommez jusqu\'à',
          RESULT_UNIT: 'unités d\'alcool',
          BUTTON_LANG_FR: 'français',
          BUTTON_LANG_EN: 'anglais',
          AVERAGE_MALE_WEIGHT: '77',
          AVERAGE_FEMALE_WEIGHT: '64'
        },
        translationsEN = {
          TITLE: 'Widmark app',
          INTRO: 'It is lunchtime, and you fancy a drink. But you have a meeting in few hours. How many drinks can you have at lunchtime and sober up in time.',
          GENDER_Q: 'Select your sex',
          MALE: 'man',
          FEMALE: 'woman',
          MASS_Q: 'Indicate your mass',
          MASS_Q_DETAIL: '(in kilograms)',
          MASS_UNIT: 'kg',
          HOUR_Q: 'Select time you want to get sober',
          RESULT: 'You can have up to',
          RESULT_UNIT: 'alcohol units',
          BUTTON_LANG_FR: 'french',
          BUTTON_LANG_EN: 'english',
          AVERAGE_MALE_WEIGHT: '88',
          AVERAGE_FEMALE_WEIGHT: '75'
        };
      
      $translateProvider.translations('fr', translationsFR);
      $translateProvider.translations('en', translationsEN);
        
      $translateProvider.preferredLanguage(language);
      $translateProvider.fallbackLanguage('en');
      
      $translateProvider.useLocalStorage();
    }]);
    
}());