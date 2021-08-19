const customResponse = require('../untils/customResponse');
const mongoConnection = require('../connections/mongo.connection');
const gameService = require('../services/game.service.js');

module.exports.search = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    
    try {
        await mongoConnection.connect();

        let games = await gameService.findGames(event.queryStringParameters);

        return customResponse.createResponse(games);
    }
    catch (err) {
        return customResponse.createResponse(err.message, 500);
    }
};

module.exports.highlights = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    
    try {
        await mongoConnection.connect();

        let games = await gameService.findHighlightGames(event.queryStringParameters);

        return customResponse.createResponse(games);
    }
    catch (err) {
        return customResponse.createResponse(err.message, 500);
    }
};