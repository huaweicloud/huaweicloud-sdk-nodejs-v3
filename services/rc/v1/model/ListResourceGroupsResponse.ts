import { CreateGroupsResponse } from './CreateGroupsResponse';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceGroupsResponse extends SdkResponse {
    private 'resource_groups'?: Array<CreateGroupsResponse>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withResourceGroups(resourceGroups: Array<CreateGroupsResponse>): ListResourceGroupsResponse {
        this['resource_groups'] = resourceGroups;
        return this;
    }
    public set resourceGroups(resourceGroups: Array<CreateGroupsResponse>  | undefined) {
        this['resource_groups'] = resourceGroups;
    }
    public get resourceGroups(): Array<CreateGroupsResponse> | undefined {
        return this['resource_groups'];
    }
    public withPageInfo(pageInfo: PageInfo): ListResourceGroupsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}