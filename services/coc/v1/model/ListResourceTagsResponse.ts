import { TagResponse } from './TagResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceTagsResponse extends SdkResponse {
    public tags?: Array<TagResponse>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagResponse>): ListResourceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}