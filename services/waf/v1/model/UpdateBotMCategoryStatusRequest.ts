import { UpdateBotMRuleStatusRequestBody } from './UpdateBotMRuleStatusRequestBody';


export class UpdateBotMCategoryStatusRequest {
    private 'policy_id'?: string;
    private 'category_id'?: string;
    private 'Content-Type'?: string;
    public body?: UpdateBotMRuleStatusRequestBody;
    public constructor(policyId?: string, categoryId?: string, contentType?: string) { 
        this['policy_id'] = policyId;
        this['category_id'] = categoryId;
        this['Content-Type'] = contentType;
    }
    public withPolicyId(policyId: string): UpdateBotMCategoryStatusRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withCategoryId(categoryId: string): UpdateBotMCategoryStatusRequest {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: string  | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId(): string | undefined {
        return this['category_id'];
    }
    public withContentType(contentType: string): UpdateBotMCategoryStatusRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: UpdateBotMRuleStatusRequestBody): UpdateBotMCategoryStatusRequest {
        this['body'] = body;
        return this;
    }
}