import { ServiceCapability } from './ServiceCapability';


export class AddProduct {
    private 'product_id'?: string;
    public name?: string;
    private 'device_type'?: string;
    private 'protocol_type'?: string;
    private 'data_format'?: string;
    private 'service_capabilities'?: Array<ServiceCapability>;
    private 'manufacturer_name'?: string;
    public industry?: string;
    public description?: string;
    private 'app_id'?: string;
    public constructor(name?: string, deviceType?: string, protocolType?: string, dataFormat?: string, serviceCapabilities?: Array<ServiceCapability>) { 
        this['name'] = name;
        this['device_type'] = deviceType;
        this['protocol_type'] = protocolType;
        this['data_format'] = dataFormat;
        this['service_capabilities'] = serviceCapabilities;
    }
    public withProductId(productId: string): AddProduct {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withName(name: string): AddProduct {
        this['name'] = name;
        return this;
    }
    public withDeviceType(deviceType: string): AddProduct {
        this['device_type'] = deviceType;
        return this;
    }
    public set deviceType(deviceType: string  | undefined) {
        this['device_type'] = deviceType;
    }
    public get deviceType(): string | undefined {
        return this['device_type'];
    }
    public withProtocolType(protocolType: string): AddProduct {
        this['protocol_type'] = protocolType;
        return this;
    }
    public set protocolType(protocolType: string  | undefined) {
        this['protocol_type'] = protocolType;
    }
    public get protocolType(): string | undefined {
        return this['protocol_type'];
    }
    public withDataFormat(dataFormat: string): AddProduct {
        this['data_format'] = dataFormat;
        return this;
    }
    public set dataFormat(dataFormat: string  | undefined) {
        this['data_format'] = dataFormat;
    }
    public get dataFormat(): string | undefined {
        return this['data_format'];
    }
    public withServiceCapabilities(serviceCapabilities: Array<ServiceCapability>): AddProduct {
        this['service_capabilities'] = serviceCapabilities;
        return this;
    }
    public set serviceCapabilities(serviceCapabilities: Array<ServiceCapability>  | undefined) {
        this['service_capabilities'] = serviceCapabilities;
    }
    public get serviceCapabilities(): Array<ServiceCapability> | undefined {
        return this['service_capabilities'];
    }
    public withManufacturerName(manufacturerName: string): AddProduct {
        this['manufacturer_name'] = manufacturerName;
        return this;
    }
    public set manufacturerName(manufacturerName: string  | undefined) {
        this['manufacturer_name'] = manufacturerName;
    }
    public get manufacturerName(): string | undefined {
        return this['manufacturer_name'];
    }
    public withIndustry(industry: string): AddProduct {
        this['industry'] = industry;
        return this;
    }
    public withDescription(description: string): AddProduct {
        this['description'] = description;
        return this;
    }
    public withAppId(appId: string): AddProduct {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}