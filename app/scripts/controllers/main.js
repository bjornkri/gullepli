'use strict';

angular.module('gullepliApp')
  .controller('MainCtrl', function ($scope, ngAudio) {
      $scope.timerRunning = false;
      $scope.buttonLabel = 'Start timer';

      $scope.audio = ngAudio.load('/audio/analog-alarm-clock.wav');

      $scope._startTimer = function() {
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
        $scope.buttonLabel = 'Pause';
      };

      $scope._stopTimer = function() {
        $scope.$broadcast('timer-stop');
        $scope.timerRunning = false;
        $scope.buttonLabel = 'Start timer';
      };

      $scope.toggleTimer = function() {
        if ($scope.timerRunning) {
          this._stopTimer();
        } else {
          this._startTimer();
        }
      };

      $scope.$on('timer-stopped', function (event, data){
        console.log('Timer Stopped - data = ', data);
        if (data.millis === 0) { $scope.audio.play(); }
      });
    });
