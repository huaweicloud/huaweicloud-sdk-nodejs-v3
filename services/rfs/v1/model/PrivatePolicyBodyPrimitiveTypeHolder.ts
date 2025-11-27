

export class PrivatePolicyBodyPrimitiveTypeHolder {
    private 'policy_body'?: string;
    public constructor() { 
    }
    public withPolicyBody(policyBody: string): PrivatePolicyBodyPrimitiveTypeHolder {
        this['policy_body'] = policyBody;
        return this;
    }
    public set policyBody(policyBody: string  | undefined) {
        this['policy_body'] = policyBody;
    }
    public get policyBody(): string | undefined {
        return this['policy_body'];
    }
}