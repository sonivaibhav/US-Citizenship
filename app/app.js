	// create the module and name it citizenshipPracticeApp
	var citizenshipPracticeApp = angular.module('citizenshipPracticeApp', ['ui.router']);

	// configure our routes
	citizenshipPracticeApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/study');

		$stateProvider
			// route for the home page
			.state('study', {
			    url: '/study',
				templateUrl : 'app/views/study.html',
				controller  : 'studyController'
			})

			// route for the about page
			.state('quiz', {
			    url: '/quiz',
				templateUrl : 'app/views/quiz.html',
				controller  : 'quizController'
			})

	});