

export class PluginTemplateMetadata {
    public name?: string;
    public annotations?: { [key: string]: string; };
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): PluginTemplateMetadata {
        this['name'] = name;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): PluginTemplateMetadata {
        this['annotations'] = annotations;
        return this;
    }
}