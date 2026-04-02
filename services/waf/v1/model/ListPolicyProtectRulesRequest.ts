

export class ListPolicyProtectRulesRequest {
    public policyids?: string;
    private 'enterprise_project_id'?: string;
    public page?: number;
    public pagesize?: number;
    private 'Content-Type'?: string;
    private 'rule_type'?: ListPolicyProtectRulesRequestRuleTypeEnum | string;
    public constructor(contentType?: string, ruleType?: string) { 
        this['Content-Type'] = contentType;
        this['rule_type'] = ruleType;
    }
    public withPolicyids(policyids: string): ListPolicyProtectRulesRequest {
        this['policyids'] = policyids;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPolicyProtectRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPage(page: number): ListPolicyProtectRulesRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListPolicyProtectRulesRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withContentType(contentType: string): ListPolicyProtectRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withRuleType(ruleType: ListPolicyProtectRulesRequestRuleTypeEnum | string): ListPolicyProtectRulesRequest {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: ListPolicyProtectRulesRequestRuleTypeEnum | string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): ListPolicyProtectRulesRequestRuleTypeEnum | string | undefined {
        return this['rule_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPolicyProtectRulesRequestRuleTypeEnum {
    CC = 'cc',
    CUSTOM = 'custom',
    WHITEBLACKIP = 'whiteblackip',
    PRIVACY = 'privacy',
    IGNORE = 'ignore',
    GEOIP = 'geoip',
    ANTITAMPER = 'antitamper',
    ANTILEAKAGE = 'antileakage',
    IP_REPUTATION = 'ip-reputation'
}
