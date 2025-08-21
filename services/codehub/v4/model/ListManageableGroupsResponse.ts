import { ManageableGroupDto } from './ManageableGroupDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListManageableGroupsResponse extends SdkResponse {
    public body?: Array<ManageableGroupDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ManageableGroupDto>): ListManageableGroupsResponse {
        this['body'] = body;
        return this;
    }
}