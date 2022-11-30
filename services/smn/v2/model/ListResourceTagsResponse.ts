import { ResourceTag } from './ResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceTagsResponse extends SdkResponse {
    public tags?: Array<ResourceTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ResourceTag>): ListResourceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}