import { TagResp } from './TagResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublicipTagsResponse extends SdkResponse {
    public tags?: Array<TagResp>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagResp>): ListPublicipTagsResponse {
        this['tags'] = tags;
        return this;
    }
}