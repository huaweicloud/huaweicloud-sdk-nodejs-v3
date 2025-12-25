import { WorkspaceTag } from './WorkspaceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceTagResponse extends SdkResponse {
    public tags?: Array<WorkspaceTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<WorkspaceTag>): ListResourceTagResponse {
        this['tags'] = tags;
        return this;
    }
}