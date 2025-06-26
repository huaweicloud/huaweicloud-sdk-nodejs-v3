import { PageResp } from './PageResp';
import { ServerGroupDto } from './ServerGroupDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTenantServerGroupsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<ServerGroupDto>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListTenantServerGroupsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<ServerGroupDto>): ListTenantServerGroupsResponse {
        this['items'] = items;
        return this;
    }
}