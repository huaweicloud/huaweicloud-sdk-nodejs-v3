

export class CreateAccessCodeRequestBody {
    public type?: string;
    public constructor() { 
    }
    public withType(type: string): CreateAccessCodeRequestBody {
        this['type'] = type;
        return this;
    }
}