import { RuleAclResponseData } from './RuleAclResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportRuleAclResponse extends SdkResponse {
    public data?: RuleAclResponseData;
    public constructor() { 
        super();
    }
    public withData(data: RuleAclResponseData): ImportRuleAclResponse {
        this['data'] = data;
        return this;
    }
}