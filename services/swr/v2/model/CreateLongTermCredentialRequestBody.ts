

export class CreateLongTermCredentialRequestBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateLongTermCredentialRequestBody {
        this['name'] = name;
        return this;
    }
}