import { WorkItemSimpleDto } from './WorkItemSimpleDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBranchRelatedWorkItemsResponse extends SdkResponse {
    public body?: Array<WorkItemSimpleDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<WorkItemSimpleDto>): ListBranchRelatedWorkItemsResponse {
        this['body'] = body;
        return this;
    }
}