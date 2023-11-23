

export class CreateKafkaUserClientQuotaTaskReq {
    public user?: string;
    public client?: string;
    private 'user-default'?: boolean;
    private 'client-default'?: boolean;
    private 'producer-byte-rate'?: number;
    private 'consumer-byte-rate'?: number;
    public constructor() { 
    }
    public withUser(user: string): CreateKafkaUserClientQuotaTaskReq {
        this['user'] = user;
        return this;
    }
    public withClient(client: string): CreateKafkaUserClientQuotaTaskReq {
        this['client'] = client;
        return this;
    }
    public withUserDefault(userDefault: boolean): CreateKafkaUserClientQuotaTaskReq {
        this['user-default'] = userDefault;
        return this;
    }
    public set userDefault(userDefault: boolean  | undefined) {
        this['user-default'] = userDefault;
    }
    public get userDefault(): boolean | undefined {
        return this['user-default'];
    }
    public withClientDefault(clientDefault: boolean): CreateKafkaUserClientQuotaTaskReq {
        this['client-default'] = clientDefault;
        return this;
    }
    public set clientDefault(clientDefault: boolean  | undefined) {
        this['client-default'] = clientDefault;
    }
    public get clientDefault(): boolean | undefined {
        return this['client-default'];
    }
    public withProducerByteRate(producerByteRate: number): CreateKafkaUserClientQuotaTaskReq {
        this['producer-byte-rate'] = producerByteRate;
        return this;
    }
    public set producerByteRate(producerByteRate: number  | undefined) {
        this['producer-byte-rate'] = producerByteRate;
    }
    public get producerByteRate(): number | undefined {
        return this['producer-byte-rate'];
    }
    public withConsumerByteRate(consumerByteRate: number): CreateKafkaUserClientQuotaTaskReq {
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