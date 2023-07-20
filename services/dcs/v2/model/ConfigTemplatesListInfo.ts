

export class ConfigTemplatesListInfo {
    private 'template_id'?: string;
    private 'cache_mode'?: string;
    public description?: string;
    public engine?: string;
    private 'engine_version'?: string;
    public name?: string;
    private 'product_type'?: ConfigTemplatesListInfoProductTypeEnum | string;
    private 'storage_type'?: ConfigTemplatesListInfoStorageTypeEnum | string;
    public type?: string;
    private 'created_at'?: string;
    public constructor() { 
    }
    public withTemplateId(templateId: string): ConfigTemplatesListInfo {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withCacheMode(cacheMode: string): ConfigTemplatesListInfo {
        this['cache_mode'] = cacheMode;
        return this;
    }
    public set cacheMode(cacheMode: string  | undefined) {
        this['cache_mode'] = cacheMode;
    }
    public get cacheMode(): string | undefined {
        return this['cache_mode'];
    }
    public withDescription(description: string): ConfigTemplatesListInfo {
        this['description'] = description;
        return this;
    }
    public withEngine(engine: string): ConfigTemplatesListInfo {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: string): ConfigTemplatesListInfo {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withName(name: string): ConfigTemplatesListInfo {
        this['name'] = name;
        return this;
    }
    public withProductType(productType: ConfigTemplatesListInfoProductTypeEnum | string): ConfigTemplatesListInfo {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: ConfigTemplatesListInfoProductTypeEnum | string  | undefined) {
        this['product_type'] = productType;
    }
    public get productType(): ConfigTemplatesListInfoProductTypeEnum | string | undefined {
        return this['product_type'];
    }
    public withStorageType(storageType: ConfigTemplatesListInfoStorageTypeEnum | string): ConfigTemplatesListInfo {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: ConfigTemplatesListInfoStorageTypeEnum | string  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): ConfigTemplatesListInfoStorageTypeEnum | string | undefined {
        return this['storage_type'];
    }
    public withType(type: string): ConfigTemplatesListInfo {
        this['type'] = type;
        return this;
    }
    public withCreatedAt(createdAt: string): ConfigTemplatesListInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfigTemplatesListInfoProductTypeEnum {
    GENERIC = 'generic',
    ENTERPRISE = 'enterprise'
}
/**
    * @export
    * @enum {string}
    */
export enum ConfigTemplatesListInfoStorageTypeEnum {
    DRAM = 'DRAM',
    SSD = 'SSD'
}
