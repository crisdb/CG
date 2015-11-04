'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var fs = require('fs');
var cgUtils = require('../utils.js');
var _ = require('underscore');
var chalk = require('chalk');
var fs = require('fs');
var url = require('url');

_.str = require('underscore.string');
_.mixin(_.str.exports());

var GridsterGenerator = module.exports = function GridsterGenerator(args, options, config) {

    cgUtils.getNameArg(this,args);

    yeoman.generators.Base.apply(this, arguments);

};

util.inherits(GridsterGenerator, yeoman.generators.Base);

GridsterGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var prompts = [
        {
            name: 'route',
            message: 'Enter your route url (i.e. /mygridster/:id).  If you don\'t want a route added for you, leave this empty.'
        }
    ];

    cgUtils.addNamePrompt(this,prompts,'gridster');

    this.prompt(prompts, function (props) {
        if (props.name){
            this.name = props.name;
        }
        this.route = url.resolve('',props.route);
        cgUtils.askForModuleAndDir('gridster',this,true,cb);
    }.bind(this));
};

GridsterGenerator.prototype.files = function files() {

    this.ctrlname = _.camelize(_.classify(this.name)) + 'Ctrl';

    cgUtils.processTemplates(this.name,this.dir,'gridster',this,null,null,this.module);

    if (this.route && this.route.length > 0){
        var gridsterUrl = this.dir + this.name + '.html';
        cgUtils.injectRoute(this.module.file,this.config.get('uirouter'),this.name,this.route,gridsterUrl,this);
    }

};
