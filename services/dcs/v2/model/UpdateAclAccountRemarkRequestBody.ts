

export class UpdateAclAccountRemarkRequestBody {
    public description?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdateAclAccountRemarkRequestBody {
        this['description'] = description;
        return this;
    }
}