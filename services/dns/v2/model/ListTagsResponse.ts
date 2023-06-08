import { TagValues } from './TagValues';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTagsResponse extends SdkResponse {
    public tags?: Array<TagValues>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagValues>): ListTagsResponse {
        this['tags'] = tags;
        return this;
    }
}