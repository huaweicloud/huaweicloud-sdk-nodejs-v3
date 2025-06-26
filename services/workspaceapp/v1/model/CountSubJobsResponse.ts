import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountSubJobsResponse extends SdkResponse {
    public count?: number;
    public constructor() { 
        super();
    }
    public withCount(count: number): CountSubJobsResponse {
        this['count'] = count;
        return this;
    }
}