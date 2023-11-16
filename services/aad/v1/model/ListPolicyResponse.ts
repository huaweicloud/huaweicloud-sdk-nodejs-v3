import { PolicyResponse } from './PolicyResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyResponse extends SdkResponse {
    public total?: number;
    public items?: Array<PolicyResponse>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListPolicyResponse {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<PolicyResponse>): ListPolicyResponse {
        this['items'] = items;
        return this;
    }
}