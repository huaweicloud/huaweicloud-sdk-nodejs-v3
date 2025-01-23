

export class ListFeatureConfigsRequest {
    public feature?: string;
    public constructor() { 
    }
    public withFeature(feature: string): ListFeatureConfigsRequest {
        this['feature'] = feature;
        return this;
    }
}