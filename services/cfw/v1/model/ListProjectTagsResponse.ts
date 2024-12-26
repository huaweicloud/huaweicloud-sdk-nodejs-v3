import { TagValue } from './TagValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectTagsResponse extends SdkResponse {
    public tags?: Array<TagValue>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagValue>): ListProjectTagsResponse {
        this['tags'] = tags;
        return this;
    }
}