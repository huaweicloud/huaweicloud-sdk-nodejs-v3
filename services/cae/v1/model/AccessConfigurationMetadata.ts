

export class AccessConfigurationMetadata {
    public annotations?: { [key: string]: string; };
    public constructor() { 
    }
    public withAnnotations(annotations: { [key: string]: string; }): AccessConfigurationMetadata {
        this['annotations'] = annotations;
        return this;
    }
}