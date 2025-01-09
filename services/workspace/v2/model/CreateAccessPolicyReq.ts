import { AccessPolicyInfo } from './AccessPolicyInfo';
import { AccessPolicyObjectInfo } from './AccessPolicyObjectInfo';


export class CreateAccessPolicyReq {
    public policy?: AccessPolicyInfo;
    private 'policy_objects_list'?: Array<AccessPolicyObjectInfo>;
    public constructor(policy?: AccessPolicyInfo) { 
        this['policy'] = policy;
    }
    public withPolicy(policy: AccessPolicyInfo): CreateAccessPolicyReq {
        this['policy'] = policy;
        return this;
    }
    public withPolicyObjectsList(policyObjectsList: Array<AccessPolicyObjectInfo>): CreateAccessPolicyReq {
        this['policy_objects_list'] = policyObjectsList;
        return this;
    }
    public set policyObjectsList(policyObjectsList: Array<AccessPolicyObjectInfo>  | undefined) {
        this['policy_objects_list'] = policyObjectsList;
    }
    public get policyObjectsList(): Array<AccessPolicyObjectInfo> | undefined {
        return this['policy_objects_list'];
    }
}