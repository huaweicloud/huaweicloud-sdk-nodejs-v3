

export class PluginTemplateVersionV2 {
    public version?: string;
    public creationTimestamp?: string;
    public inputs?: object;
    public translate?: object;
    public description?: string;
    public detail?: string;
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withVersion(version: string): PluginTemplateVersionV2 {
        this['version'] = version;
        return this;
    }
    public withCreationTimestamp(creationTimestamp: string): PluginTemplateVersionV2 {
        this['creationTimestamp'] = creationTimestamp;
        return this;
    }
    public withInputs(inputs: object): PluginTemplateVersionV2 {
        this['inputs'] = inputs;
        return this;
    }
    public withTranslate(translate: object): PluginTemplateVersionV2 {
        this['translate'] = translate;
        return this;
    }
    public withDescription(description: string): PluginTemplateVersionV2 {
        this['description'] = description;
        return this;
    }
    public withDetail(detail: string): PluginTemplateVersionV2 {
        this['detail'] = detail;
        return this;
    }
}