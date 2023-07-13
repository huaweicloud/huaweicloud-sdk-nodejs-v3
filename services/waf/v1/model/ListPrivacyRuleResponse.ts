import { PrivacyResponseBody } from './PrivacyResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrivacyRuleResponse extends SdkResponse {
    public total?: number;
    public items?: Array<PrivacyResponseBody>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListPrivacyRuleResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<PrivacyResponseBody>): ListPrivacyRuleResponse {
        this['items'] = items;
        return this;
    }
}