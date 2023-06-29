

export class ShowMetadataRespGesMetadataLabels {
    public name?: string;
    public properties?: Array<{ [key: string]: string; }>;
    public constructor() { 
    }
    public withName(name: string): ShowMetadataRespGesMetadataLabels {
        this['name'] = name;
        return this;
    }
    public withProperties(properties: Array<{ [key: string]: string; }>): ShowMetadataRespGesMetadataLabels {
        this['properties'] = properties;
        return this;
    }
}