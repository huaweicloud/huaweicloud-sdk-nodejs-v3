import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceTagsResponse extends SdkResponse {
    public tags?: Array<Tag>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<Tag>): ShowResourceTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withCount(count: number): ShowResourceTagsResponse {
        this['count'] = count;
        return this;
    }
}