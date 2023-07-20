

export class KafkaTopicProducerResponseProducers {
    private 'producer_address'?: string;
    private 'broker_address'?: string;
    private 'join_time'?: number;
    public constructor() { 
    }
    public withProducerAddress(producerAddress: string): KafkaTopicProducerResponseProducers {
        this['producer_address'] = producerAddress;
        return this;
    }
    public set producerAddress(producerAddress: string  | undefined) {
        this['producer_address'] = producerAddress;
    }
    public get producerAddress(): string | undefined {
        return this['producer_address'];
    }
    public withBrokerAddress(brokerAddress: string): KafkaTopicProducerResponseProducers {
        this['broker_address'] = brokerAddress;
        return this;
    }
    public set brokerAddress(brokerAddress: string  | undefined) {
        this['broker_address'] = brokerAddress;
    }
    public get brokerAddress(): string | undefined {
        return this['broker_address'];
    }
    public withJoinTime(joinTime: number): KafkaTopicProducerResponseProducers {
        this['join_time'] = joinTime;
        return this;
    }
    public set joinTime(joinTime: number  | undefined) {
        this['join_time'] = joinTime;
    }
    public get joinTime(): number | undefined {
        return this['join_time'];
    }
}