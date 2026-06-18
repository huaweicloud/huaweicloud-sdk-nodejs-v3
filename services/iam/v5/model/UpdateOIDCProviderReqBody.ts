

export class UpdateOIDCProviderReqBody {
    public description?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdateOIDCProviderReqBody {
        this['description'] = description;
        return this;
    }
}