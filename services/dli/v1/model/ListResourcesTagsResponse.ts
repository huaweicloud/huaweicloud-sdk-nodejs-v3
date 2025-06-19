import { TagWithValues } from './TagWithValues';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourcesTagsResponse extends SdkResponse {
    public tags?: Array<TagWithValues>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagWithValues>): ListResourcesTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withCount(count: number): ListResourcesTagsResponse {
        this['count'] = count;
        return this;
    }
}