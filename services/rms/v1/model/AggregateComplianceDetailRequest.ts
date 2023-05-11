

export class AggregateComplianceDetailRequest {
    private 'aggregator_id': string | undefined;
    private 'account_id': string | undefined;
    private 'compliance_state'?: AggregateComplianceDetailRequestComplianceStateEnum | undefined;
    private 'policy_assignment_name': string | undefined;
    private 'resource_name'?: string | undefined;
    private 'resource_id'?: string | undefined;
    public constructor(aggregatorId?: any, accountId?: any, policyAssignmentName?: any) { 
        this['aggregator_id'] = aggregatorId;
        this['account_id'] = accountId;
        this['policy_assignment_name'] = policyAssignmentName;
    }
    public withAggregatorId(aggregatorId: string): AggregateComplianceDetailRequest {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId() {
        return this['aggregator_id'];
    }
    public withAccountId(accountId: string): AggregateComplianceDetailRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId() {
        return this['account_id'];
    }
    public withComplianceState(complianceState: AggregateComplianceDetailRequestComplianceStateEnum): AggregateComplianceDetailRequest {
        this['compliance_state'] = complianceState;
        return this;
    }
    public set complianceState(complianceState: AggregateComplianceDetailRequestComplianceStateEnum | undefined) {
        this['compliance_state'] = complianceState;
    }
    public get complianceState() {
        return this['compliance_state'];
    }
    public withPolicyAssignmentName(policyAssignmentName: string): AggregateComplianceDetailRequest {
        this['policy_assignment_name'] = policyAssignmentName;
        return this;
    }
    public set policyAssignmentName(policyAssignmentName: string | undefined) {
        this['policy_assignment_name'] = policyAssignmentName;
    }
    public get policyAssignmentName() {
        return this['policy_assignment_name'];
    }
    public withResourceName(resourceName: string): AggregateComplianceDetailRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withResourceId(resourceId: string): AggregateComplianceDetailRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AggregateComplianceDetailRequestComplianceStateEnum {
    NONCOMPLIANT = 'NonCompliant',
    COMPLIANT = 'Compliant'
}
