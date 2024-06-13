import { ListTag } from './ListTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityGroupTagsResponse extends SdkResponse {
    public tags?: Array<ListTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ListTag>): ListSecurityGroupTagsResponse {
        this['tags'] = tags;
        return this;
    }
}