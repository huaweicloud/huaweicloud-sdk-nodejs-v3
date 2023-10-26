import { ShareInfo } from './ShareInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSharesResponse extends SdkResponse {
    public shares?: Array<ShareInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withShares(shares: Array<ShareInfo>): ListSharesResponse {
        this['shares'] = shares;
        return this;
    }
    public withCount(count: number): ListSharesResponse {
        this['count'] = count;
        return this;
    }
}