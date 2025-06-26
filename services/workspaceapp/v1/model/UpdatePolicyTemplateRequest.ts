import { UpdatePolicyTemplateReq } from './UpdatePolicyTemplateReq';


export class UpdatePolicyTemplateRequest {
    private 'policy_template_id'?: string;
    public body?: UpdatePolicyTemplateReq;
    public constructor(policyTemplateId?: string) { 
        this['policy_template_id'] = policyTemplateId;
    }
    public withPolicyTemplateId(policyTemplateId: string): UpdatePolicyTemplateRequest {
        this['policy_template_id'] = policyTemplateId;
        return this;
    }
    public set policyTemplateId(policyTemplateId: string  | undefined) {
        this['policy_template_id'] = policyTemplateId;
    }
    public get policyTemplateId(): string | undefined {
        return this['policy_template_id'];
    }
    public withBody(body: UpdatePolicyTemplateReq): UpdatePolicyTemplateRequest {
        this['body'] = body;
        return this;
    }
}