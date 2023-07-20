

export class ShowL7PolicyRequest {
    private 'l7policy_id'?: string;
    public constructor(l7policyId?: string) { 
        this['l7policy_id'] = l7policyId;
    }
    public withL7policyId(l7policyId: string): ShowL7PolicyRequest {
        this['l7policy_id'] = l7policyId;
        return this;
    }
    public set l7policyId(l7policyId: string  | undefined) {
        this['l7policy_id'] = l7policyId;
    }
    public get l7policyId(): string | undefined {
        return this['l7policy_id'];
    }
}