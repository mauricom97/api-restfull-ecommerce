const models = require('../models')
const _ = require('lodash')
const callback = require('../helpers/callback')
const { Op } = require("sequelize");
const moment = require("moment");


exports.index = async (req, res) => {

    let categoria = await models.Categoria.findAll({
        order: [
            ['titulo', 'asc']
        ]
    });
    res.send(callback.response('categoria', categoria))

}

exports.get = async (req, res) => {

    let categoria = await models.Categoria.findOne({
        where: {
            id: req.params.id
        }
    });
    res.send(callback.response('categoria', categoria))

}

exports.update = async (req, res) => {

    let categoria = await models.Categoria.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.send(callback.response('categoria', categoria))

}

exports.create = async (req, res) => {

    let categoria = await models.Categoria.create(req.body);
    res.send(callback.response('categoria', categoria))

}

exports.delete = async (req, res) => {

    let categoria = await models.Categoria.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send(callback.response('categoria', categoria))

}