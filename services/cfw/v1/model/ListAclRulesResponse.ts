import { RuleAclListResponseDTOData } from './RuleAclListResponseDTOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAclRulesResponse extends SdkResponse {
    public data?: RuleAclListResponseDTOData;
    public constructor() { 
        super();
    }
    public withData(data: RuleAclListResponseDTOData): ListAclRulesResponse {
        this['data'] = data;
        return this;
    }
}