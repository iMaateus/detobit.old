const Game = require('../models/game');
const mongoRepository = require('../repository/mongo.repository.js');

exports.findGames = async function (options) {
    let filter = {};

    if (options.search != null) {
        filter = { popularNames: { '$regex': options.search, '$options': 'i' } }
    }

    return await mongoRepository.findMany(Game, filter, options);
}

exports.findHighlightGames = async function (options) {
    let filter = {
        'highlight': true
    }

    return await mongoRepository.findMany(Game, filter, options);
}