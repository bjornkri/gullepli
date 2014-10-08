'use strict';

angular.module('gullepliApp')
  .service('Project', function Project() {
    this.projects = [];

    this.addProject = function(title, color) {
      this.projects.push({'title': title, 'color': color});
    };
  });
