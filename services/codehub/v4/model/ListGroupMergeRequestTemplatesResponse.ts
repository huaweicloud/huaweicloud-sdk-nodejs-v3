import { GroupMergeRequestTemplateDto } from './GroupMergeRequestTemplateDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupMergeRequestTemplatesResponse extends SdkResponse {
    public body?: Array<GroupMergeRequestTemplateDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<GroupMergeRequestTemplateDto>): ListGroupMergeRequestTemplatesResponse {
        this['body'] = body;
        return this;
    }
}