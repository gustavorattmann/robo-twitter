const { Kafka, Partitioners } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'twitter',
  brokers: ['localhost:9092'],
});

module.exports = { kafka, Partitioners };