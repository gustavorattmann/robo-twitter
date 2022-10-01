const Kafka = require('node-rdkafka');

const client = Kafka.AdminClient.create({
    'client.id': 'twitter-robo-admin',
    'metadata.broker.list': 'kafka:9092'
});

client.createTopic({
    topic: 'twitter-robo',
    num_partitions: 1,
    replication_factor: 1
}, function(err) {
    console.log(err)
});