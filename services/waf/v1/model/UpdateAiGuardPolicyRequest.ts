import { UpdateAiGuardPolicyRequestBody } from './UpdateAiGuardPolicyRequestBody';


export class UpdateAiGuardPolicyRequest {
    private 'Content-Type'?: string;
    private 'policy_id'?: string;
    public body?: UpdateAiGuardPolicyRequestBody;
    public constructor(contentType?: string, policyId?: string) { 
        this['Content-Type'] = contentType;
        this['policy_id'] = policyId;
    }
    public withContentType(contentType: string): UpdateAiGuardPolicyRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withPolicyId(policyId: string): UpdateAiGuardPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: UpdateAiGuardPolicyRequestBody): UpdateAiGuardPolicyRequest {
        this['body'] = body;
        return this;
    }
}