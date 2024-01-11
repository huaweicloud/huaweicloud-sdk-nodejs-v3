import { BatchResourceTag } from './BatchResourceTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceTagsResponse extends SdkResponse {
    public tags?: Array<BatchResourceTag>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<BatchResourceTag>): ListInstanceTagsResponse {
        this['tags'] = tags;
        return this;
    }
}