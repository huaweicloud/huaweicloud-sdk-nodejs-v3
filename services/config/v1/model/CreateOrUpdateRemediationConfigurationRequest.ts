import { RemediationConfigurationRequestBody } from './RemediationConfigurationRequestBody';


export class CreateOrUpdateRemediationConfigurationRequest {
    private 'policy_assignment_id'?: string;
    public body?: RemediationConfigurationRequestBody;
    public constructor(policyAssignmentId?: string) { 
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public withPolicyAssignmentId(policyAssignmentId: string): CreateOrUpdateRemediationConfigurationRequest {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string  | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId(): string | undefined {
        return this['policy_assignment_id'];
    }
    public withBody(body: RemediationConfigurationRequestBody): CreateOrUpdateRemediationConfigurationRequest {
        this['body'] = body;
        return this;
    }
}