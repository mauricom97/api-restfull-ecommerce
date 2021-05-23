const models = require('../models')
const _ = require('lodash')
const callback = require('../helpers/callback')
const { Op } = require("sequelize");
const moment = require("moment");


exports.index = async (req, res) => {

    let produto = await models.Produto.findAll({
        order: [
            ['nome', 'asc']
        ]
    });
    res.send(callback.response('produto', produto))

}

exports.get = async (req, res) => {

    let produto = await models.Produto.findOne({
        where: {
            id: req.params.id
        }
    });
    res.send(callback.response('produto', produto))

}

exports.update = async (req, res) => {

    let produto = await models.Produto.update(req.body, {
        where: {
            id: req.params.id
        }
    });

    res.send(callback.response('produto', produto))

}

exports.create = async (req, res) => {

    let produto = await models.Produto.create(req.body);

    res.send(callback.response('produto', produto))

}

exports.delete = async (req, res) => {

    let produto = await models.Produto.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send(callback.response('produto', produto))

}