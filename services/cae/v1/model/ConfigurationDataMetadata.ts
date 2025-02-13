

export class ConfigurationDataMetadata {
    public annotations?: { [key: string]: string; };
    public constructor() { 
    }
    public withAnnotations(annotations: { [key: string]: string; }): ConfigurationDataMetadata {
        this['annotations'] = annotations;
        return this;
    }
}