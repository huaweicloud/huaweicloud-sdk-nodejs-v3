

export class CreateEnvironmentRequestBodyMetadata {
    public annotations?: { [key: string]: string; };
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withAnnotations(annotations: { [key: string]: string; }): CreateEnvironmentRequestBodyMetadata {
        this['annotations'] = annotations;
        return this;
    }
    public withName(name: string): CreateEnvironmentRequestBodyMetadata {
        this['name'] = name;
        return this;
    }
}