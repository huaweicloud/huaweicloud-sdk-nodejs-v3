import { Shares } from './Shares';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSharesResponse extends SdkResponse {
    public shares?: Array<Shares>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withShares(shares: Array<Shares>): ListSharesResponse {
        this['shares'] = shares;
        return this;
    }
    public withCount(count: number): ListSharesResponse {
        this['count'] = count;
        return this;
    }
}