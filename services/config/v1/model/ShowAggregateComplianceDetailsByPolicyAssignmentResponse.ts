import { PageInfo } from './PageInfo';
import { PolicyState } from './PolicyState';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAggregateComplianceDetailsByPolicyAssignmentResponse extends SdkResponse {
    private 'policy_states'?: Array<PolicyState>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withPolicyStates(policyStates: Array<PolicyState>): ShowAggregateComplianceDetailsByPolicyAssignmentResponse {
        this['policy_states'] = policyStates;
        return this;
    }
    public set policyStates(policyStates: Array<PolicyState>  | undefined) {
        this['policy_states'] = policyStates;
    }
    public get policyStates(): Array<PolicyState> | undefined {
        return this['policy_states'];
    }
    public withPageInfo(pageInfo: PageInfo): ShowAggregateComplianceDetailsByPolicyAssignmentResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}