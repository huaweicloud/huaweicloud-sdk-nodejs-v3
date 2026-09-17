import { AlertRuleDTO } from './AlertRuleDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAlertPolicyResponse extends SdkResponse {
    public policyId?: string;
    public name?: string;
    public domainId?: string;
    public projectId?: string;
    public isDefault?: boolean;
    public createTime?: number;
    public rules?: Array<AlertRuleDTO>;
    public constructor() { 
        super();
    }
    public withPolicyId(policyId: string): CreateAlertPolicyResponse {
        this['policyId'] = policyId;
        return this;
    }
    public withName(name: string): CreateAlertPolicyResponse {
        this['name'] = name;
        return this;
    }
    public withDomainId(domainId: string): CreateAlertPolicyResponse {
        this['domainId'] = domainId;
        return this;
    }
    public withProjectId(projectId: string): CreateAlertPolicyResponse {
        this['projectId'] = projectId;
        return this;
    }
    public withIsDefault(isDefault: boolean): CreateAlertPolicyResponse {
        this['isDefault'] = isDefault;
        return this;
    }
    public withCreateTime(createTime: number): CreateAlertPolicyResponse {
        this['createTime'] = createTime;
        return this;
    }
    public withRules(rules: Array<AlertRuleDTO>): CreateAlertPolicyResponse {
        this['rules'] = rules;
        return this;
    }
}