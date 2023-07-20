

export class AggregateComplianceDetailRequest {
    private 'aggregator_id'?: string;
    private 'account_id'?: string;
    private 'compliance_state'?: AggregateComplianceDetailRequestComplianceStateEnum | string;
    private 'policy_assignment_name'?: string;
    private 'resource_name'?: string;
    private 'resource_id'?: string;
    public constructor(aggregatorId?: string, accountId?: string, policyAssignmentName?: string) { 
        this['aggregator_id'] = aggregatorId;
        this['account_id'] = accountId;
        this['policy_assignment_name'] = policyAssignmentName;
    }
    public withAggregatorId(aggregatorId: string): AggregateComplianceDetailRequest {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string  | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId(): string | undefined {
        return this['aggregator_id'];
    }
    public withAccountId(accountId: string): AggregateComplianceDetailRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withComplianceState(complianceState: AggregateComplianceDetailRequestComplianceStateEnum | string): AggregateComplianceDetailRequest {
        this['compliance_state'] = complianceState;
        return this;
    }
    public set complianceState(complianceState: AggregateComplianceDetailRequestComplianceStateEnum | string  | undefined) {
        this['compliance_state'] = complianceState;
    }
    public get complianceState(): AggregateComplianceDetailRequestComplianceStateEnum | string | undefined {
        return this['compliance_state'];
    }
    public withPolicyAssignmentName(policyAssignmentName: string): AggregateComplianceDetailRequest {
        this['policy_assignment_name'] = policyAssignmentName;
        return this;
    }
    public set policyAssignmentName(policyAssignmentName: string  | undefined) {
        this['policy_assignment_name'] = policyAssignmentName;
    }
    public get policyAssignmentName(): string | undefined {
        return this['policy_assignment_name'];
    }
    public withResourceName(resourceName: string): AggregateComplianceDetailRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceId(resourceId: string): AggregateComplianceDetailRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
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
