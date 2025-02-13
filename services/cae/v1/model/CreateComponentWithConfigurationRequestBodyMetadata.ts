

export class CreateComponentWithConfigurationRequestBodyMetadata {
    public name?: string;
    public annotations?: { [key: string]: string; };
    public constructor(name?: string, annotations?: { [key: string]: string; }) { 
        this['name'] = name;
        this['annotations'] = annotations;
    }
    public withName(name: string): CreateComponentWithConfigurationRequestBodyMetadata {
        this['name'] = name;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): CreateComponentWithConfigurationRequestBodyMetadata {
        this['annotations'] = annotations;
        return this;
    }
}