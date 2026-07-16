

export class ListFeaturesRequest {
    public feature?: string;
    public constructor(feature?: string) { 
        this['feature'] = feature;
    }
    public withFeature(feature: string): ListFeaturesRequest {
        this['feature'] = feature;
        return this;
    }
}