

export class ShowL7PolicyRequest {
    private 'l7policy_id': string | undefined;
    public constructor(l7policyId?: any) { 
        this['l7policy_id'] = l7policyId;
    }
    public withL7policyId(l7policyId: string): ShowL7PolicyRequest {
        this['l7policy_id'] = l7policyId;
        return this;
    }
    public set l7policyId(l7policyId: string | undefined) {
        this['l7policy_id'] = l7policyId;
    }
    public get l7policyId() {
        return this['l7policy_id'];
    }
}