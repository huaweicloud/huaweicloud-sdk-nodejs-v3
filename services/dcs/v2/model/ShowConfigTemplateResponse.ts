
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigTemplateResponse extends SdkResponse {
    private 'template_id'?: string;
    private 'cache_mode'?: string;
    public description?: string;
    public engine?: string;
    private 'engine_version'?: string;
    public name?: string;
    private 'product_type'?: ShowConfigTemplateResponseProductTypeEnum | string;
    private 'storage_type'?: ShowConfigTemplateResponseStorageTypeEnum | string;
    public type?: string;
    private 'created_at'?: string;
    public constructor() { 
        super();
    }
    public withTemplateId(templateId: string): ShowConfigTemplateResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withCacheMode(cacheMode: string): ShowConfigTemplateResponse {
        this['cache_mode'] = cacheMode;
        return this;
    }
    public set cacheMode(cacheMode: string  | undefined) {
        this['cache_mode'] = cacheMode;
    }
    public get cacheMode(): string | undefined {
        return this['cache_mode'];
    }
    public withDescription(description: string): ShowConfigTemplateResponse {
        this['description'] = description;
        return this;
    }
    public withEngine(engine: string): ShowConfigTemplateResponse {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: string): ShowConfigTemplateResponse {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withName(name: string): ShowConfigTemplateResponse {
        this['name'] = name;
        return this;
    }
    public withProductType(productType: ShowConfigTemplateResponseProductTypeEnum | string): ShowConfigTemplateResponse {
        this['product_type'] = productType;
        return this;
    }
    public set productType(productType: ShowConfigTemplateResponseProductTypeEnum | string  | undefined) {
        this['product_type'] = productType;
    }
    public get productType(): ShowConfigTemplateResponseProductTypeEnum | string | undefined {
        return this['product_type'];
    }
    public withStorageType(storageType: ShowConfigTemplateResponseStorageTypeEnum | string): ShowConfigTemplateResponse {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: ShowConfigTemplateResponseStorageTypeEnum | string  | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType(): ShowConfigTemplateResponseStorageTypeEnum | string | undefined {
        return this['storage_type'];
    }
    public withType(type: string): ShowConfigTemplateResponse {
        this['type'] = type;
        return this;
    }
    public withCreatedAt(createdAt: string): ShowConfigTemplateResponse {
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
export enum ShowConfigTemplateResponseProductTypeEnum {
    GENERIC = 'generic',
    ENTERPRISE = 'enterprise'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowConfigTemplateResponseStorageTypeEnum {
    DRAM = 'DRAM',
    SSD = 'SSD'
}
