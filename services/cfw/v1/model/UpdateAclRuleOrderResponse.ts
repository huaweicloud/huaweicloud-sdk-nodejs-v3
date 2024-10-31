import { OrderRuleId } from './OrderRuleId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAclRuleOrderResponse extends SdkResponse {
    public data?: OrderRuleId;
    public constructor() { 
        super();
    }
    public withData(data: OrderRuleId): UpdateAclRuleOrderResponse {
        this['data'] = data;
        return this;
    }
}