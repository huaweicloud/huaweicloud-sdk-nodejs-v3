import { PageResp } from './PageResp';
import { PolicyStatement } from './PolicyStatement';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStoragePolicyStatementResponse extends SdkResponse {
    public count?: number;
    public items?: Array<PolicyStatement>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListStoragePolicyStatementResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<PolicyStatement>): ListStoragePolicyStatementResponse {
        this['items'] = items;
        return this;
    }
}