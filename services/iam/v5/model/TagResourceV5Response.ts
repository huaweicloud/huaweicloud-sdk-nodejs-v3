import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class TagResourceV5Response extends SdkResponse {
    public tags?: Array<Tag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<Tag>): TagResourceV5Response {
        this['tags'] = tags;
        return this;
    }
}