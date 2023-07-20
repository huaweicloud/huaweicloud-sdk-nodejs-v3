

export class CbcOrderResult {
    public cloudServiceId?: string;
    public orderId?: string;
    public subscribeResult?: number;
    public resourceId?: string;
    public constructor(orderId?: string, subscribeResult?: number) { 
        this['orderId'] = orderId;
        this['subscribeResult'] = subscribeResult;
    }
    public withCloudServiceId(cloudServiceId: string): CbcOrderResult {
        this['cloudServiceId'] = cloudServiceId;
        return this;
    }
    public withOrderId(orderId: string): CbcOrderResult {
        this['orderId'] = orderId;
        return this;
    }
    public withSubscribeResult(subscribeResult: number): CbcOrderResult {
        this['subscribeResult'] = subscribeResult;
        return this;
    }
    public withResourceId(resourceId: string): CbcOrderResult {
        this['resourceId'] = resourceId;
        return this;
    }
}