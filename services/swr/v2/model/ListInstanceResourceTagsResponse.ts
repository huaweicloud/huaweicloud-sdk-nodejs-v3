import { ResourceTag } from './ResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceResourceTagsResponse extends SdkResponse {
    public tags?: Array<ResourceTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ResourceTag>): ListInstanceResourceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}