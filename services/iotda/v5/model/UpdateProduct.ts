import { ServiceCapability } from './ServiceCapability';


export class UpdateProduct {
    private 'app_id'?: string;
    public name?: string;
    private 'device_type'?: string;
    private 'protocol_type'?: string;
    private 'data_format'?: string;
    private 'service_capabilities'?: Array<ServiceCapability>;
    private 'manufacturer_name'?: string;
    public industry?: string;
    public description?: string;
    public constructor() { 
    }
    public withAppId(appId: string): UpdateProduct {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withName(name: string): UpdateProduct {
        this['name'] = name;
        return this;
    }
    public withDeviceType(deviceType: string): UpdateProduct {
        this['device_type'] = deviceType;
        return this;
    }
    public set deviceType(deviceType: string  | undefined) {
        this['device_type'] = deviceType;
    }
    public get deviceType(): string | undefined {
        return this['device_type'];
    }
    public withProtocolType(protocolType: string): UpdateProduct {
        this['protocol_type'] = protocolType;
        return this;
    }
    public set protocolType(protocolType: string  | undefined) {
        this['protocol_type'] = protocolType;
    }
    public get protocolType(): string | undefined {
        return this['protocol_type'];
    }
    public withDataFormat(dataFormat: string): UpdateProduct {
        this['data_format'] = dataFormat;
        return this;
    }
    public set dataFormat(dataFormat: string  | undefined) {
        this['data_format'] = dataFormat;
    }
    public get dataFormat(): string | undefined {
        return this['data_format'];
    }
    public withServiceCapabilities(serviceCapabilities: Array<ServiceCapability>): UpdateProduct {
        this['service_capabilities'] = serviceCapabilities;
        return this;
    }
    public set serviceCapabilities(serviceCapabilities: Array<ServiceCapability>  | undefined) {
        this['service_capabilities'] = serviceCapabilities;
    }
    public get serviceCapabilities(): Array<ServiceCapability> | undefined {
        return this['service_capabilities'];
    }
    public withManufacturerName(manufacturerName: string): UpdateProduct {
        this['manufacturer_name'] = manufacturerName;
        return this;
    }
    public set manufacturerName(manufacturerName: string  | undefined) {
        this['manufacturer_name'] = manufacturerName;
    }
    public get manufacturerName(): string | undefined {
        return this['manufacturer_name'];
    }
    public withIndustry(industry: string): UpdateProduct {
        this['industry'] = industry;
        return this;
    }
    public withDescription(description: string): UpdateProduct {
        this['description'] = description;
        return this;
    }
}