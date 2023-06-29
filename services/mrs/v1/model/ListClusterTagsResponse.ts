import { TagPlain } from './TagPlain';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterTagsResponse extends SdkResponse {
    public tags?: Array<TagPlain>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagPlain>): ListClusterTagsResponse {
        this['tags'] = tags;
        return this;
    }
}