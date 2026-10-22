

export class ListAiGuardRuleRequest {
    private 'Content-Type'?: string;
    private 'policy_id'?: string;
    public limit?: number;
    public offset?: number;
    public name?: string;
    public status?: string;
    private 'detect_opt'?: string;
    private 'detect_type'?: ListAiGuardRuleRequestDetectTypeEnum | string;
    private 'with_template'?: boolean;
    public constructor(contentType?: string, policyId?: string) { 
        this['Content-Type'] = contentType;
        this['policy_id'] = policyId;
    }
    public withContentType(contentType: string): ListAiGuardRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withPolicyId(policyId: string): ListAiGuardRuleRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withLimit(limit: number): ListAiGuardRuleRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAiGuardRuleRequest {
        this['offset'] = offset;
        return this;
    }
    public withName(name: string): ListAiGuardRuleRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListAiGuardRuleRequest {
        this['status'] = status;
        return this;
    }
    public withDetectOpt(detectOpt: string): ListAiGuardRuleRequest {
        this['detect_opt'] = detectOpt;
        return this;
    }
    public set detectOpt(detectOpt: string  | undefined) {
        this['detect_opt'] = detectOpt;
    }
    public get detectOpt(): string | undefined {
        return this['detect_opt'];
    }
    public withDetectType(detectType: ListAiGuardRuleRequestDetectTypeEnum | string): ListAiGuardRuleRequest {
        this['detect_type'] = detectType;
        return this;
    }
    public set detectType(detectType: ListAiGuardRuleRequestDetectTypeEnum | string  | undefined) {
        this['detect_type'] = detectType;
    }
    public get detectType(): ListAiGuardRuleRequestDetectTypeEnum | string | undefined {
        return this['detect_type'];
    }
    public withWithTemplate(withTemplate: boolean): ListAiGuardRuleRequest {
        this['with_template'] = withTemplate;
        return this;
    }
    public set withTemplate(withTemplate: boolean  | undefined) {
        this['with_template'] = withTemplate;
    }
    public get withTemplate(): boolean | undefined {
        return this['with_template'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAiGuardRuleRequestDetectTypeEnum {
    TEXT = 'text',
    IMAGE = 'image'
}
