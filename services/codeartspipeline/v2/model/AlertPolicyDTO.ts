import { AlertRuleDTO } from './AlertRuleDTO';


export class AlertPolicyDTO {
    public policyId?: string;
    public name?: string;
    public domainId?: string;
    public projectId?: string;
    public isDefault?: boolean;
    public createTime?: number;
    public rules?: Array<AlertRuleDTO>;
    public constructor() { 
    }
    public withPolicyId(policyId: string): AlertPolicyDTO {
        this['policyId'] = policyId;
        return this;
    }
    public withName(name: string): AlertPolicyDTO {
        this['name'] = name;
        return this;
    }
    public withDomainId(domainId: string): AlertPolicyDTO {
        this['domainId'] = domainId;
        return this;
    }
    public withProjectId(projectId: string): AlertPolicyDTO {
        this['projectId'] = projectId;
        return this;
    }
    public withIsDefault(isDefault: boolean): AlertPolicyDTO {
        this['isDefault'] = isDefault;
        return this;
    }
    public withCreateTime(createTime: number): AlertPolicyDTO {
        this['createTime'] = createTime;
        return this;
    }
    public withRules(rules: Array<AlertRuleDTO>): AlertPolicyDTO {
        this['rules'] = rules;
        return this;
    }
}