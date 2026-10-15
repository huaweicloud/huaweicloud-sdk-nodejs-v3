

export class UpdatePolicyReqBody {
    public description?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdatePolicyReqBody {
        this['description'] = description;
        return this;
    }
}