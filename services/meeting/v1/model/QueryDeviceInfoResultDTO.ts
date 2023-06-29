

export class QueryDeviceInfoResultDTO {
    public model?: string;
    public deviceSize?: string;
    public purchaseChannel?: string;
    public constructor() { 
    }
    public withModel(model: string): QueryDeviceInfoResultDTO {
        this['model'] = model;
        return this;
    }
    public withDeviceSize(deviceSize: string): QueryDeviceInfoResultDTO {
        this['deviceSize'] = deviceSize;
        return this;
    }
    public withPurchaseChannel(purchaseChannel: string): QueryDeviceInfoResultDTO {
        this['purchaseChannel'] = purchaseChannel;
        return this;
    }
}