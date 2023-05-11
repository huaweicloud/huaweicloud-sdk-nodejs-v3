import { PolicyResource } from './PolicyResource';


export class PolicyStateRequestBody {
    private 'policy_resource': PolicyResource | undefined;
    private 'trigger_type': PolicyStateRequestBodyTriggerTypeEnum | undefined;
    private 'compliance_state': PolicyStateRequestBodyComplianceStateEnum | undefined;
    private 'policy_assignment_id': string | undefined;
    private 'policy_assignment_name'?: string | undefined;
    private 'evaluation_time': string | undefined;
    private 'evaluation_hash': string | undefined;
    public constructor(policyResource?: any, triggerType?: any, complianceState?: any, policyAssignmentId?: any, evaluationTime?: any, evaluationHash?: any) { 
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
    public set policyResource(policyResource: PolicyResource | undefined) {
        this['policy_resource'] = policyResource;
    }
    public get policyResource() {
        return this['policy_resource'];
    }
    public withTriggerType(triggerType: PolicyStateRequestBodyTriggerTypeEnum): PolicyStateRequestBody {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: PolicyStateRequestBodyTriggerTypeEnum | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType() {
        return this['trigger_type'];
    }
    public withComplianceState(complianceState: PolicyStateRequestBodyComplianceStateEnum): PolicyStateRequestBody {
        this['compliance_state'] = complianceState;
        return this;
    }
    public set complianceState(complianceState: PolicyStateRequestBodyComplianceStateEnum | undefined) {
        this['compliance_state'] = complianceState;
    }
    public get complianceState() {
        return this['compliance_state'];
    }
    public withPolicyAssignmentId(policyAssignmentId: string): PolicyStateRequestBody {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId() {
        return this['policy_assignment_id'];
    }
    public withPolicyAssignmentName(policyAssignmentName: string): PolicyStateRequestBody {
        this['policy_assignment_name'] = policyAssignmentName;
        return this;
    }
    public set policyAssignmentName(policyAssignmentName: string | undefined) {
        this['policy_assignment_name'] = policyAssignmentName;
    }
    public get policyAssignmentName() {
        return this['policy_assignment_name'];
    }
    public withEvaluationTime(evaluationTime: string): PolicyStateRequestBody {
        this['evaluation_time'] = evaluationTime;
        return this;
    }
    public set evaluationTime(evaluationTime: string | undefined) {
        this['evaluation_time'] = evaluationTime;
    }
    public get evaluationTime() {
        return this['evaluation_time'];
    }
    public withEvaluationHash(evaluationHash: string): PolicyStateRequestBody {
        this['evaluation_hash'] = evaluationHash;
        return this;
    }
    public set evaluationHash(evaluationHash: string | undefined) {
        this['evaluation_hash'] = evaluationHash;
    }
    public get evaluationHash() {
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
