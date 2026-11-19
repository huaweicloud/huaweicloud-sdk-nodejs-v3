

export class CreateAccessKeyReqBody {
    public description?: string;
    public constructor() { 
    }
    public withDescription(description: string): CreateAccessKeyReqBody {
        this['description'] = description;
        return this;
    }
}