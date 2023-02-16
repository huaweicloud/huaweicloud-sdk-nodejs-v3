

export class CreateCustomTemplateBody {
    private 'template_id'?: string | undefined;
    public name: string;
    public type?: string;
    public engine?: string;
    private 'cache_mode'?: string | undefined;
    public description?: string;
    private 'engine_version'?: string | undefined;
    public params?: { [key: string]: string; };
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withTemplateId(templateId: string): CreateCustomTemplateBody {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withName(name: string): CreateCustomTemplateBody {
        this['name'] = name;
        return this;
    }
    public withType(type: string): CreateCustomTemplateBody {
        this['type'] = type;
        return this;
    }
    public withEngine(engine: string): CreateCustomTemplateBody {
        this['engine'] = engine;
        return this;
    }
    public withCacheMode(cacheMode: string): CreateCustomTemplateBody {
        this['cache_mode'] = cacheMode;
        return this;
    }
    public set cacheMode(cacheMode: string | undefined) {
        this['cache_mode'] = cacheMode;
    }
    public get cacheMode() {
        return this['cache_mode'];
    }
    public withDescription(description: string): CreateCustomTemplateBody {
        this['description'] = description;
        return this;
    }
    public withEngineVersion(engineVersion: string): CreateCustomTemplateBody {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion() {
        return this['engine_version'];
    }
    public withParams(params: { [key: string]: string; }): CreateCustomTemplateBody {
        this['params'] = params;
        return this;
    }
}