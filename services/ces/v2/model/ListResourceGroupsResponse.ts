import { OneResourceGroupResp } from './OneResourceGroupResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceGroupsResponse extends SdkResponse {
    public count?: number;
    private 'resource_groups'?: Array<OneResourceGroupResp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListResourceGroupsResponse {
        this['count'] = count;
        return this;
    }
    public withResourceGroups(resourceGroups: Array<OneResourceGroupResp>): ListResourceGroupsResponse {
        this['resource_groups'] = resourceGroups;
        return this;
    }
    public set resourceGroups(resourceGroups: Array<OneResourceGroupResp>  | undefined) {
        this['resource_groups'] = resourceGroups;
    }
    public get resourceGroups(): Array<OneResourceGroupResp> | undefined {
        return this['resource_groups'];
    }
}