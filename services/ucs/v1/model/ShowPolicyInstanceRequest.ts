

export class ShowPolicyInstanceRequest {
    public policyinstanceid?: string;
    public constructor(policyinstanceid?: string) { 
        this['policyinstanceid'] = policyinstanceid;
    }
    public withPolicyinstanceid(policyinstanceid: string): ShowPolicyInstanceRequest {
        this['policyinstanceid'] = policyinstanceid;
        return this;
    }
}