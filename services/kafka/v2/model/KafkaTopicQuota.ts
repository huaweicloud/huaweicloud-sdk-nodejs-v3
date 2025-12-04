

export class KafkaTopicQuota {
    public topic?: string;
    private 'producer_byte_rate'?: number;
    private 'consumer_byte_rate'?: number;
    public constructor() { 
    }
    public withTopic(topic: string): KafkaTopicQuota {
        this['topic'] = topic;
        return this;
    }
    public withProducerByteRate(producerByteRate: number): KafkaTopicQuota {
        this['producer_byte_rate'] = producerByteRate;
        return this;
    }
    public set producerByteRate(producerByteRate: number  | undefined) {
        this['producer_byte_rate'] = producerByteRate;
    }
    public get producerByteRate(): number | undefined {
        return this['producer_byte_rate'];
    }
    public withConsumerByteRate(consumerByteRate: number): KafkaTopicQuota {
        this['consumer_byte_rate'] = consumerByteRate;
        return this;
    }
    public set consumerByteRate(consumerByteRate: number  | undefined) {
        this['consumer_byte_rate'] = consumerByteRate;
    }
    public get consumerByteRate(): number | undefined {
        return this['consumer_byte_rate'];
    }
}