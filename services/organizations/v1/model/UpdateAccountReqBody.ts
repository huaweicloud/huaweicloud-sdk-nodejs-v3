

export class UpdateAccountReqBody {
    public description?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdateAccountReqBody {
        this['description'] = description;
        return this;
    }
}