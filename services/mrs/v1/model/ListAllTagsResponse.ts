import { TagWithMultiValue } from './TagWithMultiValue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllTagsResponse extends SdkResponse {
    public tags?: Array<TagWithMultiValue>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagWithMultiValue>): ListAllTagsResponse {
        this['tags'] = tags;
        return this;
    }
}