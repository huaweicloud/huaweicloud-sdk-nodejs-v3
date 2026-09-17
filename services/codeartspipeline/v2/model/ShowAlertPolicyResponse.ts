import { AlertRuleDTO } from './AlertRuleDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAlertPolicyResponse extends SdkResponse {
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
    public withPolicyId(policyId: string): ShowAlertPolicyResponse {
        this['policyId'] = policyId;
        return this;
    }
    public withName(name: string): ShowAlertPolicyResponse {
        this['name'] = name;
        return this;
    }
    public withDomainId(domainId: string): ShowAlertPolicyResponse {
        this['domainId'] = domainId;
        return this;
    }
    public withProjectId(projectId: string): ShowAlertPolicyResponse {
        this['projectId'] = projectId;
        return this;
    }
    public withIsDefault(isDefault: boolean): ShowAlertPolicyResponse {
        this['isDefault'] = isDefault;
        return this;
    }
    public withCreateTime(createTime: number): ShowAlertPolicyResponse {
        this['createTime'] = createTime;
        return this;
    }
    public withRules(rules: Array<AlertRuleDTO>): ShowAlertPolicyResponse {
        this['rules'] = rules;
        return this;
    }
}