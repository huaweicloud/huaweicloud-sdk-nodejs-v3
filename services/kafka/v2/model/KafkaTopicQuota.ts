

export class KafkaTopicQuota {
    public topic?: string;
    private 'producer-byte-rate'?: number;
    private 'consumer-byte-rate'?: number;
    public constructor() { 
    }
    public withTopic(topic: string): KafkaTopicQuota {
        this['topic'] = topic;
        return this;
    }
    public withProducerByteRate(producerByteRate: number): KafkaTopicQuota {
        this['producer-byte-rate'] = producerByteRate;
        return this;
    }
    public set producerByteRate(producerByteRate: number  | undefined) {
        this['producer-byte-rate'] = producerByteRate;
    }
    public get producerByteRate(): number | undefined {
        return this['producer-byte-rate'];
    }
    public withConsumerByteRate(consumerByteRate: number): KafkaTopicQuota {
        this['consumer-byte-rate'] = consumerByteRate;
        return this;
    }
    public set consumerByteRate(consumerByteRate: number  | undefined) {
        this['consumer-byte-rate'] = consumerByteRate;
    }
    public get consumerByteRate(): number | undefined {
        return this['consumer-byte-rate'];
    }
}