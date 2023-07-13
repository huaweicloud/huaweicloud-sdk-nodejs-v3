import { TagEntity } from './TagEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRocketmqTagsResponse extends SdkResponse {
    public tags?: Array<TagEntity>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagEntity>): ShowRocketmqTagsResponse {
        this['tags'] = tags;
        return this;
    }
}