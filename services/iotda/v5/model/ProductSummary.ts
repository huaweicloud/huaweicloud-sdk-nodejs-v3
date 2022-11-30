

export class ProductSummary {
    private 'app_id'?: string | undefined;
    private 'app_name'?: string | undefined;
    private 'product_id'?: string | undefined;
    public name?: string;
    private 'device_type'?: string | undefined;
    private 'protocol_type'?: string | undefined;
    private 'data_format'?: string | undefined;
    private 'manufacturer_name'?: string | undefined;
    public industry?: string;
    public description?: string;
    private 'create_time'?: string | undefined;
    public constructor() { 
    }
    public withAppId(appId: string): ProductSummary {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withAppName(appName: string): ProductSummary {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withProductId(productId: string): ProductSummary {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withName(name: string): ProductSummary {
        this['name'] = name;
        return this;
    }
    public withDeviceType(deviceType: string): ProductSummary {
        this['device_type'] = deviceType;
        return this;
    }
    public set deviceType(deviceType: string | undefined) {
        this['device_type'] = deviceType;
    }
    public get deviceType() {
        return this['device_type'];
    }
    public withProtocolType(protocolType: string): ProductSummary {
        this['protocol_type'] = protocolType;
        return this;
    }
    public set protocolType(protocolType: string | undefined) {
        this['protocol_type'] = protocolType;
    }
    public get protocolType() {
        return this['protocol_type'];
    }
    public withDataFormat(dataFormat: string): ProductSummary {
        this['data_format'] = dataFormat;
        return this;
    }
    public set dataFormat(dataFormat: string | undefined) {
        this['data_format'] = dataFormat;
    }
    public get dataFormat() {
        return this['data_format'];
    }
    public withManufacturerName(manufacturerName: string): ProductSummary {
        this['manufacturer_name'] = manufacturerName;
        return this;
    }
    public set manufacturerName(manufacturerName: string | undefined) {
        this['manufacturer_name'] = manufacturerName;
    }
    public get manufacturerName() {
        return this['manufacturer_name'];
    }
    public withIndustry(industry: string): ProductSummary {
        this['industry'] = industry;
        return this;
    }
    public withDescription(description: string): ProductSummary {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): ProductSummary {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
}