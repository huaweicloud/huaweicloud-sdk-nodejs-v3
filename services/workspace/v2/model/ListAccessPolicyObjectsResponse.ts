import { AccessPolicyObject } from './AccessPolicyObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccessPolicyObjectsResponse extends SdkResponse {
    private 'policy_objects_list'?: Array<AccessPolicyObject>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withPolicyObjectsList(policyObjectsList: Array<AccessPolicyObject>): ListAccessPolicyObjectsResponse {
        this['policy_objects_list'] = policyObjectsList;
        return this;
    }
    public set policyObjectsList(policyObjectsList: Array<AccessPolicyObject>  | undefined) {
        this['policy_objects_list'] = policyObjectsList;
    }
    public get policyObjectsList(): Array<AccessPolicyObject> | undefined {
        return this['policy_objects_list'];
    }
    public withTotal(total: number): ListAccessPolicyObjectsResponse {
        this['total'] = total;
        return this;
    }
}