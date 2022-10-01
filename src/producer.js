const Kafka = require('node-rdkafka');

var { tweets, positivas, negativas } = require('./dados');

var listaConteudo = {
    tweets: tweets,
    positivas: positivas,
    negativas: negativas
}

const producer = Kafka.Producer.createWriteStream({
    'client.id': 'robo',
    'metadata.broker.list': 'kafka:9092'
}, {}, { topic: 'twitter-robo' });

function queueMessage() {
    const success = producer.write(Buffer.from(JSON.stringify(listaConteudo)));

    if (success) {
        console.log('Mensagem enviada com sucesso!')
    } else {
        console.log('Ocorreu algo de errado!')
    }
}

queueMessage();