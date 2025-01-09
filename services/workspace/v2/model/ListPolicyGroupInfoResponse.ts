import { PolicyGroupForList } from './PolicyGroupForList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyGroupInfoResponse extends SdkResponse {
    private 'policy_groups'?: Array<PolicyGroupForList>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withPolicyGroups(policyGroups: Array<PolicyGroupForList>): ListPolicyGroupInfoResponse {
        this['policy_groups'] = policyGroups;
        return this;
    }
    public set policyGroups(policyGroups: Array<PolicyGroupForList>  | undefined) {
        this['policy_groups'] = policyGroups;
    }
    public get policyGroups(): Array<PolicyGroupForList> | undefined {
        return this['policy_groups'];
    }
    public withTotalCount(totalCount: number): ListPolicyGroupInfoResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}