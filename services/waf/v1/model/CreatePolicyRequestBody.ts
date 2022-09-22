

export class CreatePolicyRequestBody {
    public name: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): CreatePolicyRequestBody {
        this['name'] = name;
        return this;
    }
}