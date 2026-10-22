import { AiGuardPolicyItem } from './AiGuardPolicyItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAiGuardPolicyResponse extends SdkResponse {
    public total?: number;
    public items?: Array<AiGuardPolicyItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAiGuardPolicyResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<AiGuardPolicyItem>): ListAiGuardPolicyResponse {
        this['items'] = items;
        return this;
    }
}