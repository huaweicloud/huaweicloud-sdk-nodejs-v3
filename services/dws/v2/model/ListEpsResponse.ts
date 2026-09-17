import { SysTagResp } from './SysTagResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEpsResponse extends SdkResponse {
    public resources?: Array<SysTagResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<SysTagResp>): ListEpsResponse {
        this['resources'] = resources;
        return this;
    }
    public withCount(count: number): ListEpsResponse {
        this['count'] = count;
        return this;
    }
}