import { DssPool } from './DssPool';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDssPoolsResponse extends SdkResponse {
    public pools?: Array<DssPool>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withPools(pools: Array<DssPool>): ListDssPoolsResponse {
        this['pools'] = pools;
        return this;
    }
    public withCount(count: number): ListDssPoolsResponse {
        this['count'] = count;
        return this;
    }
}