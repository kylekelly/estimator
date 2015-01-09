"use strict";

$(function () {

	var $projectTemplate = $($.parseHTML(
		$('script.js-project[type=template]').text()
	));

	var project = new Task();

	var projectView = new ProjectView({
		el: $projectTemplate.clone().appendTo($('#page')),
		model: project
	});

	project.once('sync', function () {

		project.get('tasks').trigger('loadProject');
	});

	project.fetch({
		url: '/api/projects/8f89bb1c-75a7-4fba-97ad-cc005953a3e6',
		dataType: 'json'
	});
});
