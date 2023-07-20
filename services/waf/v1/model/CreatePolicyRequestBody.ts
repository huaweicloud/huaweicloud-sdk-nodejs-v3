

export class CreatePolicyRequestBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreatePolicyRequestBody {
        this['name'] = name;
        return this;
    }
}