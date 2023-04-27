

export class ListConfigTemplatesRequest {
    public name?: string;
    private 'template_id'?: string | undefined;
    public type: ListConfigTemplatesRequestTypeEnum;
    public engine?: string;
    private 'engine_version'?: string | undefined;
    private 'cache_mode'?: string | undefined;
    public description?: string;
    public offset?: number;
    public limit?: number;
    public constructor(type?: any) { 
        this['type'] = type;
    }
    public withName(name: string): ListConfigTemplatesRequest {
        this['name'] = name;
        return this;
    }
    public withTemplateId(templateId: string): ListConfigTemplatesRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withType(type: ListConfigTemplatesRequestTypeEnum): ListConfigTemplatesRequest {
        this['type'] = type;
        return this;
    }
    public withEngine(engine: string): ListConfigTemplatesRequest {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: string): ListConfigTemplatesRequest {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion() {
        return this['engine_version'];
    }
    public withCacheMode(cacheMode: string): ListConfigTemplatesRequest {
        this['cache_mode'] = cacheMode;
        return this;
    }
    public set cacheMode(cacheMode: string | undefined) {
        this['cache_mode'] = cacheMode;
    }
    public get cacheMode() {
        return this['cache_mode'];
    }
    public withDescription(description: string): ListConfigTemplatesRequest {
        this['description'] = description;
        return this;
    }
    public withOffset(offset: number): ListConfigTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListConfigTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListConfigTemplatesRequestTypeEnum {
    SYS = 'sys',
    USER = 'user'
}
