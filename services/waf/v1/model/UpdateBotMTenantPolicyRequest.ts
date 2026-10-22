import { UpdateBotMTenantPolicyRequestBody } from './UpdateBotMTenantPolicyRequestBody';


export class UpdateBotMTenantPolicyRequest {
    private 'policy_id'?: string;
    public body?: UpdateBotMTenantPolicyRequestBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): UpdateBotMTenantPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: UpdateBotMTenantPolicyRequestBody): UpdateBotMTenantPolicyRequest {
        this['body'] = body;
        return this;
    }
}