import { AccessPolicyObjectInfo } from './AccessPolicyObjectInfo';


export class UpdateAccessPolicyObjectsReq {
    private 'policy_objects_list'?: Array<AccessPolicyObjectInfo>;
    public constructor() { 
    }
    public withPolicyObjectsList(policyObjectsList: Array<AccessPolicyObjectInfo>): UpdateAccessPolicyObjectsReq {
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