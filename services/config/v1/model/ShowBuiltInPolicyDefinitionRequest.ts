

export class ShowBuiltInPolicyDefinitionRequest {
    private 'policy_definition_id'?: string;
    private 'X-Language'?: string;
    public constructor(policyDefinitionId?: string) { 
        this['policy_definition_id'] = policyDefinitionId;
    }
    public withPolicyDefinitionId(policyDefinitionId: string): ShowBuiltInPolicyDefinitionRequest {
        this['policy_definition_id'] = policyDefinitionId;
        return this;
    }
    public set policyDefinitionId(policyDefinitionId: string  | undefined) {
        this['policy_definition_id'] = policyDefinitionId;
    }
    public get policyDefinitionId(): string | undefined {
        return this['policy_definition_id'];
    }
    public withXLanguage(xLanguage: string): ShowBuiltInPolicyDefinitionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}