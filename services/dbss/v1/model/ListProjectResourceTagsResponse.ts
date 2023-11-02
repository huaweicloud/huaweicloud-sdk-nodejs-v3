import { ProjectResourceTagResponseTags } from './ProjectResourceTagResponseTags';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectResourceTagsResponse extends SdkResponse {
    public tags?: Array<ProjectResourceTagResponseTags>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ProjectResourceTagResponseTags>): ListProjectResourceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}