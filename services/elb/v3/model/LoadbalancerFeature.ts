

export class LoadbalancerFeature {
    public feature?: string;
    public type?: string;
    public value?: string;
    public constructor(feature?: string, type?: string, value?: string) { 
        this['feature'] = feature;
        this['type'] = type;
        this['value'] = value;
    }
    public withFeature(feature: string): LoadbalancerFeature {
        this['feature'] = feature;
        return this;
    }
    public withType(type: string): LoadbalancerFeature {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): LoadbalancerFeature {
        this['value'] = value;
        return this;
    }
}