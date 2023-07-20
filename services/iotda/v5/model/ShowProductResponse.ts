import { ServiceCapability } from './ServiceCapability';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProductResponse extends SdkResponse {
    private 'app_id'?: string;
    private 'app_name'?: string;
    private 'product_id'?: string;
    public name?: string;
    private 'device_type'?: string;
    private 'protocol_type'?: string;
    private 'data_format'?: string;
    private 'manufacturer_name'?: string;
    public industry?: string;
    public description?: string;
    private 'service_capabilities'?: Array<ServiceCapability>;
    private 'create_time'?: string;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): ShowProductResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): ShowProductResponse {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withProductId(productId: string): ShowProductResponse {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withName(name: string): ShowProductResponse {
        this['name'] = name;
        return this;
    }
    public withDeviceType(deviceType: string): ShowProductResponse {
        this['device_type'] = deviceType;
        return this;
    }
    public set deviceType(deviceType: string  | undefined) {
        this['device_type'] = deviceType;
    }
    public get deviceType(): string | undefined {
        return this['device_type'];
    }
    public withProtocolType(protocolType: string): ShowProductResponse {
        this['protocol_type'] = protocolType;
        return this;
    }
    public set protocolType(protocolType: string  | undefined) {
        this['protocol_type'] = protocolType;
    }
    public get protocolType(): string | undefined {
        return this['protocol_type'];
    }
    public withDataFormat(dataFormat: string): ShowProductResponse {
        this['data_format'] = dataFormat;
        return this;
    }
    public set dataFormat(dataFormat: string  | undefined) {
        this['data_format'] = dataFormat;
    }
    public get dataFormat(): string | undefined {
        return this['data_format'];
    }
    public withManufacturerName(manufacturerName: string): ShowProductResponse {
        this['manufacturer_name'] = manufacturerName;
        return this;
    }
    public set manufacturerName(manufacturerName: string  | undefined) {
        this['manufacturer_name'] = manufacturerName;
    }
    public get manufacturerName(): string | undefined {
        return this['manufacturer_name'];
    }
    public withIndustry(industry: string): ShowProductResponse {
        this['industry'] = industry;
        return this;
    }
    public withDescription(description: string): ShowProductResponse {
        this['description'] = description;
        return this;
    }
    public withServiceCapabilities(serviceCapabilities: Array<ServiceCapability>): ShowProductResponse {
        this['service_capabilities'] = serviceCapabilities;
        return this;
    }
    public set serviceCapabilities(serviceCapabilities: Array<ServiceCapability>  | undefined) {
        this['service_capabilities'] = serviceCapabilities;
    }
    public get serviceCapabilities(): Array<ServiceCapability> | undefined {
        return this['service_capabilities'];
    }
    public withCreateTime(createTime: string): ShowProductResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}