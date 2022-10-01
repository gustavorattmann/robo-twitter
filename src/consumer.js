const Kafka = require('node-rdkafka');

var body = [];

const consumer = Kafka.Consumer.createReadStream({
    'group.id': 'twitter-robo',
    'metadata.broker.list': 'kafka:9092'
}, {}, { topics: ['twitter-robo'] });

consumer.connect();

consumer.on('ready', () => {
    console.log('Está pronto')

    consumer.subscribe(['twitter-robo']);

    consumer.consume();
}).on('data', (data) => {
    var listaTweets = JSON.parse(data.value.toString()).tweets;
    var listaPalavrasPositivas = JSON.parse(data.value.toString()).positivas;
    var listaPalavrasNegativas = JSON.parse(data.value.toString()).negativas;

    var quantidadeTweets = listaTweets.length;
    var quantidadePalavrasPositivas = listaPalavrasPositivas.length;
    var quantidadePalavrasNegativas = listaPalavrasNegativas.length;

    var auxiliarContadorPalavrasPositivas = 0;
    var auxiliarContadorPalavrasNegativas = 0;

    var contadorPalavrasPositivas = 0;
    var contadorPalavrasNegativas = 0;

    console.log ('---------------------------')

    for (var i = 0; i < quantidadeTweets; i++) {
        console.log('User: ' + listaTweets[i].nome)
        console.log('Data: ' + listaTweets[i].data)
        console.log('Mensagem: ' + listaTweets[i].mensagem)
        console.log('Curtidas: ' + listaTweets[i].curtidas)
        console.log('Retweets: ' + listaTweets[i].retweets)
        
        if (i != (quantidadeTweets - 1)) {
            console.log('')
        }

        var textoMaiusculo = listaTweets[i].mensagem.toUpperCase();

        for (var j = 0; j < quantidadePalavrasPositivas; i++) {
            if (textoMaiusculo.includes(listaPalavrasPositivas)) {
                auxiliarContadorPalavrasPositivas += 1;
            }
        }

        for (var j = 0; j < quantidadePalavrasNegativas; i++) {
            if (textoMaiusculo.includes(listaPalavrasNegativas)) {
                auxiliarContadorPalavrasNegativas += 1;
            }
        }

        if (auxiliarContadorPalavrasPositivas > 1) {
            contadorPalavrasPositivas++;
        }
    
        if (auxiliarContadorPalavrasNegativas > 1) {
            contadorPalavrasNegativas++;
        }
    }

    console.log ('---------------------------')

    body = [
        {
            mensagem: 'Quantidade de tweets capturados: ',
            quantidade: quantidadeTweets
        },
        {
            mensagem: 'Quantidade de tweets positivos: ',
            quantidade: contadorPalavrasPositivas
        },
        {
            mensagem: 'Quantidade de tweets negativos: ',
            quantidade: contadorPalavrasNegativas
        },
    ]
});

module.exports = { body };