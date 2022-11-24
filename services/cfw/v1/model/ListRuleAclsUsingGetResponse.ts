import { RuleAclListResponseDTOData } from './RuleAclListResponseDTOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRuleAclsUsingGetResponse extends SdkResponse {
    public data?: RuleAclListResponseDTOData;
    public constructor() { 
        super();
    }
    public withData(data: RuleAclListResponseDTOData): ListRuleAclsUsingGetResponse {
        this['data'] = data;
        return this;
    }
}