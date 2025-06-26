import { PageResp } from './PageResp';
import { PolicyGroup } from './PolicyGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyGroupDetailInfoResponse extends SdkResponse {
    public count?: number;
    public items?: Array<PolicyGroup>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListPolicyGroupDetailInfoResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<PolicyGroup>): ListPolicyGroupDetailInfoResponse {
        this['items'] = items;
        return this;
    }
}