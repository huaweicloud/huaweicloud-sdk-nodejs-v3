

export class UpdateAiGuardPolicyRequestBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateAiGuardPolicyRequestBody {
        this['name'] = name;
        return this;
    }
}