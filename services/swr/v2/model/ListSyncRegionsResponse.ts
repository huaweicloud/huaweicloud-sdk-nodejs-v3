import { RegionInfo } from './RegionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSyncRegionsResponse extends SdkResponse {
    public body?: Array<RegionInfo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RegionInfo>): ListSyncRegionsResponse {
        this['body'] = body;
        return this;
    }
}