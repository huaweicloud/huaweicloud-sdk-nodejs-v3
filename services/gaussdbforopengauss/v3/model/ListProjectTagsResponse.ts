import { TagsResult } from './TagsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectTagsResponse extends SdkResponse {
    public tags?: Array<TagsResult>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagsResult>): ListProjectTagsResponse {
        this['tags'] = tags;
        return this;
    }
}