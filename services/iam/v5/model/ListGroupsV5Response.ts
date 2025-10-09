import { Group } from './Group';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupsV5Response extends SdkResponse {
    public groups?: Array<Group>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withGroups(groups: Array<Group>): ListGroupsV5Response {
        this['groups'] = groups;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListGroupsV5Response {
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