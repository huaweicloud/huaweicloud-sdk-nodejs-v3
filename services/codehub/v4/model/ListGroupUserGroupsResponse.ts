import { ProjectUserGroupDto } from './ProjectUserGroupDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupUserGroupsResponse extends SdkResponse {
    public body?: Array<ProjectUserGroupDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ProjectUserGroupDto>): ListGroupUserGroupsResponse {
        this['body'] = body;
        return this;
    }
}