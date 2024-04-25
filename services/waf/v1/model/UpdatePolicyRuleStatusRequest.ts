import { UpdatePolicyRuleStatusRequestBody } from './UpdatePolicyRuleStatusRequestBody';


export class UpdatePolicyRuleStatusRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    private 'policy_id'?: string;
    public ruletype?: UpdatePolicyRuleStatusRequestRuletypeEnum | string;
    private 'rule_id'?: string;
    public body?: UpdatePolicyRuleStatusRequestBody;
    public constructor(contentType?: string, policyId?: string, ruletype?: string, ruleId?: string) { 
        this['Content-Type'] = contentType;
        this['policy_id'] = policyId;
        this['ruletype'] = ruletype;
        this['rule_id'] = ruleId;
    }
    public withContentType(contentType: string): UpdatePolicyRuleStatusRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdatePolicyRuleStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): UpdatePolicyRuleStatusRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withRuletype(ruletype: UpdatePolicyRuleStatusRequestRuletypeEnum | string): UpdatePolicyRuleStatusRequest {
        this['ruletype'] = ruletype;
        return this;
    }
    public withRuleId(ruleId: string): UpdatePolicyRuleStatusRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withBody(body: UpdatePolicyRuleStatusRequestBody): UpdatePolicyRuleStatusRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatePolicyRuleStatusRequestRuletypeEnum {
    WHITEBLACKIP = 'whiteblackip',
    GEOIP = 'geoip',
    PRIVACY = 'privacy',
    ANTITAMPER = 'antitamper',
    CUSTOM = 'custom',
    IGNORE = 'ignore',
    CC = 'cc'
}
