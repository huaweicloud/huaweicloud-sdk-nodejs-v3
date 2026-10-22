import { BatchUpdateBotMRuleActionRequestBody } from './BatchUpdateBotMRuleActionRequestBody';


export class BatchUpdateBotMRuleActionRequest {
    private 'policy_id'?: string;
    private 'Content-Type'?: string;
    public body?: BatchUpdateBotMRuleActionRequestBody;
    public constructor(policyId?: string, contentType?: string) { 
        this['policy_id'] = policyId;
        this['Content-Type'] = contentType;
    }
    public withPolicyId(policyId: string): BatchUpdateBotMRuleActionRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withContentType(contentType: string): BatchUpdateBotMRuleActionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchUpdateBotMRuleActionRequestBody): BatchUpdateBotMRuleActionRequest {
        this['body'] = body;
        return this;
    }
}