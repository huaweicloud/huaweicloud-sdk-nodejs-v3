import { ListResourceTag } from './ListResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDedicatedHostTagsResponse extends SdkResponse {
    public tags?: Array<ListResourceTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ListResourceTag>): ListDedicatedHostTagsResponse {
        this['tags'] = tags;
        return this;
    }
}