import { BatchUpdateAiGuardRuleStatusRequestBody } from './BatchUpdateAiGuardRuleStatusRequestBody';


export class BatchUpdateAiGuardRuleStatusRequest {
    private 'Content-Type'?: string;
    private 'policy_id'?: string;
    public body?: BatchUpdateAiGuardRuleStatusRequestBody;
    public constructor(contentType?: string, policyId?: string) { 
        this['Content-Type'] = contentType;
        this['policy_id'] = policyId;
    }
    public withContentType(contentType: string): BatchUpdateAiGuardRuleStatusRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withPolicyId(policyId: string): BatchUpdateAiGuardRuleStatusRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: BatchUpdateAiGuardRuleStatusRequestBody): BatchUpdateAiGuardRuleStatusRequest {
        this['body'] = body;
        return this;
    }
}