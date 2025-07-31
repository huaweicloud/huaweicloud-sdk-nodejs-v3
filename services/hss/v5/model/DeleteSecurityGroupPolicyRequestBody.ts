import { DeletedPolicy } from './DeletedPolicy';


export class DeleteSecurityGroupPolicyRequestBody {
    public policies?: Array<DeletedPolicy>;
    public constructor(policies?: Array<DeletedPolicy>) { 
        this['policies'] = policies;
    }
    public withPolicies(policies: Array<DeletedPolicy>): DeleteSecurityGroupPolicyRequestBody {
        this['policies'] = policies;
        return this;
    }
}