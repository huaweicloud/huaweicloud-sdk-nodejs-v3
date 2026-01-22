

export class ListConfigFeatures {
    public featureId?: string;
    public status?: number;
    public description?: string;
    public constructor() { 
    }
    public withFeatureId(featureId: string): ListConfigFeatures {
        this['featureId'] = featureId;
        return this;
    }
    public withStatus(status: number): ListConfigFeatures {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): ListConfigFeatures {
        this['description'] = description;
        return this;
    }
}