

export class UpdateClusterGroupDescriptionRequest {
    public description?: string;
    public constructor(description?: string) { 
        this['description'] = description;
    }
    public withDescription(description: string): UpdateClusterGroupDescriptionRequest {
        this['description'] = description;
        return this;
    }
}