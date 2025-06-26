import { PageResp } from './PageResp';
import { ServerGroup } from './ServerGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServerGroupsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<ServerGroup>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListServerGroupsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<ServerGroup>): ListServerGroupsResponse {
        this['items'] = items;
        return this;
    }
}