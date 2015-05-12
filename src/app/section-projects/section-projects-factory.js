'use strict';

//TODO dat desc ako html a pouzivat v nom linky ako adresy

angular.module('portfolio.factoryProjects', [])
  .factory('ProjectsFactory', function () {

    //obrazky pre projekt fotky
    var imagesProjectsDir = 'img/project-photos/';

    //priecinky jednotlivych projektov
    var tokens = [
      'tuke-tank-3d',
      'bachelor-thesis',
      'powerfood',
      'sojas',
      'mway',
      'priznaj',
      'fastphoto',
      'master-diploma-thesis',
      'pradelnicek',
      'erni',
      'it-portfolio'
    ];

    return [
      {
        token: tokens[0],
        title: 'Tuke Tank 3D',
        short: 'Windows PC game in XNA framework',
        time: '2011-2012',
        images: [
          imagesProjectsDir + tokens[0] + '/1.png',
          imagesProjectsDir + tokens[0] + '/2.png',
          imagesProjectsDir + tokens[0] + '/3.png',
          imagesProjectsDir + tokens[0] + '/4.png',
          imagesProjectsDir + tokens[0] + '/5.png'
        ],
        link: 'https://www.youtube.com/watch?v=Xjyhh-8bzRo',
        desc: 'Special chosen way of school semester project for subject ‘Computer Graphic’. Remake of popular SEGA game Battle City in C# with XNA framework.'
      },

      {
        token: tokens[1],
        title: 'Bachelor Thesis',
        short: 'Imagine Cup by Microsoft, Game Design: Phone',
        time: '2011-2012',
        images: [
          imagesProjectsDir + tokens[1] + '/5.png'
        ],
        link: 'https://www.youtube.com/watch?v=Neug7oGzWNw',
        desc: 'Participant in Imagine Cup by Microsoft, category Game Design: Phone. Team consisted of four people ' +
        'and my part of project was to develop Windows Phone application. This application, in form of game should ' +
        'represent mobile client for web application written in ASP.NET. Game was inspired by Travian.com, each building ' +
        'should represent individual functionality from server side.'
      },

      {
        token: tokens[2],
        title: 'PowerFood',
        short: 'Vaadin application + android to setup diet plan',
        time: '2012',
        images: [
          imagesProjectsDir + tokens[2] + '/5.png'
        ],
        desc: 'Semester project for school subject \'Web Technologies\',  Consists of android mobile client and Java Web application written in Vaadin 6 ' +
        'framework with Hibernate, MySQL, REST communication. It helps users to create their own diet plan, manage his ' +
        'ingredients, foods and food day plans, then sets up his calendar with this day plans. Mobile Android client ' +
        'downloads user plans, synchronizes data and sets up alarms for next food to eat. Also user can collect ingredients ' +
        'with camera of mobile and input his daily weights and send all of these to server.',
      },

      {
        token: tokens[3],
        title: 'Sojas',
        short: 'Vaadin calendar application for one-day clinic',
        time: '2013',
        images: [
          imagesProjectsDir + tokens[3] + '/5.png'
        ],
        desc: 'Semester project for school subject \'Building Technologies of Software Development\'. Web application for ' +
        'overnight hospital ward (one-day clinic), written with same technologies like PowerFood project. School subject was more oriented ' +
        'on team leading and agile methods than on programming.'
      },

      {
        token: tokens[4],
        title: 'MWay: Junior Java developer',
        short: 'OSGi GWT web application developer',
        time: '2012-2013',
        innerLink: '#experience-mway',
        //TODO
        desc: ''

      },

      {
        token: tokens[5],
        title: 'Priznaj.sk',
        short: 'Android native application',
        time: '2013',
        images: [
          imagesProjectsDir + tokens[5] + '/5.png'
        ],
        link: 'https://play.google.com/store/apps/details?id=sk.gryfonnlair.priznaj',
        desc: 'Android client for web student portal www.priznaj.sk. Published on Google Play as \'Priznaj.sk\'. It was ' +
        'created from my own initiative to improve my android skills, that I have learned during the summer holidays 2013. ' +
        'I have also learned basic of PHP, because I had to implement REST services in PHP on server side to allowed ' +
        'communication with server database. Offline functionality, data synchronization, SQLite database, Android Design ' +
        'Patterns, Tablet optimalization.'
      },

      {
        token: tokens[6],
        title: 'FastPhoto',
        short: 'Android native application',
        time: '2014',
        images: [
          imagesProjectsDir + tokens[6] + '/5.png'
        ],
        desc: 'Android application made to order. Camera application for doorman to make evidence of incoming and outgoing ' +
        'vehicles by photos, that are sent to server also with thumbnails history. The whole project consists of PHP server ' +
        'side and android client side (my part of job). Custom camera interface implementation Rest communication with server.'
      },

      {
        token: tokens[7],
        title: 'Master Diploma Thesis',
        short: 'GWT web application',
        time: '2013-2014',
        images: [
          imagesProjectsDir + tokens[7] + '/5.png'
        ],
        desc: 'Web application for database administration, supposed to be school learning tool for SQL. Application is ' +
        'written with GWT framework, can connect by default to server’s MySQL database and reads meta information about ' +
        'stored functions and procedures, creates and executes them also executes SQL statements with some debug option. ' +
        'Supported list of database types to connect with this application can be extended by application’s bundles. Bundles ' +
        'are defined by provided API and they can be load to system by admin during the runtime, for example admin can ' +
        'create PostGreSQL bundle, upload it, and user will see this connection option in login screen, where he enters ' +
        'connection parameters.'
      },

      {
        token: tokens[8],
        title: 'Pradelníček',
        short: 'AngularJS application',
        time: '2014',
        images: [
          imagesProjectsDir + tokens[8] + '/5.png'
        ],
        desc: 'AngularJS single page application that represents washing machine. Tool to sort clothes for washing machine, ' +
        'navigation and sorting by keyboard shortcuts, result of sorting is send to e-mail. When I started to learn ' +
        'front-end technologies I wanted to test them on some project, but the real reason was that clothes washing was ' +
        'my big enemy so I created this tool for my mother to help me how to sort my clothes by color.'
      },

      {
        token: tokens[9],
        title: 'ERNI: Junior Software Engineer',
        short: 'Java, NodeJS, BackboneJS, AngularJS developer',
        time: '2014',
        innerLink: '#experience-erni',
        desc: ''
      },

      {
        token: tokens[10],
        title: 'IT portfolio',
        short: 'AngularJS and Bootstrap single page application',
        time: '2015'
      }
    ];
  });
