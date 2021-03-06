module.exports = function (plop) {
	'use strict';

	///////
	// helpers are passed through to handlebars and made
	// available for use in the generator templates
	//

	// adds 4 dashes around some text (yes es6/es2015 is supported)
	plop.addHelper('dashAround', function (text) { return '---- ' + text + ' ----'; });
	// plop.addHelper('dashAround', (text) => '---- ' + text + ' ----');

	// formats an array of options like you would write
	// it if you were speaking (one, two, and three)
	plop.addHelper('wordJoin', function (words) {
		return words.join(', ').replace(/(:?.*),/, '$1, and');
	});

	// greet the user using a partial
	plop.addPartial('salutation', '{{ greeting }}, my name is {{ properCase name }} and I am {{ age }}.');


	// setGenerator creates a generator that can be run with "plop generatorName"
	plop.setGenerator('basic-add', {
		description: 'adds a file using a template',
		actions: [
			{
				type: 'add',
				path: 'src/{{dashCase name}}.txt',
				templateFile: 'plop-templates/add.txt',
				abortOnFail: true
			}, {
				type: 'add',
				path: 'src/_{{constantCase name}}.txt',
				template: 'inline template: {{name}}',
				abortOnFail: true
			}//,
			// function customAction(answers) {
			// 	// move the current working directory to the plop file path
			// 	// this allows this action to work even when the generator is
			// 	// executed from inside a subdirectory
			// 	process.chdir(plop.getPlopfilePath());
			//
			// 	// custom function can be synchronous or async (by returning a promise)
			// 	var fs = require('fs'),
			// 		existsMsg = 'psst {{name}}, change-me.txt already exists',
			// 		copiedMsg = 'hey {{name}}, I copied change-me.txt for you',
			// 		changeFile = 'change-me.txt';
			//
			// 	// you can use plop.renderString to render templates
			// 	existsMsg = plop.renderString(existsMsg, answers);
			// 	copiedMsg = plop.renderString(copiedMsg, answers);
			//
			// 	if (fs.existsSync(changeFile)) {
			// 		// returned value shows up in the console
			// 		return existsMsg;
			// 	} else {
			// 		// do a synchronous copy via node fs
			// 		fs.writeFileSync(changeFile, fs.readFileSync('plop-templates/' + changeFile));
			// 		return copiedMsg;
			// 	}
			// },{
			// 	type: 'modify',
			// 	path: 'change-me.txt',
			// 	pattern: /(-- APPEND ITEMS HERE --)/gi,
			// 	template: '$1\r\n{{name}}: {{age}}'
			// },{
			// 	type: 'modify',
			// 	path: 'change-me.txt',
			// 	pattern: /(-- PREPEND ITEMS HERE --)/gi,
			// 	templateFile: 'plop-templates/part.txt'
			// },{
			// 	type: 'modify',
			// 	path: 'change-me.txt',
			// 	pattern: /## replace name here ##/gi,
			// 	template: 'replaced => {{dashCase name}}'
			// }
		]
	});


	// // adding a custom inquirer prompt type
	// plop.addPrompt('directory', require('inquirer-directory'));
	//
	// plop.setGenerator('custom-prompt', {
	// 	description: 'custom inquirer prompt example',
	// 	prompts: [
	// 		{
	// 			type: 'input',
	// 			name: 'fileName',
	// 			message: 'Pick a file name:',
	// 			validate: function (value) {
	// 				if ((/.+/).test(value)) { return true; }
	// 				return 'file name is required';
	// 			}
	// 		}, {
	// 			type: 'directory',
	// 			name: 'path',
	// 			message: 'where would you like to put this component?',
	// 			basePath: plop.getPlopfilePath()
	// 		}
	// 	],
	// 	actions: [
	// 		{
	// 			type: 'add',
	// 			path: '{{path}}/{{fileName}}.txt',
	// 			template: '{{path}}/{{fileName}} plopped!'
	// 		}
	// 	]
	// });
	//
	//
	// // test with dynamic actions, regarding responses to prompts
	// plop.setGenerator('dynamic actions', {
	// 	description: 'another test using an actions function',
	// 	prompts: [
	// 		{
	// 			type: 'input',
	// 			name: 'name',
	// 			message: 'What is your name?',
	// 			validate: function (value) {
	// 				if ((/.+/).test(value)) { return true; }
	// 				return 'name is required';
	// 			}
	// 		}, {
	// 			type: 'confirm',
	// 			name: 'hasPotatoes',
	// 			message: 'Do you want potatoes with your burger?'
	// 		}
	// 	],
	// 	actions: function(data) {
	// 		var actions = [
	// 			{
	// 				type: 'add',
	// 				path: 'folder/{{dashCase name}}-burger.txt',
	// 				templateFile: 'plop-templates/burger.txt',
	// 				abortOnFail: true
	// 			}
	// 		];
	//
	// 		if(data.hasPotatoes) {
	// 			actions = actions.concat([
	// 				{
	// 					type: 'add',
	// 					path: 'folder/{{dashCase name}}-potatoes.txt',
	// 					templateFile: 'plop-templates/potatoes.txt',
	// 					abortOnFail: true
	// 				},{
	// 					type: 'modify',
	// 					path: 'folder/{{dashCase name}}-burger.txt',
	// 					pattern: /(!\n)/gi,
	// 					template: '$1Your potatoes: {{dashCase name}}-potatoes.txt'
	// 				}
	// 			]);
	// 		}
	//
	// 		return actions;
	// 	}
	// });
};
