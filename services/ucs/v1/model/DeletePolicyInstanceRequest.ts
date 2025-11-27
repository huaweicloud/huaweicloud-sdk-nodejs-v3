

export class DeletePolicyInstanceRequest {
    public policyinstanceid?: string;
    public constructor(policyinstanceid?: string) { 
        this['policyinstanceid'] = policyinstanceid;
    }
    public withPolicyinstanceid(policyinstanceid: string): DeletePolicyInstanceRequest {
        this['policyinstanceid'] = policyinstanceid;
        return this;
    }
}