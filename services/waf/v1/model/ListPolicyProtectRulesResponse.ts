
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyProtectRulesResponse extends SdkResponse {
    public total?: number;
    public items?: Array<object>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListPolicyProtectRulesResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<object>): ListPolicyProtectRulesResponse {
        this['items'] = items;
        return this;
    }
}