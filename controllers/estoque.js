const models = require('../models')
const _ = require('lodash')
const callback = require('../helpers/callback')
const { Op } = require("sequelize");
const moment = require("moment");


exports.index = async (req, res) => {

    let estoque = await models.Estoque.findAll({

    });

    res.send(callback.response('estoque', estoque))

}

exports.get = async (req, res) => {

    let estoque = await models.Estoque.findOne({
        where: {
            id: req.params.id
        }
    });
    res.send(callback.response('estoque', estoque))

}

exports.update = async (req, res) => {

    let estoque = await models.Estoque.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.send(callback.response('estoque', estoque))

}

exports.create = async (req, res) => {

    let estoque = await models.Estoque.create(req.body);
    res.send(callback.response('estoque', estoque))

}

exports.delete = async (req, res) => {

    let estoque = await models.Estoque.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send(callback.response('estoque', estoque))

}