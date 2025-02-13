

export class UpdateComponentRequestMetadata {
    public name?: string;
    public annotations?: { [key: string]: string; };
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateComponentRequestMetadata {
        this['name'] = name;
        return this;
    }
    public withAnnotations(annotations: { [key: string]: string; }): UpdateComponentRequestMetadata {
        this['annotations'] = annotations;
        return this;
    }
}