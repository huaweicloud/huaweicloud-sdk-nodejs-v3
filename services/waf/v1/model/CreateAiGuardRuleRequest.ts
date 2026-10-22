import { CreateAiGuardRuleRequestBody } from './CreateAiGuardRuleRequestBody';


export class CreateAiGuardRuleRequest {
    private 'Content-Type'?: string;
    private 'policy_id'?: string;
    private 'detect_type'?: CreateAiGuardRuleRequestDetectTypeEnum | string;
    public body?: CreateAiGuardRuleRequestBody;
    public constructor(contentType?: string, policyId?: string) { 
        this['Content-Type'] = contentType;
        this['policy_id'] = policyId;
    }
    public withContentType(contentType: string): CreateAiGuardRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withPolicyId(policyId: string): CreateAiGuardRuleRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withDetectType(detectType: CreateAiGuardRuleRequestDetectTypeEnum | string): CreateAiGuardRuleRequest {
        this['detect_type'] = detectType;
        return this;
    }
    public set detectType(detectType: CreateAiGuardRuleRequestDetectTypeEnum | string  | undefined) {
        this['detect_type'] = detectType;
    }
    public get detectType(): CreateAiGuardRuleRequestDetectTypeEnum | string | undefined {
        return this['detect_type'];
    }
    public withBody(body: CreateAiGuardRuleRequestBody): CreateAiGuardRuleRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAiGuardRuleRequestDetectTypeEnum {
    TEXT = 'text',
    IMAGE = 'image'
}
