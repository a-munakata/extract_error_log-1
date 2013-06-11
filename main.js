#!/usr/bin/env node
var _  										 = require ('underscore'),		
		path 									 = require ('path'),
		$ 										 = require ('jquery')
		
var backup_logs   				 = require ('./modules/backup_logs/backup_logs'),
		create_migration_files = require ('./modules/create_migration_files'),
		export_report					 = require ('./modules/export_report/export_report'),
		make_directories			 = require ('./modules/make_directories'),
		path_factory					 = require ('./modules/path_factory')

var module_type = process.argv[2]
var opt1			  = process.argv[3]
var opt2			  = process.argv[4]

// console.log(path_factory(opt1));
// console.log(opt1)

_.map(process.argv, function(module_type) {
	switch (module_type) {
		case "backup_logs" :		
			backup_logs(path_factory("backup"))
			break

		case "export_report" :
			export_report(path_factory("path_to_files"))
			break
		
		case "make_directories" :
			make_directories(path_factory(opt1))
			break

		


		case "path_factory" :
			path_factory(opt1)
			break
		// case "create_migration_files" :
		// 	create_migration_files(path_factory())
		// 	break
	}

})

