
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateAclRuleActionsResponse extends SdkResponse {
    public data?: Array<string>;
    public constructor() { 
        super();
    }
    public withData(data: Array<string>): BatchUpdateAclRuleActionsResponse {
        this['data'] = data;
        return this;
    }
}