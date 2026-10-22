import { CreateAiguardTemplateRuleRequestBody } from './CreateAiguardTemplateRuleRequestBody';


export class CreateAiguardTemplateRuleRequest {
    private 'Content-Type'?: string;
    private 'policy_id'?: string;
    private 'X-Language'?: string;
    public body?: CreateAiguardTemplateRuleRequestBody;
    public constructor(contentType?: string, policyId?: string) { 
        this['Content-Type'] = contentType;
        this['policy_id'] = policyId;
    }
    public withContentType(contentType: string): CreateAiguardTemplateRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withPolicyId(policyId: string): CreateAiguardTemplateRuleRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withXLanguage(xLanguage: string): CreateAiguardTemplateRuleRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateAiguardTemplateRuleRequestBody): CreateAiguardTemplateRuleRequest {
        this['body'] = body;
        return this;
    }
}