

export class ShowFeatureRequest {
    private 'feature_key'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(featureKey?: string) { 
        this['feature_key'] = featureKey;
    }
    public withFeatureKey(featureKey: string): ShowFeatureRequest {
        this['feature_key'] = featureKey;
        return this;
    }
    public set featureKey(featureKey: string  | undefined) {
        this['feature_key'] = featureKey;
    }
    public get featureKey(): string | undefined {
        return this['feature_key'];
    }
    public withLimit(limit: number): ShowFeatureRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowFeatureRequest {
        this['offset'] = offset;
        return this;
    }
}