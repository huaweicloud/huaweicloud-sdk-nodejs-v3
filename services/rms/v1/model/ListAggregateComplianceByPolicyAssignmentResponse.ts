import { AggregatePolicyAssignments } from './AggregatePolicyAssignments';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAggregateComplianceByPolicyAssignmentResponse extends SdkResponse {
    private 'aggregate_policy_assignments'?: Array<AggregatePolicyAssignments> | undefined;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withAggregatePolicyAssignments(aggregatePolicyAssignments: Array<AggregatePolicyAssignments>): ListAggregateComplianceByPolicyAssignmentResponse {
        this['aggregate_policy_assignments'] = aggregatePolicyAssignments;
        return this;
    }
    public set aggregatePolicyAssignments(aggregatePolicyAssignments: Array<AggregatePolicyAssignments> | undefined) {
        this['aggregate_policy_assignments'] = aggregatePolicyAssignments;
    }
    public get aggregatePolicyAssignments() {
        return this['aggregate_policy_assignments'];
    }
    public withPageInfo(pageInfo: PageInfo): ListAggregateComplianceByPolicyAssignmentResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}