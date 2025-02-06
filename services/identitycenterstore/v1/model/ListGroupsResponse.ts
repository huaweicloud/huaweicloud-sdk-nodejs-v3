import { GroupDto } from './GroupDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupsResponse extends SdkResponse {
    public groups?: Array<GroupDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withGroups(groups: Array<GroupDto>): ListGroupsResponse {
        this['groups'] = groups;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDto): ListGroupsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}