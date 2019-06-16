const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = 'mongodb://localhost/mymoney'

module.exports = mongoose.connect(url, {useNewUrlParser: true})

mongoose.Error.messages.general.required = 'O atributo {PATH} é obrigatório.'
mongoose.Error.messages.Number.min = 'O {VALUE} informado é maior que o limite mínimo de {MIN}.'
mongoose.Error.messages.Number.max = 'O {VALUE} informado é maior que o limite máximo de {MAX}.'
mongoose.Error.messages.String.enum = '{VALUE} não é valido para o atributo {PATH}.'