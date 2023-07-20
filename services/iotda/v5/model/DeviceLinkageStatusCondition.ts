

export class DeviceLinkageStatusCondition {
    private 'device_id'?: string;
    private 'product_id'?: string;
    private 'status_list'?: Array<string>;
    public duration?: number;
    public constructor() { 
    }
    public withDeviceId(deviceId: string): DeviceLinkageStatusCondition {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withProductId(productId: string): DeviceLinkageStatusCondition {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withStatusList(statusList: Array<string>): DeviceLinkageStatusCondition {
        this['status_list'] = statusList;
        return this;
    }
    public set statusList(statusList: Array<string>  | undefined) {
        this['status_list'] = statusList;
    }
    public get statusList(): Array<string> | undefined {
        return this['status_list'];
    }
    public withDuration(duration: number): DeviceLinkageStatusCondition {
        this['duration'] = duration;
        return this;
    }
}