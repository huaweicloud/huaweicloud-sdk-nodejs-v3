import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTagsOfTenantResponse extends SdkResponse {
    public tags?: Array<Tag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<Tag>): ListTagsOfTenantResponse {
        this['tags'] = tags;
        return this;
    }
}