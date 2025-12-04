

export class CreateKafkaUserClientQuotaTaskReq {
    public user?: string;
    public client?: string;
    private 'user_default'?: boolean;
    private 'client_default'?: boolean;
    private 'producer_byte_rate'?: number;
    private 'consumer_byte_rate'?: number;
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
        this['user_default'] = userDefault;
        return this;
    }
    public set userDefault(userDefault: boolean  | undefined) {
        this['user_default'] = userDefault;
    }
    public get userDefault(): boolean | undefined {
        return this['user_default'];
    }
    public withClientDefault(clientDefault: boolean): CreateKafkaUserClientQuotaTaskReq {
        this['client_default'] = clientDefault;
        return this;
    }
    public set clientDefault(clientDefault: boolean  | undefined) {
        this['client_default'] = clientDefault;
    }
    public get clientDefault(): boolean | undefined {
        return this['client_default'];
    }
    public withProducerByteRate(producerByteRate: number): CreateKafkaUserClientQuotaTaskReq {
        this['producer_byte_rate'] = producerByteRate;
        return this;
    }
    public set producerByteRate(producerByteRate: number  | undefined) {
        this['producer_byte_rate'] = producerByteRate;
    }
    public get producerByteRate(): number | undefined {
        return this['producer_byte_rate'];
    }
    public withConsumerByteRate(consumerByteRate: number): CreateKafkaUserClientQuotaTaskReq {
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