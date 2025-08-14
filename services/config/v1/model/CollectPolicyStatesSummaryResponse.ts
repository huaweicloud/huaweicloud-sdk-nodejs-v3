import { PolicyAssignmentComplianceSummary } from './PolicyAssignmentComplianceSummary';
import { PolicyComplianceSummaryResults } from './PolicyComplianceSummaryResults';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectPolicyStatesSummaryResponse extends SdkResponse {
    public results?: PolicyComplianceSummaryResults;
    private 'policy_assignments'?: Array<PolicyAssignmentComplianceSummary>;
    public constructor() { 
        super();
    }
    public withResults(results: PolicyComplianceSummaryResults): CollectPolicyStatesSummaryResponse {
        this['results'] = results;
        return this;
    }
    public withPolicyAssignments(policyAssignments: Array<PolicyAssignmentComplianceSummary>): CollectPolicyStatesSummaryResponse {
        this['policy_assignments'] = policyAssignments;
        return this;
    }
    public set policyAssignments(policyAssignments: Array<PolicyAssignmentComplianceSummary>  | undefined) {
        this['policy_assignments'] = policyAssignments;
    }
    public get policyAssignments(): Array<PolicyAssignmentComplianceSummary> | undefined {
        return this['policy_assignments'];
    }
}