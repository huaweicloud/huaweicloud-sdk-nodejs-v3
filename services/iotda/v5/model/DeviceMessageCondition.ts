

export class DeviceMessageCondition {
    private 'product_id'?: string | undefined;
    public topic?: string;
    public constructor() { 
    }
    public withProductId(productId: string): DeviceMessageCondition {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withTopic(topic: string): DeviceMessageCondition {
        this['topic'] = topic;
        return this;
    }
}