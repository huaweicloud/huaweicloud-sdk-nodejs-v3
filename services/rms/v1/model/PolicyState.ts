

export class PolicyState {
    private 'domain_id'?: string;
    private 'region_id'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'resource_provider'?: string;
    private 'resource_type'?: string;
    private 'trigger_type'?: string;
    private 'compliance_state'?: string;
    private 'policy_assignment_id'?: string;
    private 'policy_assignment_name'?: string;
    private 'policy_definition_id'?: string;
    private 'evaluation_time'?: string;
    public constructor() { 
    }
    public withDomainId(domainId: string): PolicyState {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegionId(regionId: string): PolicyState {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withResourceId(resourceId: string): PolicyState {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): PolicyState {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceProvider(resourceProvider: string): PolicyState {
        this['resource_provider'] = resourceProvider;
        return this;
    }
    public set resourceProvider(resourceProvider: string  | undefined) {
        this['resource_provider'] = resourceProvider;
    }
    public get resourceProvider(): string | undefined {
        return this['resource_provider'];
    }
    public withResourceType(resourceType: string): PolicyState {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withTriggerType(triggerType: string): PolicyState {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): string | undefined {
        return this['trigger_type'];
    }
    public withComplianceState(complianceState: string): PolicyState {
        this['compliance_state'] = complianceState;
        return this;
    }
    public set complianceState(complianceState: string  | undefined) {
        this['compliance_state'] = complianceState;
    }
    public get complianceState(): string | undefined {
        return this['compliance_state'];
    }
    public withPolicyAssignmentId(policyAssignmentId: string): PolicyState {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string  | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId(): string | undefined {
        return this['policy_assignment_id'];
    }
    public withPolicyAssignmentName(policyAssignmentName: string): PolicyState {
        this['policy_assignment_name'] = policyAssignmentName;
        return this;
    }
    public set policyAssignmentName(policyAssignmentName: string  | undefined) {
        this['policy_assignment_name'] = policyAssignmentName;
    }
    public get policyAssignmentName(): string | undefined {
        return this['policy_assignment_name'];
    }
    public withPolicyDefinitionId(policyDefinitionId: string): PolicyState {
        this['policy_definition_id'] = policyDefinitionId;
        return this;
    }
    public set policyDefinitionId(policyDefinitionId: string  | undefined) {
        this['policy_definition_id'] = policyDefinitionId;
    }
    public get policyDefinitionId(): string | undefined {
        return this['policy_definition_id'];
    }
    public withEvaluationTime(evaluationTime: string): PolicyState {
        this['evaluation_time'] = evaluationTime;
        return this;
    }
    public set evaluationTime(evaluationTime: string  | undefined) {
        this['evaluation_time'] = evaluationTime;
    }
    public get evaluationTime(): string | undefined {
        return this['evaluation_time'];
    }
}