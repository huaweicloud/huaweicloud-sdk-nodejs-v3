

export class UpdateKeyPolicyRequestBody {
    public policy?: string;
    public description?: string;
    public constructor(policy?: string) { 
        this['policy'] = policy;
    }
    public withPolicy(policy: string): UpdateKeyPolicyRequestBody {
        this['policy'] = policy;
        return this;
    }
    public withDescription(description: string): UpdateKeyPolicyRequestBody {
        this['description'] = description;
        return this;
    }
}