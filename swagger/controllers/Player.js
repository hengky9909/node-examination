'use strict';

var utils = require('../utils/writer.js');
var Player = require('../service/PlayerService');

module.exports.addPlayer = function addPlayer (req, res, next) {
  var body = req.swagger.params['body'].value;
  Player.addPlayer(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePlayer = function deletePlayer (req, res, next) {
  var playerId = req.swagger.params['playerId'].value;
  Player.deletePlayer(playerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPlayerById = function getPlayerById (req, res, next) {
  var playerId = req.swagger.params['playerId'].value;
  Player.getPlayerById(playerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePlayer = function updatePlayer (req, res, next) {
  var body = req.swagger.params['body'].value;
  Player.updatePlayer(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
