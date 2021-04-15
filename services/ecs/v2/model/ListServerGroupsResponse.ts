import { ListServerGroupsPageInfoResult } from './ListServerGroupsPageInfoResult';
import { ListServerGroupsResult } from './ListServerGroupsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServerGroupsResponse extends SdkResponse {
    private 'server_groups'?: Array<ListServerGroupsResult> | undefined;
    private 'page_info'?: ListServerGroupsPageInfoResult | undefined;
    public constructor() { 
        super();
    }
    public withServerGroups(serverGroups: Array<ListServerGroupsResult>): ListServerGroupsResponse {
        this['server_groups'] = serverGroups;
        return this;
    }
    public set serverGroups(serverGroups: Array<ListServerGroupsResult> | undefined) {
        this['server_groups'] = serverGroups;
    }
    public get serverGroups() {
        return this['server_groups'];
    }
    public withPageInfo(pageInfo: ListServerGroupsPageInfoResult): ListServerGroupsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListServerGroupsPageInfoResult | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}