

export class CreateAiGuardPolicyRequestBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateAiGuardPolicyRequestBody {
        this['name'] = name;
        return this;
    }
}