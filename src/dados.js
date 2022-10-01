const moment = require('moment');

var tweets = [
    {
        nome: "Geraldo",
        data: moment().startOf('week').endOf('week').format('DD/MM/YYYY HH:mm'),
        mensagem: "Adorei esse campeonato, tiveram muitas partidas legais, eu amo esse jogo! Me diverti bastante",
        curtidas: 2,
        retweets: 1
    },
    {
        nome: "Agostinho Carrara",
        data: moment().startOf('week').endOf('week').format('DD/MM/YYYY HH:mm'),
        mensagem: "Amei esse jogo, nunca tinha visto e achei muito divertido, pretendo começar a jogar o quanto antes",
        curtidas: 10,
        retweets: 7
    },
    {
        nome: "Hater",
        data: moment().startOf('week').endOf('week').format('DD/MM/YYYY HH:mm'),
        mensagem: "Odiei esse jogo, um verdadeiro lixo, campeonato horrível que não sabe organizar nada",
        curtidas: 5,
        retweets: 3
    }
];

var palavrasPositivas = ['amei', 'amo', 'divertido', 'diverti'];

var palavrasNegativas = ['lixo', 'horrível', 'pior', 'odiei'];

module.exports = { tweets, palavrasPositivas, palavrasNegativas };