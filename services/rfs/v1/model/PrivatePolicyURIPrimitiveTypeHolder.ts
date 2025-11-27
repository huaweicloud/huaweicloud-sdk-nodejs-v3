

export class PrivatePolicyURIPrimitiveTypeHolder {
    private 'policy_uri'?: string;
    public constructor() { 
    }
    public withPolicyUri(policyUri: string): PrivatePolicyURIPrimitiveTypeHolder {
        this['policy_uri'] = policyUri;
        return this;
    }
    public set policyUri(policyUri: string  | undefined) {
        this['policy_uri'] = policyUri;
    }
    public get policyUri(): string | undefined {
        return this['policy_uri'];
    }
}