import { PolicyResource } from './PolicyResource';


export class PolicyStateRequestBody {
    private 'policy_resource'?: PolicyResource;
    private 'trigger_type'?: PolicyStateRequestBodyTriggerTypeEnum | string;
    private 'compliance_state'?: PolicyStateRequestBodyComplianceStateEnum | string;
    private 'policy_assignment_id'?: string;
    private 'policy_assignment_name'?: string;
    private 'evaluation_time'?: string;
    private 'evaluation_hash'?: string;
    public constructor(policyResource?: PolicyResource, triggerType?: string, complianceState?: string, policyAssignmentId?: string, evaluationTime?: string, evaluationHash?: string) { 
        this['policy_resource'] = policyResource;
        this['trigger_type'] = triggerType;
        this['compliance_state'] = complianceState;
        this['policy_assignment_id'] = policyAssignmentId;
        this['evaluation_time'] = evaluationTime;
        this['evaluation_hash'] = evaluationHash;
    }
    public withPolicyResource(policyResource: PolicyResource): PolicyStateRequestBody {
        this['policy_resource'] = policyResource;
        return this;
    }
    public set policyResource(policyResource: PolicyResource  | undefined) {
        this['policy_resource'] = policyResource;
    }
    public get policyResource(): PolicyResource | undefined {
        return this['policy_resource'];
    }
    public withTriggerType(triggerType: PolicyStateRequestBodyTriggerTypeEnum | string): PolicyStateRequestBody {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: PolicyStateRequestBodyTriggerTypeEnum | string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): PolicyStateRequestBodyTriggerTypeEnum | string | undefined {
        return this['trigger_type'];
    }
    public withComplianceState(complianceState: PolicyStateRequestBodyComplianceStateEnum | string): PolicyStateRequestBody {
        this['compliance_state'] = complianceState;
        return this;
    }
    public set complianceState(complianceState: PolicyStateRequestBodyComplianceStateEnum | string  | undefined) {
        this['compliance_state'] = complianceState;
    }
    public get complianceState(): PolicyStateRequestBodyComplianceStateEnum | string | undefined {
        return this['compliance_state'];
    }
    public withPolicyAssignmentId(policyAssignmentId: string): PolicyStateRequestBody {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string  | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId(): string | undefined {
        return this['policy_assignment_id'];
    }
    public withPolicyAssignmentName(policyAssignmentName: string): PolicyStateRequestBody {
        this['policy_assignment_name'] = policyAssignmentName;
        return this;
    }
    public set policyAssignmentName(policyAssignmentName: string  | undefined) {
        this['policy_assignment_name'] = policyAssignmentName;
    }
    public get policyAssignmentName(): string | undefined {
        return this['policy_assignment_name'];
    }
    public withEvaluationTime(evaluationTime: string): PolicyStateRequestBody {
        this['evaluation_time'] = evaluationTime;
        return this;
    }
    public set evaluationTime(evaluationTime: string  | undefined) {
        this['evaluation_time'] = evaluationTime;
    }
    public get evaluationTime(): string | undefined {
        return this['evaluation_time'];
    }
    public withEvaluationHash(evaluationHash: string): PolicyStateRequestBody {
        this['evaluation_hash'] = evaluationHash;
        return this;
    }
    public set evaluationHash(evaluationHash: string  | undefined) {
        this['evaluation_hash'] = evaluationHash;
    }
    public get evaluationHash(): string | undefined {
        return this['evaluation_hash'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyStateRequestBodyTriggerTypeEnum {
    RESOURCE = 'resource',
    PERIOD = 'period'
}
/**
    * @export
    * @enum {string}
    */
export enum PolicyStateRequestBodyComplianceStateEnum {
    NONCOMPLIANT = 'NonCompliant',
    COMPLIANT = 'Compliant'
}
