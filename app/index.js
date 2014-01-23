'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var DdstaticGenerator = module.exports = function DdstaticGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ 
      skipInstall: options['skip-install'], 
      callback: function(){
        this.spawnCommand('grunt', ['server']);
      }.bind(this) // only run after successful npm/install
    });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(DdstaticGenerator, yeoman.generators.Base);

DdstaticGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'appName',
    message: 'Would you like to enable this option?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.appName = props.appName;

    cb();
  }.bind(this));
};

DdstaticGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/html');
  this.mkdir('app/html/data');
  this.mkdir('app/html/layouts');
  this.mkdir('app/html/pages');
  this.mkdir('app/html/partials');
  this.mkdir('app/js');
  this.mkdir('app/js/_components');
  this.mkdir('app/js/vendor');
  this.mkdir('app/sass');
  this.mkdir('app/img');
  this.mkdir('dist');
  
  this.copy('layout-default.hbs','app/html/layouts/default.hbs');
  this.copy('page-index.hbs','app/html/pages/index.hbs');
  this.copy('page-sample.hbs','app/html/pages/sample.hbs');

  this.copy('partial-header.hbs','app/html/partials/header.hbs');
  this.copy('partial-footer.hbs','app/html/partials/footer.hbs');
  this.copy('partial-sidebar.hbs','app/html/partials/sidebar.hbs');

  this.copy('data-sample-page.json','app/html/data/sample.json');

  this.copy('_inline.scss','app/sass/_inline.scss');
  this.copy('_mixins.scss','app/sass/_mixins.scss');
  this.copy('_variables.scss','app/sass/_variables.scss');
  this.copy('main-responsive.scss','app/sass/main-responsive.scss');
  this.copy('main.scss','app/sass/main.scss');
  this.copy('_sample-component.scss','app/sass/_sample.scss');

  this.copy('frontend-app.js','app/js/app.js');
  this.copy('_sample-component.js','app/js/_components/sample.js');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');

  this.copy('Gruntfile.js', 'Gruntfile.js');


};

DdstaticGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
