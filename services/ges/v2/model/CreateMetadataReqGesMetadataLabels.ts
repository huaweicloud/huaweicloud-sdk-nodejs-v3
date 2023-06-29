

export class CreateMetadataReqGesMetadataLabels {
    public name?: string;
    public properties?: Array<{ [key: string]: string; }>;
    public constructor() { 
    }
    public withName(name: string): CreateMetadataReqGesMetadataLabels {
        this['name'] = name;
        return this;
    }
    public withProperties(properties: Array<{ [key: string]: string; }>): CreateMetadataReqGesMetadataLabels {
        this['properties'] = properties;
        return this;
    }
}