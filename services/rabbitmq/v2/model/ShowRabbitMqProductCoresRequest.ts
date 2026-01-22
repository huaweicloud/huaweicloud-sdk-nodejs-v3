

export class ShowRabbitMqProductCoresRequest {
    private 'instance_id'?: string;
    private 'product_id'?: string;
    private 'broker_num'?: string;
    public constructor(productId?: string, brokerNum?: string) { 
        this['product_id'] = productId;
        this['broker_num'] = brokerNum;
    }
    public withInstanceId(instanceId: string): ShowRabbitMqProductCoresRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProductId(productId: string): ShowRabbitMqProductCoresRequest {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withBrokerNum(brokerNum: string): ShowRabbitMqProductCoresRequest {
        this['broker_num'] = brokerNum;
        return this;
    }
    public set brokerNum(brokerNum: string  | undefined) {
        this['broker_num'] = brokerNum;
    }
    public get brokerNum(): string | undefined {
        return this['broker_num'];
    }
}