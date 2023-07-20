import { UpdateSecurityPolicyRequestBody } from './UpdateSecurityPolicyRequestBody';


export class UpdateSecurityPolicyRequest {
    private 'security_policy_id'?: string;
    public body?: UpdateSecurityPolicyRequestBody;
    public constructor(securityPolicyId?: string) { 
        this['security_policy_id'] = securityPolicyId;
    }
    public withSecurityPolicyId(securityPolicyId: string): UpdateSecurityPolicyRequest {
        this['security_policy_id'] = securityPolicyId;
        return this;
    }
    public set securityPolicyId(securityPolicyId: string  | undefined) {
        this['security_policy_id'] = securityPolicyId;
    }
    public get securityPolicyId(): string | undefined {
        return this['security_policy_id'];
    }
    public withBody(body: UpdateSecurityPolicyRequestBody): UpdateSecurityPolicyRequest {
        this['body'] = body;
        return this;
    }
}