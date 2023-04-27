

export class ConfigTemplatesListInfo {
    private 'template_id'?: string | undefined;
    private 'cache_mode'?: string | undefined;
    public description?: string;
    public engine?: string;
    private 'engine_version'?: string | undefined;
    public name?: string;
    private 'product_type'?: ConfigTemplatesListInfoProductTypeEnum | undefined;
    private 'storage_type'?: ConfigTemplatesListInfoStorageTypeEnum | undefined;
    public type?: string;
    public constructor() { 
    }
    public withTemplateId(templateId: string): ConfigTemplatesListInfo {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withCacheMode(cacheMode: string): ConfigTemplatesListInfo {
        this['cache_mode'] = cacheMode;
        return this;
    }
    public set cacheMode(cacheMode: string | undefined) {
        this['cache_mode'] = cacheMode;
    }
    public get cacheMode() {
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
    public set engineVersion(engineVersion: string | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion() {
        return this['engine_version'];
    }
    public withName(name: string): ConfigTemplatesListInfo {
        this['name'] = name;
        return this;
    }
    public withProductType(productType: ConfigTemplatesListInfoProductTypeEnum): ConfigTemplatesListInfo {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: ConfigTemplatesListInfoProductTypeEnum | undefined) {
        this['product_type'] = productType;
    }
    public get productType() {
        return this['product_type'];
    }
    public withStorageType(storageType: ConfigTemplatesListInfoStorageTypeEnum): ConfigTemplatesListInfo {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: ConfigTemplatesListInfoStorageTypeEnum | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType() {
        return this['storage_type'];
    }
    public withType(type: string): ConfigTemplatesListInfo {
        this['type'] = type;
        return this;
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
