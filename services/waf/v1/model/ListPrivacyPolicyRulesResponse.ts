import { PrivacyResponseBody } from './PrivacyResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrivacyPolicyRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<PrivacyResponseBody>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListPrivacyPolicyRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<PrivacyResponseBody>): ListPrivacyPolicyRulesResponse {
        this['items'] = items;
        return this;
    }
}