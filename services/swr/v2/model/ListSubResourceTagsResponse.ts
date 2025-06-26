import { ResourceTag } from './ResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubResourceTagsResponse extends SdkResponse {
    public tags?: Array<ResourceTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ResourceTag>): ListSubResourceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}