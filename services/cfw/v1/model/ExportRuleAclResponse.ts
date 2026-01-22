import { RuleAclResponseData } from './RuleAclResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportRuleAclResponse extends SdkResponse {
    public data?: RuleAclResponseData;
    public constructor() { 
        super();
    }
    public withData(data: RuleAclResponseData): ExportRuleAclResponse {
        this['data'] = data;
        return this;
    }
}