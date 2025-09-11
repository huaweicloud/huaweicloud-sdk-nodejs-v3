import { TagResp } from './TagResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCesTargetProjectTagsResponse extends SdkResponse {
    public tags?: Array<TagResp>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagResp>): ListCesTargetProjectTagsResponse {
        this['tags'] = tags;
        return this;
    }
}