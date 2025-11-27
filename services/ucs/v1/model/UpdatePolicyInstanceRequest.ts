import { UCSConstraintRequest } from './UCSConstraintRequest';


export class UpdatePolicyInstanceRequest {
    public policyinstanceid?: string;
    public body?: UCSConstraintRequest;
    public constructor(policyinstanceid?: string) { 
        this['policyinstanceid'] = policyinstanceid;
    }
    public withPolicyinstanceid(policyinstanceid: string): UpdatePolicyInstanceRequest {
        this['policyinstanceid'] = policyinstanceid;
        return this;
    }
    public withBody(body: UCSConstraintRequest): UpdatePolicyInstanceRequest {
        this['body'] = body;
        return this;
    }
}