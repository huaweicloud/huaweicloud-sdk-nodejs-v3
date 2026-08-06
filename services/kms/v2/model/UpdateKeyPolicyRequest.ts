import { UpdateKeyPolicyRequestBody } from './UpdateKeyPolicyRequestBody';


export class UpdateKeyPolicyRequest {
    private 'policy_id'?: string;
    public body?: UpdateKeyPolicyRequestBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): UpdateKeyPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: UpdateKeyPolicyRequestBody): UpdateKeyPolicyRequest {
        this['body'] = body;
        return this;
    }
}