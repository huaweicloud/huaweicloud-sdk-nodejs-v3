

export class ShowRabbitMqProductCoresRequest {
    private 'instance_id'?: string;
    private 'product_id'?: string;
    public constructor(instanceId?: string, productId?: string) { 
        this['instance_id'] = instanceId;
        this['product_id'] = productId;
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
}