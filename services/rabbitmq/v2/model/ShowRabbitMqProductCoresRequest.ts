

export class ShowRabbitMqProductCoresRequest {
    public engine?: ShowRabbitMqProductCoresRequestEngineEnum | string;
    private 'product_id'?: string;
    private 'broker_num'?: number;
    private 'instance_id'?: string;
    public constructor(engine?: string, productId?: string, brokerNum?: number) { 
        this['engine'] = engine;
        this['product_id'] = productId;
        this['broker_num'] = brokerNum;
    }
    public withEngine(engine: ShowRabbitMqProductCoresRequestEngineEnum | string): ShowRabbitMqProductCoresRequest {
        this['engine'] = engine;
        return this;
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
    public withBrokerNum(brokerNum: number): ShowRabbitMqProductCoresRequest {
        this['broker_num'] = brokerNum;
        return this;
    }
    public set brokerNum(brokerNum: number  | undefined) {
        this['broker_num'] = brokerNum;
    }
    public get brokerNum(): number | undefined {
        return this['broker_num'];
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
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRabbitMqProductCoresRequestEngineEnum {
    RABBITMQ = 'rabbitmq'
}
