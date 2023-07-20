import { PropertyFilter } from './PropertyFilter';


export class DeviceDataCondition {
    private 'device_id'?: string;
    private 'product_id'?: string;
    public filters?: Array<PropertyFilter>;
    public constructor() { 
    }
    public withDeviceId(deviceId: string): DeviceDataCondition {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withProductId(productId: string): DeviceDataCondition {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withFilters(filters: Array<PropertyFilter>): DeviceDataCondition {
        this['filters'] = filters;
        return this;
    }
}