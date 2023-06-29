

export class AggregatePolicyAssignmentsFilters {
    private 'account_id'?: string | undefined;
    private 'compliance_state'?: AggregatePolicyAssignmentsFiltersComplianceStateEnum | undefined;
    private 'policy_assignment_name'?: string | undefined;
    public constructor() { 
    }
    public withAccountId(accountId: string): AggregatePolicyAssignmentsFilters {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId() {
        return this['account_id'];
    }
    public withComplianceState(complianceState: AggregatePolicyAssignmentsFiltersComplianceStateEnum): AggregatePolicyAssignmentsFilters {
        this['compliance_state'] = complianceState;
        return this;
    }
    public set complianceState(complianceState: AggregatePolicyAssignmentsFiltersComplianceStateEnum | undefined) {
        this['compliance_state'] = complianceState;
    }
    public get complianceState() {
        return this['compliance_state'];
    }
    public withPolicyAssignmentName(policyAssignmentName: string): AggregatePolicyAssignmentsFilters {
        this['policy_assignment_name'] = policyAssignmentName;
        return this;
    }
    public set policyAssignmentName(policyAssignmentName: string | undefined) {
        this['policy_assignment_name'] = policyAssignmentName;
    }
    public get policyAssignmentName() {
        return this['policy_assignment_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AggregatePolicyAssignmentsFiltersComplianceStateEnum {
    NONCOMPLIANT = 'NonCompliant',
    COMPLIANT = 'Compliant',
    NOTSTARTED = 'NotStarted'
}
