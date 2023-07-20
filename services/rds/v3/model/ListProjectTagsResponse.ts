import { ProjectTagInfoResponse } from './ProjectTagInfoResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectTagsResponse extends SdkResponse {
    public tags?: Array<ProjectTagInfoResponse>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ProjectTagInfoResponse>): ListProjectTagsResponse {
        this['tags'] = tags;
        return this;
    }
}