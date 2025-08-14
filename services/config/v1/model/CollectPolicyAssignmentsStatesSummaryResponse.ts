import { PolicyAssignment } from './PolicyAssignment';
import { PolicyComplianceSummaryResults } from './PolicyComplianceSummaryResults';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectPolicyAssignmentsStatesSummaryResponse extends SdkResponse {
    private 'compliance_state'?: string;
    private 'policy_assignment'?: PolicyAssignment;
    public results?: PolicyComplianceSummaryResults;
    public constructor() { 
        super();
    }
    public withComplianceState(complianceState: string): CollectPolicyAssignmentsStatesSummaryResponse {
        this['compliance_state'] = complianceState;
        return this;
    }
    public set complianceState(complianceState: string  | undefined) {
        this['compliance_state'] = complianceState;
    }
    public get complianceState(): string | undefined {
        return this['compliance_state'];
    }
    public withPolicyAssignment(policyAssignment: PolicyAssignment): CollectPolicyAssignmentsStatesSummaryResponse {
        this['policy_assignment'] = policyAssignment;
        return this;
    }
    public set policyAssignment(policyAssignment: PolicyAssignment  | undefined) {
        this['policy_assignment'] = policyAssignment;
    }
    public get policyAssignment(): PolicyAssignment | undefined {
        return this['policy_assignment'];
    }
    public withResults(results: PolicyComplianceSummaryResults): CollectPolicyAssignmentsStatesSummaryResponse {
        this['results'] = results;
        return this;
    }
}