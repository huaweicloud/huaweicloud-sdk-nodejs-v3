import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceTagsV5Response extends SdkResponse {
    public tags?: Array<Tag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<Tag>): ListResourceTagsV5Response {
        this['tags'] = tags;
        return this;
    }
}